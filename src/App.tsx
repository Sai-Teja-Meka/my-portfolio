import { useState } from 'react';
import { StarfieldBackground } from '@/components/StarfieldBackground';
import { GradientMesh } from '@/components/GradientMesh'; // New
import { CustomCursor } from '@/components/CustomCursor'; // New
import { useSmoothScroll } from '@/hooks/useSmoothScroll'; // New
import { Timeline } from '@/components/Timeline';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { ProjectModal } from '@/components/ProjectModal';
import { AITerminal } from '@/components/AITerminal';

function App() {
  useSmoothScroll(); // Activate Smooth Scroll

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const openModal = (item: any) => {
    setSelectedItem({
      ...item,
      techStack: item.tech || item.techStack || [], 
      year: item.year || "2025"
    });
  };

  return (
    <div className="min-h-screen w-full text-foreground overflow-x-hidden selection:bg-primary selection:text-background relative">
      
      <CustomCursor />
      
      {/* Background System */}
      <GradientMesh />
      <StarfieldBackground />

      <div className="relative" style={{ zIndex: 2 }}>
        <Hero onOpenContact={() => setIsTerminalOpen(true)} />

        <div className="border-t border-white/5 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto pt-20 px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 flex items-center gap-4 text-white">
              <span className="w-2 h-8 bg-primary block" />
              Career Timeline
            </h2>
          </div>
          <Timeline onSelect={openModal} />
        </div>

        <Projects onSelect={openModal} />

        <footer className="py-10 text-center text-muted-foreground text-xs relative border-t border-t-white/5 mt-20 font-mono uppercase tracking-widest bg-black">
          <p>© 2025 Sai Teja Meka. Engineered with React & Three.js.</p>
        </footer>
      </div>

      <ProjectModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)}
        data={selectedItem}
      />

      <AITerminal 
        externalOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      /> 
    </div>
  );
}

export default App;