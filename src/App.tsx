import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Scene } from "./components/3d/Scene";
import { CustomCursor } from "./components/layout/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Preloader } from "./components/layout/Preloader";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";

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
          <footer
            style={{
              padding: "40px 5%",
              textAlign: "center",
              color: "var(--text-secondary)",
              fontSize: "0.8rem",
            }}
          >
            © {new Date().getFullYear()} - Rafael Rodelo. Built with React,
            Three.js & Framer Motion.
          </footer>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
