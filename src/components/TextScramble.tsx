import { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
    text: string;
    className?: string;
    delay?: number;
    scrambleSpeed?: number;
    revealSpeed?: number;
}

export function TextScramble({
    text,
    className = '',
    delay = 10,
    scrambleSpeed = 50,
    revealSpeed = 50
}: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(text);
    const [_, setIsScrambling] = useState(true);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const chars = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        let frame = 0;
        const totalFrames = text.length;

        const scramble = () => {
            let scrambled = '';

            for (let i = 0; i < text.length; i++) {
                if (text[i] === ' ') {
                    scrambled += ' ';
                    continue;
                }

                if (frame > i) {
                    // Character is revealed
                    scrambled += text[i];
                } else if (frame === i) {
                    // Currently revealing this character
                    scrambled += text[i];
                } else {
                    // Still scrambling
                    scrambled += chars[Math.floor(Math.random() * chars.length)];
                }
            }

            setDisplayText(scrambled);

            if (frame < totalFrames) {
                frame++;
                setTimeout(scramble, frame < totalFrames ? scrambleSpeed : revealSpeed);
            } else {
                setIsScrambling(false);
            }
        };

        setTimeout(() => {
            scramble();
        }, delay);
    }, [text, delay, scrambleSpeed, revealSpeed]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
}