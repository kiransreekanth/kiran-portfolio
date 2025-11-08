import React from 'react';
import { Github, Linkedin, Mail, Instagram, Phone, MapPin, Download } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kiransreekanth',
      icon: Github,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kiran-s2004',
      icon: Linkedin,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:kiransreekanth2004@gmail.com',
      icon: Mail,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/kiran_sreekanth',
      icon: Instagram,
      color: 'hover:bg-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <div className="bg-black/50 border border-gray-800 rounded-xl p-4 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <div className="w-6 md:w-8 h-1 bg-blue-500"></div>
                Contact Information
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors border border-gray-800 group-hover:border-blue-500/50">
                    <Mail className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm mb-1">Email</p>
                    <a 
                      href="mailto:kiransreekanth2004@gmail.com" 
                      className="text-white hover:text-blue-400 transition-colors text-sm md:text-base break-all"
                    >
                      kiransreekanth2004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors border border-gray-800 group-hover:border-blue-500/50">
                    <Phone className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm mb-1">Phone</p>
                    <a 
                      href="tel:+919447427646" 
                      className="text-white hover:text-blue-400 transition-colors text-sm md:text-base"
                    >
                      (+91) 9447427646
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors border border-gray-800 group-hover:border-blue-500/50">
                    <MapPin className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm mb-1">Location</p>
                    <p className="text-white text-sm md:text-base">Kochi, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <div className="w-6 md:w-8 h-1 bg-blue-500"></div>
                Social Links
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-blue-500/50 group ${link.color}`}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <link.icon size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors md:w-5 md:h-5" />
                    </div>
                    <span className="font-medium text-white text-sm md:text-base">{link.name}</span>
                  </a>
                ))}
              </div>

              {/* Resume Download */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4 md:p-6">
                <h4 className="font-bold text-white mb-2 text-sm md:text-base">Interested in working together?</h4>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                  Download my resume to learn more about my experience and skills.
                </p>
                <a
                  href="/Kiran_S_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 w-full justify-center shadow-lg shadow-blue-500/50 text-sm md:text-base"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-6 md:pt-8 border-t border-gray-900">
            <p className="text-gray-400 mb-3 md:mb-4 text-xs md:text-base">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:kiransreekanth2004@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 text-sm md:text-base"
            >
              <Mail size={18} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;