import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Scene } from './components/3d/Scene';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/layout/CustomCursor';
import { Preloader } from './components/layout/Preloader';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <Scene />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer style={{ padding: '40px 5%', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} - Rafael Rodelo. Built with React, Three.js & Framer Motion.
          </footer>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
