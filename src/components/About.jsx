import React from 'react';
import { GraduationCap, Code2, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About me</h2>
          <div className="w-16 md:w-20 h-1 bg-blue-500"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 space-y-3 md:space-y-4 text-gray-300 text-sm md:text-lg leading-relaxed flex flex-col justify-center">
            <p>
              I'm a B.Tech Computer Science student at Toc H Institute of Science & Technology with a minor in Robotics and Automation. I'm passionate about crafting impactful digital experiences through full-stack development and exploring how AI can enhance the way we interact with technology.
            </p>
            <p>
              I specialize in building responsive, user-centered web applications using the MERN stack, focusing on clean interfaces and robust back-end systems. I also enjoy experimenting with AI and Machine Learning, integrating intelligent features into applications to create smarter, data-driven solutions.
            </p>
            <p>
              With a creative mindset and a keen eye for purposeful design, I approach technology as both an art and a problem-solving tool. I enjoy working in collaborative environments, constantly learning, and pushing my limits with every challenge. My mission is to merge innovation and creativity to build solutions that are not only functional – but truly meaningful.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 flex flex-col justify-center">
            {/* Education Card */}
            <div className="bg-black/50 p-4 md:p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <GraduationCap className="text-blue-400" size={24} />
                <div className="text-lg md:text-xl font-bold text-blue-400">Education</div>
              </div>
              <div className="text-gray-400 text-xs md:text-sm">B.Tech in Computer Science and Engineering</div>
              <div className="text-gray-500 text-xs mt-1 md:mt-2">Minor: Robotics & Automation</div>
            </div>

            {/* Technical Skills Card */}
            <div className="bg-black/50 p-4 md:p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <Code2 className="text-blue-400" size={24} />
                <div className="text-lg md:text-xl font-bold text-blue-400">Tech Stack</div>
              </div>
              <div className="text-gray-400 text-xs md:text-sm">MERN Stack Developer</div>
              <div className="text-gray-500 text-xs mt-1">Python • Java • AI/ML</div>
            </div>

            {/* Achievements Card */}
            <div className="bg-black/50 p-4 md:p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <Award className="text-blue-400" size={24} />
                <div className="text-lg md:text-xl font-bold text-blue-400">Leadership</div>
              </div>
              <div className="text-gray-400 text-xs md:text-sm">Creative Lead</div>
              <div className="text-gray-500 text-xs mt-1">MuLearn Toc H (2025)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;