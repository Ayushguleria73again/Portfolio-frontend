import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faUser,
  faTag,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://portfolio-backend-pi-ashen.vercel.app/api/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSuccessMessage('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage('Failed to send email. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Failed to send email. Please try again later.');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#ffffff",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="contact" className="py-32 animated-bg relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-20" variants={containerVariants}>
          <motion.h2 
            className="text-5xl md:text-7xl font-extralight mb-8 text-glow"
            variants={textVariants}
          >
            CONTACT
          </motion.h2>
          <motion.p 
            className="text-xl opacity-70 max-w-2xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Ready to create something extraordinary together? Let's turn your vision into digital reality.
          </motion.p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div variants={formVariants}>
            <motion.h3 
              className="text-3xl font-bold mb-8"
              variants={textVariants}
            >
              Send a Message
            </motion.h3>
            <motion.form 
              className="space-y-6"
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants}>
                <motion.div className="relative" variants={containerVariants}>
                  <FontAwesomeIcon icon={faUser} className="absolute top-1/2 left-4 -translate-y-1/2 text-white opacity-70" />
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    variants={inputVariants}
                    whileFocus="focus"
                    className="w-full pl-12 pr-6 py-4 bg-black border border-white rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div className="relative" variants={containerVariants}>
                  <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-4 -translate-y-1/2 text-white opacity-70" />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    variants={inputVariants}
                    whileFocus="focus"
                    className="w-full pl-12 pr-6 py-4 bg-black border border-white rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>
              
              <motion.div className="relative" variants={containerVariants}>
                <FontAwesomeIcon icon={faTag} className="absolute top-1/2 left-4 -translate-y-1/2 text-white opacity-70" />
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full pl-12 pr-6 py-4 bg-black border border-white rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                  required
                />
              </motion.div>
              
              <motion.div className="relative" variants={containerVariants}>
                <FontAwesomeIcon icon={faCommentDots} className="absolute top-4 left-4 text-white opacity-70" />
                <motion.textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full pl-12 pr-6 py-4 bg-black border border-white rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none"
                  required
                ></motion.textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={loading}
                className="group relative px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white rounded-full transition-all duration-500 font-semibold disabled:opacity-50"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                ) : (
                  'SEND MESSAGE'
                )}
              </motion.button>
              
              <AnimatePresence>
                {successMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-500"
                  >
                    {successMessage}
                  </motion.p>
                )}
                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div variants={contactInfoVariants}>
            <motion.div className="mb-12" variants={containerVariants}>
              <motion.h3 
                className="text-3xl font-bold mb-8"
                variants={textVariants}
              >
                Get in Touch
              </motion.h3>
              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.div className="flex items-center gap-4" variants={textVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                  </motion.div>
                  <motion.div>
                    <motion.p className="font-semibold">Email</motion.p>
                    <motion.p className="opacity-70">ayushguleria73@gmail.com</motion.p>
                  </motion.div>
                </motion.div>
                
                <motion.div className="flex items-center gap-4" variants={textVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={faPhone} className="text-xl" />
                  </motion.div>
                  <motion.div>
                    <motion.p className="font-semibold">Phone</motion.p>
                    <motion.p className="opacity-70">+91 85805 23265</motion.p>
                  </motion.div>
                </motion.div>
                
                <motion.div className="flex items-center gap-4" variants={textVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                  </motion.div>
                  <motion.div>
                    <motion.p className="font-semibold">Location</motion.p>
                    <motion.p className="opacity-70">Himachal Pradesh, India</motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Interactive Map */}
            <motion.div 
              className="bg-black rounded-3xl p-2 h-64 flex items-center justify-center border border-white overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d976.8597843907119!2d75.98610173714472!3d32.1125452345353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1754305777740!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Himachal Pradesh, India Map"
              ></iframe>
            </motion.div>

            {/* Social Links */}
            <motion.div className="mt-8 flex gap-4" variants={containerVariants}>
              {[
                { icon: faLinkedin, href: "https://www.linkedin.com/in/ayush-guleria-162a83206/" },
                { icon: faGithub, href: "https://github.com/Ayushguleria73again" },
                { icon: faTwitter, href: "#" },
                { icon: faInstagram, href: "https://www.instagram.com/_ayush_guleria_/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={socialVariants}
                  whileHover="hover"
                  className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 border border-white opacity-10 morphing-shape"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 border border-white opacity-10 morphing-shape"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -4
        }}
      />
    </section>
  );
};

export default Contact;
