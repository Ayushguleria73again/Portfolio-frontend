import React from 'react';
import { motion } from 'framer-motion';

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
        className="text-center px-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={textVariants}>
          <motion.h1 
            className="text-6xl md:text-8xl font-extralight mb-4"
            variants={textVariants}
          >
            AYUSH
          </motion.h1>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-glow"
            variants={textVariants}
          >
            GULERIA
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="text-xl md:text-2xl font-light mb-12 mx-auto typewriter"
          variants={textVariants}
        >
          Full Stack Software Engineer
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl font-light mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed"
          variants={textVariants}
        >
          Crafting digital experiences that blend innovation with elegance.
          Where code meets creativity, and ideas transform into reality.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          variants={containerVariants}
        >
          <motion.a
            href="#projects"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="relative z-10">EXPLORE WORK</span>
          </motion.a>
          
          <motion.a
            href="#contact"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white rounded-full transition-all duration-500"
          >
            <span className="relative z-10">GET IN TOUCH</span>
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
