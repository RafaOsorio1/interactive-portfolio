import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Hero.module.css";
import { TechMarquee } from "./TechMarquee";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.title1}{" "}
            <span className={styles.accent}>{t.hero.title2}</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#projects" className={styles.cta}>
              {t.hero.cta}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.marqueeWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <TechMarquee />
      </motion.div>
    </section>
  );
};
