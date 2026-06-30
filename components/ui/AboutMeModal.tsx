"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Brain, Terminal, Database, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutMeModal({ isOpen, onClose }: AboutMeModalProps) {
  const [showContact, setShowContact] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowContact(false); 
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const orbitingIcons = [
    { Icon: Brain, color: "text-purple-400", delay: 0 },
    { Icon: Terminal, color: "text-emerald-400", delay: -5 },
    { Icon: Database, color: "text-blue-400", delay: -10 },
    { Icon: Layers, color: "text-orange-400", delay: -15 },
  ];

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
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-3xl"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none pb-0 md:pb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-3xl bg-card/60 backdrop-blur-xl border border-border/50 rounded-t-[2rem] md:rounded-[2rem] shadow-[0_0_50px_rgba(124,58,237,0.15)] overflow-hidden relative pointer-events-auto flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] overflow-y-auto mt-auto md:mt-0"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-background/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Orbiting Avatar (Solar System) */}
              <div className="relative w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center bg-gradient-to-br from-background/50 to-primary/5 border-b md:border-b-0 md:border-r border-border/30 overflow-hidden min-h-[300px] md:min-h-[350px]">
                {/* Ambient glow behind avatar (pushed back) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                  <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px]" />
                </div>
                
                {/* Center Portrait */}
                <div className="relative z-10 w-40 h-40 md:w-52 md:h-52 rounded-full p-1 md:p-1.5 bg-gradient-to-br from-primary to-purple-600 shadow-2xl">
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
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 md:scale-100">
                  {orbitingIcons.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-primary/10"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: item.delay // Offset their starting positions
                      }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-border/50 shadow-lg flex items-center justify-center">
                        <item.Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Bio & Info */}
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-background/30 pb-10 md:pb-12">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About The Architect</h3>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground mb-4">Kumail Kmr</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-8">
                  <p>
                    I am an Independent AI & Business Systems Architect dedicated to transforming ambitious ideas into high-ticket digital realities. 
                  </p>
                  <p>
                    With deep expertise in autonomous agents, complex SaaS architecture, and scalable full-stack ecosystems, I partner directly with founders to engineer solutions that drive massive leverage and eliminate operational friction.
                  </p>
                </div>
                
                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <Link href="/about" onClick={onClose} className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 text-foreground text-sm font-bold transition-all shadow-sm w-full sm:w-auto">
                    Read Full Story
                  </Link>
                  
                  <div className="relative flex-1">
                    <AnimatePresence mode="wait">
                      {!showContact ? (
                        <motion.button
                          key="partner-btn"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          onClick={() => setShowContact(true)}
                          className="w-full inline-flex justify-center items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-md h-full"
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

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
