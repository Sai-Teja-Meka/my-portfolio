import { useState } from 'react';
import { StarfieldBackground } from '@/components/StarfieldBackground';
import { Timeline } from '@/components/Timeline';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { ProjectModal } from '@/components/ProjectModal';
import { AITerminal } from '@/components/AITerminal';

function App() {
  // Central State for the Modal
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  // State to trigger the AI Terminal (for Contact)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const openModal = (item: any) => {
    setSelectedItem({
      ...item,
      // Ensure data compatibility between Timeline and Projects
      techStack: item.tech || item.techStack || [], 
      year: item.year || "2025"
    });
  };

  return (
    <div className="min-h-screen w-full text-foreground overflow-x-hidden selection:bg-primary selection:text-background relative">
      
      {/* Background Layers */}
      <div className="fixed inset-0 w-full h-full bg-nebula pointer-events-none" style={{ zIndex: 0 }} />
      <StarfieldBackground />

      {/* Main Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        
        {/* Pass handlers to Hero for Contact/Resume */}
        <Hero onOpenContact={() => setIsTerminalOpen(true)} />

        {/* Experience Section */}
        <div className="border-t border-white/5 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto pt-20 px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 flex items-center gap-4 text-white">
              <span className="w-2 h-8 bg-primary block" />
              Career Timeline
            </h2>
          </div>
          {/* Pass openModal to Timeline */}
          <Timeline onSelect={openModal} />
        </div>

        {/* Projects Section - Pass openModal */}
        <Projects onSelect={openModal} />

        <footer className="py-10 text-center text-muted-foreground text-xs relative border-t border-t-white/5 mt-20 font-mono uppercase tracking-widest bg-black">
          <p>© 2025 Sai Teja Meka. Engineered with React & Three.js.</p>
        </footer>
      </div>

      {/* Global Modal System */}
      <ProjectModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)}
        data={selectedItem}
      />

      {/* AI Terminal (Contact Panel) */}
      <AITerminal 
        externalOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      /> 
    </div>
  );
}

export default App;
