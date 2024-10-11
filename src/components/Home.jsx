import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import Blog from '../components/Blog';
import Header from './Header';
import useActiveSection from '../hooks/useActiveSection';

const Home = ({darkMode, setDarkMode, isHomePage }) => {
  const location = useLocation();
  const activeSection = useActiveSection()

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main className="container mx-auto px-4 pt-20">
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection}
        isHomePage
      />
      <Hero id="home" />
      <Skills id="skills" />
      <Projects id="projects" />
      <OpenSource id="Open Source" />
      <Blog id="blog" />
    </main>
  );
};

export default Home;