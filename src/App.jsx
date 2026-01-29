import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/common/LoadingScreen';
import CustomCursor from './components/common/CustomCursor';
import Home from './components/Home';
import NotFound from './pages/NotFound';

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

    // Smooth scrolling for anchor links (only relevant on Home page)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements (re-run logic if needed, but for SPA one-time observation might be tricky if content changes)
    // For now, observing what's present
    document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .fade-in-scale').forEach(el => {
      observer.observe(el);
    });

    // Initialize nav as visible and add visible class to first elements immediately
    if (nav) {
      nav.classList.add('visible');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <LoadingScreen />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

