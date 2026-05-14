import { useLanguage } from '../../context/LanguageContext';
import { projects } from '../../data/projects';
import { ExternalLink, Code, Layers, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-32 bg-white/[0.01]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              className="section-title mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t.projects.title}
            </motion.h2>
            <p className="text-zinc-400 max-w-xl text-lg">
              A selection of my recent works, focusing on high-performance architecture and complex frontend challenges.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-zinc-400">Total Projects: {projects.length}</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative glass-card flex flex-col h-full border-white/5 hover:border-accent/40 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image/Preview Area */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-900 text-white rounded-full border border-white/10 hover:scale-110 transition-transform"
                    aria-label="GitHub Repository"
                  >
                    <GitFork size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                   <div className="flex gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-accent px-2 py-1 bg-accent/10 rounded">
                          {tag}
                        </span>
                      ))}
                   </div>
                   <span className="text-[10px] font-mono text-zinc-500 italic">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description[language as 'en' | 'es']}
                </p>

                {/* Technical Highlights Footer */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium">
                      <Code size={14} />
                      <span>{project.tags[0]}</span>
                      <Layers size={14} className="ml-2" />
                      <span>{project.tags[1]}</span>
                   </div>
                   <a
                    href={project.links.demo}
                    className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-accent transition-colors flex items-center gap-1"
                   >
                    Case Study <ExternalLink size={12} />
                   </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
