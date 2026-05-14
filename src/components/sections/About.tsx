import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useGitHubStats } from "../../hooks/useGitHubStats";
import { Code2, GitBranch, GitFork, Layers, Zap } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();
  const { repos, commits, mainStack, loading } = useGitHubStats();

  const githubStats = [
    { label: t.about.github.commits, value: loading ? "..." : commits, icon: <Zap size={20} className="text-yellow-500" /> },
    { label: t.about.github.repos, value: loading ? "..." : repos, icon: <GitBranch size={20} className="text-purple-500" /> },
    { label: t.about.github.stack, value: loading ? "..." : mainStack, icon: <Layers size={20} className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="py-32">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {t.about.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio Card */}
          <motion.div
            className="md:col-span-8 glass-card p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Code2 className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold italic tracking-tight">Technical Principles</h3>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                I build high-performance web applications with a focus on
                <span className="text-white font-medium"> scalability, DX, and user experience. </span>
                My approach combines rigorous software engineering with a product-driven mindset,
                ensuring that every line of code contributes to business value.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Clean Code', 'Performance First', 'Type Safety'].map((p) => (
                <div key={p} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm font-mono text-zinc-300">
                  {p}
                </div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Stats Card */}
          <motion.div
            className="md:col-span-4 glass-card p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <GitFork size={24} className="text-zinc-500" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2 py-1 bg-white/5 rounded">Live Data</span>
            </div>

            <div className="space-y-6">
              {githubStats.map((stat, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    {stat.icon}
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">{stat.label}</span>
                  </div>
                  <motion.span
                    className="text-lg font-bold font-mono"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    key={String(stat.value)}
                  >
                    {stat.value}
                  </motion.span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/5">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <p className="text-[10px] text-zinc-600 mt-2 uppercase font-bold tracking-tighter text-right">Commit Frequency: High</p>
            </div>
          </motion.div>

          {/* Tech Ecosystem */}
          <motion.div
            className="md:col-span-12 glass-card p-8 overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
               <h3 className="text-xl font-bold mb-4">Core Ecosystem</h3>
               <div className="flex flex-wrap gap-3">
                  {['React 19', 'Next.js 15', 'TypeScript 5', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
               </div>
            </div>
            {/* Visual Decoration */}
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
