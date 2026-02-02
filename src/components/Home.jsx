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

const Home = ({ isSnowing, setIsSnowing }) => {
    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar isSnowing={isSnowing} setIsSnowing={setIsSnowing} />
            <Hero isSnowing={isSnowing} setIsSnowing={setIsSnowing} />
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
