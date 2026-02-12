import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function useSmoothScroll() {
    useEffect(() => {
        // Reset scroll position on page load/refresh
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        const lenis = new Lenis({
            duration: 0.8,  // Reduced from 1.2 for snappier feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.0,  // More responsive wheel scrolling
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
}