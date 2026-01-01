import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TimelineNodeProps {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  index: number;
  techStack?: string[];
  imageUrl?: string;
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
      {/* Spacer for desktop layout (pushes content to side) */}
      <div className="hidden md:block w-5/12" />

      {/* The Cyber Core Node (The Connector) */}
      <motion.div 
        className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer group z-30"
        onClick={onClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Glowing Outer Ring */}
        <div className="relative w-8 h-8 rounded-full bg-background border-2 border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] transition-all duration-300 flex items-center justify-center">
           {/* Inner Pulsing Core */}
          <div className="w-3 h-3 rounded-full bg-secondary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_currentColor]" />
          
          {/* Connecting vertical line fixer (prevents gap) */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-background -z-10" />
        </div>
      </motion.div>

      {/* Content Card */}
      <div className={cn(
        "w-full md:w-5/12 pl-12 md:pl-0",
        isLeft ? "md:pr-16 md:text-right" : "md:pl-16"
      )}>
        <motion.div 
          onClick={onClick}
          whileHover={{ scale: 1.02, x: isLeft ? -5 : 5 }}
          className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
        >
          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Year Badge - Now uses Neon Effect */}
          <span className="neon-text text-primary font-display text-2xl font-bold mb-2 block tracking-wider">
            {year}
          </span>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight font-display group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground font-mono text-xs leading-relaxed tracking-wide opacity-90">
            {description}
          </p>

          {/* Tech Stack Tags (Optional) */}
          {techStack && (
            <div className={cn("flex flex-wrap gap-2 mt-4", isLeft ? "md:justify-end" : "justify-start")}>
              {techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-[10px] uppercase tracking-wider text-primary/70 border border-primary/20 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {/* Decorative Circuit Line */}
          <div className={cn(
            "absolute top-6 w-12 h-[1px] bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity",
            isLeft ? "right-0 rotate-180" : "left-0"
          )} />
        </motion.div>
      </div>
    </motion.div>
  );
}