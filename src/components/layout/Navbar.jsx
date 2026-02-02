import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { generateResume } from '../../utils/generateResume';
import Toast from '../common/Toast';
import Magnetic from '../common/Magnetic';

const Navbar = ({ weatherType, setWeatherType }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleDownloadResume = () => {
    generateResume();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

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
    setActiveDropdown(null);
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
    {
      name: 'Work',
      type: 'dropdown',
      items: [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' }
      ]
    },
    {
      name: 'Expertise',
      type: 'dropdown',
      items: [
        { name: 'Skills', href: '#skills' },
        { name: 'Tech Stack', href: '#tech-stack' }
      ]
    },
    { name: 'Resume', type: 'action', action: handleDownloadResume }
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

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, display: 'none' },
    visible: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.15, ease: "easeIn" },
      transitionEnd: { display: 'none' }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          relative w-full max-w-4xl rounded-full border border-white/10
          backdrop-blur-xl transition-all duration-300
          ${scrolled
            ? 'bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2 px-6'
            : 'bg-transparent border-transparent py-3 px-6'
          }
        `}
      >
        <div className="flex justify-between items-center relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Magnetic strength={0.2}>
              <motion.div
                className="text-xl font-bold tracking-tighter cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="text-white">AG</span>
                <span style={{ color: 'var(--primary-accent)' }}>.</span>
              </motion.div>
            </Magnetic>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              item.type === 'dropdown' ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredDropdown(item.name)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-1">
                    {item.name}
                    <motion.span
                      animate={{ rotate: hoveredDropdown === item.name ? 180 : 0 }}
                      className="text-[10px]"
                    >
                      ▼
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {hoveredDropdown === item.name && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl overflow-hidden py-2"
                      >
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.type === 'action' ? (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          <div className="hidden md:block">
            <Magnetic strength={0.3}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 text-white hover:text-black text-sm font-bold rounded-full transition-all duration-500 inline-block"
                style={{ backgroundColor: 'var(--primary-accent)' }}
              >
                Let's Talk
              </motion.a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.9 }}
          >
            <Magnetic strength={0.5}>
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 focus:outline-none"
              >
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="w-5 h-5" />
              </button>
            </Magnetic>
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
                    item.type === 'dropdown' ? (
                      <div key={item.name} className="flex flex-col">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-center font-medium flex items-center justify-center gap-2"
                        >
                          {item.name}
                          <motion.span animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}>▼</motion.span>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white/5 rounded-xl mb-2"
                            >
                              {item.items.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={closeMobileMenu}
                                  className="block px-4 py-3 text-sm text-gray-400 hover:text-white text-center"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.type === 'action' ? (
                      <button
                        key={item.name}
                        onClick={() => {
                          item.action();
                          closeMobileMenu();
                        }}
                        className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-center font-medium w-full"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-center font-medium"
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
      <Toast message="Resume generated successfully!" isVisible={showToast} />
    </div>
  );
};

export default Navbar;
