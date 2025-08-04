import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 nav-slide bg-black bg-opacity-90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-glow">AG</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-300 transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-gray-300 transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="hover:text-gray-300 transition-all duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#tech-stack" className="hover:text-gray-300 transition-all duration-300 relative group">
              Tech Stack
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="hover:text-gray-300 transition-all duration-300 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden bg-black bg-opacity-90 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" onClick={closeMobileMenu} className="block text-white hover:text-gray-300 transition-colors duration-300">
              Home
            </a>
            <a href="#about" onClick={closeMobileMenu} className="block text-white hover:text-gray-300 transition-colors duration-300">
              About
            </a>
            <a href="#projects" onClick={closeMobileMenu} className="block text-white hover:text-gray-300 transition-colors duration-300">
              Projects
            </a>
            <a href="#tech-stack" onClick={closeMobileMenu} className="block text-white hover:text-gray-300 transition-colors duration-300">
              Tech Stack
            </a>
            <a href="#skills" onClick={closeMobileMenu} className="block text-white hover:text-gray-300 transition-colors duration-300">
              Skills
            </a>
            <a href="#contact" onClick={closeMobileMenu} className="block text-white hover:text-gray-300 transition-colors duration-300">
              Contact
            </a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
