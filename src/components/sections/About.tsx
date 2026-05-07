import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useGitHubStats } from "../../hooks/useGitHubStats";
import styles from "./BentoGrid.module.css";

export const About = () => {
  const { t } = useLanguage();
  const { repos, commits, mainStack, loading } =
    useGitHubStats("Rafael-Rodelo");

  const githubStats = [
    { label: t.about.github.commits, value: loading ? "..." : commits },
    { label: t.about.github.repos, value: loading ? "..." : repos },
    { label: t.about.github.stack, value: loading ? "..." : mainStack },
  ];

  const images = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  ];

  const sizes = ["large", "medium", "small", "small", "medium"];

  return (
    <section id="about">
      <div className="container">
        <motion.h2
          className="sectionTitle"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {t.about.title}
        </motion.h2>

        <div className={styles.bento}>
          {t.about.items.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${styles[sizes[index]]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={images[index]}
                alt={item.title}
                className={styles.cardImage}
              />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <span className={styles.tag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Real-time Stats Card */}
          <motion.div
            className={`${styles.card} ${styles.medium} ${styles.statsCard}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.statsHeader}>
              <span className={styles.githubTag}>{t.about.github.title}</span>
            </div>
            <div className={styles.statsGrid}>
              {githubStats.map((stat, i) => (
                <div key={i} className={styles.statItem}>
                  <motion.span
                    className={styles.statValue}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    key={stat.value}
                  >
                    {stat.value}
                  </motion.span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
