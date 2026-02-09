import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Magnetic from './Magnetic';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: 'Salutations. I am the digital reflection of Ayush Guleria. How may I assist your exploration of his work?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL.replace(/\/$/, '');
            const response = await fetch(`${apiUrl}/api/ai/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });

            const data = await response.json();
            if (data.response) {
                setMessages(prev => [...prev, { role: 'model', text: data.response }]);
            } else {
                setMessages(prev => [...prev, { role: 'model', text: 'I seem to have encountered a digital static. Pray, try again later.' }]);
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'model', text: 'The connection to my neural network is currently offline.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-10 right-6 md:bottom-8 md:right-8 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(20px)' }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="
                            mb-6 md:mb-8
                            w-[calc(100vw-3rem)] md:w-[450px]
                            h-[70vh] md:h-[600px]
                            fixed bottom-32 right-6 md:relative md:bottom-0 md:right-0
                            bg-[#030303]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem]
                            shadow-[0_32px_128px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden
                        "
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="text-lg md:text-xl font-bold tracking-tighter">
                                    <span className="text-white">AG</span>
                                    <span className="text-white/30">.</span>
                                </div>
                                <div className="w-px h-5 md:h-6 bg-white/10 mx-1 md:mx-2" />
                                <div>
                                    <h3 className="text-[10px] md:text-xs font-bold text-white tracking-[0.2em] uppercase">NEURAL ASSISTANT</h3>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                                        <span className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.1em] font-medium">Synced</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/20 hover:text-white transition-all active:scale-90"
                            >
                                <FontAwesomeIcon icon={faXmark} className="text-base md:text-lg" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 md:space-y-6 custom-scrollbar scroll-smooth text-white/70 relative">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`
                                        max-w-[90%] md:max-w-[85%] px-5 py-3 md:px-6 md:py-4 rounded-2xl md:rounded-3xl text-[12px] md:text-[13px] leading-relaxed
                                        ${msg.role === 'user'
                                            ? 'bg-blue-500/10 border border-blue-500/20 text-blue-200/90 rounded-tr-none'
                                            : 'bg-white/5 border border-white/10 text-white/70 rounded-tl-none font-light'}
                                    `}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                    className="flex justify-start items-center gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce" />
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} className="h-2" />
                        </div>

                        {/* Input System */}
                        <form onSubmit={handleSend} className="p-6 md:p-8 md:pb-10">
                            <div className="relative group/input">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Inquire..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-[12px] md:text-xs text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-all duration-500 pr-12 md:pr-14"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white text-black flex items-center justify-center disabled:opacity-0 disabled:scale-90 transition-all duration-500 hover:bg-gray-200 active:scale-95 shadow-xl"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                                </button>
                                <div className="absolute inset-0 -z-10 bg-white/5 blur-xl opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Toggle Button */}
            <div className="relative group flex justify-end">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Magnetic strength={0.4}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`
                            relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-700
                            ${isOpen
                                ? 'bg-white text-black rotate-180 border-transparent'
                                : 'bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 text-white/50 hover:text-white hover:border-white/30'}
                        `}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isOpen ? 'close' : 'open'}
                                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                transition={{ duration: 0.4 }}
                            >
                                <FontAwesomeIcon icon={isOpen ? faXmark : faMessage} className="text-lg md:text-xl" />
                            </motion.div>
                        </AnimatePresence>

                        {!isOpen && (
                            <motion.div
                                className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-5 md:h-5 bg-blue-500 rounded-full border-[3px] md:border-4 border-black flex items-center justify-center"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full" />
                            </motion.div>
                        )}
                    </motion.button>
                </Magnetic>
            </div>
        </div>
    );
};

export default Chatbot;
