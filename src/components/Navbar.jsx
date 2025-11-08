import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'About', id: 'about', shortName: 'About' },
    { name: 'Experience', id: 'experience', shortName: 'Experience' },
    { name: 'Projects', id: 'projects', shortName: 'Projects' },
    { name: 'Certifications', id: 'certifications', shortName: 'Certs' },
    { name: 'Contact', id: 'contact', shortName: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-blue-500/10' : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto max-w-6xl px-4">
        {/* Desktop and Tablet Navigation */}
        <div className="hidden sm:flex justify-center items-center py-3 md:py-4">
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium text-xs md:text-sm lg:text-base whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Bottom Fixed */}
        <div className="sm:hidden">
          {/* Spacer for fixed navbar */}
          <div className="h-14"></div>
          
          {/* Fixed Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 shadow-lg shadow-blue-500/10">
            <div className="flex justify-around items-center py-3 px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex flex-col items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors duration-300 min-w-0 flex-1"
                >
                  <span className="text-xs font-medium truncate w-full text-center px-1">
                    {item.shortName}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;