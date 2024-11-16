import React, { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // Height of your navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'portfolio', 'skills', 'contact'];
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <ScrollContext.Provider value={{ activeSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function UseScroll() {
  return useContext(ScrollContext);
}