import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/ayush.jpeg";
import Magnetic from "../common/Magnetic";
import Tilt from "../common/Tilt";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-thin mb-4 text-white tracking-wide">
            ABOUT <span className="font-bold text-white">ME</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Crafting digital experiences with code and creativity.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* 1. Large Profile Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 row-span-2"
          >
            <Tilt className="h-full">
              <Magnetic strength={0.2}>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 group h-full cursor-none">
                  <div className="absolute inset-0 bg-[#0a0a0a]" />
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white mb-1">Ayush Guleria</h3>
                    <p className="text-white/60 font-mono text-sm">Full Stack Developer</p>
                    <p className="text-white/50 text-xs mt-2">Himachal Pradesh, India</p>
                  </div>
                </div>
              </Magnetic>
            </Tilt>
          </motion.div>

          {/* 2. Bio Card (Top Middle/Right) */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Tilt className="h-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center h-full hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-light text-white mb-4">My <span className="text-white font-bold">Journey</span></h3>
                <p className="text-white/70 leading-relaxed font-light text-lg">
                  I'm a passionate developer focused on creating intuitive and dynamic user experiences.
                  With a strong foundation in <b className="text-white">React</b> and modern web technologies,
                  I transform complex problems into elegant, scalable solutions. Currently exploring
                  <b className="text-white"> 3D Web Design</b> and <b className="text-white">Server-Side Rendering</b>.
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* 3. Stats Card 1 (Bottom Middle) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Tilt className="h-full">
              <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center h-full hover:border-white/30 transition-colors">
                <span className="text-5xl font-bold text-white mb-2">7+</span>
                <span className="text-white/50 text-sm uppercase tracking-wider">Projects Completed</span>
              </div>
            </Tilt>
          </motion.div>

          {/* 4. Stats Card 2 (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Tilt className="h-full">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl" />
                <span className="text-5xl font-bold text-white mb-2 relative z-10">1+</span>
                <span className="text-white/50 text-sm uppercase tracking-wider relative z-10">Years Experience</span>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default About;
