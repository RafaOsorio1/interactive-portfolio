import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  const panels = [0, 1, 2, 3];

  return (
    <div className={styles.loaderWrapper}>
      {/* Background Panels for Curtain Exit */}
      <div className={styles.curtain}>
        {panels.map((i) => (
          <motion.div
            key={i}
            className={styles.panel}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className={styles.noise} />

      {/* Main Content */}
      <motion.div 
        className={styles.content}
        exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.textContainer}>
          <motion.h1 
            className={styles.name}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            RAFAEL RODELO
          </motion.h1>
        </div>

        <motion.div 
          className={styles.counter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
        >
          {count}
        </motion.div>

        <motion.p 
          className={styles.statusText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {count < 100 ? 'System Initialization' : 'Ready'}
        </motion.p>
      </motion.div>
    </div>
  );
};
