import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Magnetic from '../common/Magnetic'
import CaseStudy from '../common/CaseStudy'

import project1 from '../../assets/project1.png'
import taskmanager from '../../assets/taskmanager.png'
import travel from '../../assets/travel.png'
import bunai from '../../assets/bunai.png'
import threadTimberIcon from '../../assets/threadsAndTimber.png'

const Projects = ({ selectedProject, setSelectedProject }) => {
  const projectData = [
    {
      image: project1,
      title: 'MY LUXE STORE',
      description: 'A sophisticated e-commerce solution featuring real-time inventory management, advanced analytics, and seamless payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      link: 'https://my-luxe-store.vercel.app/',
      accentColor: '#3b82f6', // Azure Blue
    },
    {
      image: threadTimberIcon,
      title: 'THREAD & TIMBER',
      description: 'A premium e-commerce platform for handcrafted artisan apparel and sustainable fashion.',
      tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB'],
      link: 'https://thread-and-timber-mror.vercel.app/',
      accentColor: '#10b981', // Emerald Green
    },
    {
      image: bunai,
      title: 'BUNAI FROM THE HILLS',
      description: 'An e-commerce website for a Himalayan knitting brand, focusing on heritage and craftsmanship.',
      tech: ['React', 'Vite', 'Express', 'MongoDB'],
      link: 'https://bunai-from-hills.vercel.app/',
      accentColor: '#f59e0b', // Amber
    },
    {
      image: taskmanager,
      title: 'TASK MANAGEMENT',
      description: 'Collaborative workspace with real-time synchronization, advanced filtering, and drag-and-drop interface.',
      tech: ['React', 'Node.js', 'MongoDB', 'Framer'],
      link: 'https://task-manager-plum-zeta.vercel.app/',
      accentColor: '#8b5cf6', // Soft Purple
    },
    {
      image: travel,
      title: 'ORANGO TRAVELS',
      description: 'A dynamic travel booking platform with user reviews and smooth user experience.',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      link: 'https://travels-one-eta.vercel.app/',
      accentColor: '#f97316', // Bright Orange
    }
  ];

  const updateTheme = (color) => {
    document.documentElement.style.setProperty('--primary-accent', color);
    document.documentElement.style.setProperty('--accent-glow', `${color}66`); // 40% opacity
    document.documentElement.style.setProperty('--accent-glow-light', `${color}1a`); // 10% opacity
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden transition-colors duration-1000">
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
            <span className="text-transparent stroke-text" style={{ WebkitTextStrokeColor: 'var(--accent-glow)' }}>WORKS</span>
          </h2>
        </motion.div>

        {/* Editorial Grid */}
        <div className="flex flex-col gap-40 md:gap-64">
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              index={index}
              onEnter={() => updateTheme(project.accentColor)}
              onExplore={() => {
                setSelectedProject(project);
              }}
            />
          ))}
        </div>
      </div>

      <CaseStudy
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => {
          setSelectedProject(null);
        }}
      />
    </section>
  );
};

const ProjectItem = ({ project, index, onEnter, onExplore }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => onEnter()}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Image Container with 3D Tilt Effect */}
      <div
        className="w-full md:w-[60%] aspect-[4/3] md:aspect-[16/10] perspective-[1000px] group relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full relative"
        >
          <div
            style={{
              transform: "translateZ(50px)",
              transformStyle: "preserve-3d",
            }}
            className="w-full h-full overflow-hidden rounded-[2rem] bg-white/5 border border-white/10"
          >
            <motion.div
              className="w-full h-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={onExplore}
              layoutId={`project-image-${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale-[50%] group-hover:grayscale-0"
              />
            </motion.div>
          </div>

          {/* Floating Project Number */}
          <motion.span
            style={{
              transform: "translateZ(80px)",
            }}
            className="absolute -top-12 -right-12 md:-top-16 md:-right-16 text-8xl md:text-[12rem] font-black text-white/5 pointer-events-none tracking-tighter italic z-10"
          >
            0{index + 1}
          </motion.span>

          {/* Glow Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)' }}
          />
        </motion.div>
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
            <motion.button
              onClick={onExplore}
              className="inline-flex items-center gap-6 group"
            >
              <span
                className="w-14 h-14 rounded-full border flex items-center justify-center group-hover:bg-[var(--primary-accent)] transition-all duration-500"
                style={{ borderColor: 'var(--primary-accent)' }}
              >
                <span className="text-white group-hover:text-black text-xl transition-colors">↗</span>
              </span>
              <span className="text-sm font-bold tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
                Explore Project
              </span>
            </motion.button>
          </Magnetic>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
