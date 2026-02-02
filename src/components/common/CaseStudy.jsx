import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt, faCode, faLightbulb, faRocket } from '@fortawesome/free-solid-svg-icons';
import RippleButton from './RippleButton';

const CaseStudy = ({ project, isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex justify-center items-center p-4 md:p-6"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#030303]/95 backdrop-blur-2xl"
                    />

                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={onClose}
                        className="fixed top-8 right-8 z-[210] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </motion.button>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ y: 100, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 100, opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 shadow-[0_32px_128px_rgba(0,0,0,0.8)] overflow-y-auto custom-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Hero Section */}
                        <motion.div
                            className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden"
                            layoutId={`project-image-${project.title}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] font-bold tracking-widest text-white/60 mb-6 uppercase"
                                >
                                    {project.tech.join(" • ")}
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none italic"
                                >
                                    {project.title}
                                </motion.h2>
                            </div>
                        </motion.div>

                        {/* Editorial Content */}
                        <div className="p-8 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
                            {/* Left Column: Brief & Challenge */}
                            <div className="md:col-span-12">
                                <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6 text-[var(--primary-accent)]">
                                            <FontAwesomeIcon icon={faLightbulb} className="text-xl" />
                                            <span className="text-xs font-bold tracking-[0.3em] uppercase">The Vision</span>
                                        </div>
                                        <p className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed italic">
                                            "{project.description}"
                                        </p>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                            <div className="flex items-center gap-4 mb-4 text-white">
                                                <FontAwesomeIcon icon={faCode} />
                                                <span className="text-xs font-bold tracking-[0.2em] uppercase">Technical Core</span>
                                            </div>
                                            <p className="text-white/50 font-light leading-relaxed">
                                                Built with a focus on {project.tech[0]} and {project.tech[1]}, ensuring maximum performance and a seamless user experience across all devices. The project utilizes {project.tech.length > 2 ? project.tech.slice(2).join(', ') : 'modern web standards'}.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Features Section */}
                                <div className="grid md:grid-cols-3 gap-8 mb-24">
                                    {[
                                        { icon: faRocket, title: "Efficiency", desc: "Optimized for lightning-fast load times and smooth interactions." },
                                        { icon: faCode, title: "Scalability", desc: "Modular architecture designed to grow with user demands." },
                                        { icon: faLightbulb, title: "UX First", desc: "A user-centric approach focused on accessibility and delight." }
                                    ].map((feat, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -10 }}
                                            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[var(--primary-accent)] transition-all duration-500"
                                        >
                                            <FontAwesomeIcon icon={feat.icon} className="text-2xl text-[var(--primary-accent)] mb-6" />
                                            <h4 className="text-xl font-bold text-white mb-2">{feat.title}</h4>
                                            <p className="text-white/40 text-sm font-light leading-relaxed">{feat.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Action Section */}
                                <div className="flex flex-col md:flex-row items-center justify-between p-12 rounded-[2.5rem] bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/20">
                                    <div className="mb-8 md:mb-0">
                                        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Ready to see it live?</h3>
                                        <p className="text-white/60 font-light italic">Experience the full power of {project.title}.</p>
                                    </div>
                                    <RippleButton
                                        className="px-12 py-5 bg-[var(--primary-accent)] text-white rounded-full font-bold tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4"
                                        onClick={() => {
                                            window.open(project.link, '_blank');
                                        }}
                                    >
                                        VISIT PROJECT <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                                    </RippleButton>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CaseStudy;
