import React from 'react';
import ayush from '../assets/ayush.jpeg';

const About = () => {
  return (
    // Changed bg-gray-900 to animated-bg, text-white remains
    <section id="about" className="py-32 animated-bg text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="slide-in-left">
            <h2 className="text-5xl md:text-7xl font-extralight mb-8 border-animate">ABOUT</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="opacity-80">
                I'm a passionate architect of digital experiences, specializing in full-stack development
                with a keen eye for design and user experience. My journey spans across modern web technologies,
                creating solutions that are not just functional, but memorable.
              </p>
              <p className="opacity-80">
                Every line of code I write is driven by the belief that technology should be beautiful,
                intuitive, and purposeful. I transform complex problems into elegant solutions.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm opacity-60">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm opacity-60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-60">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="slide-in-right relative">
            <div className="relative">
              {/* Pulse rings: Keep them visible against the animated background */}
              <div className="absolute inset-0 border-2 border-gray-700 rounded-full pulse-ring"></div>
              <div className="absolute inset-4 border border-gray-700 rounded-full pulse-ring" style={{ animationDelay: '0.5s' }}></div>

              {/* Main circle: bg-black and text-white remain for strong contrast */}
              <div className="w-96 h-96 mx-auto bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl text-white"><img src={ayush} alt="Ayush" /></div>
                {/* Orbiting elements: no change needed */}
                <div className="absolute inset-0">
                  <div className="skill-orbit absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -ml-2 -mt-2"></div>
                  <div className="skill-orbit absolute top-1/2 left-1/2 w-3 h-3 bg-gray-400 rounded-full -ml-1.5 -mt-1.5" style={{ animationDelay: '-5s', animationDuration: '15s' }}></div>
                  <div className="skill-orbit absolute top-1/2 left-1/2 w-2 h-2 bg-gray-600 rounded-full -ml-1 -mt-1" style={{ animationDelay: '-10s', animationDuration: '25s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
