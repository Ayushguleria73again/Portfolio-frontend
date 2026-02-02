import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faNodeJs, faPython, faVuejs, faDocker, faAws, faPhp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLeaf, faDatabase, faWind, faBolt, faFire, faCode, faTerminal, faLaptopCode, faCube, faNetworkWired
} from '@fortawesome/free-solid-svg-icons';

const TechStack = () => {
  const techItems = [
    { icon: faReact, label: "React", color: '#61DAFB' },
    { icon: faNodeJs, label: "Node.js", color: '#339933' },
    { icon: faPython, label: "Python", color: '#3776AB' },
    { icon: faLeaf, label: "MongoDB", color: '#47A248' },
    { icon: faDatabase, label: "SQL", color: '#336791' },
    { icon: faAws, label: "AWS", color: '#FF9900' },
    { icon: faVuejs, label: "Vue", color: '#4FC08D' },
    { icon: faDocker, label: "Docker", color: '#2496ED' },
    { icon: faBolt, label: "Next.js", color: '#ffffff' },
    { icon: faWind, label: "Tailwind", color: '#06B6D4' },
    { icon: faFire, label: "Firebase", color: '#FFCA28' },
    { icon: faPhp, label: "PHP", color: '#777BB4' },
  ];


    return (
    <section id="tech-stack" className="py-32 relative overflow-hidden">

      {/* Background Hex Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block p-4 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6 backdrop-blur-sm"
        >
          <FontAwesomeIcon icon={faCube} className="text-4xl text-purple-400" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-mono tracking-tighter text-white mb-4"
        >
          NEURAL <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">HIVE</span>
        </motion.h2>
        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
          <FontAwesomeIcon icon={faNetworkWired} className="mr-2" />
          Interconnected Systems
        </p>
      </div>

      {/* Honeycomb Grid */}
      <div className="flex justify-center items-center overflow-x-hidden pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 -ml-8 md:ml-0">
          {techItems.map((item, index) => (
            <div
              key={index}
              className={`relative w-28 h-32 md:w-36 md:h-40 group cursor-pointer ${index % 2 === 1 ? 'md:mt-20' : ''}`} // Stagger effect
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="w-full h-full relative"
              >
                {/* Hexagon Shape */}
                <div
                  className="absolute inset-0 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:bg-white/10"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  {/* Border Glow */}
                  <div
                    className="absolute inset-[1px] bg-[#050505] z-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0a0a0a]"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-3xl md:text-4xl text-white/40 group-hover:text-white transition-colors duration-300"
                        style={{ filter: `drop-shadow(0 0 0 transparent)` }}
                      />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Outline */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: `linear-gradient(to bottom right, ${item.color}, transparent)` }}
                />
                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-white/10 group-hover:bg-purple-500 transition-colors duration-300 rounded-full blur-[2px]" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TechStack;
