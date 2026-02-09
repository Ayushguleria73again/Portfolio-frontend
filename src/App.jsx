import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Snowfall from 'react-snowfall';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/common/CustomCursor';
import Home from './components/Home';
import NotFound from './pages/NotFound';
import Background3D from './components/common/Background3D';
import FloatingNavbar from './components/layout/FloatingNavbar';

function App() {
  const [weatherType, setWeatherType] = useState('none');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMagicMode, setIsMagicMode] = useState(false);

  // Petal SVG for Spring
  const petalSVG = `data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0C10 0 10 10 0 10C0 10 10 17 10 20C10 20 10 10 20 10C20 10 10 3 10 0Z' fill='%23ffb7c5' opacity='0.8'/%3E%3C/svg%3E`;
  // Leaf SVG for Autumn
  const leafSVG = `data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0C10 0 20 10 10 20C10 20 0 10 10 0Z' fill='%23d2691e' opacity='0.7'/%3E%3C/svg%3E`;

  const [petalImg, setPetalImg] = useState(null);
  const [leafImg, setLeafImg] = useState(null);

  useEffect(() => {
    const pImg = new Image();
    pImg.src = petalSVG;
    pImg.onload = () => setPetalImg(pImg);

    const lImg = new Image();
    lImg.src = leafSVG;
    lImg.onload = () => setLeafImg(lImg);

    // Smooth scrolling and other window listeners...
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const getWeatherConfig = () => {
    switch (weatherType) {
      case 'snow':
        return { color: 'white', snowflakeCount: 150 };
      case 'petals':
        return { images: petalImg ? [petalImg] : undefined, snowflakeCount: 150, radius: [2, 10], speed: [1, 3] };
      case 'leaves':
        return { images: leafImg ? [leafImg] : undefined, snowflakeCount: 150, radius: [5, 15], speed: [0.8, 2.5] };
      default:
        return null;
    }
  };

  const weatherConfig = getWeatherConfig();

  return (
    <Router>
      <div className="fixed inset-0 animated-bg z-[-2]" />
      <Background3D isMagic={isMagicMode} />
      <FloatingNavbar
        isMagic={isMagicMode}
        setIsMagic={setIsMagicMode}
        weatherType={weatherType}
        setWeatherType={setWeatherType}
      />
      <CustomCursor />
      <div className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
          {weatherType !== 'none' && weatherConfig && (
            <motion.div
              key={weatherType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="fixed inset-0 z-[9999] pointer-events-none"
            >
              <Snowfall
                snowflakeCount={weatherConfig.snowflakeCount}
                color={weatherConfig.color}
                images={weatherConfig.images}
                opacity={[0.1, 0.6]}
                radius={weatherConfig.radius || [0.5, 3.0]}
                speed={weatherConfig.speed || [0.5, 2.0]}
                wind={[-0.5, 1.0]}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Home
            weatherType={weatherType}
            setWeatherType={setWeatherType}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

