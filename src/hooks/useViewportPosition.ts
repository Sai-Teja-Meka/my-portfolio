import { useEffect, useState } from 'react';

export type ViewportPosition = 'above' | 'top' | 'center' | 'bottom' | 'below';

interface UseViewportPositionOptions {
    threshold?: number;
}

export function useViewportPosition(
    ref: React.RefObject<HTMLElement | null>,
    options: UseViewportPositionOptions = {}
): ViewportPosition {
    const { threshold = 0 } = options;
    const [position, setPosition] = useState<ViewportPosition>('below');

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const updatePosition = () => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Element completely above viewport
            if (rect.bottom < threshold) {
                setPosition('above');
                return;
            }

            // Element completely below viewport
            if (rect.top > windowHeight - threshold) {
                setPosition('below');
                return;
            }

            // Element in viewport - determine which third
            const elementCenter = rect.top + rect.height / 2;
            const viewportThird = windowHeight / 3;

            if (elementCenter < viewportThird) {
                setPosition('top');
            } else if (elementCenter < viewportThird * 2) {
                setPosition('center');
            } else {
                setPosition('bottom');
            }
        };

        updatePosition();
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, [ref, threshold]);

    return position;
}