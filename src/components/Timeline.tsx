import { TimelineNode } from './TimelineNode';
import { EXPERIENCE } from '@/lib/data';
import type{ ExperienceItem } from '@/lib/data';

interface TimelineProps {
  onSelect: (item: ExperienceItem) => void;
}

export function Timeline({ onSelect }: TimelineProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent z-0" />

      <div className="relative z-10 flex flex-col gap-8">
        {EXPERIENCE.map((item, index) => (
          <TimelineNode
            key={item.id}
            year={item.year}
            title={item.title}
            description={`${item.company} • ${item.description}`}
            side={index % 2 === 0 ? 'left' : 'right'}
            techStack={item.tech}
            index={index}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}