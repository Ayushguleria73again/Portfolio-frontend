import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faSun, faSnowflake, faSeedling, faLeaf } from '@fortawesome/free-solid-svg-icons';

const FloatingNavbar = ({ isMagic, setIsMagic, weatherType, setWeatherType }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const weatherConfig = {
        'snow': { icon: faSnowflake, label: 'Winter' },
        'petals': { icon: faSeedling, label: 'Spring' },
        'leaves': { icon: faLeaf, label: 'Autumn' },
        'none': { icon: faSun, label: 'Clear' }
    };

    const cycleWeather = () => {
        const effects = ['none', 'snow', 'petals', 'leaves'];
        const nextIndex = (effects.indexOf(weatherType) + 1) % effects.length;
        setWeatherType(effects[nextIndex]);
    };

    return (
        <div
            className={`fixed z-[100] transition-all duration-500 flex flex-col gap-3 ${isMobile ? 'bottom-10 left-6' : 'bottom-8 left-8'
                }`}
        >
            {/* Weather Toggle */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={cycleWeather}
                className={`relative p-4 rounded-full border backdrop-blur-md transition-all duration-500 shadow-2xl group ${weatherType !== 'none'
                        ? 'bg-blue-500/10 border-blue-500/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                        : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                    }`}
                title={`Weather: ${weatherConfig[weatherType].label}`}
            >
                <div className="relative z-10 flex items-center justify-center">
                    <motion.div
                        animate={weatherType !== 'none' ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <FontAwesomeIcon icon={weatherConfig[weatherType].icon} className="text-lg" />
                    </motion.div>
                </div>
            </motion.button>

            {/* 3D Scene Toggle */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMagic(!isMagic)}
                className={`relative p-4 rounded-full border backdrop-blur-md transition-all duration-500 shadow-2xl group ${isMagic
                        ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                        : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                    }`}
                title={isMagic ? "Disable 3D Background" : "Enable 3D Background"}
            >
                <div className="relative z-10 flex items-center justify-center">
                    <FontAwesomeIcon
                        icon={faCube}
                        className={`text-lg transition-transform duration-500 ${isMagic ? 'rotate-180 text-white' : 'text-gray-400 group-hover:text-white'}`}
                    />
                </div>
            </motion.button>

            {/* Descriptive Label (Desktop Only) */}
            {!isMobile && (
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 pointer-events-none">
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/20 whitespace-nowrap">
                        Environment Controls
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.1em] font-medium text-white/40 whitespace-nowrap">
                        {weatherConfig[weatherType].label} • {isMagic ? 'Interactive' : 'Static'}
                    </span>
                </div>
            )}
        </div>
    );
};

export default FloatingNavbar;
