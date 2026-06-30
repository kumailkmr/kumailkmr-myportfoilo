"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Cpu, ArrowUpRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from "react";

interface YoutubeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function YoutubeModal({ isOpen, onClose }: YoutubeModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl bg-card/60 backdrop-blur-xl border border-border/50 rounded-[2rem] shadow-[0_0_50px_rgba(220,38,38,0.15)] overflow-hidden relative pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-background/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="p-8 md:p-10 border-b border-border/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 p-[1px] shadow-lg mb-6">
                    <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center">
                      <FaYoutube className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-3 tracking-tight">Choose Your Channel</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    I run two dedicated YouTube channels focusing on different aspects of technology and global knowledge.
                  </p>
                </div>
              </div>

              {/* Channels Grid */}
              <div className="p-8 md:p-10 grid md:grid-cols-2 gap-6 bg-background/30">
                
                {/* Channel 1: Factmatrix */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-card/40 hover:bg-card/80 border border-border/50 hover:border-red-500/50 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
                >
                  <Globe className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-400 transition-colors">
                    Factmatrix
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    Documentaries, current world events, educational insights, geopolitics, and history facts.
                  </p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-red-400 transition-colors">
                    Watch Now <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </a>

                {/* Channel 2: Techmatrix */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-card/40 hover:bg-card/80 border border-border/50 hover:border-red-500/50 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
                >
                  <Cpu className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-400 transition-colors">
                    techmatrix
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    Deep dives into technologies, coding, programming, AI, robotics, and tech gadgets.
                  </p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-red-400 transition-colors">
                    Watch Now <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </a>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
