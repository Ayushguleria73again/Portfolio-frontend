import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import project1 from '../assets/project1.png'
import taskmanager from '../assets/taskmanager.png'
import travel from '../assets/travel.png'
import cafe from '../assets/cafe.png'
import tools from '../assets/tools.png'
import bunai from '../assets/bunai.png'
import threadTimberIcon from '../assets/threadsAndTimber.png'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut'
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      tech: ['React', 'Vite', 'Express.js', 'MongoDB'],
      link: 'https://bunai-from-hills.vercel.app/',
    },
    {
      image: threadTimberIcon,
      title: 'Thread & Timber',
      description: 'A premium e-commerce platform for handcrafted artisan apparel and sustainable fashion.',
      tech: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://thread-and-timber-mror.vercel.app/',
    }
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projectData.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  return (
    <section id="projects" className="py-32 animated-bg text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-8xl font-thin mb-8 tracking-tighter">
            SELECTED WORKS
          </h2>
          <p className="text-xl opacity-60 font-light max-w-2xl mx-auto">
            A curation of digital experiences crafted with precision and passion.
          </p>
        </motion.div>

        {/* 3D Carousel Stage */}
        <div className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center perspective-1000">
          <AnimatePresence mode="popLayout">
            {projectData.map((project, index) => {
              // Calculate relative position to active index
              let offset = index - activeIndex;
              // Handle wrap-around logic for infinite feel
              if (offset < -2) offset += projectData.length;
              if (offset > 2) offset -= projectData.length;

              // Determine visibility and styles based on offset
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                    scale: isActive ? 1 : 0.9,
                    x: `${offset * 55}%`,
                    rotateY: offset * 25,
                    zIndex: 100 - Math.abs(offset),
                    filter: isActive ? 'blur(0px)' : 'blur(4px)',
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  className={`absolute w-[85vw] md:w-[650px] h-[60vh] md:h-[550px] rounded-[2rem] overflow-hidden flex flex-col ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                  {/* Glass Background & Border */}
                  <div className={`absolute inset-0 transition-all duration-500 rounded-[2rem] ${isActive ? 'bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10' : 'bg-[#050505] border border-white/5'}`} />

                  {/* Active Gradient Glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-[2rem] pointer-events-none" />
                  )}

                  {/* Inner Content */}
                  <div className="relative h-full flex flex-col z-10">
                    {/* Image Area - 55% */}
                    <div className="h-[55%] p-8 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 flex flex-col justify-between bg-[#0a0a0a]">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-3xl font-light tracking-tight text-white">
                            {project.title}
                          </h3>
                          <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((t, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full text-gray-400 border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>

                        <p className="text-sm opacity-60 font-light leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group/link w-fit"
                      >
                        <span className="border-b border-white/20 pb-0.5 group-hover/link:border-white transition-colors">View Project</span>
                        <span className="text-xs group-hover/link:translate-x-1 transition-transform">↗</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={prevProject}
            className="absolute left-4 md:left-12 z-[500] p-4 rounded-full border border-white/10 bg-black/50 backdrop-blur-md hover:bg-white text-white hover:text-black transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 md:right-12 z-[500] p-4 rounded-full border border-white/10 bg-black/50 backdrop-blur-md hover:bg-white text-white hover:text-black transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
