// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import useScrollAnimation from './hooks/useScrollAnimation';
import useActiveSection from './hooks/useActiveSection';
import Resume from './components/Resume';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <AppContent darkMode={darkMode} setDarkMode={setDarkMode} />
    </Router>
  );
};

const AppContent = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const activeSection = useActiveSection();

  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      
      <Routes>

        {/* Home Route  */}
        <Route path="/" element={<Home
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
          isHomePage={location.pathname === '/'}
        />} />

        {/* Contact Route */}
        <Route path="/contact" element={<Contact
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isContactOrResumePage={location.pathname === '/contact'}
        />} />

        {/* Resume Route */}
        <Route path='/resume' element={<Resume
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isContactOrResumePage={location.pathname === '/resume'}
        />} />
      </Routes>
      
      {/* Footer */}
      <Footer darkMode={darkMode} />

    </div>
  );
};

export default App;