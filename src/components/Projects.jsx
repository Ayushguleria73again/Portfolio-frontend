import React from 'react';
import project1 from '../assets/project1.png';

const Projects = () => {
  // Define project data with Font Awesome icons and specific styling
  const projectData = [
    {
      image: project1, // Correctly assign the imported image
      title: 'my-luxe-store',
      description: 'A sophisticated e-commerce solution featuring real-time inventory management, advanced analytics, and seamless payment integration. Built for scale and performance.',
      tech: ['REACT', 'currently working on Backend with Node.js', 'and MONGODB'],
      gradientFrom: 'from-gray-900',
      gradientTo: 'to-gray-600',
      link:'https://my-luxe-store.vercel.app/'
    },
    {
      image: '', // Add an image path if available
      title: 'TASK MANAGEMENT',
      description: 'Collaborative workspace with real-time synchronization, advanced filtering, and intuitive drag-and-drop interface. Designed for modern teams.',
      tech: ['REACT', 'currently working on Backend with Node.js', 'and MONGODB'],
      gradientFrom: 'from-gray-800',
      gradientTo: 'to-gray-500',
      link:''
    },
  ];

  return (
    <section id="projects" className="py-32 bg-black"> {/* Ensure background is black as per overall theme */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 slide-in-up text-glow">PROJECTS</h2>
          <p className="text-xl opacity-70 slide-in-up">Selected works that define my journey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projectData.map((project, index) => (
            <div key={index} className="project-card bg-white text-black rounded-none overflow-hidden fade-in-scale">
              {/* Project Card Image/Icon Area */}
              <div className={`h-64 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center relative`}>
                {project.image && <img src={project.image} alt={project.title} className="w-full object-contain" />} {/* Ensure image is displayed only if it exists */}
              </div>

              {/* Project Card Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="opacity-70 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="border border-black px-3 py-1 text-sm">{tech}</span>
                  ))}
                </div>
                <button className="group flex items-center gap-2 font-semibold hover:gap-4 transition-all duration-300">
                  <a href={project.link}>VIEW PROJECT</a>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
