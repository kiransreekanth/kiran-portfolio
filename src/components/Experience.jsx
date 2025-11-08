import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'FindAStartup',
      role: 'Full Stack Developer Intern',
      duration: 'May 2025 - Present',
      location: 'Kochi, Kerala (Hybrid)',
      description:
        'Contributing as a Full Stack Developer intern at FindAStartup, focusing on developing and enhancing web-based platforms using React.js, Node.js, and Firebase as part of the student startup accelerator ecosystem. Collaborating with cross-functional teams to deliver efficient, scalable, and user-focused solutions.',
      current: true,
      logo: '/kiran-portfolio/logos/findastartup-logo.png'
    },
    {
      company: 'Macroots Systems & Network Pvt. Ltd',
      role: 'IT Technical Support Intern',
      duration: 'June 2025',
      location: 'Kochi, Kerala',
      description:
        'Gained hands-on experience in IT infrastructure and system maintenance. Provided technical support to staff, diagnosed and resolved hardware/software issues, and ensured minimal downtime. Assisted in network monitoring, troubleshooting, and documenting technical procedures to improve efficiency and reliability.',
      current: false,
      logo: '/kiran-portfolio/logos/macroots-logo.png'
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Work Experience</h2>
          <div className="w-16 md:w-20 h-1 bg-blue-500"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black/50 border border-gray-800 rounded-xl p-4 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 self-center md:self-start">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-blue-400 text-xl md:text-2xl font-bold">' + exp.company.charAt(0) + '</div>';
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap justify-between items-start gap-2 md:gap-4 mb-3 md:mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-400 text-base md:text-lg font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs md:text-sm font-medium border border-blue-500/40">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 md:gap-6 text-gray-400 text-xs md:text-base mb-3 md:mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-blue-400 md:w-[18px] md:h-[18px]" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-400 md:w-[18px] md:h-[18px]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
