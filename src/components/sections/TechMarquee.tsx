const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind',
  'Three.js', 'Framer Motion', 'PostgreSQL', 'Docker', 'AWS',
  'GraphQL', 'Vite', 'Git', 'Prisma', 'Redux'
];

export const TechMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 py-4 bg-white/[0.02] backdrop-blur-sm">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {Array(4).fill(skills).flat().map((skill, index) => (
          <span key={index} className="mx-8 text-sm font-mono font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
