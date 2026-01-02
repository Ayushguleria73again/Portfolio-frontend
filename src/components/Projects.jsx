import React from 'react'
import { motion } from 'framer-motion'

import project1 from '../assets/project1.png'
import taskmanager from '../assets/taskmanager.png'
import travel from '../assets/travel.png'
import cafe from '../assets/cafe.png'
import tools from '../assets/tools.png'
import bunai from '../assets/bunai.png'

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
  ]

  return (
    <section id="projects" className="py-32 bg-black text-white">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* Heading */}
        <motion.div className="text-center mb-20" variants={textVariants}>
          <h2 className="text-5xl md:text-7xl font-extralight mb-6">
            PROJECTS
          </h2>
          <p className="text-lg opacity-60">
            Selected works that define my journey
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(255,255,255,0.12)'
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="
                bg-black
                border border-white/10
                overflow-hidden
                shadow-[0_10px_40px_rgba(255,255,255,0.08)]
              "
            >
              {/* Image Section */}
              <motion.div
                className="h-52 bg-neutral-900 relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-6 opacity-90"
                />
              </motion.div>

              {/* Content */}
              <motion.div className="p-8 space-y-5" variants={textVariants}>
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm opacity-70 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-white/30 px-3 py-1 text-xs tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 font-medium"
                >
                  VIEW PROJECT <span>→</span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Projects
