"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";
import { CALENDLY_LINK } from "@/config/socials";

interface ComparisonRow {
  feature: string;
  agency: string;
  kmr: string;
  isKmrPositive: boolean;
}

const COMPARISONS: ComparisonRow[] = [
  {
    feature: "Response Time",
    agency: "1 - 2 business days (Account manager bottleneck)",
    kmr: "Sub-2 hours average (Direct engineer WhatsApp/Slack access)",
    isKmrPositive: true
  },
  {
    feature: "Automation Capability",
    agency: "Manual copy-paste or generic Zapier templates",
    kmr: "Stateful custom LangGraph AI agents & n8n connectors",
    isKmrPositive: true
  },
  {
    feature: "Client Support",
    agency: "Faceless support ticket queue",
    kmr: "Direct developer availability without account handlers",
    isKmrPositive: true
  },
  {
    feature: "Code Customization",
    agency: "Proprietary locked platforms (high monthly seat costs)",
    kmr: "100% custom codebase ownership via GitHub",
    isKmrPositive: true
  },
  {
    feature: "System Performance",
    agency: "Slow, bloated wordpress templates",
    kmr: "Serverless Next.js structures (98+ Lighthouse speed)",
    isKmrPositive: true
  },
  {
    feature: "Scalability Costs",
    agency: "Expensive seat-based licensing limits growth",
    kmr: "Serverless scaling (pay-as-you-use server resources)",
    isKmrPositive: true
  },
  {
    feature: "Project ROI",
    agency: "Unfocused agency hours with delayed payouts",
    kmr: "Pre-modeled business savings & lead sync metrics",
    isKmrPositive: true
  },
  {
    feature: "System Innovation",
    agency: "Adapt systems to standard templates",
    kmr: "Stateful vector databases & RAG indexing capabilities",
    isKmrPositive: true
  },
  {
    feature: "Data Security",
    agency: "Shared credentials across multiple freelancers",
    kmr: "SOC2 aligned secure API vaults & encrypted access keys",
    isKmrPositive: true
  }
];

export function WhyMe() {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-bold uppercase tracking-widest text-primary mb-6 animate-pulse"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Strategic Comparison
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground"
          >
            Traditional Agency vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Kumail Kmr AI Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Ditch bloated agency overhead. Here is a technical breakdown of how I build intelligent software systems compared to traditional service models.
          </motion.p>
        </div>

        {/* Comparison Dashboard Grid */}
        <div className="border border-border/80 rounded-3xl overflow-hidden bg-card/25 backdrop-blur-2xl shadow-xl">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-border/80 bg-muted/30 p-4 md:p-6 text-xs font-extrabold uppercase tracking-wider text-muted-foreground gap-4">
            <div className="md:col-span-3 text-foreground">Operational Parameter</div>
            <div className="md:col-span-4">Traditional Agency</div>
            <div className="md:col-span-5 text-primary">Kumail Kmr AI Solutions</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border/60">
            {COMPARISONS.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 p-4 md:p-6 items-center gap-4 text-xs font-semibold leading-relaxed hover:bg-muted/10 transition-colors"
              >
                {/* Feature Name */}
                <div className="md:col-span-3 text-foreground font-black text-sm tracking-tight">{row.feature}</div>
                
                {/* Traditional Agency */}
                <div className="md:col-span-4 flex items-start gap-2 text-muted-foreground">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{row.agency}</span>
                </div>
                
                {/* Kumail Kmr AI Solutions */}
                <div className="md:col-span-5 flex items-start gap-2.5 text-foreground/90 font-bold bg-primary/5 border border-primary/10 p-3 rounded-2xl md:bg-transparent md:border-none md:p-0">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{row.kmr}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium btn-premium-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8"
          >
            Discuss Your System Requirements
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
