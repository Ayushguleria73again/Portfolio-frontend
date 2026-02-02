import React from 'react';
import Dock from './layout/Dock';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import Chatbot from './common/Chatbot';

const Home = ({ weatherType, setWeatherType, selectedProject, setSelectedProject }) => {
    return (
        <div className="animated-bg text-white overflow-x-hidden relative">
            {/* Content Wrapper */}
            <div className="relative z-10">
                <Dock />
                <Hero weatherType={weatherType} setWeatherType={setWeatherType} />
                <About />
                <Experience />
                <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
                <TechStack />
                <Skills />
                <Contact />
                <Footer />
                <Chatbot />
            </div>
        </div>
    );
};

export default Home;
