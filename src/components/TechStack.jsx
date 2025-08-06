import React from 'react';
import { motion }  from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faPython,
  faVuejs,
  faDocker,
  faAws,
  faPhp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLeaf,
  faDatabase,
  faWind,
  faBolt,
  faFire, // Added faFire for Firebase
} from '@fortawesome/free-solid-svg-icons';

const TechStack = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const techItems = [
    { icon: faReact, name: 'React' },
    { icon: faNodeJs, name: 'Node.js' },
    { icon: faPython, name: 'Python' },
    { icon: faLeaf, name: 'MongoDB' },
    { icon: faDatabase, name: 'PostgreSQL' },
    { icon: faPhp, name: 'PHP' },
    { icon: faWind, name: 'Tailwind' },
    { icon: faDocker, name: 'Docker' },
    { icon: faAws, name: 'AWS' },
    { icon: faVuejs, name: 'Vue.js' },
    { icon: faBolt, name: 'Next.js' },
    { icon: faFire, name: 'Firebase' },
  ];

  return (
    <section id="tech-stack" className="py-32 animated-bg text-white">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-extralight mb-12 text-center text-glow"
          variants={itemVariants}
        >
          TECH STACK
        </motion.h2>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
          {techItems.map((item, index) => (
            <div key={index} className="tech-item text-center slide-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={item.icon} className="text-3xl" />
              </div>
              <p className="font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
       
      </motion.div>
    </section>
  );
};

export default TechStack;
