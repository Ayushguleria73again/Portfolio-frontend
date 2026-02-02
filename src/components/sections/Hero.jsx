import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import RippleButton from '../common/RippleButton';
import Magnetic from '../common/Magnetic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faLeaf, faSeedling, faSun } from '@fortawesome/free-solid-svg-icons';

// --- Decoder Text Component ---
const DecoderText = ({ text, className }) => {
  const [decodedText, setDecodedText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&';

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const startDecoding = () => {
      interval = setInterval(() => {
        setDecodedText(
          text.split('').map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 50);
    };

    // Delay start slightly for effect
    const timeout = setTimeout(startDecoding, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return <span className={className}>{decodedText}</span>;
}

const Hero = ({ weatherType, setWeatherType }) => {
  const targetRef = useRef(null);

  // Scroll Transforms (The "Explode" Effect)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const splitLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const splitRightX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const splitOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const splitBlur = useTransform(scrollYProgress, [0, 0.5], ["0px", "10px"]);

  // Background Parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const weatherConfig = {
    'snow': { icon: faSnowflake, label: 'Winter Snow' },
    'petals': { icon: faSeedling, label: 'Spring Petals' },
    'leaves': { icon: faLeaf, label: 'Autumn Leaves' },
    'none': { icon: faSun, label: 'Clear Sky' }
  };

  const cycleWeather = () => {
    const effects = ['none', 'snow', 'petals', 'leaves'];
    const nextIndex = (effects.indexOf(weatherType) + 1) % effects.length;
    setWeatherType(effects[nextIndex]);
  };

  return (
    <section
      id="home"
      ref={targetRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-0 pb-[10px] perspective-1000"
    >
      {/* --- The Fluid Universe Background --- */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Global Mouse Glow handled in Home.jsx */}
      </motion.div>

      <div className="text-center px-6 z-10 relative">

        {/* --- "Scroll Explode" Title --- */}
        <div className="relative mb-6 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 perspective-1000">
          <Magnetic strength={0.2}>
            <motion.div style={{ x: splitLeftX, opacity: splitOpacity, filter: `blur(${splitBlur})` }}>
              <h1 className="text-6xl md:text-9xl font-thin tracking-tighter mb-2 md:mb-0">
                <DecoderText text="AYUSH" />
              </h1>
            </motion.div>
          </Magnetic>

          <Magnetic strength={0.2}>
            <motion.div style={{ x: splitRightX, opacity: splitOpacity, filter: `blur(${splitBlur})` }}>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                <DecoderText text="GULERIA" />
              </h1>
            </motion.div>
          </Magnetic>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-3xl font-light mb-10 mx-auto tracking-widest uppercase text-gray-400"
        >
          Full Stack Software Engineer
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-base md:text-lg font-light mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting digital experiences that blend innovation with elegance.
          Where code meets creativity, and ideas transform into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <RippleButton
            className="px-10 py-4 bg-white text-black rounded-full font-medium tracking-wide shadow-xl active:scale-95 transition-transform"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE WORK
          </RippleButton>

          <RippleButton
            className="px-10 py-4 text-white border border-white/20 rounded-full font-medium tracking-wide hover:border-white/50 bg-white/5 backdrop-blur-sm active:scale-95 transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET IN TOUCH
          </RippleButton>
        </motion.div>

        {/* Seasonal Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={cycleWeather}
            className={`
                            group relative flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-500
                            ${weatherType !== 'none'
                ? 'bg-primary-accent/10 border-primary-accent/50 text-white shadow-[0_0_20px_var(--accent-glow-light)]'
                : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'}
                        `}
            style={{
              borderColor: weatherType !== 'none' ? 'var(--primary-accent)' : undefined,
              color: weatherType !== 'none' ? 'white' : undefined
            }}
          >
            <motion.div
              animate={weatherType !== 'none' ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <FontAwesomeIcon icon={weatherConfig[weatherType].icon} />
            </motion.div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium">
              {weatherConfig[weatherType].label}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decoration */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;
