import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Send, Cpu, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE } from '@/lib/data';

interface AITerminalProps {
  externalOpen?: boolean;
  onClose?: () => void;
}

export function AITerminal({ externalOpen = false, onClose }: AITerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  // Clean initial state without the "qt_init" clutter
  const [history, setHistory] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: `> SYSTEM ONLINE\n\nHello. I am the portfolio assistant. \n\nTry typing:\n• "skills" to see what I can do\n• "projects" to see my work\n• "contact" to hire me\n• Or search any keyword (e.g. "React", "AI")` }
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (externalOpen) setIsOpen(true);
  }, [externalOpen]);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim();
    let response = "Access denied. Command not recognized. Try 'help', 'skills', or search a keyword.";

    // --- INTELLIGENT COMMAND PROCESSOR ---
    
    // 1. HELP / MENU
    if (['help', 'ls', 'menu', 'options'].includes(lowerCmd)) {
      response = `>> AVAILABLE COMMANDS <<\n\n• skills      : List technical capabilities\n• projects    : View project archive\n• experience  : Show work history\n• contact     : Get communication links\n• about       : Executive summary\n• clear       : Clear terminal screen\n• [keyword]   : Search (e.g. 'React', 'PepsiCo')`;
    
    // 2. BIO
    } else if (lowerCmd.includes('about') || lowerCmd.includes('who are you')) {
      response = `>> IDENTITY VERIFIED <<\n\nNAME: ${PERSONAL_INFO.name}\nROLE: ${PERSONAL_INFO.role}\nSTATUS: ${PERSONAL_INFO.status}\n\nBIO: ${PERSONAL_INFO.bio}`;
    
    // 3. SKILLS
    } else if (lowerCmd.includes('skills') || lowerCmd.includes('stack')) {
      // Format skills into a clean list
      const skillTree = SKILLS.map(s => `[${s.category.toUpperCase()}]\n> ${s.items.join(', ')}`).join('\n\n');
      response = `>> NEURAL PATHWAYS LOADED <<\n\n${skillTree}`;
    
    // 4. PROJECTS
    } else if (lowerCmd.includes('projects')) {
      const projectList = PROJECTS.map(p => `* ${p.title} [${p.category}]`).join('\n');
      response = `>> MISSION LOGS RETRIEVED <<\n\n${projectList}\n\n(Type a specific project name for details)`;
    
    // 5. EXPERIENCE
    } else if (lowerCmd.includes('experience') || lowerCmd.includes('work') || lowerCmd.includes('history')) {
      const expList = EXPERIENCE.map(e => `[${e.year}] ${e.title} @ ${e.company}`).join('\n');
      response = `>> CAREER TIMELINE <<\n\n${expList}`;
    
    // 6. CONTACT
    } else if (lowerCmd.includes('contact') || lowerCmd.includes('email') || lowerCmd.includes('hire')) {
      response = `>> SECURE CHANNEL OPEN <<\n\nEMAIL: ${PERSONAL_INFO.email}\nLINKEDIN: ${PERSONAL_INFO.linkedin}\nGITHUB: ${PERSONAL_INFO.github}`;
    
    // 7. CLEAR
    } else if (lowerCmd === 'clear') {
      setHistory([]);
      return;

    // 8. KEYWORD SEARCH ENGINE
    } else {
      const results = [];

      // Search Skills
      SKILLS.forEach(cat => {
        const matches = cat.items.filter(item => item.toLowerCase().includes(lowerCmd));
        if (matches.length > 0) results.push(`SKILLS MATCHED: ${matches.join(', ')}`);
      });

      // Search Projects
      const matchedProjects = PROJECTS.filter(p => 
        p.title.toLowerCase().includes(lowerCmd) || 
        p.description.toLowerCase().includes(lowerCmd) ||
        p.tech.some(t => t.toLowerCase().includes(lowerCmd))
      );
      if (matchedProjects.length > 0) {
        results.push(`PROJECTS FOUND:\n${matchedProjects.map(p => `> ${p.title}: ${p.description}`).join('\n')}`);
      }

      // Search Experience
      const matchedExp = EXPERIENCE.filter(e => 
        e.company.toLowerCase().includes(lowerCmd) ||
        e.description.toLowerCase().includes(lowerCmd) ||
        e.tech.some(t => t.toLowerCase().includes(lowerCmd))
      );
      if (matchedExp.length > 0) {
        results.push(`EXPERIENCE FOUND:\n${matchedExp.map(e => `> ${e.company} (${e.title}): ${e.description}`).join('\n')}`);
      }

      if (results.length > 0) {
        response = `>> SEARCH COMPLETE: "${lowerCmd}" <<\n\n${results.join('\n\n')}`;
      } else {
        response = `Error: No data found for "${cmd}" in local archives.`;
      }
    }

    setHistory(prev => [...prev, { role: 'user', content: cmd }, { role: 'ai', content: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "bg-black/80 border border-primary text-primary hover:bg-primary hover:text-black"
        )}
      >
        <Terminal className="w-6 h-6" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            // Added bg-black/95 to make it very dark and readable
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[450px] h-[550px] bg-black/95 backdrop-blur-xl border border-primary/50 rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono text-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-primary/30">
              <div className="flex items-center gap-2 text-primary">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="font-bold tracking-wider drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">DEEP_BLUE_V1.0</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleClose} className="text-primary/70 hover:text-primary transition-colors"><Minimize2 className="w-4 h-4" /></button>
                <button onClick={handleClose} className="text-primary/70 hover:text-destructive transition-colors"><X className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Output Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              {history.map((msg, i) => (
                <div key={i} className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[90%] p-3 rounded-lg border backdrop-blur-sm",
                    // USER STYLE: Right aligned, filled background to hide underlying text
                    msg.role === 'user' 
                      ? "bg-primary/20 border-primary/30 text-white" 
                      : "bg-black/40 border-primary/10 text-primary shadow-[0_0_15px_rgba(0,255,255,0.1)]"
                  )}>
                    <span className="opacity-50 text-[10px] uppercase tracking-widest mb-1 block">
                      {msg.role === 'user' ? '> USER_INPUT' : '> SYSTEM_RESPONSE'}
                    </span>
                    {/* Added 'drop-shadow' class for the GLOW effect and whitespace-pre-wrap for formatting */}
                    <p className={cn(
                      "whitespace-pre-wrap leading-relaxed",
                      msg.role === 'ai' && "drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]"
                    )}>
                      {msg.content}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 bg-black/80 border-t border-primary/30 flex gap-2 items-center">
              <span className="text-primary animate-pulse">{'>_'}</span>
              <input 
                autoFocus
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command..."
                className="flex-1 bg-transparent border-none outline-none text-primary placeholder:text-primary/30 font-bold"
              />
              <button type="submit" className="text-primary hover:text-white transition-colors p-2 hover:bg-primary/20 rounded">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
