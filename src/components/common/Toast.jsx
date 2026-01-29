import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, isVisible, onClose }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-white text-black rounded-full shadow-2xl font-medium tracking-wide flex items-center gap-3 border border-black/5"
                >
                    <span className="text-green-600">✓</span>
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
