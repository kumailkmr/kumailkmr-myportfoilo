"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { isAudioMuted } from "@/lib/sounds";

interface IntroAnimationProps {
  onComplete: () => void;
}

// Sound helpers — wrapped to never crash the component
function safePlaySound(fn: () => void) {
  try {
    if (isAudioMuted()) return;
    fn();
  } catch { /* audio blocked or unavailable */ }
}

function playBeep(ctx: AudioContext, freq: number, startTime: number, duration: number, vol: number) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(vol, startTime + 0.01);
  gain.gain.setValueAtTime(vol, startTime + duration - 0.02);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

function playHeartbeat() {
  safePlaySound(() => {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
    const now = ctx.currentTime;
    playBeep(ctx, 880, now, 0.12, 0.25);
    playBeep(ctx, 660, now + 0.18, 0.1, 0.15);
  });
}

function playShimmer() {
  safePlaySound(() => {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
    const now = ctx.currentTime;
    [523, 659, 784, 1047].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      const start = now + i * 0.08;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.12, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.4);
    });
  });
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Play heartbeat immediately on mount
    playHeartbeat();

    const timers = [
      setTimeout(() => {
        setPhase(1);
        playHeartbeat();
      }, 900),
      setTimeout(() => {
        playHeartbeat();
      }, 1250),
      setTimeout(() => {
        setPhase(2);
        playShimmer();
      }, 1600),
      setTimeout(() => {
        setPhase(3);
      }, 3300),
      setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 3900),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black"
      style={{ zIndex: 99999 }}
      animate={phase === 3 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Premium background grid & ambient light */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Phase 0 & 1: ECG Line */}
      {phase <= 1 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4"
          animate={phase === 1 ? { opacity: [1, 0.8, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <svg
            viewBox="0 0 800 200"
            className="w-full max-w-[500px] sm:max-w-[600px] h-auto"
            fill="none"
          >
            <motion.path
              d="M 0 100 L 150 100 L 180 100 L 200 60 L 220 100 L 240 100 L 280 100 L 300 100 L 320 20 L 340 180 L 360 100 L 380 80 L 400 100 L 500 100 L 520 100 L 540 60 L 560 100 L 580 100 L 620 100 L 640 100 L 660 20 L 680 180 L 700 100 L 720 80 L 740 100 L 800 100"
              stroke="url(#ecgGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0 100 L 150 100 L 180 100 L 200 60 L 220 100 L 240 100 L 280 100 L 300 100 L 320 20 L 340 180 L 360 100 L 380 80 L 400 100 L 500 100 L 520 100 L 540 60 L 560 100 L 580 100 L 620 100 L 640 100 L 660 20 L 680 180 L 700 100 L 720 80 L 740 100 L 800 100"
              stroke="url(#ecgGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#ecgGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="ecgGrad" x1="0" y1="0" x2="800" y2="0">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <filter id="ecgGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Pulse dot */}
          {phase === 1 && (
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 25px rgba(6,182,212,0.9), 0 0 60px rgba(6,182,212,0.4)" }}
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.8, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </motion.div>
      )}

      {/* Phase 2: Welcome Text */}
      {phase === 2 && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 sm:gap-6 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Photo Monogram */}
          <motion.div
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/20 bg-background overflow-hidden"
            style={{ boxShadow: "0 0 40px rgba(124,58,237,0.3)" }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
          >
            <Image 
              src="/images/profile.jpg"
              alt="Kumail Kmr Portrait"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 80px, 96px"
              priority
            />
          </motion.div>

          {/* Welcome text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/50 font-medium mb-3">
              Welcome to the Portfolio of
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Kumail{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Kmr
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-white/40 text-xs sm:text-base tracking-wide text-center max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            AI & Business Systems Architect
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
      )}

      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
        }}
      />
    </motion.div>
  );
}
