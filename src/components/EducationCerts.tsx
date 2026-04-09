import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '@/lib/data';
import { GlassCard } from './GlassCard';
import { ViewportAware } from './ViewportAware';
import { TextScramble } from './TextScramble';

export function EducationCerts() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      {/* Education */}
      <ViewportAware animationType="slide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            <TextScramble text="Education" scrambleSpeed={30} />
          </h2>
        </motion.div>
      </ViewportAware>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {EDUCATION.map((edu, index) => (
          <ViewportAware key={index} animationType="scale">
            <GlassCard className="p-6">
              <span className="text-primary font-mono text-sm mb-2 block">{edu.year}</span>
              <h3 className="text-lg font-bold font-display text-white mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm font-mono">{edu.institution}, {edu.location}</p>
              {edu.focus && (
                <p className="text-primary/60 text-xs font-mono mt-2">Focus: {edu.focus}</p>
              )}
            </GlassCard>
          </ViewportAware>
        ))}
      </div>

      {/* Certifications */}
      <ViewportAware animationType="slide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            <TextScramble text="Certifications" scrambleSpeed={30} />
          </h2>
        </motion.div>
      </ViewportAware>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <ViewportAware key={index} animationType="scale">
            <GlassCard className="p-6">
              <h3 className="text-sm font-bold font-display text-white mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-xs font-mono">{cert.issuer}</p>
              <p className="text-primary/60 text-xs font-mono mt-1">{cert.date}</p>
            </GlassCard>
          </ViewportAware>
        ))}
      </div>
    </section>
  );
}
