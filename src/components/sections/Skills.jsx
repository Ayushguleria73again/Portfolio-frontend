import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faGitAlt, faDocker
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faServer } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: faCode,
      color: "text-white",
      skills: [
        { name: "React", icon: faReact, color: "#ffffff" },
        { name: "JavaScript", icon: faJs, color: "#ffffff" },
        { name: "HTML5", icon: faHtml5, color: "#ffffff" },
        { name: "CSS3", icon: faCss3Alt, color: "#ffffff" },
        { name: "Tailwind", icon: faCode, color: "#ffffff" },
      ]
    },
    {
      title: "Backend",
      icon: faServer,
      color: "text-white",
      skills: [
        { name: "Node.js", icon: faNodeJs, color: "#ffffff" },
        { name: "Express", icon: faServer, color: "#ffffff" },
        { name: "MongoDB", icon: faDatabase, color: "#ffffff" },
        { name: "REST APIs", icon: faCode, color: "#ffffff" },
      ]
    },
    {
      title: "Tools",
      icon: faGitAlt,
      color: "text-white",
      skills: [
        { name: "Git", icon: faGitAlt, color: "#ffffff" },
        { name: "Docker", icon: faDocker, color: "#ffffff" },
        { name: "VS Code", icon: faCode, color: "#ffffff" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 animated-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-thin text-white mb-6"
          >
            EXPERTISE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg font-light"
          >
            A comprehensive toolset for building digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-colors duration-500"
                  style={{ color: 'var(--primary-accent)' }}
                >
                  <FontAwesomeIcon icon={category.icon} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-light text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"
                      style={{ backgroundColor: 'var(--primary-accent)' }}
                    />
                    <div
                      className="relative px-4 py-2 bg-[#0a0a0a] border rounded-full flex items-center gap-2 hover:border-[var(--primary-accent)] transition-colors duration-500"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} className="text-sm" />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
