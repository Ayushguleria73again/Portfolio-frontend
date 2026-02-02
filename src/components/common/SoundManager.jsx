import React, { useEffect, useRef, useCallback } from 'react';

// Central Sound Registry (Professional Pixabay Assets)
const SOUND_ASSETS = {
    hover: 'https://cdn.pixabay.com/audio/2022/10/16/audio_10609653a1.mp3',
    click: 'https://cdn.pixabay.com/audio/2022/03/24/audio_783d1c3b7a.mp3',
    modalOpen: 'https://cdn.pixabay.com/audio/2024/02/09/audio_24f6eeda0b.mp3',
    modalClose: 'https://cdn.pixabay.com/audio/2024/02/09/audio_f659567958.mp3',
    ambientSnow: 'https://cdn.pixabay.com/audio/2022/11/24/audio_0990d1f7c7.mp3',
    ambientPetals: 'https://cdn.pixabay.com/audio/2021/08/04/audio_06256f5923.mp3',
    ambientLeaves: 'https://cdn.pixabay.com/audio/2022/03/20/audio_2de04a43b7.mp3',
};

// Internal throttling and tracking
let lastHoverTime = 0;
const UI_SOUND_THROTTLE = 100; // ms
let currentUISound = null;

/**
 * Global sound trigger with action cut-off logic
 */
export const playSound = (soundName, volume = 0.2) => {
    const url = SOUND_ASSETS[soundName];
    if (!url || window.isMuted) return;

    // Throttle hover sounds to prevent glitchy machine-gun noise
    if (soundName === 'hover') {
        const now = Date.now();
        if (now - lastHoverTime < UI_SOUND_THROTTLE) return;
        lastHoverTime = now;
    }

    // ACTION CUT-OFF: If a click or modal action happens, stop existing hover/UI sounds
    if (soundName === 'click' || soundName === 'modalOpen' || soundName === 'modalClose') {
        if (currentUISound) {
            currentUISound.pause();
            currentUISound.currentTime = 0;
        }
    }

    const audio = new Audio(url);
    audio.volume = volume;

    // Track UI sound for potential cut-off
    currentUISound = audio;

    audio.play().catch(() => {
        // Silently ignore auto-play restrictions
    });
};

const SoundManager = ({ weatherType, isMuted, isPaused }) => {
    const ambientRef = useRef(null);
    const currentAmbientType = useRef(null);

    // Sync state to global window for playSound access
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
        // Global mute or clearing weather
        if (isMuted || weatherType === 'none') {
            stopAmbient();
            return;
        }

        // AMBIENT FOCUS: Pause ambient sounds if modal is open (isPaused)
        if (isPaused) {
            if (ambientRef.current) {
                ambientRef.current.pause();
            }
            return;
        } else {
            // Resume if we were paused and have an active audio object
            if (ambientRef.current && ambientRef.current.paused) {
                ambientRef.current.play().catch(() => { });
            }
        }

        // Determine target ambient sound
        let targetAmbient = null;
        if (weatherType === 'snow') targetAmbient = 'ambientSnow';
        else if (weatherType === 'petals') targetAmbient = 'ambientPetals';
        else if (weatherType === 'leaves') targetAmbient = 'ambientLeaves';

        // If target changed, switch audio
        if (targetAmbient && targetAmbient !== currentAmbientType.current) {
            stopAmbient();

            const newAudio = new Audio(SOUND_ASSETS[targetAmbient]);
            newAudio.loop = true;
            newAudio.volume = 0.08; // Slightly lower for smoother background

            ambientRef.current = newAudio;
            currentAmbientType.current = targetAmbient;

            // Only play if not paused due to focus
            if (!isPaused) {
                newAudio.play().catch(() => {
                    console.warn('Ambient audio play blocked. Interaction required.');
                });
            }
        } else if (!targetAmbient) {
            stopAmbient();
        }

        return () => {
            // Cleanup on unmount
            if (!isPaused) stopAmbient();
        };
    }, [weatherType, isMuted, isPaused, stopAmbient]);

    return null;
};

export default SoundManager;
