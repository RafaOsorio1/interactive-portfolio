import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Languages } from 'lucide-react';

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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-full"
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="w-px h-4 bg-white/10" />

      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white transition-colors uppercase"
      >
        <Languages size={14} />
        {language === 'en' ? 'ES' : 'EN'}
      </button>
    </motion.nav>
  );
};
