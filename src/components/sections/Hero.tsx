import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { TechMarquee } from "./TechMarquee";
import { ArrowRight, Terminal } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-bold text-accent tracking-wider uppercase">
                Available for remote opportunities
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              {t.hero.title2}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#projects" className="premium-button flex items-center gap-2 group">
              {t.hero.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-medium"
            >
              <Terminal size={18} />
              Read technical DNA
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-auto pt-20 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <TechMarquee />
      </motion.div>
    </section>
  );
};
