import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Send, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PERSONAL_INFO, SKILLS, PROJECTS } from '@/lib/data';

interface AITerminalProps {
  externalOpen?: boolean;
  onClose?: () => void;
}

export function AITerminal({ externalOpen = false, onClose }: AITerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: `qt_terminal_init... >_ System Online. \nHello. I am the portfolio assistant. Ask me about Sai's skills, projects, or contact info.` }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Sync external open state (from Hero button) to internal state
  useEffect(() => {
    if (externalOpen) {
      setIsOpen(true);
    }
  }, [externalOpen]);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose(); // Reset parent state
  };

  const handleCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase();
    let response = "Access denied or command not recognized. Try 'help'.";

    if (lowerCmd.includes('help')) {
      response = "Available commands: 'skills', 'projects', 'contact', 'about', 'clear'.";
    } else if (lowerCmd.includes('skills')) {
      response = `Analyzing neural pathways... \nCore competencies: ${SKILLS.map(s => s.category).join(', ')}.`;
    } else if (lowerCmd.includes('projects')) {
      response = `Retrieving mission logs... \nFeatured: ${PROJECTS.filter(p => p.featured).map(p => p.title).join(', ')}.`;
    } else if (lowerCmd.includes('contact')) {
      response = `Secure channel available: ${PERSONAL_INFO.email}`;
    } else if (lowerCmd.includes('about')) {
      response = PERSONAL_INFO.bio;
    } else if (lowerCmd.includes('clear')) {
      setHistory([]);
      return;
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
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-black/90 backdrop-blur-md border border-primary/50 rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono text-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-primary/10 border-b border-primary/30">
              <div className="flex items-center gap-2 text-primary">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="font-bold tracking-wider">DEEP_BLUE_V1.0</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleClose} className="text-primary/70 hover:text-primary"><Minimize2 className="w-4 h-4" /></button>
                <button onClick={handleClose} className="text-primary/70 hover:text-destructive"><X className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Output Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-primary/20">
              {history.map((msg, i) => (
                <div key={i} className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-lg border",
                    msg.role === 'user' 
                      ? "bg-primary/10 border-primary/30 text-primary-foreground" 
                      : "bg-transparent border-transparent text-primary"
                  )}>
                    <span className="opacity-50 text-xs mb-1 block">{msg.role === 'user' ? '> USER' : '> SYSTEM'}</span>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 bg-black border-t border-primary/30 flex gap-2">
              <span className="text-primary pt-2">{'>'}</span>
              <input 
                autoFocus
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50"
              />
              <button type="submit" className="text-primary hover:text-white transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
