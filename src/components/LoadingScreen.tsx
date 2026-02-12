import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
                >
                    <div className="relative">
                        {/* Animated Logo/Name Assembly */}
                        <div className="flex flex-col items-center gap-8">

                            {/* Main Text Animation */}
                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500"
                                >
                                    STM
                                </motion.div>

                                {/* Particle Assembly Effect */}
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-primary rounded-full"
                                        initial={{
                                            x: (Math.random() - 0.5) * 200,
                                            y: (Math.random() - 0.5) * 200,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: 0,
                                            y: 0,
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: i * 0.05,
                                            repeat: Infinity,
                                        }}
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Loading Bar */}
                            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-purple-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            {/* Loading Text */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-primary font-mono text-sm tracking-widest"
                            >
                                INITIALIZING NEURAL INTERFACE... {Math.round(progress)}%
                            </motion.div>

                            {/* Spinning Rings */}
                            <div className="relative w-32 h-32">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute inset-0 border-2 border-primary/30 rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 3 + i,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        style={{
                                            scale: 1 - i * 0.2,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Corner Brackets */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50" />
                            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/50" />
                            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/50" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/50" />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}