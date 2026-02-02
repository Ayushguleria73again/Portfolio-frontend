import React, { useEffect, useRef, useCallback } from 'react';

// Central Sound Registry
const SOUND_ASSETS = {
    hover: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
    click: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
    modalOpen: 'https://assets.mixkit.co/active_storage/sfx/2591/2591-preview.mp3',
    modalClose: 'https://assets.mixkit.co/active_storage/sfx/2593/2593-preview.mp3',
    ambientSnow: 'https://www.videomaker.com/sites/videomaker.com/files/audioplay/Wind-Cold-Blowing-Snow-01.mp3',
    ambientPetals: 'https://www.videomaker.com/sites/videomaker.com/files/audioplay/Forest-Birds-Chirping-Atmosphere-01.mp3',
    ambientLeaves: 'https://www.videomaker.com/sites/videomaker.com/files/audioplay/Walking-On-Dry-Leaves-01.mp3',
};

// Internal throttling for UI sounds
let lastHoverTime = 0;
const UI_SOUND_THROTTLE = 100; // ms

// Global sound manager instance for non-react usage if needed
export const playSound = (soundName, volume = 0.2) => {
    const url = SOUND_ASSETS[soundName];
    if (!url || window.isMuted) return;

    // Throttle hover sounds to prevent glitchy machine-gun noise
    if (soundName === 'hover') {
        const now = Date.now();
        if (now - lastHoverTime < UI_SOUND_THROTTLE) return;
        lastHoverTime = now;
    }

    const audio = new Audio(url);
    audio.volume = volume;
    audio.play().catch(() => {
        // Silently ignore auto-play restrictions or aborted loads
    });
};

const SoundManager = ({ weatherType, isMuted }) => {
    const ambientRef = useRef(null);
    const currentAmbientType = useRef(null);

    // Sync mute state to global window for playSound access
    useEffect(() => {
        window.isMuted = isMuted;
    }, [isMuted]);

    const stopAmbient = useCallback(() => {
        if (ambientRef.current) {
            ambientRef.current.pause();
            ambientRef.current.currentTime = 0;
            ambientRef.current = null;
            currentAmbientType.current = null;
        }
    }, []);

    useEffect(() => {
        // If muted or weather is none, stop everything
        if (isMuted || weatherType === 'none') {
            stopAmbient();
            return;
        }

        // Determine target ambient sound
        let targetAmbient = null;
        if (weatherType === 'snow') targetAmbient = 'ambientSnow';
        else if (weatherType === 'petals') targetAmbient = 'ambientPetals';
        else if (weatherType === 'leaves') targetAmbient = 'ambientLeaves';

        // If target changed, switch audio
        if (targetAmbient && targetAmbient !== currentAmbientType.current) {
            stopAmbient(); // Stop previous synchronously

            const newAudio = new Audio(SOUND_ASSETS[targetAmbient]);
            newAudio.loop = true;
            newAudio.volume = 0.1;

            ambientRef.current = newAudio;
            currentAmbientType.current = targetAmbient;

            newAudio.play().catch(() => {
                console.warn('Ambient audio play blocked. Interaction required.');
            });
        } else if (!targetAmbient) {
            stopAmbient();
        }

        return () => {
            // Small delay on unmount cleanup to prevent clicks, but usually immediate is fine
            stopAmbient();
        };
    }, [weatherType, isMuted, stopAmbient]);

    return null; // Purely functional component
};

export default SoundManager;
