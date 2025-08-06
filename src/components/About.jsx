import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import ayush from '../assets/ayush.jpeg';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          const increment = value / (duration * 60);
          if (prevCount + increment >= value) {
            clearInterval(timer);
            return value;
          }
          return prevCount + increment;
        });
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {Math.floor(count)}
    </motion.span>
  );
};

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const orbitVariants = {
    animate: (delay) => ({
      rotate: 360,
      transition: {
        duration: 15 + delay * 5,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }
    })
  };

  return (
    <section id="about" className="py-32 animated-bg text-white relative">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={textVariants}>
            <motion.h2 
              className="text-5xl md:text-7xl font-extralight mb-8 border-animate"
              variants={textVariants}
            >
              ABOUT
            </motion.h2>
            <motion.div className="space-y-6 text-lg leading-relaxed" variants={textVariants}>
              <motion.p className="opacity-80" variants={textVariants}>
                I'm a passionate architect of digital experiences, specializing in full-stack development
                with a keen eye for design and user experience. My journey spans across modern web technologies,
                creating solutions that are not just functional, but memorable.
              </motion.p>
              <motion.p className="opacity-80" variants={textVariants}>
                Every line of code I write is driven by the belief that technology should be beautiful,
                intuitive, and purposeful. I transform complex problems into elegant solutions.
              </motion.p>
            </motion.div>
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-8"
              variants={containerVariants}
            >
              <motion.div className="text-center" variants={textVariants}>
                <motion.div className="text-3xl font-bold mb-2">
                  <AnimatedCounter value={4} />
                </motion.div>
                <motion.div className="text-sm opacity-60">Projects Completed</motion.div>
              </motion.div>
              <motion.div className="text-center" variants={textVariants}>
                <motion.div className="text-3xl font-bold mb-2">
                  <AnimatedCounter value={2} />
                </motion.div>
                <motion.div className="text-sm opacity-60">Years Experience</motion.div>
              </motion.div>
              <motion.div className="text-center" variants={textVariants}>
                <motion.div className="text-3xl font-bold mb-2">
                  <AnimatedCounter value={"100%"} />
                </motion.div>
                <motion.div className="text-sm opacity-60">Client Satisfaction</motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={imageVariants} className="relative">
            <motion.div className="relative">
              {/* Pulse rings */}
              <motion.div 
                className="absolute inset-0 border-2 border-gray-700 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-4 border border-gray-700 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Main circle */}
              <motion.div 
                className="w-96 h-96 mx-auto bg-black rounded-full flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  src={ayush} 
                  alt="Ayush" 
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Orbiting elements */}
                <motion.div className="absolute inset-0">
                  <motion.div 
                    className="skill-orbit absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -ml-2 -mt-2"
                    variants={orbitVariants}
                    animate="animate"
                    custom={0}
                  />
                  <motion.div 
                    className="skill-orbit absolute top-1/2 left-1/2 w-3 h-3 bg-gray-400 rounded-full -ml-1.5 -mt-1.5"
                    variants={orbitVariants}
                    animate="animate"
                    custom={1}
                  />
                  <motion.div 
                    className="skill-orbit absolute top-1/2 left-1/2 w-2 h-2 bg-gray-600 rounded-full -ml-1 -mt-1"
                    variants={orbitVariants}
                    animate="animate"
                    custom={2}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
