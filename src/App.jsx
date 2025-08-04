import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Navigation visibility on scroll
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav-slide');

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (nav) { // Check if nav exists before manipulating
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          nav.classList.remove('visible');
        } else {
          nav.classList.add('visible');
        }
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .fade-in-scale').forEach(el => {
      observer.observe(el);
    });

    // Initialize nav as visible and add visible class to first elements immediately
    if (nav) {
      nav.classList.add('visible');
    }
    document.querySelector('.slide-in-left')?.classList.add('visible');
    document.querySelector('.slide-in-right')?.classList.add('visible');
    document.querySelector('.slide-in-up')?.classList.add('visible');

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Disconnect observer on unmount
      document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .fade-in-scale').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
