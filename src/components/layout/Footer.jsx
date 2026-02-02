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

  const titleChars = "AYUSH.".split("");

  const Social = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayush-guleria-162a83206' },
    { name: 'GitHub', url: 'https://github.com/Ayushguleria73again' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: 'https://www.instagram.com/_ayush_guleria_/' }
  ]

  return (
    <footer className="bg-[#050505] text-white relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Premium Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          {/* Brand / Name */}
          <div>
            <div className="flex overflow-hidden">
              {titleChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter text-white inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-lg md:text-xl font-light ml-2 mt-2"
            >
              Full Stack Developer
            </motion.p>
          </div>

          {/* Links */}
          <div className="w-full md:w-auto grid grid-cols-2 gap-8 md:flex md:gap-24">
            <div>
              <h4 className="text-white/40 uppercase text-xs tracking-[0.2em] mb-8 font-medium">Socials</h4>
              <ul className="space-y-4">
                {Social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-white/60 hover:text-white transition-all flex items-center group gap-2"
                    >
                      <span className="relative overflow-hidden">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">{item.name}</span>
                        <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300 text-blue-400">{item.name}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/40 uppercase text-xs tracking-[0.2em] mb-8 font-medium">Sitemap</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-lg text-white/60 hover:text-white transition-all flex items-center group gap-2"
                    >
                      <span className="relative overflow-hidden">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
                        <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300 text-blue-400">{item}</span>
                      </span>
                    </a>
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
            <span>in my Room</span>
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
