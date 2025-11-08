import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// Starry Background Component - Only twinkling stars
const StarryBackground = () => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars-background');
    if (!starsContainer) return;

    // Create multiple twinkling stars
    const createStars = (count) => {
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size (1px to 3px)
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation duration (2s to 5s)
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        // Random delay
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        starsContainer.appendChild(star);
      }
    };

    createStars(200); // Create 200 twinkling stars

    // Cleanup on unmount
    return () => {
      if (starsContainer) {
        starsContainer.innerHTML = '';
      }
    };
  }, []);

  return <div className="stars-background"></div>;
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <StarryBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        
        {/* Footer */}
        <footer className="py-6 md:py-8 px-4 border-t border-gray-900">
          <div className="container mx-auto max-w-6xl text-center text-gray-500 text-xs md:text-base">
            <p>© 2025 Kiran S. Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;