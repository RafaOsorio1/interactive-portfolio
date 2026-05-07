import { createContext, ReactNode, useContext, useState } from "react";

type Language = "en" | "es";

interface Translations {
  nav: { home: string; about: string; projects: string; contact: string };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    scrollGuide: string;
  };
  about: {
    title: string;
    items: { title: string; desc: string; tag: string }[];
    github: { title: string; commits: string; repos: string; stack: string };
  };
  projects: { title: string; desc: string };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title1: "Transforming ideas into",
      title2: "digital experiences.",
      subtitle:
        "Fullstack Developer specialized in building scalable and interactive solutions.",
      cta: "View projects",
      scrollGuide: "Scroll to explore",
    },
    about: {
      title: "Philosophy & Journey",
      items: [
        {
          tag: "Strategy",
          title: "Fullstack Solutions Architect",
          desc: "I don’t just write code; I design scalable infrastructures and fluid user experiences that solve real problems.",
        },
        {
          tag: "Quality",
          title: "Performance & Scalability",
          desc: "I prioritize efficiency and speed. My solutions are built to handle high traffic and complex data without breaking a sweat.",
        },
        {
          tag: "DevOps",
          title: "Cloud & Automation",
          desc: "Expert in Docker, Kubernetes, and Azure for secure and continuous deployments.",
        },
        {
          tag: "UX/UI",
          title: "User-Oriented Design",
          desc: "Intuitive interfaces where aesthetics and functionality converge.",
        },
        {
          tag: "Innovation",
          title: "AI Next Frontier",
          desc: "Integrating Intelligent Agents and generative workflows into traditional systems.",
        },
      ],
      github: {
        title: "Live GitHub Data",
        commits: "Total Commits",
        repos: "Public Projects",
        stack: "Main Stack",
      },
    },
    projects: {
      title: "Featured Projects",
      desc: "Short project description and stack used.",
    },
    contact: {
      title: "Let's talk?",
      subtitle: "Write me to collaborate on your next project!",
      email: "Email",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again.",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title1: "Transformando ideas en",
      title2: "experiencias digitales.",
      subtitle:
        "Fullstack Developer especializado en crear soluciones escalables e interactivas.",
      cta: "Ver proyectos",
      scrollGuide: "Baja para explorar",
    },
    about: {
      title: "Filosofía & Trayectoria",
      items: [
        {
          tag: "Estrategia",
          title: "Arquitecto de Soluciones Fullstack",
          desc: "No solo escribo código; diseño infraestructuras escalables y experiencias de usuario fluidas que resuelven problemas reales.",
        },
        {
          tag: "Calidad",
          title: "Rendimiento y Escalabilidad",
          desc: "Priorizo la eficiencia y la velocidad. Mis soluciones están construidas para manejar alto tráfico y datos complejos sin esfuerzo.",
        },
        {
          tag: "DevOps",
          title: "Nube & Automatización",
          desc: "Experto en Docker, Kubernetes y Azure para despliegues continuos y seguros.",
        },
        {
          tag: "UX/UI",
          title: "Diseño Orientado al Usuario",
          desc: "Interfaces intuitivas donde la estética y la funcionalidad convergen.",
        },
        {
          tag: "Innovación",
          title: "Próxima Frontera: IA",
          desc: "Integrando Agentes Inteligentes y flujos generativos en sistemas tradicionales.",
        },
      ],
      github: {
        title: "Datos de GitHub en vivo",
        commits: "Commits Totales",
        repos: "Proyectos Públicos",
        stack: "Stack Principal",
      },
    },
    projects: {
      title: "Proyectos Destacados",
      desc: "Descripción breve del proyecto y stack utilizado.",
    },
    contact: {
      title: "¿Hablamos?",
      subtitle: "¡Escríbeme para colaborar en tu próximo proyecto!",
      email: "Email",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        message: "Tu Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito!",
        error: "Algo salió mal. Por favor intenta de nuevo.",
      },
    },
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
