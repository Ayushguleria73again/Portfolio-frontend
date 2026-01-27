import React from 'react';
import { motion } from 'framer-motion';
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

  // Duplicate items for seamless loop
  const marqueeItems = [...techItems, ...techItems, ...techItems];

  return (
    <section id="tech-stack" className="py-24 animated-bg text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          TECHNOLOGIES
        </motion.h2>
      </div>

      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group opacity-50 hover:opacity-100 transition-opacity duration-300">
              <div className="text-4xl md:text-5xl text-gray-300 group-hover:text-white transition-colors">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <span className="text-sm font-medium tracking-wider">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
