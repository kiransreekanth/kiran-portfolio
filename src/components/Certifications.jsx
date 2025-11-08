import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AI Transformative Learning with TechSaksham',
      issuer: 'Edunet Foundation, AICTE, Microsoft, SAP',
      year: '2025',
      image: '/certificates/cert1.png',
      pdf: 'https://drive.google.com/file/d/1Er25VvmcDkoWQx91ZnvQYSQ1Er0Uaka-/view?usp=sharing' // Replace YOUR_FILE_ID_1 with actual Google Drive file ID
    },
    {
      title: 'Google Cloud Career Launchpad',
      issuer: 'Google Cloud',
      year: '2024',
      image: '/certificates/cert2.png',
      pdf: 'https://drive.google.com/file/d/1r_zHFECZe1OINy9OtfuaR8aiRngQYoN9/view?usp=sharing' // Replace YOUR_FILE_ID_2 with actual Google Drive file ID
    },
    {
      title: 'AI Product Development',
      issuer: 'Freston Analytics',
      year: '2024',
      image: '/certificates/cert3.png',
      pdf: 'https://drive.google.com/file/d/1i8tk5_usHJY2m4KNJnVYRI6VDQZPX5qd/view?usp=sharing' // Replace YOUR_FILE_ID_3 with actual Google Drive file ID
    }
  ];

  const handleViewCertificate = (pdfUrl) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="py-12 md:py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Certifications</h2>
          <div className="w-16 md:w-20 h-1 bg-blue-500"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              {/* Certificate Image Preview */}
              <div className="relative h-40 md:h-48 bg-gray-900 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/000000/3b82f6?text=Certificate';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Award icon overlay */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-500/40">
                    <Award className="text-blue-400" size={20} />
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4">
                  <div className="px-2 py-1 md:px-3 md:py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-blue-400 text-xs md:text-sm font-medium border border-blue-500/40">
                    {cert.year}
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-2">
                  {cert.issuer}
                </p>

                {/* View Certificate Button */}
                <button
                  onClick={() => handleViewCertificate(cert.pdf)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  <ExternalLink size={14} />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements Section */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Achievements & Activities</h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-black/50 border border-gray-800 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-400" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm md:text-base">Creative Lead at MuLearn Toc H</h4>
                  <p className="text-gray-400 text-xs md:text-sm">September 2025 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-400" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm md:text-base">1st Prize - SquardSkills Leadership Program</h4>
                  <p className="text-gray-400 text-xs md:text-sm">GooseBerry Media & Neuralux - 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-400" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm md:text-base">2nd Place - CATALYSTX Ideathon</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Sustainable Development Goals by GDSC - 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-400" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm md:text-base">IEEE Member</h4>
                  <p className="text-gray-400 text-xs md:text-sm">2023 - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;