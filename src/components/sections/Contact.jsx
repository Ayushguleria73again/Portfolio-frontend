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
  const [focusedField, setFocusedField] = useState(null);

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
      const apiUrl = import.meta.env.VITE_API_URL.replace(/\/$/, '');
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

  const inputClasses = "w-full bg-transparent border-none text-white focus:ring-0 placeholder-white/20 text-lg py-4 px-0 relative z-10 focus:outline-none";

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
              LET'S <br /> <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">CONNECT</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/60 mb-12 font-light max-w-md"
            >
              Have a project in mind? Let's create something extraordinary together.
            </motion.p>

            <div className="space-y-8">
              <div
                onClick={() => copyToClipboard('Ayushguleria73@gmail.com')}
                className="flex items-center gap-6 text-white/80 hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300 relative overflow-hidden">
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-light leading-none mb-2">Ayushguleria73@gmail.com</span>
                  <span className="text-xs uppercase tracking-widest text-green-400/80 group-hover:text-green-400 transition-colors">
                    <FontAwesomeIcon icon={faCopy} className="mr-2" />
                    Click to copy
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-white/80">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-light leading-none mb-2">Himachal Pradesh, India</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">Available for Remote Work</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
              {[faGithub, faLinkedin, faTwitter, faInstagram].map((icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <FontAwesomeIcon icon={icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: The Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[3rem] p-[1px] bg-gradient-to-br from-white/20 to-white/0 relative"
          >
            <div className="bg-[#0a0a0a]/40 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden shadow-2xl">
              {/* Glow Effect behind form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {['name', 'email', 'subject'].map((field) => (
                  <div key={field} className="relative group">
                    <label className={`block text-xs uppercase tracking-widest mb-1 transition-colors duration-300 ${focusedField === field || formState[field] ? 'text-blue-400' : 'text-white/40'}`}>
                      {field}
                    </label>
                    <div className="relative">
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formState[field]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={inputClasses}
                        placeholder={field === 'name' ? 'Jane Doe' : field === 'email' ? 'jane@example.com' : 'Project Inquiry'}
                      />
                      {/* Animated Bottom Border */}
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === field ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                ))}

                <div className="relative group">
                  <label className={`block text-xs uppercase tracking-widest mb-1 transition-colors duration-300 ${focusedField === 'message' || formState.message ? 'text-blue-400' : 'text-white/40'}`}>
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="4"
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell me about your vision..."
                    />
                    <div className="absolute bottom-1 left-0 w-full h-[1px] bg-white/10" />
                    <motion.div
                      className="absolute bottom-1 left-0 h-[2px] bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <RippleButton
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-white text-black py-5 rounded-2xl font-bold tracking-wide hover:bg-gray-200 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 shadow-[0_0_20px_rgba(255,255,255,0.2)] mt-8"
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
                      className="text-red-400 text-sm text-center mt-4 bg-red-500/10 py-2 rounded-lg border border-red-500/20"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Toast message="Email copied to clipboard!" isVisible={showToast} />
    </section>
  );
};

export default Contact;
