import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white relative pt-20 pb-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          {/* Brand / Name */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter text-white"
            >
              AYUSH.
            </motion.h2>
            <p className="text-white/40 text-lg md:text-xl font-light ml-2">
              Full Stack Developer
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-auto grid grid-cols-2 gap-8 md:flex md:gap-24">
            <div>
              <h4 className="text-white/40 uppercase text-xs tracking-widest mb-6">Socials</h4>
              <ul className="space-y-3">
                {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-lg hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/40 uppercase text-xs tracking-widest mb-6">Sitemap</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-lg hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Ayush Guleria. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span>Made with</span>
            <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" />
            <span>in India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-sm uppercase tracking-wider">Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
