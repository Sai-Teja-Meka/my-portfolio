import { motion } from 'framer-motion';
import { ScanFace } from 'lucide-react';

interface ProfileImageProps {
    variant: 'wormhole' | 'infinity' | 'neural' | 'quantum' | 'liquid' | 'particle' | 'original';
    profileImage: string;
}

export function ProfileImage({ variant, profileImage }: ProfileImageProps) {
    switch (variant) {
        case 'wormhole':
            return <WormholePortal profileImage={profileImage} />;
        case 'infinity':
            return <InfinityLoop profileImage={profileImage} />;
        case 'neural':
            return <NeuralNetworkOverlay profileImage={profileImage} />;
        case 'quantum':
            return <QuantumSuperposition profileImage={profileImage} />;
        case 'liquid':
            return <LiquidMetal profileImage={profileImage} />;
        case 'particle':
            return <ParticleDisintegration profileImage={profileImage} />;
        default:
            return <OriginalHexagon profileImage={profileImage} />;
    }
}

// ============================================================================
// 1. WORMHOLE / TIME PORTAL
// ============================================================================
function WormholePortal({ profileImage }: { profileImage: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2 flex-shrink-0 relative group"
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-80 md:h-80"
            >
                {/* Wormhole Rings */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-primary/20"
                        style={{
                            scale: 1 + i * 0.15,
                            opacity: 1 - i * 0.15,
                        }}
                        animate={{
                            scale: [1 + i * 0.15, 1.2 + i * 0.15, 1 + i * 0.15],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.2,
                        }}
                    />
                ))}

                {/* Distortion Waves */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: `radial-gradient(circle, transparent 30%, rgba(0,255,255,0.1) 50%, transparent 70%)`,
                            }}
                            animate={{
                                scale: [0.8, 1.5],
                                opacity: [0.5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 1,
                            }}
                        />
                    ))}
                </div>

                {/* Central Image with Gravitational Lens Effect */}
                <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_60px_rgba(0,255,255,0.5)] z-10">
                    <div className="relative w-full h-full">
                        <img
                            src={profileImage}
                            alt="Sai Teja Meka"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            style={{
                                filter: 'contrast(1.1) brightness(1.05)',
                            }}
                        />

                        {/* Space-time distortion overlay */}
                        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />

                        {/* Ripple effect on hover */}
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(0,255,255,0.2) 0%, transparent 70%)',
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </div>
                </div>

                {/* Temporal Coordinates */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary/70 font-mono text-[10px] tracking-[0.3em] z-20">
                    <ScanFace className="w-3 h-3 animate-pulse" />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">CHRONOS_ACTIVE</span>
                </div>

                {/* Corner Timestamp Markers */}
                {[
                    { top: '0', left: '0', text: 'T-∞' },
                    { top: '0', right: '0', text: 'T+∞' },
                    { bottom: '0', left: '0', text: 'PAST' },
                    { bottom: '0', right: '0', text: 'FUTURE' }
                ].map((pos, i) => (
                    <div
                        key={i}
                        className="absolute text-primary/30 font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity"
                        style={pos}
                    >
                        {pos.text}
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}

// ============================================================================
// 2. INFINITY LOOP (∞)
// ============================================================================
function InfinityLoop({ profileImage }: { profileImage: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2 flex-shrink-0 relative group"
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-96 md:h-96"
            >
                {/* SVG Infinity Symbol */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    {/* Infinity path */}
                    <motion.path
                        d="M 50 100 C 50 50, 30 50, 30 100 C 30 150, 50 150, 50 100 C 50 50, 70 50, 100 100 C 130 150, 150 150, 170 100 C 170 50, 150 50, 150 100 C 150 150, 170 150, 170 100 C 170 50, 150 50, 100 100 C 70 50, 50 50, 50 100"
                        stroke="url(#infinity-gradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Animated particles along the path */}
                    {[...Array(6)].map((_, i) => (
                        <motion.circle
                            key={i}
                            r="2"
                            fill="#00ffff"
                            initial={{ offsetDistance: `${i * 16.66}%` }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.6,
                            }}
                            style={{
                                offsetPath: "path('M 50 100 C 50 50, 30 50, 30 100 C 30 150, 50 150, 50 100 C 50 50, 70 50, 100 100 C 130 150, 150 150, 170 100 C 170 50, 150 50, 150 100 C 150 150, 170 150, 170 100 C 170 50, 150 50, 100 100 C 70 50, 50 50, 50 100')",
                            }}
                        />
                    ))}

                    <defs>
                        <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                            <stop offset="100%" stopColor="#00ffff" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Central Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/40 group-hover:border-primary shadow-[0_0_60px_rgba(0,255,255,0.4)] transition-all duration-500 z-10">
                        <img
                            src={profileImage}
                            alt="Sai Teja Meka"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                    </div>
                </div>

                {/* Infinity Symbol (∞) Text */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20">
                    <div className="text-6xl text-primary/40 group-hover:text-primary/80 transition-colors font-light">
                        ∞
                    </div>
                    <span className="text-primary/70 font-mono text-[10px] tracking-[0.3em]">
                        INFINITE_EVOLUTION
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ============================================================================
// 3. NEURAL NETWORK OVERLAY
// ============================================================================
function NeuralNetworkOverlay({ profileImage }: { profileImage: string }) {
    // Generate random neural nodes
    const nodes = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x: 20 + (i % 6) * 15,
        y: 20 + Math.floor(i / 6) * 20,
        connections: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () =>
            Math.floor(Math.random() * 24)
        ).filter(c => c !== i)
    }));

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2 flex-shrink-0 relative group"
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-80 md:h-80"
            >
                {/* Base Image */}
                <div className="absolute inset-0 rounded-lg overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-colors">
                    <img
                        src={profileImage}
                        alt="Sai Teja Meka"
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Neural Network SVG Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    {/* Draw connections */}
                    {nodes.map(node =>
                        node.connections.map((targetId, i) => {
                            const target = nodes[targetId];
                            return (
                                <motion.line
                                    key={`${node.id}-${targetId}-${i}`}
                                    x1={node.x}
                                    y1={node.y}
                                    x2={target.x}
                                    y2={target.y}
                                    stroke="url(#neural-gradient)"
                                    strokeWidth="0.3"
                                    opacity="0.4"
                                    initial={{ pathLength: 0 }}
                                    animate={{
                                        pathLength: [0, 1, 0],
                                        opacity: [0.2, 0.6, 0.2]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            );
                        })
                    )}

                    {/* Draw nodes */}
                    {nodes.map(node => (
                        <motion.g key={node.id}>
                            <motion.circle
                                cx={node.x}
                                cy={node.y}
                                r="1.5"
                                fill="#00ffff"
                                opacity="0.6"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r="0.5"
                                fill="#ffffff"
                            />
                        </motion.g>
                    ))}

                    <defs>
                        <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00ffff" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Corner Brackets */}
                {[
                    { top: '0', left: '0', w: 'w-12', h: 'h-12', borders: 'border-t-2 border-l-2' },
                    { top: '0', right: '0', w: 'w-12', h: 'h-12', borders: 'border-t-2 border-r-2' },
                    { bottom: '0', left: '0', w: 'w-12', h: 'h-12', borders: 'border-b-2 border-l-2' },
                    { bottom: '0', right: '0', w: 'w-12', h: 'h-12', borders: 'border-b-2 border-r-2' }
                ].map((pos, i) => (
                    <div
                        key={i}
                        className={`absolute ${pos.w} ${pos.h} ${pos.borders} border-primary/40 group-hover:border-primary transition-colors`}
                        style={pos}
                    />
                ))}

                {/* Status */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary/70 font-mono text-[10px] tracking-[0.3em]">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>NEURAL_MAPPING_ACTIVE</span>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ============================================================================
// 4. QUANTUM SUPERPOSITION
// ============================================================================
function QuantumSuperposition({ profileImage }: { profileImage: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2 flex-shrink-0 relative group"
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-80 md:h-80"
            >
                {/* Quantum State Layers */}
                <div className="absolute inset-0">
                    {/* Red Channel State */}
                    <motion.div
                        className="absolute inset-0 rounded-lg overflow-hidden opacity-40 mix-blend-screen"
                        animate={{
                            x: [-4, 4, -4],
                            y: [2, -2, 2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <img
                            src={profileImage}
                            alt="Quantum State R"
                            className="w-full h-full object-cover"
                            style={{ filter: 'sepia(1) hue-rotate(-50deg) saturate(5)' }}
                        />
                    </motion.div>

                    {/* Green Channel State */}
                    <motion.div
                        className="absolute inset-0 rounded-lg overflow-hidden opacity-40 mix-blend-screen"
                        animate={{
                            x: [0, 0, 0],
                            y: [0, 0, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    >
                        <img
                            src={profileImage}
                            alt="Quantum State G"
                            className="w-full h-full object-cover"
                            style={{ filter: 'sepia(1) hue-rotate(60deg) saturate(5)' }}
                        />
                    </motion.div>

                    {/* Blue/Cyan Channel State */}
                    <motion.div
                        className="absolute inset-0 rounded-lg overflow-hidden opacity-40 mix-blend-screen"
                        animate={{
                            x: [4, -4, 4],
                            y: [-2, 2, -2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <img
                            src={profileImage}
                            alt="Quantum State B"
                            className="w-full h-full object-cover"
                            style={{ filter: 'sepia(1) hue-rotate(150deg) saturate(5)' }}
                        />
                    </motion.div>

                    {/* Collapsed State (On Hover) */}
                    <motion.div
                        className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 border-2 border-primary"
                        initial={{ opacity: 0 }}
                    >
                        <img
                            src={profileImage}
                            alt="Sai Teja Meka"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                </div>

                {/* Quantum Measurement Effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <div className="w-full h-full border-2 border-primary rounded-lg"
                        style={{
                            boxShadow: '0 0 60px rgba(0,255,255,0.5), inset 0 0 60px rgba(0,255,255,0.2)'
                        }}
                    />
                </motion.div>

                {/* Probability Wave Visualization */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100">
                    <motion.path
                        d="M 0 50 Q 25 30, 50 50 T 100 50"
                        stroke="#00ffff"
                        strokeWidth="0.5"
                        fill="none"
                        animate={{
                            d: [
                                "M 0 50 Q 25 30, 50 50 T 100 50",
                                "M 0 50 Q 25 70, 50 50 T 100 50",
                                "M 0 50 Q 25 30, 50 50 T 100 50",
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </svg>

                {/* Status */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center z-20">
                    <div className="text-primary/70 font-mono text-[10px] tracking-[0.3em] mb-1">
                        <span className="opacity-50 group-hover:opacity-0 transition-opacity">SUPERPOSITION</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0">WAVE_COLLAPSED</span>
                    </div>
                    <div className="text-primary/50 font-mono text-[8px]">
                        |ψ⟩ = α|0⟩ + β|1⟩
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ============================================================================
// 5. LIQUID METAL
// ============================================================================
function LiquidMetal({ profileImage }: { profileImage: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2 flex-shrink-0 relative group"
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-80 md:h-80"
            >
                {/* Liquid Blob Container */}
                <div className="absolute inset-0">
                    {/* Main Image with Liquid Effect */}
                    <motion.div
                        className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden border-2 border-primary/40 shadow-[0_0_60px_rgba(0,255,255,0.4)]"
                        animate={{
                            borderRadius: [
                                "40% 60% 70% 30% / 40% 50% 60% 50%",
                                "60% 40% 30% 70% / 60% 30% 70% 40%",
                                "40% 60% 70% 30% / 40% 50% 60% 50%",
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.img
                            src={profileImage}
                            alt="Sai Teja Meka"
                            className="w-full h-full object-cover"
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Liquid Mercury Shine Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"
                            animate={{
                                x: ['-100%', '100%'],
                                y: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Metallic Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 mix-blend-overlay" />
                    </motion.div>

                    {/* Dripping Particles */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-primary rounded-full blur-sm"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: '90%',
                            }}
                            animate={{
                                y: [0, 40, 0],
                                opacity: [0.8, 0, 0.8],
                                scale: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Reforming Particles */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={`reform-${i}`}
                            className="absolute w-2 h-2 bg-primary/60 rounded-full blur-sm"
                            style={{
                                left: `${25 + i * 15}%`,
                                top: '-10%',
                            }}
                            animate={{
                                y: [0, 40],
                                opacity: [0, 0.8, 0],
                                scale: [0.5, 1, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeIn",
                            }}
                        />
                    ))}
                </div>

                {/* Status */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary/70 font-mono text-[10px] tracking-[0.3em]">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        💧
                    </motion.div>
                    <span>LIQUID_STATE</span>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ============================================================================
// 6. PARTICLE DISINTEGRATION
// ============================================================================
function ParticleDisintegration({ profileImage }: { profileImage: string }) {
    // Generate particles for the effect
    const particles = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        angle: (i / 40) * Math.PI * 2,
        distance: 140 + Math.random() * 40,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 2,
    }));

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2 flex-shrink-0 relative group"
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-80 md:h-80"
            >
                {/* Outgoing Particles (Disintegrating) */}
                {particles.map((particle) => {
                    const x = Math.cos(particle.angle) * particle.distance;
                    const y = Math.sin(particle.angle) * particle.distance;

                    return (
                        <motion.div
                            key={`out-${particle.id}`}
                            className="absolute bg-primary rounded-full"
                            style={{
                                width: particle.size,
                                height: particle.size,
                                left: '50%',
                                top: '50%',
                                boxShadow: '0 0 10px currentColor',
                            }}
                            animate={{
                                x: [0, x],
                                y: [0, y],
                                opacity: [1, 0],
                                scale: [1, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: "easeOut",
                            }}
                        />
                    );
                })}

                {/* Incoming Particles (Reforming) */}
                {particles.map((particle) => {
                    const x = Math.cos(particle.angle + Math.PI) * particle.distance;
                    const y = Math.sin(particle.angle + Math.PI) * particle.distance;

                    return (
                        <motion.div
                            key={`in-${particle.id}`}
                            className="absolute bg-purple-500 rounded-full"
                            style={{
                                width: particle.size,
                                height: particle.size,
                                left: '50%',
                                top: '50%',
                                boxShadow: '0 0 10px currentColor',
                            }}
                            animate={{
                                x: [x, 0],
                                y: [y, 0],
                                opacity: [0, 1, 0],
                                scale: [0.3, 1, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: particle.delay + 1.5,
                                ease: "easeIn",
                            }}
                        />
                    );
                })}

                {/* Central Image */}
                <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-primary/40 group-hover:border-primary shadow-[0_0_60px_rgba(0,255,255,0.4)] transition-all duration-500 z-10">
                    <motion.img
                        src={profileImage}
                        alt="Sai Teja Meka"
                        className="w-full h-full object-cover"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Particle texture overlay */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(0,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '10px 10px',
                        }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
                </div>

                {/* Status */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-primary/70 font-mono text-[10px] tracking-[0.3em]">
                    <div className="flex items-center gap-2">
                        <motion.span
                            animate={{
                                opacity: [1, 0.3, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        >
                            ⚛️
                        </motion.span>
                        <span>PARTICLE_FLUX</span>
                    </div>
                    <div className="text-[8px] opacity-50">
                        ENTROPY: {Math.random().toFixed(4)}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ============================================================================
// 7. ORIGINAL HEXAGON (For comparison)
// ============================================================================
function OriginalHexagon({ profileImage }: { profileImage: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2 flex-shrink-0 relative group"
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-purple-500 to-primary opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                />

                <div className="w-64 h-64 md:w-80 md:h-80 relative p-[2px] bg-gradient-to-b from-primary/50 to-purple-500/50"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>

                    <div className="w-full h-full bg-black relative overflow-hidden"
                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>

                        <img
                            src={profileImage}
                            alt="Sai Teja Meka"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                        />

                        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/3o7aD2saalBwwftVPY/giphy.gif')] opacity-10 pointer-events-none mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary/50 font-mono text-[10px] tracking-[0.2em]">
                    <ScanFace className="w-3 h-3 animate-pulse" />
                    <span>IDENTITY_VERIFIED</span>
                </div>
            </motion.div>
        </motion.div>
    );
}