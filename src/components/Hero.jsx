import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 pt-16 pb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-3 md:space-y-6 text-center md:text-left">
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-sm md:text-xl text-blue-400 font-light">Hello.</h2>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
                I'm Kiran
              </h1>
              <h3 className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-light">
                Software Developer
              </h3>
            </div>
            <p className="text-gray-400 text-xs md:text-lg leading-relaxed">
              Computer Science Engineering student specializing in MERN stack development 
              with a passion for building innovative web applications and AI-integrated solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 w-full sm:w-auto text-sm md:text-base"
              >
                Get in touch
              </button>
              <a
                href="/kiran-portfolio/Kiran_S_Resume.pdf"
                download
                className="px-5 py-2 md:px-6 md:py-3 border-2 border-white hover:bg-white hover:text-black rounded-lg font-medium transition-all duration-300 text-center w-full sm:w-auto text-sm md:text-base"
              >
                My resume
              </a>
            </div>
          </div>

          {/* Photo - Responsive sizing */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
              
              {/* Photo container - Smaller on mobile */}
              <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 md:border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50 p-2 sm:p-4 md:p-6">
                  {/* Inner image container */}
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/kiran-portfolio/kiran-photo.PNG" 
                      alt="Kiran S" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/450x450/000000/3b82f6?text=Your+Photo+Here';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={24} className="text-blue-400 md:w-8 md:h-8" />
      </button>
    </section>
  );
};

export default Hero;
