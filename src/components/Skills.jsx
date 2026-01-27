import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific brand icons
import { faReact, faNodeJs, faPython, faVuejs, faDocker, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons';
// Import specific solid icons
import { faPalette, faCogs, faTools, faCode, faServer, faDatabase, faProjectDiagram, faWind } from '@fortawesome/free-solid-svg-icons'; // Added faWind for Tailwind, faCode for TypeScript

const Skills = () => {
  return (
    <section id="skills" className="py-32 animated-bg text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-thin tracking-tight mb-6">SKILLS</h2>
          <p className="text-lg opacity-60 tracking-wider font-light">The arsenal of my creativity</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Frontend */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-colors duration-500 group">
            <div className="w-20 h-20 mx-auto mb-8 bg-black/50 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <FontAwesomeIcon icon={faPalette} className="text-3xl text-gray-300 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-8 text-center tracking-widest text-gray-200">FRONTEND</h3>
            <div className="space-y-4">
              {[
                { icon: faReact, name: 'React' },
                { icon: faVuejs, name: 'Vue.js' },
                { icon: faCode, name: 'TypeScript' },
                { icon: faReact, name: 'Next.js' },
                { icon: faWind, name: 'Tailwind CSS' }
              ].map((skill, i) => (
                <div key={i} className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <FontAwesomeIcon icon={skill.icon} className="w-6 text-center opacity-70" />
                  <span className="ml-4 font-light tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-colors duration-500 group">
            <div className="w-20 h-20 mx-auto mb-8 bg-black/50 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <FontAwesomeIcon icon={faCogs} className="text-3xl text-gray-300 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-8 text-center tracking-widest text-gray-200">BACKEND</h3>
            <div className="space-y-4">
              {[
                { icon: faNodeJs, name: 'Node.js' },
                { icon: faPython, name: 'Python' },
                { icon: faServer, name: 'Express' },
                { icon: faServer, name: 'Django' },
                { icon: faProjectDiagram, name: 'GraphQL' }
              ].map((skill, i) => (
                <div key={i} className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <FontAwesomeIcon icon={skill.icon} className="w-6 text-center opacity-70" />
                  <span className="ml-4 font-light tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-colors duration-500 group">
            <div className="w-20 h-20 mx-auto mb-8 bg-black/50 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <FontAwesomeIcon icon={faTools} className="text-3xl text-gray-300 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-8 text-center tracking-widest text-gray-200">TOOLS</h3>
            <div className="space-y-4">
              {[
                { icon: faDatabase, name: 'MongoDB' },
                { icon: faDatabase, name: 'PostgreSQL' },
                { icon: faDocker, name: 'Docker' },
                { icon: faAws, name: 'AWS' },
                { icon: faGitAlt, name: 'Git' }
              ].map((skill, i) => (
                <div key={i} className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <FontAwesomeIcon icon={skill.icon} className="w-6 text-center opacity-70" />
                  <span className="ml-4 font-light tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
