import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const DataStreamField = () => {
    const ref = useRef();
    const mouse = useRef(new THREE.Vector2(0, 0));

    // Configuration for the "Code Stream"
    const streamCount = 40;
    const particlesPerStream = 100;
    const totalParticles = streamCount * particlesPerStream;

    // Initial positions and randomized properties for each stream
    const streamData = useMemo(() => {
        const data = [];
        for (let i = 0; i < streamCount; i++) {
            data.push({
                xOffset: (Math.random() - 0.5) * 20,
                yOffset: (Math.random() - 0.5) * 20,
                zOffset: (Math.random() - 0.5) * 40,
                speed: 0.5 + Math.random() * 1.5,
                radius: 0.2 + Math.random() * 0.8,
                phase: Math.random() * Math.PI * 2,
                color: Math.random() > 0.5 ? "#60a5fa" : "#3b82f6" // Professional blues
            });
        }
        return data;
    }, []);

    const positions = useMemo(() => new Float32Array(totalParticles * 3), [totalParticles]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const interactionTime = time * 0.1;

        // Mouse influence
        mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, state.mouse.x, 0.05);
        mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, state.mouse.y, 0.05);

        for (let s = 0; s < streamCount; s++) {
            const stream = streamData[s];
            for (let p = 0; p < particlesPerStream; p++) {
                const idx = (s * particlesPerStream + p) * 3;

                // Spiral/Ribbon math
                const pProgress = p / particlesPerStream;
                const flow = (interactionTime * stream.speed) + pProgress * 5;

                // Calculate dynamic coordinates
                const x = stream.xOffset + Math.sin(flow + stream.phase) * stream.radius + mouse.current.x * 2;
                const y = stream.yOffset + Math.cos(flow * 0.8 + stream.phase) * stream.radius + mouse.current.y * 2;

                // Longitudinal flow (diving into the screen)
                let z = ((pProgress * 40 + flow * 5) % 40) - 20;

                positions[idx] = x;
                positions[idx + 1] = y;
                positions[idx + 2] = z;
            }
        }

        ref.current.geometry.attributes.position.needsUpdate = true;

        // Subtle camera-like rotation
        ref.current.rotation.z = time * 0.02;
        ref.current.rotation.y = mouse.current.x * 0.1;
        ref.current.rotation.x = mouse.current.y * 0.1;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#60a5fa"
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.6}
            />
        </Points>
    );
};

const Background3D = ({ isMagic }) => {
    return (
        <div
            className={`fixed inset-0 pointer-events-none transition-all duration-1000 ${isMagic ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            style={{ zIndex: 0 }}
        >
            <Canvas
                camera={{ position: [0, 0, 15], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={1.5} />
                <DataStreamField />
            </Canvas>
        </div>
    );
};

export default Background3D;
