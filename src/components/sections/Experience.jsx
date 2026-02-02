import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ExperienceCard = ({ exp, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
                damping: 20
            }}
            className={`relative flex items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="w-4 h-4 rounded-full bg-black border-2 border-white/50 z-10"
                />
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 0.5 }}
                    animate={{ scale: [1.2, 1.8, 1.2], opacity: [0.5, 0.2, 0.5] }}
                    transition={{
                        scale: { duration: 0.5, delay: index * 0.1 + 0.3 },
                        animate: { duration: 2, repeat: Infinity }
                    }}
                    className="absolute w-4 h-4 rounded-full bg-blue-500 blur-sm"
                />
            </div>

            {/* Content Card with 3D Tilt Effect */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <motion.div
                    whileHover={{
                        y: -5,
                        scale: 1.02,
                        rotateX: isEven ? 2 : -2,
                        rotateY: isEven ? -2 : 2,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative group perspective-1000"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-300">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

                        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-blue-200/80 bg-blue-500/10 rounded-full border border-blue-500/20">
                            {exp.period}
                        </span>

                        <h3 className="text-xl md:text-2xl font-medium text-white mb-1 group-hover:text-blue-200 transition-colors">
                            {exp.role}
                        </h3>

                        <div className="text-white/60 mb-4 text-sm uppercase tracking-wider font-medium">
                            {exp.company}
                        </div>

                        <p className="text-white/50 text-sm leading-relaxed font-light">
                            {exp.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

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
        <section id="experience" className="py-20 md:py-32 relative text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20 md:mb-32"
                >
                    <h2 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
                        Experience
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        My professional journey and educational path, <br className="hidden md:block" /> defined by continuous learning and evolution.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* The "Laser Beam" Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2 flex flex-col justify-start">
                        {/* Background line track */}
                        <div className="h-full w-full bg-white/5" />

                        {/* Animated filling line */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                        />
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
