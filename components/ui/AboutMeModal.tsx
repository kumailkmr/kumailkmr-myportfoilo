"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Brain, Terminal, Database, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutMeModal({ isOpen, onClose }: AboutMeModalProps) {
  const [showContact, setShowContact] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only render portal after mount (client-side)
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowContact(false); 
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const orbitingIcons = [
    { Icon: Brain, color: "text-purple-400", delay: 0 },
    { Icon: Terminal, color: "text-emerald-400", delay: -5 },
    { Icon: Database, color: "text-blue-400", delay: -10 },
    { Icon: Layers, color: "text-orange-400", delay: -15 },
  ];

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-end sm:items-center justify-center"
          style={{ zIndex: 9999 }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-[92vh] sm:h-auto sm:max-h-[85vh] sm:max-w-3xl sm:mx-4 bg-background rounded-t-[2rem] sm:rounded-[2rem] sm:border sm:border-border/50 sm:shadow-[0_0_60px_rgba(124,58,237,0.2)] overflow-y-auto overscroll-contain flex flex-col"
          >
            {/* Close Button — sticky on mobile */}
            <div className="sticky top-0 z-20 flex justify-end p-4 sm:p-0 sm:absolute sm:top-4 sm:right-4">
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors shadow-md sm:shadow-none"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row flex-1 min-h-0">
              {/* Left Side: Orbiting Avatar */}
              <div className="relative w-full sm:w-1/2 p-6 sm:p-10 flex items-center justify-center bg-gradient-to-br from-background/50 to-primary/5 border-b sm:border-b-0 sm:border-r border-border/30 overflow-hidden min-h-[280px] sm:min-h-[350px] shrink-0">
                {/* Ambient glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                  <div className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] bg-primary/10 rounded-full blur-[60px] sm:blur-[100px]" />
                </div>
                
                {/* Center Portrait */}
                <div className="relative z-10 w-36 h-36 sm:w-52 sm:h-52 rounded-full p-1 sm:p-1.5 bg-gradient-to-br from-primary to-purple-600 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card border-[6px] border-background relative">
                    <Image 
                      src="/images/profile.jpg"
                      alt="Kumail Kmr Portrait"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                {/* Orbiting Icons */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-65 sm:scale-100">
                  {orbitingIcons.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-primary/10"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: item.delay
                      }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-border/50 shadow-lg flex items-center justify-center">
                        <item.Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Bio & Info */}
              <div className="w-full sm:w-1/2 p-6 sm:p-12 flex flex-col justify-center bg-background/30">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About The Architect</h3>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-4">Kumail Kmr</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-8">
                  <p>
                    I am an Independent AI & Business Systems Architect dedicated to transforming ambitious ideas into high-ticket digital realities. 
                  </p>
                  <p>
                    With deep expertise in autonomous agents, complex SaaS architecture, and scalable full-stack ecosystems, I partner directly with founders to engineer solutions that drive massive leverage and eliminate operational friction.
                  </p>
                </div>
                
                <div className="mt-auto flex flex-col gap-3">
                  <Link href="/about" onClick={onClose} className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 text-foreground text-sm font-bold transition-all shadow-sm w-full">
                    Read Full Story
                  </Link>
                  
                  <div className="relative w-full">
                    <AnimatePresence mode="wait">
                      {!showContact ? (
                        <motion.button
                          key="partner-btn"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          onClick={() => setShowContact(true)}
                          className="w-full inline-flex justify-center items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-md"
                        >
                          Partner With Me
                        </motion.button>
                      ) : (
                        <motion.div
                          key="contact-options"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex gap-2 w-full"
                        >
                          <a 
                            href="mailto:kumailkmr.dev@gmail.com" 
                            className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20 text-sm font-bold hover:bg-primary/20 transition-colors shadow-sm"
                          >
                            Email
                          </a>
                          <a 
                            href="https://wa.me/916006121193" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-bold hover:bg-[#25D366]/20 transition-colors shadow-sm"
                          >
                            WhatsApp
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // Portal to document.body — escapes any parent stacking context
  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
