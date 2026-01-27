import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Boffin Blocks',
            role: 'Full Stack Developer Intern',
            period: '2026 - Present',
            description: 'Developing scalable web applications and enhancing user interfaces with modern frontend technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.',
        },
        {
            company: "NEWUS, Dharamshala",
            role: "Full Stack Software Engineering Crash Course",
            period: "2024 - 2025",
            description:
                "Completed an intensive Full Stack Software Engineering crash course at NEWUS Dharamshala, focused on building real-world applications using React, Next.js, Node.js, Express, MongoDB, REST APIs, authentication systems, and scalable backend architectures with hands-on project experience.",
        },
        {
            company: 'IGNOU',
            role: 'Bachelor of Computer Applications (BCA)',
            period: '2022 - 2023 (Drop Out)',
            description: 'Pursued foundational computer science coursework before strategically pivoting to focus entirely on practical, hands-on software development and real-world project building.',
        },
        {
            company: 'WRS Degree College Dehri',
            role: 'Bachelor of Mathematics',
            period: '2019 - 2020 (Drop Out)',
            description:
                "Studied foundational mathematics and computer-related subjects before strategically pivoting to focus on practical, hands-on software development and real-world project building.",
        },
        {
            company: "GSSS Model Senior Secondary School, Mathalar",
            role: "12th Grade (Mathematics)",
            period: "2018 - 2019",
            description:
                "Completed senior secondary education with a focus on Mathematics, developing strong analytical, logical, and problem-solving skills.",
        },
        {
            company: "DAV Public Senior Secondary School, Chawara",
            role: "10th Grade",
            period: "2016 - 2017",
            description:
                "Completed secondary education with a solid foundation in science, mathematics, and core academic subjects.",
        },
    ];

    return (
        <section id="experience" className="py-20 relative animated-bg text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-light mb-4 text-white tracking-wide">
                        EXPERIENCE
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                        My professional journey and educational path.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10 border-2 border-[#0a0a0a]" />

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                                    }`}>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
                                        <span className="inline-block px-3 py-1 mb-3 text-xs font-mono text-white/80 bg-white/10 rounded-full border border-white/20">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-medium text-white mb-1 group-hover:text-white transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="text-white/60 mb-4 text-sm uppercase tracking-wider font-medium">
                                            {exp.company}
                                        </div>
                                        <p className="text-white/50 text-sm leading-relaxed font-light">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
