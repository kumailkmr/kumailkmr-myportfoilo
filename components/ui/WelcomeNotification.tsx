"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Briefcase } from "lucide-react";
import { playWelcomeBurstSound, playKnockSound } from "@/lib/sounds";

interface WelcomeNotificationProps {
  show: boolean;
  onHireMe: () => void;
}

export function WelcomeNotification({ show, onHireMe }: WelcomeNotificationProps) {
  const [phase, setPhase] = useState(0);
  // Phase 0: Welcome toast drops in
  // Phase 1: Offer notification slides in
  // Phase 2: Dismissed

  useEffect(() => {
    if (!show) return;

    // Play burst sound when welcome toast appears
    playWelcomeBurstSound();

    const timers = [
      setTimeout(() => {
        setPhase(1);
        playKnockSound(); // Knock sound for offer notification
      }, 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [show]);

  const dismiss = useCallback((p: number) => {
    if (p === 0) {
      setPhase(1);
      setTimeout(() => playKnockSound(), 300);
    }
    if (p === 1) setPhase(2);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 flex flex-col items-center gap-3 pt-24 sm:pt-28 px-4 pointer-events-none"
      style={{ zIndex: 9990 }}
    >
      {/* Welcome Toast */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="pointer-events-auto relative w-full max-w-md bg-background/95 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
            
            <div className="p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0 shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">Welcome to Kumail Kmr&apos;s Portfolio ✨</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Explore premium AI solutions, automation systems, and high-end web experiences.
                </p>
              </div>
              <button
                onClick={() => dismiss(0)}
                className="p-1.5 rounded-full hover:bg-muted transition-colors shrink-0"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Offer / Hire Me Notification */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="pointer-events-auto relative w-full max-w-md bg-background/95 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />
            
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0 shadow-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground">🚀 Ready to Build Something Great?</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Get direct developer access — no agency overhead. Let&apos;s discuss your project today.
                  </p>
                </div>
                <button
                  onClick={() => dismiss(1)}
                  className="p-1.5 rounded-full hover:bg-muted transition-colors shrink-0"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  onHireMe();
                  setPhase(2);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <Briefcase className="w-4 h-4" />
                Hire Me Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
