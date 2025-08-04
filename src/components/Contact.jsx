import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faUser ,
  faTag,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:5000/api/mail/send', {
        to: formData.email,
        subject: formData.subject,
        text: `Name: ${formData.name}\nMessage: ${formData.message}`, 
      });
      if (response.data.success) {
        setSuccessMessage('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      }
    } catch (error) {
      setErrorMessage('Failed to send email. Please try again later.');
      console.log(error);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 animated-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 text-glow slide-in-up">CONTACT</h2>
          <p className="text-xl opacity-70 slide-in-up max-w-2xl mx-auto leading-relaxed">
            Ready to create something extraordinary together? Let's turn your vision into digital reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="slide-in-left">
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <FontAwesomeIcon icon={faUser } className="absolute top-1/2 left-4 -translate-y-1/2 text-white opacity-70" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-6 py-4 bg-black border border-white rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-4 -translate-y-1/2 text-white opacity-70" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-6 py-4 bg-black border border-white rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faTag} className="absolute top-1/2 left-4 -translate-y-1/2 text-white opacity-70" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full pl-12 pr-6 py-4 bg-black border border-white rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                  required
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faCommentDots} className="absolute top-4 left-4 text-white opacity-70" />
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-6 py-4 bg-black border border-white rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="group relative px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white rounded-full transition-all duration-500 font-semibold">
                {loading ? 'Sending...' : 'SEND MESSAGE'}
              </button>
              {successMessage && <p className="text-green-500">{successMessage}</p>}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="slide-in-right">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="opacity-70">ayushguleria73@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="opacity-70">+91 85805 23265</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="opacity-70">Himachal Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-black rounded-3xl p-2 h-64 flex items-center justify-center border border-white overflow-hidden">
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
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a href="https://www.linkedin.com/in/ayush-guleria-162a83206/" className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a href="https://github.com/Ayushguleria73again" className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              <a href="https://www.instagram.com/_ayush_guleria_/" className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white opacity-10 morphing-shape"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-white opacity-10 morphing-shape" style={{ animationDelay: '-4s' }}></div>
    </section>
  );
};

export default Contact;
