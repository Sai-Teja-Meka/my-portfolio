import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GlassCard } from './GlassCard';

export interface TimelineNodeProps {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  index: number;
  techStack?: string[];
  onClick?: () => void;
}

export function TimelineNode({ year, title, description, side, index, techStack, onClick }: TimelineNodeProps) {
  const isLeft = side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={cn(
        "relative flex items-center justify-between md:justify-normal w-full mb-12 z-10",
        isLeft ? "md:flex-row-reverse" : ""
      )}
    >
      <div className="hidden md:block w-5/12" />

      {/* Node Connector */}
      <motion.div
        className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer group z-30"
        onClick={onClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative w-8 h-8 rounded-full bg-background border-2 border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] transition-all duration-300 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-secondary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_currentColor]" />
          <div className="absolute top-0 bottom-0 w-[2px] bg-background -z-10" />
        </div>
      </motion.div>

      {/* Content */}
      <div className={cn("w-full md:w-5/12 pl-12 md:pl-0", isLeft ? "md:pr-16 md:text-right" : "md:pl-16")}>
        <GlassCard onClick={onClick} className="p-6 cursor-pointer">
          <span className="neon-text text-primary font-display text-2xl font-bold mb-2 block tracking-wider">
            {year}
          </span>
          <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight font-display group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground font-mono text-xs leading-relaxed tracking-wide opacity-90">
            {description}
          </p>
          {techStack && (
            <div className={cn("flex flex-wrap gap-2 mt-4", isLeft ? "md:justify-end" : "justify-start")}>
              {techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-[10px] uppercase tracking-wider text-primary/70 border border-primary/20 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </GlassCard>
      </div>
    </motion.div>
  );
}