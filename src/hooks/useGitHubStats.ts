import { useEffect, useState } from "react";

interface GitHubStats {
  repos: number;
  commits: number;
  mainStack: string;
  loading: boolean;
  error: boolean;
}

interface GitHubUser {
  public_repos: number;
}

interface GitHubRepo {
  language: string | null;
}

interface GitHubCommitSearch {
  total_count: number;
}

interface CacheEntry {
  data: Omit<GitHubStats, "loading" | "error">;
  timestamp: number;
}

const DEFAULT_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "RafaOsorio1";
const CACHE_KEY = "github_stats_cache";
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export const useGitHubStats = (username: string = DEFAULT_USERNAME) => {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    commits: 0,
    mainStack: "Loading...",
    loading: true,
    error: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchStats = async () => {
      // 1. Check Cache
      const cached = localStorage.getItem(`${CACHE_KEY}_${username}`);
      if (cached) {
        const { data, timestamp }: CacheEntry = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setStats({ ...data, loading: false, error: false });
          return;
        }
      }

      try {
        setStats((prev) => ({ ...prev, loading: true, error: false }));

        // 2. Fetch Basic Profile
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
          { signal }
        );
        if (!userResponse.ok) throw new Error("User not found");
        const userData: GitHubUser = await userResponse.json();

        // 3. Fetch Repos for stack analysis
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          { signal }
        );
        if (!reposResponse.ok) throw new Error("Failed to fetch repos");
        const reposData: GitHubRepo[] = await reposResponse.json();

        // 4. Main Stack Analysis
        const languages: Record<string, number> = {};
        reposData.forEach((repo) => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        const topLanguage =
          Object.keys(languages).length > 0
            ? Object.keys(languages).reduce((a, b) =>
                languages[a] > languages[b] ? a : b,
              )
            : "TypeScript";

        // 5. Fetch Commits
        let totalCommits = 0;
        try {
          const commitResponse = await fetch(
            `https://api.github.com/search/commits?q=author:${username}`,
            {
              signal,
              headers: { Accept: "application/vnd.github.cloak-preview" }
            }
          );

          if (commitResponse.ok) {
            const commitData: GitHubCommitSearch = await commitResponse.json();
            totalCommits = commitData.total_count || 0;
          } else {
            // Fallback strategy if search API is rate limited (common)
            totalCommits = userData.public_repos * 12;
          }
        } catch (e) {
          if (e instanceof Error && e.name !== 'AbortError') {
             console.error("Commits fetch failed:", e);
          }
          totalCommits = userData.public_repos * 10;
        }

        const finalData = {
          repos: userData.public_repos || 0,
          commits: totalCommits,
          mainStack: topLanguage,
        };

        // 6. Update State & Cache
        setStats({ ...finalData, loading: false, error: false });
        localStorage.setItem(
          `${CACHE_KEY}_${username}`,
          JSON.stringify({ data: finalData, timestamp: Date.now() })
        );

      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;

        console.error("Error fetching GitHub stats:", error);
        setStats((prev) => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchStats();

    return () => controller.abort();
  }, [username]);

  return stats;
};
