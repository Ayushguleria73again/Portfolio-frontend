import React from 'react';
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
  // Map tech names to their corresponding Font Awesome icon objects
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
    { icon: faFire, name: 'Firebase' }, // Changed to faFire
  ];

  return (
    <section id="tech-stack" className="py-32 animated-bg text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 slide-in-up">TECH STACK</h2>
          <p className="text-xl opacity-70 slide-in-up">The tools and technologies I work with</p>
        </div>

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
      </div>
    </section>
  );
};

export default TechStack;
