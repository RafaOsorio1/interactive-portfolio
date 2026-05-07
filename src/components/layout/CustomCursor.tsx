import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const dotX = useSpring(0, { damping: 25, stiffness: 400 });
  const dotY = useSpring(0, { damping: 25, stiffness: 400 });
  
  const ringX = useSpring(0, { damping: 30, stiffness: 100 });
  const ringY = useSpring(0, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div 
        className={styles.cursor}
        style={{
          x: dotX,
          y: dotY,
          backgroundColor: isHovering ? 'var(--accent-color)' : 'white'
        }}
      />
      <motion.div 
        className={styles.cursorRing}
        style={{
          x: ringX,
          y: ringY,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.5)',
          borderWidth: isHovering ? '2px' : '1px'
        }}
      />
    </>
  );
};
