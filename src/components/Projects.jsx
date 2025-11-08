import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Project Doomsday - Meteoroid Detection',
      description: 'Integrated NASA NEO API using Node.js for real-time Near-Earth Object monitoring. Developed custom impact scenario simulator to model asteroid impacts.',
      tech: ['Node.js', 'JavaScript', 'NASA API', 'Real-time Data'],
      github: 'https://github.com/kiransreekanth/NASA_METEOR_MADNESS',
      date: 'Sept - Oct 2025',
      image: '/kiran-portfolio/projects/doomsday.PNG',
      category: 'API Integration & Backend'
    },
    {
      title: 'Recipo - Recipe Sharing Platform',
      description: 'Full-stack recipe-sharing web application with secure authentication. MERN stack with advanced filtering and bookmark features.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/kiransreekanth/Recipo',
      date: 'Feb - Mar 2025',
      image: '/kiran-portfolio/projects/recipo.png',
      category: 'Full Stack Development'
    },
    {
      title: 'MindTrack - Mental Health App',
      description: 'AI-integrated mobile application for real-time mood tracking and behavioral insights. Fine-tuned LLaMA model for personalized recommendations.',
      tech: ['AI/ML', 'LLaMA', 'Mobile Dev', 'Python'],
      github: 'https://github.com/kiransreekanth/Mind-Track-App',
      date: 'Mar - Apr 2025',
      image: '/kiran-portfolio/projects/mindtrack.PNG',
      category: 'AI Development & Fine Tuning'
    },
    {
      title: 'CaloriQ - AI Food Calorie Tracker',
      description: 'A smart food calorie tracking application that calculates BMI, estimates daily calorie targets, and predicts food calories from images using a trained ML model. Built with a Flutter frontend and Flask + MySQL backend for seamless user experience and real-time analysis.',
      tech: ['AI/ML', 'Flutter', 'Flask', 'MySQL'],
      github: 'https://github.com/kiransreekanth/CaloriQ-App',
      date: 'Jul - Aug 2025',
      image: '/kiran-portfolio/projects/caloriq.png',
      category: 'AI & Health Tech'
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-16 md:w-20 h-1 bg-blue-500"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
              onClick={() => window.open(project.github, '_blank')}
            >
              {/* Project Image */}
              <div className="relative h-40 md:h-48 bg-gray-900 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/000000/3b82f6?text=Project+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute top-3 right-3 md:top-4 md:right-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900/80 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ExternalLink className="text-white" size={16} />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6">
                <div className="text-blue-400 text-xs md:text-sm font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-900 text-blue-400 rounded-full text-xs border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-gray-500 text-xs pt-3 md:pt-4 border-t border-gray-900">
                  <span>{project.date}</span>
                  <div className="flex items-center gap-1 text-blue-400">
                    <Github size={12} />
                    <span>View Code</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
