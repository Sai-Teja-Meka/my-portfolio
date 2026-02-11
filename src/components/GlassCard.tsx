import type{ ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function GlassCard({ children, className, onClick }: GlassCardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 group",
                "hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(0,255,255,0.3)]",
                className
            )}
        >
            {/* Scanline Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}