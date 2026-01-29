import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Minimum loading time for smooth UX
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                >
                    <div className="flex flex-col items-center gap-6">
                        {/* Animated Logo/Initials */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <motion.div
                                className="text-6xl md:text-8xl font-bold text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                AG
                            </motion.div>

                            {/* Animated underline */}
                            <motion.div
                                className="h-1 bg-white mt-2"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                            />
                        </motion.div>

                        {/* Spinner */}
                        <motion.div
                            className="relative w-16 h-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.div
                                className="absolute inset-0 border-4 border-white/20 rounded-full"
                            />
                            <motion.div
                                className="absolute inset-0 border-4 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />
                        </motion.div>

                        {/* Loading text */}
                        <motion.p
                            className="text-white/60 text-sm tracking-widest"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            LOADING
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
