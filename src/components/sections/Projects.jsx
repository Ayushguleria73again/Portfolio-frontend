import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Magnetic from '../common/Magnetic'

import project1 from '../../assets/project1.png'
import taskmanager from '../../assets/taskmanager.png'
import travel from '../../assets/travel.png'
import cafe from '../../assets/cafe.png'
import tools from '../../assets/tools.png'
import bunai from '../../assets/bunai.png'
import threadTimberIcon from '../../assets/threadsAndTimber.png'

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
  const projectData = [
    {
      image: project1,
      title: 'MY LUXE STORE',
      description: 'A sophisticated e-commerce solution featuring real-time inventory management, advanced analytics, and seamless payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      link: 'https://my-luxe-store.vercel.app/',
    },
    {
      image: threadTimberIcon,
      title: 'THREAD & TIMBER',
      description: 'A premium e-commerce platform for handcrafted artisan apparel and sustainable fashion.',
      tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB'],
      link: 'https://thread-and-timber-mror.vercel.app/',
    },
    {
      image: bunai,
      title: 'BUNAI FROM THE HILLS',
      description: 'An e-commerce website for a Himalayan knitting brand, focusing on heritage and craftsmanship.',
      tech: ['React', 'Vite', 'Express', 'MongoDB'],
      link: 'https://bunai-from-hills.vercel.app/',
    },
    {
      image: taskmanager,
      title: 'TASK MANAGEMENT',
      description: 'Collaborative workspace with real-time synchronization, advanced filtering, and drag-and-drop interface.',
      tech: ['React', 'Node.js', 'MongoDB', 'Framer'],
      link: 'https://task-manager-plum-zeta.vercel.app/',
    },
    {
      image: travel,
      title: 'ORANGO TRAVELS',
      description: 'A dynamic travel booking platform with user reviews and smooth user experience.',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      link: 'https://travels-one-eta.vercel.app/',
    }
  ];

  return (
    <section id="projects" className="py-32 animated-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/30 font-mono text-sm tracking-[0.5em] uppercase block mb-4">Portfolio</span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">
            SELECTED<br />
            <span className="text-transparent stroke-text">WORKS</span>
          </h2>
        </motion.div>

        {/* Editorial Grid */}
        <div className="flex flex-col gap-40 md:gap-64">
          {projectData.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }) => {
  return (
    <motion.div
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Image Container with Parallax Effect */}
      <div className="w-full md:w-[60%] aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 group relative">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale-[50%] group-hover:grayscale-0"
          />
        </motion.div>

        {/* Overlay Number */}
        <span className="absolute top-8 right-8 text-6xl md:text-8xl font-black text-white/5 pointer-events-none tracking-tighter italic">
          0{index + 1}
        </span>
      </div>

      {/* Info Container */}
      <div className="w-full md:w-[40%] text-left">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight italic">
            {project.title}
          </h3>

          <p className="text-lg text-white/50 font-light leading-relaxed mb-10 max-w-md">
            {project.description}
          </p>

          <Magnetic strength={0.3}>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 group"
            >
              <span className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-500">
                <span className="text-white group-hover:text-black text-xl transition-colors">↗</span>
              </span>
              <span className="text-sm font-bold tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
                Explore Project
              </span>
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
