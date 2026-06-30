"use client";

import { motion } from "framer-motion";
import { Activity, Code2, Database, LayoutTemplate, Workflow } from "lucide-react";

export function VisualComposition() {
  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[500px] flex items-center justify-center p-8">
      {/* Abstract Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden glass-panel shadow-elevated bg-background/50"
      >
        <div className="absolute top-0 inset-x-0 h-12 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        
        <div className="pt-16 p-6 flex flex-col gap-4">
          <div className="flex justify-between items-end mb-2">
            <div>
              <div className="h-4 w-24 bg-muted rounded mb-2" />
              <div className="h-8 w-32 bg-foreground/10 rounded" />
            </div>
            <Activity className="text-primary w-8 h-8 opacity-80" />
          </div>

          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  {i === 1 ? <Code2 className="w-4 h-4 text-primary" /> : i === 2 ? <Database className="w-4 h-4 text-primary" /> : <Workflow className="w-4 h-4 text-primary" />}
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="h-2 w-full bg-muted rounded" />
                  <div className="h-2 w-2/3 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] -left-4 md:-left-12 glass-panel p-4 rounded-2xl flex items-center gap-4 shadow-medium"
      >
        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
          <LayoutTemplate className="text-blue-500 w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">14+ Clients</p>
          <p className="text-xs text-muted-foreground">Successfully Delivered</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] -right-4 md:-right-8 glass-panel p-4 rounded-2xl flex items-center gap-4 shadow-medium"
      >
        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
          <Activity className="text-green-500 w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">100%</p>
          <p className="text-xs text-muted-foreground">Client Satisfaction</p>
        </div>
      </motion.div>
      
      {/* Abstract glowing shapes */}
      <div className="absolute -z-10 w-64 h-64 bg-primary/30 blur-[80px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
    </div>
  );
}
