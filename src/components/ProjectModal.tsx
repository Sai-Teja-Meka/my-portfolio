import { motion, AnimatePresence } from "framer-motion";
import { Artifact3D } from "./Artifact3D";
import { useState, useEffect } from "react";
import { Box, X, Image as ImageIcon } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    year: string;
    description: string;
    techStack: string[];
    imageUrl?: string; // This is optional
  } | null;
}

export function ProjectModal({ isOpen, onClose, data }: ProjectModalProps) {
  // State to control view mode: True = 3D, False = Image
  const [showArtifact, setShowArtifact] = useState(true);

  // When modal opens or data changes, decide what to show first.
  useEffect(() => {
    if (isOpen && data) {
      // If an image URL exists, show the image first (set showArtifact to false).
      // If NO image URL exists, show the artifact (set showArtifact to true).
      setShowArtifact(!data.imageUrl); 
    }
  }, [isOpen, data]);

  const hasImage = !!data?.imageUrl;

  return (
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-background/90 border border-primary/30 backdrop-blur-xl rounded-lg overflow-hidden shadow-2xl z-50 flex flex-col max-h-[90vh]"
          >
            {/* Media Header Section (3D or Image) */}
            <div className="relative w-full h-72 bg-black/50 overflow-hidden group border-b border-primary/20 shrink-0">
              
              {/* Render Logic */}
              {showArtifact ? (
                <div className="w-full h-full">
                   {/* The new volumetric 3D component */}
                  <Artifact3D />
                </div>
              ) : (
                // Fallback Image - Make sure your data.ts has imageUrl to see this
                <img 
                  src={data.imageUrl} 
                  alt={data.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              )}
              
              {/* Toggle Button - ONLY RENDER IF AN IMAGE EXISTS */}
              {hasImage && (
                <button 
                  onClick={() => setShowArtifact(!showArtifact)}
                  className="absolute top-4 right-14 z-30 p-2 bg-black/50 backdrop-blur-md border border-primary/30 rounded-full text-primary hover:bg-primary/20 transition-colors flex items-center gap-2"
                  title={showArtifact ? "Switch to Image" : "Switch to 3D View"}
                >
                  {showArtifact ? <ImageIcon className="w-5 h-5" /> : <Box className="w-5 h-5" />}
                </button>
              )}

              {/* Close Button */}
              <button 
                 onClick={onClose}
                 className="absolute top-4 right-4 z-30 p-2 bg-black/50 backdrop-blur-md border border-primary/30 rounded-full text-primary hover:bg-primary/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Title Overlay placed over the media header */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
                 <span className="text-primary font-mono text-sm mb-1 block">{data.year}</span>
                 <h2 className="text-3xl font-bold font-display text-white leading-tight">{data.title}</h2>
              </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="p-6 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20">
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                {data.description}
              </p>

              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {data.techStack?.map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-full border border-primary/30 text-primary font-mono text-xs bg-primary/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}