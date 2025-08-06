import React from 'react';
import project1 from '../assets/project1.png'

const Projects = () => {
  return (
    // Changed bg-black to animated-bg
    <section id="projects" className="py-32 animated-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 slide-in-up text-glow">PROJECTS</h2>
          <p className="text-xl opacity-70 slide-in-up">Selected works that define my journey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project 1 */}
          {/* Project cards are bg-white text-black, which will stand out well against animated-bg */}
          <div className="project-card bg-white text-black rounded-none overflow-hidden fade-in-scale">
            <div className="h-64 bg-gradient-to-br from-gray-900 to-gray-600 flex items-center justify-center relative">
              <div className="text-6xl"><img src={project1} alt="" className=" w-full object-contain" /></div>
              {/* <div className="absolute inset-0 bg-opacity-20"></div> */}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">E-COMMERCE PLATFORM</h3>
              <p className="opacity-70 mb-6 leading-relaxed">
                A sophisticated e-commerce solution featuring real-time inventory management,
                advanced analytics, and seamless payment integration. Built for scale and performance.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="border border-black px-3 py-1 text-sm">REACT</span>
                {/* <span className="border border-black px-3 py-1 text-sm">NODE.JS</span>
                <span className="border border-black px-3 py-1 text-sm">MONGODB</span> */}
              </div>
              <button className="group flex items-center gap-2 font-semibold hover:gap-4 transition-all duration-300">
                <a href="https://my-luxe-store.vercel.app/"> VIEW PROJECT</a>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card bg-white text-black rounded-none overflow-hidden fade-in-scale">
            <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-500 flex items-center justify-center relative">
              <div className="text-6xl">📱</div>
              {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">TASK MANAGEMENT</h3>
              <p className="opacity-70 mb-6 leading-relaxed">
                Collaborative workspace with real-time synchronization, advanced filtering,
                and intuitive drag-and-drop interface. Designed for modern teams.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="border border-black px-3 py-1 text-sm">VUE.JS</span>
                <span className="border border-black px-3 py-1 text-sm">EXPRESS</span>
                <span className="border border-black px-3 py-1 text-sm">SOCKET.IO</span>
              </div>
              <button className="group flex items-center gap-2 font-semibold hover:gap-4 transition-all duration-300">
                VIEW PROJECT
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card bg-white text-black rounded-none overflow-hidden fade-in-scale">
            <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-400 flex items-center justify-center relative">
              <div className="text-6xl">📊</div>
              {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">ANALYTICS DASHBOARD</h3>
              <p className="opacity-70 mb-6 leading-relaxed">
                Real-time data visualization platform with interactive charts,
                predictive analytics, and automated reporting capabilities.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="border border-black px-3 py-1 text-sm">REACT</span>
                <span className="border border-black px-3 py-1 text-sm">D3.JS</span>
                <span className="border border-black px-3 py-1 text-sm">PYTHON</span>
              </div>
              <button className="group flex items-center gap-2 font-semibold hover:gap-4 transition-all duration-300">
                VIEW PROJECT
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card bg-white text-black rounded-none overflow-hidden fade-in-scale">
            <div className="h-64 bg-gradient-to-br from-gray-600 to-gray-300 flex items-center justify-center relative">
              <div className="text-6xl">🚀</div>
              {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">AI CHATBOT PLATFORM</h3>
              <p className="opacity-70 mb-6 leading-relaxed">
                Intelligent conversational AI with natural language processing,
                machine learning capabilities, and seamless integration options.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="border border-black px-3 py-1 text-sm">NEXT.JS</span>
                <span className="border border-black px-3 py-1 text-sm">TENSORFLOW</span>
                <span className="border border-black px-3 py-1 text-sm">FASTAPI</span>
              </div>
              <button className="group flex items-center gap-2 font-semibold hover:gap-4 transition-all duration-300">
                VIEW PROJECT
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
