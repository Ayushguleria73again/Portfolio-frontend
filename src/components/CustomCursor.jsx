import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile/touch
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="custom-cursor"
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
                style={{
                    position: 'fixed',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid white',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                }}
            />

            {/* Cursor trail/follower */}
            <motion.div
                className="custom-cursor-follower"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.8,
                }}
                style={{
                    position: 'fixed',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    mixBlendMode: 'difference',
                }}
            />
        </>
    );
};

export default CustomCursor;
