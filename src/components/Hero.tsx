import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '@/lib/data';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const nameParts = PERSONAL_INFO.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' '); 

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-widest uppercase">{PERSONAL_INFO.status}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tight leading-none text-white"
        >
          {firstName} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            {lastName}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-10"
        >
          {PERSONAL_INFO.role}. <br />
          <span className="text-sm md:text-base opacity-70 font-mono mt-2 block">
            {PERSONAL_INFO.bio}
          </span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded hover:border-primary hover:bg-primary/10 transition-all group text-white">
            <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span>LinkedIn</span>
          </a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded hover:border-primary hover:bg-primary/10 transition-all group text-white">
            <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span>GitHub</span>
          </a>
          
          {/* Contact Button - Now correctly triggers the parent handler */}
          <button 
            onClick={onOpenContact} 
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded hover:border-primary hover:bg-primary/10 transition-all group text-white"
          >
            <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span>Contact</span>
          </button>

          <a 
            href="/resume.pdf" 
            download="Sai_Teja_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded hover:bg-cyan-300 transition-all"
          >
            <FileDown className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Skills Ticker */}
      <div className="absolute bottom-10 left-0 right-0 border-t border-white/5 py-4 overflow-hidden">
        <div className="flex gap-8 animate-scroll-left opacity-30 font-mono text-sm whitespace-nowrap">
          {SKILLS.flatMap(s => s.items).map((skill, i) => (
             <span key={i} className="mx-4 text-primary">★ {skill}</span>
          ))}
          {SKILLS.flatMap(s => s.items).map((skill, i) => (
             <span key={`dup-${i}`} className="mx-4 text-primary">★ {skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
