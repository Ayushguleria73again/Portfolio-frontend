import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RippleButton from '../components/common/RippleButton';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10"
            >
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-[12rem] md:text-[20rem] font-bold tracking-tighter leading-none opacity-10"
                >
                    404
                </motion.h1>

                <div className="-mt-12 md:-mt-24">
                    <h2 className="text-4xl md:text-6xl font-thin mb-4 tracking-tight">LOST IN <span className="font-bold">SPACE?</span></h2>
                    <p className="text-white/50 text-lg md:text-xl max-w-md mx-auto mb-12 font-light">
                        The page you are looking for has either been moved or doesn't exist in this dimension.
                    </p>

                    <Link to="/">
                        <RippleButton className="px-12 py-5 bg-white text-black rounded-full font-bold tracking-widest hover:bg-gray-200 transition-colors shadow-2xl">
                            BACK TO REALITY
                        </RippleButton>
                    </Link>
                </div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full pointer-events-none"
                    style={{
                        width: Math.random() * 3 + 'px',
                        height: Math.random() * 3 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        opacity: Math.random() * 0.5
                    }}
                    animate={{
                        y: [0, -100],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};

export default NotFound;
