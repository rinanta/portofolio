import { useCallback, useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import Navbar, { NAV_ITEMS } from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import About from './sections/About';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getInitialSection() {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '');
  return NAV_ITEMS.some((item) => item.id === hash) ? hash : 'home';
}

export default function App() {
  const [activeSection, setActiveSection] = useState(getInitialSection);
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);
  const scrollLockUntilRef = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [theme]);

  const handleSelectSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
    scrollLockUntilRef.current = Date.now() + 700;
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (sections.length === 0) return;

    let frameId = null;

    const updateActiveSection = () => {
      frameId = null;
      if (Date.now() < scrollLockUntilRef.current) return;

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      if (atBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const scrollCursor = window.scrollY + 120;
      let currentId = sections[0].id;
      for (const section of sections) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollCursor) {
          currentId = section.id;
        }
      }
      setActiveSection(currentId);
    };

    const onScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (NAV_ITEMS.some((item) => item.id === hash)) {
        handleSelectSection(hash);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', onHashChange);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [handleSelectSection]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sky-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Langsung ke konten utama
      </a>

      <Navbar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main id="main-content">
        <Home />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
