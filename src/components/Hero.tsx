import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown, ScanFace } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '@/lib/data';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const nameParts = PERSONAL_INFO.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // AUTOMATIC PROFILE FETCH: Uses your GitHub avatar
  const profileImage = "https://github.com/Sai-Teja-Meka.png";

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* TEXT CONTENT (Left Side) */}
        <div className="flex-1 order-2 md:order-1">
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

            <button
              onClick={onOpenContact}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded hover:border-primary hover:bg-primary/10 transition-all group text-white"
            >
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span>Contact</span>
            </button>

            <a
              href="/Resume.pdf"
              download="Sai_Teja_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded hover:bg-cyan-300 transition-all"
            >
              <FileDown className="w-5 h-5" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* HOLOGRAPHIC PROFILE (Right Side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="order-1 md:order-2 flex-shrink-0 relative group"
        >
          {/* Floating Animation Wrapper */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Hexagon Border / Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-purple-500 to-primary opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />

            <div className="w-64 h-64 md:w-80 md:h-80 relative p-[2px] bg-gradient-to-b from-primary/50 to-purple-500/50"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>

              {/* The Actual Image */}
              <div className="w-full h-full bg-black relative overflow-hidden"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>

                <img
                  src={profileImage}
                  alt="Sai Teja Meka"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />

                {/* Scanline Overlay (The "Hologram" Effect) */}
                <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/3o7aD2saalBwwftVPY/giphy.gif')] opacity-10 pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Decorative Tech Elements */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary/50 font-mono text-[10px] tracking-[0.2em]">
              <ScanFace className="w-3 h-3 animate-pulse" />
              <span>IDENTITY_VERIFIED</span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Skills Ticker */}
      <div className="absolute bottom-10 left-0 right-0 border-t border-white/5 py-4 overflow-hidden">
        <div className="flex gap-8 animate-scroll-left opacity-30 font-mono text-sm whitespace-nowrap">
          {SKILLS.flatMap(s => s.items).map((skill, i) => (
            <span key={i} className="mx-4 text-primary">★ {skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}