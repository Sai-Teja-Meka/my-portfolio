import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ViewportAwareProps {
    children: ReactNode;
    className?: string;
    animationType?: 'fade' | 'slide' | 'scale' | 'rotate' | 'parallax';
    once?: boolean;
}

export function ViewportAware({
    children,
    className = '',
    animationType = 'fade',
    once = false
}: ViewportAwareProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once,
        margin: "-50px",  // Reduced from -100px for earlier trigger
        amount: 0.2       // Reduced from 0.3 for earlier trigger
    });

    const getAnimationVariants = () => {
        switch (animationType) {
            case 'fade':
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                };

            case 'slide':
                return {
                    hidden: { opacity: 0, x: -30 },  // Reduced distance
                    visible: { opacity: 1, x: 0 }
                };

            case 'scale':
                return {
                    hidden: { opacity: 0, scale: 0.9 },  // Less dramatic scale
                    visible: { opacity: 1, scale: 1 }
                };

            case 'rotate':
                return {
                    hidden: { opacity: 0, rotateY: -10 },  // Less rotation
                    visible: { opacity: 1, rotateY: 0 }
                };

            case 'parallax':
                return {
                    hidden: { opacity: 0, y: 30 },  // Reduced distance
                    visible: { opacity: 1, y: 0 }
                };

            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                };
        }
    };

    const variants = getAnimationVariants();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{
                duration: 0.4,  // Reduced from 0.6 for snappier feel
                ease: [0.25, 0.1, 0.25, 1],  // More responsive easing
            }}
        >
            {children}
        </motion.div>
    );
}