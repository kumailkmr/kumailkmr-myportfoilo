"use client";

import { motion } from "framer-motion";

export function AboutHeader() {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-20 mask-image-fade" />
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Engineering Meets Strategy
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Building AI Solutions That Help Businesses <span className="text-primary">Grow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          I specialize in designing intelligent software, AI automation, and modern web applications that simplify operations, improve customer experiences, and help businesses scale with confidence.
        </motion.p>
      </div>
      
      {/* Fade out mask for grid */}
      <style jsx>{`
        .mask-image-fade {
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
        }
      `}</style>
    </div>
  );
}
