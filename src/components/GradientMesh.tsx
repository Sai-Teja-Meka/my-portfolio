import { useEffect, useRef } from 'react';

export function GradientMesh() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth) * 100;
            const y = (clientY / window.innerHeight) * 100;

            containerRef.current.style.setProperty('--mouse-x', `${x}%`);
            containerRef.current.style.setProperty('--mouse-y', `${y}%`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
            style={{ zIndex: 0, background: '#050a14' }}
        >
            <div className="absolute inset-0 opacity-30">
                {/* Blob 1: Cyan/Primary */}
                <div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[100px] transition-transform duration-[2000ms] ease-out"
                    style={{
                        background: 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)',
                        top: 'var(--mouse-y)',
                        left: 'var(--mouse-x)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                {/* Blob 2: Purple/Secondary (Counter-movement) */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[80px] transition-transform duration-[3000ms] ease-out"
                    style={{
                        background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
                        bottom: 'var(--mouse-y)',
                        right: 'var(--mouse-x)',
                        transform: 'translate(50%, 50%)',
                    }}
                />
            </div>
        </div>
    );
}