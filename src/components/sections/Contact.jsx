import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faMapMarkerAlt, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Toast from '../common/Toast';
import RippleButton from '../common/RippleButton';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/mail/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 animated-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left: Heading & Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-thin text-white mb-8 tracking-tighter leading-none"
            >
              LET'S <br /> <span className="font-bold text-white">CONNECT</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/60 mb-12 font-light max-w-md"
            >
              Have a project in mind? Let's create something extraordinary together.
            </motion.p>

            <div className="space-y-6">
              <div
                onClick={() => copyToClipboard('Ayushguleria73@gmail.com')}
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors relative">
                  <FontAwesomeIcon icon={faEnvelope} className="group-hover:opacity-0 transition-opacity" />
                  <FontAwesomeIcon icon={faCopy} className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-light leading-none">Ayushguleria73@gmail.com</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors mt-1">Click to copy</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <span className="text-lg font-light">Himachal Pradesh, India</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[faGithub, faLinkedin, faTwitter, faInstagram].map((icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0a0a0a] p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-white transition-colors">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-white/20 text-lg"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-white transition-colors">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-white/20 text-lg"
                  placeholder="john@example.com"
                />
              </div>
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-white transition-colors">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-white/20 text-lg"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-white transition-colors">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-white/20 text-lg resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <RippleButton
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-white text-black py-4 rounded-full font-bold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-xl"
              >
                {status === 'submitting' ? (
                  <span>SENDING...</span>
                ) : status === 'success' ? (
                  <span>✓ SENT SUCCESSFULLY!</span>
                ) : status === 'error' ? (
                  <span>✗ FAILED - TRY AGAIN</span>
                ) : (
                  <>
                    SEND MESSAGE <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </RippleButton>

              {/* Error Message */}
              <AnimatePresence>
                {status === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-sm text-center mt-2"
                  >
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
      <Toast message="Email copied to clipboard!" isVisible={showToast} />
    </section>
  );
};

export default Contact;
