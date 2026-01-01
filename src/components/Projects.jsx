import React from 'react';
import project1 from '../assets/project1.png';
import taskmanager from '../assets/taskmanager.png';
import travel from '../assets/travel.png';
import cafe from '../assets/cafe.png';
import tools from '../assets/tools.png';
import bunai from '../assets/bunai.png';

const Projects = () => {
  const projectData = [
    {
      image: project1,
      title: 'my-luxe-store',
      description:
        'A sophisticated e-commerce solution featuring real-time inventory management, advanced analytics, and seamless payment integration.',
      tech: ['REACT', 'Node.js (WIP)', 'MongoDB'],
      link: 'https://my-luxe-store.vercel.app/',
    },
    {
      image: taskmanager,
      title: 'TASK MANAGEMENT',
      description:
        'Collaborative workspace with real-time synchronization, advanced filtering, and drag-and-drop interface.',
      tech: ['REACT', 'Node.js (WIP)', 'MongoDB'],
      link: 'https://task-manager-plum-zeta.vercel.app/',
    },
    {
      image: travel,
      title: 'Orango Travels India',
      description:
        'A dynamic travel booking platform with user reviews and smooth user experience.',
      tech: ['REACT'],
      link: 'https://travels-one-eta.vercel.app/',
    },
    {
      image: cafe,
      title: 'Dhuladhar River Cafe',
      description:
        'A cafe website showcasing riverside ambience, menu offerings, and customer engagement.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://webtamplate.vercel.app/',
    },
    {
      image: tools,
      title: 'MyOnlineTools',
      description:
        'A collection of free online productivity tools including converters and generators.',
      tech: ['React', 'Vite', 'JavaScript'],
      link: 'https://myonlinetools.site/',
    },
    {
      image: bunai,
      title: 'Bunai From The Hills',
      description:
        'An e-commerce website for a Himalayan knitting brand.',
      tech: ['React', 'Vite', 'Express.js','MongoDB'],
      link: 'https://bunai-from-hills.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extralight mb-6 text-white">
            PROJECTS
          </h2>
          <p className="text-lg text-white/60">
            Selected works that define my journey
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="
                bg-black
                text-white
                border border-white/10
                shadow-[0_10px_40px_rgba(255,255,255,0.08)]
                hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)]
                transition-all
                duration-300
              "
            >
              {/* Image Section */}
              <div className="h-48 bg-neutral-900 relative flex items-center justify-center overflow-hidden">
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-full object-contain p-4 brightness-90"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-white/70 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="border border-white/30 px-3 py-1 text-xs uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium hover:gap-4 transition-all"
                >
                  VIEW PROJECT
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
