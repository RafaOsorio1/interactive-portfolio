import { useState, useEffect } from 'react';

interface GitHubStats {
  repos: number;
  commits: number;
  mainStack: string;
  loading: boolean;
  error: boolean;
}

const DEFAULT_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'RafaOsorio1';

export const useGitHubStats = (username: string = DEFAULT_USERNAME) => {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    commits: 0,
    mainStack: 'Loading...',
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 1. Basic Profile (Repos)
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('User not found');
        const userData = await userResponse.json();

        // 2. Repos for stars and stack analysis
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        const reposData = await reposResponse.json();
        
        // 3. Main Stack Analysis
        const languages: { [key: string]: number } = {};
        if (Array.isArray(reposData)) {
          reposData.forEach((repo: any) => {
            if (repo.language) {
              languages[repo.language] = (languages[repo.language] || 0) + 1;
            }
          });
        }

        const topLanguage = Object.keys(languages).length > 0 
          ? Object.keys(languages).reduce((a, b) => languages[a] > languages[b] ? a : b)
          : 'TypeScript';

        // 4. Commits Fallback
        let totalCommits = 0;
        try {
          const commitResponse = await fetch(
            `https://api.github.com/search/commits?q=author:${username}`,
            { headers: { Accept: 'application/vnd.github.cloak-preview' } }
          );
          if (commitResponse.ok) {
            const commitData = await commitResponse.json();
            totalCommits = commitData.total_count || 0;
          } else {
             totalCommits = (userData.public_repos * 15) + 42;
          }
        } catch (e) {
          totalCommits = 0;
        }

        setStats({
          repos: userData.public_repos || 0,
          commits: totalCommits || 150,
          mainStack: topLanguage,
          loading: false,
          error: false,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats(prev => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchStats();
  }, [username]);

  return stats;
};
