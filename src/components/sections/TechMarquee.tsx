import React from 'react';
import styles from './TechMarquee.module.css';

const techStack = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Azure', logo: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Express', logo: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'Socket.io', logo: 'https://cdn.simpleicons.org/socketdotio/ffffff' },
  { name: 'Prisma', logo: 'https://cdn.simpleicons.org/prisma/ffffff' },
];

export const TechMarquee = () => {
  const duplicatedStack = [...techStack, ...techStack, ...techStack]; // Triple for smoother long scroll

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {duplicatedStack.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <img src={tech.logo} alt={tech.name} className={styles.logo} loading="lazy" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
