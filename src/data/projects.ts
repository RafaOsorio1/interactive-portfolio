export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    es: string;
  };
  image: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Quantum Dashboard",
    description: {
      en: "High-performance data visualization platform built with React and D3.js, featuring real-time stream processing.",
      es: "Plataforma de visualización de datos de alto rendimiento construida con React y D3.js, con procesamiento de flujo en tiempo real.",
    },
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "TypeScript", "D3.js", "WebSockets"],
    links: {
      github: "https://github.com",
      demo: "https://demo.com",
    },
    featured: true,
  },
  {
    id: "2",
    title: "EcoSphere AI",
    description: {
      en: "Intelligent agent system for environmental monitoring using machine learning and satellite imagery analysis.",
      es: "Sistema de agentes inteligentes para el monitoreo ambiental utilizando aprendizaje automático y análisis de imágenes satelitales.",
    },
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2075&auto=format&fit=crop",
    tags: ["Node.js", "Python", "TensorFlow", "Azure"],
    links: {
      github: "https://github.com",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Nexus E-Commerce",
    description: {
      en: "Scalable headless commerce solution with a focus on speed and accessible UX design.",
      es: "Solución de comercio sin cabeza (headless) escalable enfocada en la velocidad y el diseño de UX accesible.",
    },
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "Shopify API", "Stripe"],
    links: {
      github: "https://github.com",
      demo: "https://demo.com",
    },
    featured: false,
  },
];
