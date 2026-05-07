import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className={styles.navLink}>
            {item.name}
          </a>
        ))}
      </div>
      <button onClick={toggleLanguage} className={styles.langToggle}>
        {language === 'en' ? 'ES' : 'EN'}
      </button>
    </motion.nav>
  );
};
