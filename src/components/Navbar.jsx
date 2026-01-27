import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.1, ease: "easeIn" }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          relative w-full max-w-5xl rounded-full border border-white/10
          backdrop-blur-xl transition-all duration-300
          ${scrolled
            ? 'bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-3 px-6'
            : 'bg-transparent border-transparent py-4 px-6'
          }
        `}
      >
        <div className="flex justify-between items-center relative z-20">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">AG</span>
            <span className="text-blue-500">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10"
                onClick={closeMobileMenu}
              />
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-0 right-0 mt-4 mx-2 p-4 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl z-20 overflow-hidden"
              >
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-center font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
