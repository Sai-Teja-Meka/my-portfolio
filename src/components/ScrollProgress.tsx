import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setProgress(Math.min(scrollPercent, 100));
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-1/2 right-8 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2">
            {/* Circular Progress */}
            <div className="relative w-16 h-16">
                <svg className="transform -rotate-90 w-16 h-16">
                    {/* Background Circle */}
                    <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                        fill="none"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="url(#progress-gradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 28}
                        strokeDashoffset={2 * Math.PI * 28 * (1 - progress / 100)}
                        transition={{ duration: 0.1 }}
                    />
                    <defs>
                        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00ffff" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-mono text-primary font-bold">
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>

            {/* Section Dots */}
            <div className="flex flex-col gap-3 mt-4">
                {['Hero', 'Timeline', 'Projects'].map((section, i) => (
                    <motion.div
                        key={section}
                        className="relative group cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        onClick={() => {
                            // Optional: scroll to section logic
                        }}
                    >
                        <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${progress >= i * 33.33 && progress < (i + 1) * 33.33
                                    ? 'bg-primary scale-125 shadow-[0_0_10px_currentColor]'
                                    : 'bg-white/20'
                                }`}
                        />
                        {/* Tooltip */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            <span className="text-xs font-mono text-primary bg-black/80 px-2 py-1 rounded border border-primary/30">
                                {section}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}