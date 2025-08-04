import React from 'react';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen animated-bg flex items-center justify-center relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="floating absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-30"></div>
        <div className="floating absolute top-40 right-20 w-1 h-1 bg-white rounded-full opacity-50" style={{ animationDelay: '-2s' }}></div>
        <div className="floating absolute bottom-32 left-1/4 w-3 h-3 bg-white rounded-full opacity-20" style={{ animationDelay: '-4s' }}></div>
        <div className="floating absolute bottom-20 right-1/3 w-1 h-1 bg-white rounded-full opacity-40" style={{ animationDelay: '-1s' }}></div>
      </div>

      <div className="text-center px-6 z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-extralight mb-4 slide-in-left">
            AYUSH
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold slide-in-right text-glow">
            GULERIA
          </h1>
        </div>
        <div className="typewriter text-xl md:text-2xl font-light mb-12 mx-auto max-w-2xl">
          Full Stack Software Engineer
        </div>
        <div className="slide-in-up">
          <p className="text-lg md:text-xl font-light mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that blend innovation with elegance.
            Where code meets creativity, and ideas transform into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#projects" className="group relative px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-500">
              <span className="relative z-10">EXPLORE WORK</span>
            </a>
            <a href="#contact" className="group relative px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white rounded-full transition-all duration-500">
              <span className="relative z-10">GET IN TOUCH</span>
            </a>
          </div>
        </div>
      </div>

      {/* Morphing shape */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 morphing-shape"></div>
    </section>
  );
};

export default Hero;
