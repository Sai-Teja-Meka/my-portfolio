import { useEffect, useRef} from 'react';
import type{ ReactNode } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    options?: any;
}

export function TiltCard({ children, className, options = {} }: TiltCardProps) {
    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = tiltRef.current;
        if (!node) return;

        VanillaTilt.init(node, {
            max: 10,           // Max tilt rotation (degrees)
            speed: 400,        // Speed of the enter/exit transition
            glare: true,       // Add a light glare effect
            "max-glare": 0.2,  // Opacity of glare
            scale: 1.02,       // Scale up on hover
            gyroscope: true,   // Mobile support
            ...options
        });

        return () => {
            // @ts-ignore
            node.vanillaTilt?.destroy();
        };
    }, [options]);

    return (
        <div ref={tiltRef} className={className}>
            {children}
        </div>
    );
}