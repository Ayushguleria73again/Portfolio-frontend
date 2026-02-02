import React, { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faGitAlt, faDocker, faPython, faAws, faVuejs
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faServer, faCloud, faCube, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  // Skills Data with 3D coordinates (x, y: %, z: depth factor)
  const skills = useMemo(() => [
    { name: "React", icon: faReact, x: 20, y: 30, z: 20, color: "#61DAFB" },
    { name: "Node.js", icon: faNodeJs, x: 75, y: 25, z: 10, color: "#339933" },
    { name: "JavaScript", icon: faJs, x: 45, y: 45, z: 30, color: "#F7DF1E" },
    { name: "HTML5", icon: faHtml5, x: 15, y: 70, z: 15, color: "#E34F26" },
    { name: "CSS3", icon: faCss3Alt, x: 85, y: 75, z: 25, color: "#1572B6" },
    { name: "MongoDB", icon: faDatabase, x: 60, y: 60, z: 5, color: "#47A248" },
    { name: "Git", icon: faGitAlt, x: 30, y: 80, z: 10, color: "#F05032" },
    { name: "Tailwind", icon: faCode, x: 50, y: 15, z: 25, color: "#06B6D4" },
    { name: "Docker", icon: faDocker, x: 80, y: 45, z: 15, color: "#2496ED" },
    { name: "Next.js", icon: faLayerGroup, x: 35, y: 35, z: 0, color: "#ffffff" },
    { name: "Express", icon: faServer, x: 65, y: 85, z: 20, color: "#ffffff" }
  ], []);

  // Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize -1 to 1
    mouseX.set((clientX / innerWidth) * 2 - 1);
    mouseY.set((clientY / innerHeight) * 2 - 1);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate connections between nearby nodes
  const connections = useMemo(() => {
    const links = [];
    skills.forEach((skill, i) => {
      skills.forEach((target, j) => {
        if (i >= j) return; // Avoid duplicates
        const dist = Math.sqrt(Math.pow(skill.x - target.x, 2) + Math.pow(skill.y - target.y, 2));
        if (dist < 40) { // Threshold for connection
          links.push({ start: i, end: j, dist });
        }
      });
    });
    return links;
  }, [skills]);

  return (
    <section id="skills" className="min-h-screen py-32 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-thin text-white mb-6 tracking-tight"
          >
            THE <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">CONSTELLATION</span>
          </motion.h2>
          <p className="text-white/40 tracking-widest uppercase text-sm">Interactive Skill Network</p>
        </div>

        {/* The 3D Canvas */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm overflow-hidden group perspective-1000">

          {/* SVG Layer for Connections */}
          <div className="absolute inset-0 z-0 opacity-30">
            <ConstellationLines
              skills={skills}
              connections={connections}
              mouseX={smoothMouseX}
              mouseY={smoothMouseY}
            />
          </div>

          {/* Nodes Layer */}
          {skills.map((skill, index) => (
            <SkillNode
              key={index}
              skill={skill}
              mouseX={smoothMouseX}
              mouseY={smoothMouseY}
            />
          ))}

          {/* Interactive hint */}
          <div className="absolute bottom-8 right-8 text-white/20 text-xs tracking-widest pointer-events-none">
            MOVE CURSOR TO EXPLORE
          </div>
        </div>

      </div>
    </section>
  );
};

// Component to render moving lines
const ConstellationLines = ({ skills, connections, mouseX, mouseY }) => {
  // We need to subscribe to motion values to rerender SVG paths
  // However, Framer Motion values don't trigger React renders by default.
  // We can use a custom hook or just render Motion paths if possible.
  // But calculating path 'd' attribute dynamically based on motion values is tricky without rerenders.
  // So we use a simplified approach: render standard lines that simple skew/translate?
  // No, for "3D" parallax, endpoints move differently.

  // We will use a Motion component that updates its 'd' attribute?
  // Or simpler: Move the line container? No.

  // Valid React approach: use a rAF loop to update paths? Or simpler: Motion values mapping.
  // Let's try mapping the SVG 'line' coordinates directly to the motion values!

  return (
    <svg className="w-full h-full">
      {connections.map((link, i) => {
        const start = skills[link.start];
        const end = skills[link.end];
        return (
          <ConnectionLine
            key={i}
            start={start}
            end={end}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        );
      })}
    </svg>
  );
};

const ConnectionLine = ({ start, end, mouseX, mouseY }) => {
  const x1 = useTransform(mouseX, [-1, 1], [`${start.x - start.z * 0.5}%`, `${start.x + start.z * 0.5}%`]);
  const y1 = useTransform(mouseY, [-1, 1], [`${start.y - start.z * 0.5}%`, `${start.y + start.z * 0.5}%`]);
  const x2 = useTransform(mouseX, [-1, 1], [`${end.x - end.z * 0.5}%`, `${end.x + end.z * 0.5}%`]);
  const y2 = useTransform(mouseY, [-1, 1], [`${end.y - end.z * 0.5}%`, `${end.y + end.z * 0.5}%`]);

  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="white"
      strokeWidth="1"
      strokeOpacity="0.2"
    />
  );
};

const SkillNode = ({ skill, mouseX, mouseY }) => {
  // Parallax logic: Higher Z = More movement
  const x = useTransform(mouseX, [-1, 1], [`${skill.x - skill.z * 0.5}%`, `${skill.x + skill.z * 0.5}%`]);
  const y = useTransform(mouseY, [-1, 1], [`${skill.y - skill.z * 0.5}%`, `${skill.y + skill.z * 0.5}%`]);

  return (
    <motion.div
      style={{ left: x, top: y }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group/node cursor-pointer"
      whileHover={{ scale: 1.2, zIndex: 50 }}
    >
      <div className="relative flex flex-col items-center gap-3">
        <div
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover/node:border-white transition-colors duration-300"
        >
          <FontAwesomeIcon icon={skill.icon} className="text-xl md:text-3xl text-gray-300 group-hover/node:text-white transition-colors" style={{ color: skill.color }} />
        </div>
        <div className="bg-black/80 px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover/node:opacity-100 transition-opacity backdrop-blur-md whitespace-nowrap">
          <span className="text-xs font-bold tracking-widest uppercase">{skill.name}</span>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover/node:opacity-100 transition-opacity -z-10" />
    </motion.div>
  );
};

export default Skills;
