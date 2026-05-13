import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";

export const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <motion.h2
          id="projects-title"
          className="sectionTitle"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {t.projects.title}
        </motion.h2>

        <div
          className={styles.grid}
          role="list"
          aria-label="List of featured projects"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className={styles.projectImage}
                  loading="lazy"
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        Source
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.info}>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description[language]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
