import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific brand icons
import { faReact, faNodeJs, faPython, faVuejs, faDocker, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons';
// Import specific solid icons
import { faPalette, faCogs, faTools, faCode, faServer, faDatabase, faProjectDiagram, faWind } from '@fortawesome/free-solid-svg-icons'; // Added faWind for Tailwind, faCode for TypeScript

const Skills = () => {
  return (
    <section id="skills" className="py-32 animated-bg text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 slide-in-up">SKILLS</h2>
          <p className="text-xl opacity-70 slide-in-up">Technologies that power my creativity</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {/* Frontend */}
          <div className="text-center slide-in-left">
            <div className="w-32 h-32 mx-auto mb-8 bg-black rounded-3xl flex items-center justify-center relative overflow-hidden group">
              {/* Only one FontAwesomeIcon here */}
              <FontAwesomeIcon icon={faPalette} className="text-4xl text-white absolute z-10 group-hover:scale-0 transition-transform duration-500" />
              {/* This div is the hover background */}
              <div className="absolute inset-0 bg-gray-800 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl"></div>
              {/* This icon appears on hover, with the new color */}
              <FontAwesomeIcon icon={faPalette} className="text-4xl text-white absolute z-20 transform scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6">FRONTEND</h3>
            <div className="space-y-3">
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faReact} className="mr-2" /> React
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faVuejs} className="mr-2" /> Vue.js
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faCode} className="mr-2" /> TypeScript
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                {/* Using faReact for Next.js as it's built on React */}
                <FontAwesomeIcon icon={faReact} className="mr-2" /> Next.js
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                {/* Using faWind for Tailwind, if it's available in your FA setup. If not, consider faCode or a generic icon. */}
                <FontAwesomeIcon icon={faWind} className="mr-2" /> Tailwind CSS
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="text-center slide-in-up">
            <div className="w-32 h-32 mx-auto mb-8 bg-black rounded-3xl flex items-center justify-center relative overflow-hidden group">
              <FontAwesomeIcon icon={faCogs} className="text-4xl text-white absolute z-10 group-hover:scale-0 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gray-800 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl"></div>
              <FontAwesomeIcon icon={faCogs} className="text-4xl text-white absolute z-20 transform scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6">BACKEND</h3>
            <div className="space-y-3">
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faNodeJs} className="mr-2" /> Node.js
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faPython} className="mr-2" /> Python
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faServer} className="mr-2" /> Express
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faServer} className="mr-2" /> Django
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" /> GraphQL
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="text-center slide-in-right">
            <div className="w-32 h-32 mx-auto mb-8 bg-black rounded-3xl flex items-center justify-center relative overflow-hidden group">
              <FontAwesomeIcon icon={faTools} className="text-4xl text-white absolute z-10 group-hover:scale-0 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gray-800 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl"></div>
              <FontAwesomeIcon icon={faTools} className="text-4xl text-white absolute z-20 transform scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6">TOOLS</h3>
            <div className="space-y-3">
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faDatabase} className="mr-2" /> MongoDB
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faDatabase} className="mr-2" /> PostgreSQL
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faDocker} className="mr-2" /> Docker
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faAws} className="mr-2" /> AWS
              </div>
              <div className="border-b border-gray-700 pb-2 hover:border-white transition-colors duration-300">
                <FontAwesomeIcon icon={faGitAlt} className="mr-2" /> Git
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
