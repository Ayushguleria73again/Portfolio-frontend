import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const Magnetic = ({ children, strength = 0.5 }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Initial position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth movement
    const config = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, config);
    const springY = useSpring(y, config);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Middle position of the element
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Apply strength
        x.set(middleX * strength);
        y.set(middleY * strength);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
                position: 'relative',
                display: 'inline-block'
            }}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
