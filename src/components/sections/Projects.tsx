import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Projects.module.css";

const projectList = [
  { title: "Project One" },
  { title: "Project Two" },
  { title: "Project Three" },
  { title: "Project Four" },
];

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects">
      <div className="container">
        <motion.h2
          className="sectionTitle"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {t.projects.title}
        </motion.h2>
        <div className={styles.grid}>
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.placeholderImage}>[Snapshot]</div>
              <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{t.projects.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
