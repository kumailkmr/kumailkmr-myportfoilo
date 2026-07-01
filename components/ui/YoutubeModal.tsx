"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Cpu, ArrowUpRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface YoutubeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function YoutubeModal({ isOpen, onClose }: YoutubeModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-end sm:items-center justify-center"
          style={{ zIndex: 9999 }}
        >
          {/* Backdrop — Solid dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-[85vh] sm:h-auto sm:max-h-[85vh] sm:max-w-2xl sm:mx-4 bg-background rounded-t-[2rem] sm:rounded-[2rem] sm:border sm:border-border/50 sm:shadow-[0_0_60px_rgba(220,38,38,0.2)] overflow-y-auto overscroll-contain flex flex-col"
          >
            {/* Close Button — sticky on mobile */}
            <div className="sticky top-0 z-20 flex justify-end p-4 sm:absolute sm:top-6 sm:right-6 sm:p-0">
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors shadow-md sm:shadow-none"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Header */}
            <div className="px-6 pb-6 pt-2 sm:p-10 border-b border-border/30 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-50" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 p-[1px] shadow-lg mb-4 sm:mb-6">
                  <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center">
                    <FaYoutube className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 tracking-tight text-foreground">Choose Your Channel</h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
                  I run two dedicated YouTube channels focusing on different aspects of technology and global knowledge.
                </p>
              </div>
            </div>

            {/* Channels Grid */}
            <div className="p-6 sm:p-10 grid gap-4 sm:grid-cols-2 bg-background/30 flex-grow">
              
              {/* Channel 1: Factmatrix */}
              <a 
                href="https://youtube.com/@factmatrix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-card/40 hover:bg-card/80 border border-border/50 hover:border-red-500/50 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <Globe className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-red-400 transition-colors">
                    Factmatrix
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Documentaries, current world events, educational insights, geopolitics, and history facts.
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-red-400 transition-colors mt-auto">
                  Watch Now <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </a>

              {/* Channel 2: Techmatrix */}
              <a 
                href="https://youtube.com/@techmatrix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-card/40 hover:bg-card/80 border border-border/50 hover:border-red-500/50 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <Cpu className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-red-400 transition-colors">
                    techmatrix
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Deep dives into technologies, coding, programming, AI, robotics, and tech gadgets.
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-red-400 transition-colors mt-auto">
                  Watch Now <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </a>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
