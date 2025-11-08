import React from 'react';

const TechStack = () => {
  const techStack = [
    { 
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
      name: 'C',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    { 
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    { 
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    }
  ];

  return (
    <section id="techstack" className="py-12 md:py-20 px-4 overflow-hidden bg-black">
      <div className="container mx-auto max-w-6xl mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Tech Stack</h2>
        <div className="w-16 md:w-20 h-1 bg-blue-500"></div>
      </div>

      <div className="relative overflow-hidden">
        {/* Continuous scrolling container */}
        <div className="animate-infinite-scroll">
          {/* Duplicate the array twice for seamless loop */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 md:mx-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:bg-gray-900/70 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ minWidth: '100px' }}
            >
              <div className="flex flex-col items-center gap-2 md:gap-4">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-10 h-10 md:w-16 md:h-16 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="text-white font-medium text-center whitespace-nowrap text-xs md:text-base">
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;