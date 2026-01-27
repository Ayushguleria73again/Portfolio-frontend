import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 }
    }
  };

  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="py-12 animated-bg text-white border-t border-gray-800">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div className="text-center" variants={containerVariants}>
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.p className="text-lg mb-4" variants={itemVariants}>
              Let's create something amazing together
            </motion.p>
            <motion.div
              className="flex justify-center gap-6 mb-8"
              variants={containerVariants}
            >
              {[
                { icon: faLinkedin, href: "https://www.linkedin.com/in/ayush-guleria-162a83206/" },
                { icon: faGithub, href: "https://github.com/Ayushguleria73again" },
                { icon: faTwitter, href: "#" },
                { icon: faInstagram, href: "https://www.instagram.com/_ayush_guleria_/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={itemVariants && socialVariants}
                  whileHover="hover"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white text-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8"
            variants={itemVariants}
          >
            <motion.p className="text-sm opacity-70" variants={itemVariants}>
              © 2025 Ayush Guleria. Crafted with{' '}
              <motion.span
                variants={heartVariants}
                animate="animate"
                className="inline-block"
              >
                <FontAwesomeIcon icon={faHeart} className="text-red-500" />
              </motion.span>{' '}
              and lots of coffee.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
