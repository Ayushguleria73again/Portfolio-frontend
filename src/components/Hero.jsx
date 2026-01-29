import React from 'react';
import { motion } from 'framer-motion';
import Snowfall from 'react-snowfall';
import { generateResume } from '../utils/generateResume';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const particleVariants = {
    animate: (i) => ({
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const morphingVariants = {
    animate: {
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
      borderRadius: ["20%", "50%", "20%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen animated-bg flex items-center justify-center relative overflow-hidden">
      <Snowfall color='white' />
      {/* Floating particles with motion */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${2 + i}px`,
              height: `${2 + i}px`,
              top: `${[20, 40, 68, 80][i]}%`,
              left: `${[10, 80, 25, 70][i]}%`,
              opacity: [0.3, 0.5, 0.2, 0.4][i]
            }}
            variants={particleVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      <motion.div
        className="text-center px-6 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6" variants={textVariants}>
          <motion.h1
            className="text-6xl md:text-9xl font-thin tracking-tighter mb-2"
            variants={textVariants}
          >
            AYUSH
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
            variants={textVariants}
          >
            GULERIA
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-xl md:text-3xl font-light mb-10 mx-auto tracking-widest uppercase text-gray-400"
          variants={textVariants}
        >
          Full Stack Software Engineer
        </motion.div>

        <motion.p
          className="text-base md:text-lg font-light mb-14 opacity-60 max-w-2xl mx-auto leading-relaxed"
          variants={textVariants}
        >
          Crafting digital experiences that blend innovation with elegance.
          Where code meets creativity, and ideas transform into reality.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          variants={containerVariants}
        >
          <motion.a
            href="#projects"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative px-10 py-4 bg-white text-black rounded-full overflow-hidden"
          >
            <span className="relative z-10 font-medium tracking-wide">EXPLORE WORK</span>
            <motion.div
              className="absolute inset-0 bg-gray-200"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative px-10 py-4 text-white border border-white/20 rounded-full hover:border-white/50 transition-colors"
          >
            <span className="relative z-10 font-medium tracking-wide">GET IN TOUCH</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Morphing shape with motion */}
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5"
        variants={morphingVariants}
        animate="animate"
      />
    </section>
  );
};

export default Hero;
