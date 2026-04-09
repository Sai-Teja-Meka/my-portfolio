import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { HACKATHONS } from '@/lib/data';
import { GlassCard } from './GlassCard';
import { ViewportAware } from './ViewportAware';
import { TextScramble } from './TextScramble';

export function Hackathons() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <ViewportAware animationType="slide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <Trophy className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            <TextScramble text="Hackathons & Competitions" scrambleSpeed={30} />
          </h2>
        </motion.div>
      </ViewportAware>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HACKATHONS.map((hack, index) => (
          <ViewportAware key={index} animationType="scale">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full">
                <span className="text-primary text-xs font-mono border border-primary/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {hack.event}
                </span>
                <h3 className="text-xl font-bold font-display mt-4 mb-3 text-white">
                  {hack.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {hack.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {hack.tech.map((t, i) => (
                    <span key={i} className="text-xs text-primary/70 font-mono border border-primary/20 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </ViewportAware>
        ))}
      </div>
    </section>
  );
}
