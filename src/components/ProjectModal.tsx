import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Box, X, Image as ImageIcon } from "lucide-react";

import type { ModalData } from "@/lib/data";
import { Artifact3D } from "./Artifact3D";
import { ErrorBoundary } from "./ErrorBoundary";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ModalData | null;
}

export function ProjectModal({ isOpen, onClose, data }: ProjectModalProps) {
  // ============================================
  // VIEW MODE STATE
  // ============================================
  // True = 3D Artifact, False = Image
  const [showArtifact, setShowArtifact] = useState(true);

  const hasImage = !!data?.imageUrl;

  // ============================================
  // INITIALIZE VIEW MODE ON OPEN
  // ============================================
  useEffect(() => {
    if (!isOpen || !data) return;

    // If image exists, show image first; otherwise default to 3D artifact
    setShowArtifact(!data.imageUrl);
  }, [isOpen, data]);

  // ============================================
  // KEYBOARD ACCESSIBILITY + SCROLL LOCK
  // ============================================
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent body scroll when modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = prevOverflow || "unset";
    };
  }, [isOpen, onClose]);

  // Important: only return after Hooks have been called
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-2xl bg-background/90 border border-primary/30 backdrop-blur-xl rounded-lg overflow-hidden shadow-2xl z-50 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ============================================ */}
            {/* MEDIA HEADER SECTION (3D or Image) */}
            {/* ============================================ */}
            <div className="relative w-full h-72 bg-black/50 overflow-hidden group border-b border-primary/20 shrink-0">
              {/* Render 3D Artifact or Image */}
              {showArtifact ? (
                <div className="w-full h-full" aria-label="3D visualization of project">
                  <ErrorBoundary>
                    <Artifact3D />
                  </ErrorBoundary>
                </div>
              ) : (
                <img
                  src={data.imageUrl}
                  alt={`${data.title} preview`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  decoding="async"
                />
              )}

              {/* Toggle Button - Only shown if image exists */}
              {hasImage && (
                <button
                  type="button"
                  onClick={() => setShowArtifact((v) => !v)}
                  className="absolute top-4 right-14 z-30 p-2 bg-black/50 backdrop-blur-md border border-primary/30 rounded-full text-primary hover:bg-primary/20 transition-colors flex items-center gap-2"
                  title={showArtifact ? "Switch to Image View" : "Switch to 3D View"}
                  aria-label={showArtifact ? "Switch to image view" : "Switch to 3D view"}
                >
                  {showArtifact ? <ImageIcon className="w-5 h-5" /> : <Box className="w-5 h-5" />}
                </button>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 backdrop-blur-md border border-primary/30 rounded-full text-primary hover:bg-primary/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
                <span className="text-primary font-mono text-sm mb-1 block">{data.year}</span>
                <h2
                  id="modal-title"
                  className="text-3xl font-bold font-display text-white leading-tight"
                >
                  {data.title}
                </h2>
              </div>
            </div>

            {/* ============================================ */}
            {/* SCROLLABLE CONTENT SECTION */}
            {/* ============================================ */}
            <div className="p-6 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20">
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                {data.description}
              </p>

              {/* Technologies Section */}
              {data.techStack && data.techStack.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2" role="list">
                    {data.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full border border-primary/30 text-primary font-mono text-xs bg-primary/5"
                        role="listitem"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
