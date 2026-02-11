import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Maximize2 } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { TiltCard } from './TiltCard';
import { GlassCard } from './GlassCard';

interface ProjectsProps {
  onSelect: (item: any) => void;
}

export function Projects({ onSelect }: ProjectsProps) {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex items-center gap-4 mb-12"
      >
        <Code2 className="w-8 h-8 text-primary" />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Engineering Artifacts</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <TiltCard className="h-full">
              <GlassCard
                onClick={() => onSelect(project)}
                className="h-full cursor-pointer flex flex-col p-8"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-5 h-5 text-primary" />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <span className="text-primary text-xs font-mono border border-primary/20 px-2 py-1 rounded">
                    {project.category}
                  </span>

                  <div className="flex gap-2 z-20" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white text-muted-foreground transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-muted-foreground transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display mb-3 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-white/50 font-mono">#{t}</span>
                  ))}
                </div>
              </GlassCard>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}