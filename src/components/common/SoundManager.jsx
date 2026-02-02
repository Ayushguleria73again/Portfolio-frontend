import React, { useEffect, useState, useCallback } from 'react';

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

// Global sound manager instance for non-react usage if needed
export const playSound = (soundName, volume = 0.2) => {
    const url = SOUND_ASSETS[soundName];
    if (url && !window.isMuted) {
        const audio = new Audio(url);
        audio.volume = volume;
        audio.play().catch(() => { }); // Catch browser auto-play block
    }
};

const SoundManager = ({ weatherType, isMuted }) => {
    const [ambientAudio, setAmbientAudio] = useState(null);

    useEffect(() => {
        window.isMuted = isMuted;
    }, [isMuted]);

    const stopAmbient = useCallback(() => {
        if (ambientAudio) {
            ambientAudio.pause();
            ambientAudio.currentTime = 0;
        }
    }, [ambientAudio]);

    useEffect(() => {
        if (isMuted) {
            stopAmbient();
            return;
        }

        let ambientName = null;
        if (weatherType === 'snow') ambientName = 'ambientSnow';
        else if (weatherType === 'petals') ambientName = 'ambientPetals';
        else if (weatherType === 'leaves') ambientName = 'ambientLeaves';

        if (ambientName) {
            stopAmbient();
            const newAudio = new Audio(SOUND_ASSETS[ambientName]);
            newAudio.loop = true;
            newAudio.volume = 0.1;
            newAudio.play().catch(() => {
                console.warn('Ambient audio play blocked by browser. Interact with page to enable.');
            });
            setAmbientAudio(newAudio);
        } else {
            stopAmbient();
        }

        return () => stopAmbient();
    }, [weatherType, isMuted, stopAmbient]);

    return null; // Side-effect component
};

export default SoundManager;
