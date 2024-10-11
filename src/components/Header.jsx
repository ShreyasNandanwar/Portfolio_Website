import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { MoveDown, Menu, X } from 'lucide-react';

const sections = ['home', 'skills', 'projects', 'Open Source', 'blog'];

const Header = ({ darkMode, setDarkMode, activeSection, isHomePage, isContactOrResumePage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const NavItems = () => (
    <>
      {isHomePage && sections.map((section) => (
        <li key={section}>
          <button
            onClick={() => scrollToSection(section)}
            className={`capitalize font-playfair ${
              activeSection === section
                ? 'text-blue-500 font-bold'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
            }`}
          >
            {section}
          </button>
        </li>
      ))}
      {isContactOrResumePage && (
        <li>
          <Link to='/' className='text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-playfair'>
            Home
          </Link>
        </li>
      )}
      {location.pathname !== '/contact' && (
        <li>
          <Link to='/contact' className='text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-playfair'>
            Contact
          </Link>
        </li>
      )}
      <li>
        <Link
          to="/resume"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-playfair flex items-center"
        >
          Resume <MoveDown className="ml-1" size={16} />
        </Link>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl tracking-widest font-bold font-bebas-neue text-gray-900 dark:text-white">Shreyas Nandanwar</h1>
      <nav className="flex items-center">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        {isMobile ? (
          <>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md">
                <ul className="flex flex-col space-y-4 p-4">
                  <NavItems />
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="flex space-x-4 ml-4">
            <NavItems />
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;