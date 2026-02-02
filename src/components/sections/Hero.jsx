import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Snowfall from 'react-snowfall';
import RippleButton from '../common/RippleButton';
import Magnetic from '../common/Magnetic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ isSnowing, setIsSnowing }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

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
    <section
      id="home"
      ref={targetRef}
      className="min-h-screen animated-bg flex items-center justify-center relative overflow-hidden"
    >
      <div />{/* Removed local Snowfall - moved to App.jsx */}

      {/* Parallax background elements */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${4 + i * 2}px`,
                height: `${4 + i * 2}px`,
                top: `${[15, 35, 60, 85][i]}%`,
                left: `${[15, 75, 20, 80][i]}%`,
                opacity: 0.2
              }}
              variants={particleVariants}
              animate="animate"
              custom={i}
            />
          ))}
        </div>

        {/* Large Decorative Circles */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="text-center px-6 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6" variants={textVariants}>
          <Magnetic strength={0.3}>
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
          </Magnetic>
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
          <motion.div variants={buttonVariants}>
            <RippleButton
              className="px-10 py-4 bg-white text-black rounded-full font-medium tracking-wide shadow-xl active:scale-95 transition-transform"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              EXPLORE WORK
            </RippleButton>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <RippleButton
              className="px-10 py-4 text-white border border-white/20 rounded-full font-medium tracking-wide hover:border-white/50 bg-white/5 backdrop-blur-sm active:scale-95 transition-all"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              GET IN TOUCH
            </RippleButton>
          </motion.div>
        </motion.div>

        {/* Snowfall Toggle */}
        <motion.div
          variants={buttonVariants}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setIsSnowing(!isSnowing)}
            className={`
              group relative flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-500
              ${isSnowing
                ? 'bg-blue-500/10 border-blue-400/50 text-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.2)]'
                : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'}
            `}
          >
            <motion.div
              animate={isSnowing ? { rotate: 180, scale: 1.2 } : { rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FontAwesomeIcon icon={faSnowflake} className={isSnowing ? "animate-spin-slow" : ""} />
            </motion.div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium">
              {isSnowing ? 'Stop Snowing' : 'Let it Snow'}
            </span>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>
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

