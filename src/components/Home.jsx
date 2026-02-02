import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import Chatbot from './common/Chatbot';

const Home = ({ weatherType, setWeatherType, isMuted, setIsMuted }) => {
    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar weatherType={weatherType} setWeatherType={setWeatherType} isMuted={isMuted} setIsMuted={setIsMuted} />
            <Hero weatherType={weatherType} setWeatherType={setWeatherType} />
            <About />
            <Experience />
            <Projects />
            <TechStack />
            <Skills />
            <Contact />
            <Footer />
            <Chatbot />
        </div>
    );
};

export default Home;
