"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight, Zap, XCircle } from "lucide-react";

interface PainPoint {
  id: string;
  problem: string;
  problemDesc: string;
  solution: string;
  solutionDesc: string;
  metric: string;
}

const PAIN_POINTS: PainPoint[] = [
  {
    id: "hours",
    problem: "Losing customers after office hours",
    problemDesc: "Potential clients visit your site late at night but leave because there is no one available to answer their queries immediately.",
    solution: "24/7 AI Receptionist & Support Bot",
    solutionDesc: "Deploy a conversational agent pre-trained on your business docs that answers questions and captures leads around the clock.",
    metric: "Instant 24/7 Engagement"
  },
  {
    id: "latency",
    problem: "Slow manual replies",
    problemDesc: "Warm leads wait hours for a sales rep to reply to basic questions, cooling down and moving to competitors.",
    solution: "Sub-second AI Response Pipeline",
    solutionDesc: "Deploy instant vector search knowledge agents that resolve common product, pricing, and scheduling queries in seconds.",
    metric: "< 5 Second Response Time"
  },
  {
    id: "leads",
    problem: "Missed leads",
    problemDesc: "Incoming inquiries are scattered across emails, DMs, and WhatsApp text lists, causing staff to lose track of follow-ups.",
    solution: "WhatsApp Lead Capture & Sync",
    solutionDesc: "Route every WhatsApp conversation and site contact forms directly into a centralized PostgreSQL/HubSpot CRM dashboard.",
    metric: "100% Lead Capture Audit"
  },
  {
    id: "tasks",
    problem: "Too many repetitive tasks",
    problemDesc: "Employees waste hours copy-pasting customer records between payment gateways, email tools, and shipping logs.",
    solution: "n8n Systems Integration",
    solutionDesc: "Connect your entire software stack into an autonomous workflow engine that triggers invoices and updates records instantly.",
    metric: "20+ Hours Saved Weekly"
  },
  {
    id: "data",
    problem: "No centralized customer data",
    problemDesc: "Client metrics are scattered in separate spreadsheet documents. Sales reps lack visibility into past milestones or invoices.",
    solution: "Custom Internal CRM Portals",
    solutionDesc: "Build bespoke client panels and sales pipelines optimized strictly for your unique operational workflows.",
    metric: "Unified Database Control"
  },
  {
    id: "followup",
    problem: "Poor customer follow-up",
    problemDesc: "Hot leads drop off because sales reps forget to follow up or send quotes on time.",
    solution: "Automated Lead Nurturing Loops",
    solutionDesc: "Trigger automated email drips and WhatsApp notifications based on lead status changes inside your pipeline.",
    metric: "+35% Conversion Boost"
  },
  {
    id: "overload",
    problem: "Staff overload",
    problemDesc: "Support teams are constantly answering the same repetitive questions, keeping them from high-value project work.",
    solution: "AI Knowledge Base Assistant",
    solutionDesc: "Train internal support bots to answer employee queries instantly, serving as a sub-second search directory.",
    metric: "90% Manual Labor Saved"
  },
  {
    id: "conversion",
    problem: "Low conversion rates",
    problemDesc: "Visitors land on slow, bloated templates that don't clearly state your pricing or make booking a slot easy.",
    solution: "Premium UX Web Development",
    solutionDesc: "Develop Next.js custom landing pages with sub-second speeds, smooth animations, and strategic conversion hooks.",
    metric: "98+ Lighthouse Speeds"
  },
  {
    id: "booking",
    problem: "Manual booking process",
    problemDesc: "Scheduling requires multiple emails back-and-forth, resulting in dropped consultations and calendar conflicts.",
    solution: "Calendar Booking Integrations",
    solutionDesc: "Synchronize live calendar availability directly with deposit gateways and automated reminders.",
    metric: "90% No-Show Reduction"
  },
  {
    id: "operations",
    problem: "Slow operations",
    problemDesc: "Dispatching reports, creating PDF contracts, and compiling billing sheets takes hours of manual work every week.",
    solution: "AI Data Extraction & PDF Automation",
    solutionDesc: "Use OCR models to automatically parse receipt files, generate contracts, and compile weekly metrics reports.",
    metric: "Zero Manual Paperwork"
  }
];

export function ProblemsSolved() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-500 uppercase tracking-wider"
          >
            <XCircle className="w-3.5 h-3.5 mr-1.5" />
            Operational Pain Points
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground"
          >
            Business Problems I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Solve</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Manual work, slow responses, and disjointed software limit your growth. Hover or click a card to see how I engineer intelligent solutions.
          </motion.p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              className="group relative h-[280px]"
            >
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full flex flex-col justify-between p-6 bg-card/40 backdrop-blur-2xl border border-border/60 rounded-3xl shadow-sm transition-all duration-300 hover:border-primary/30 overflow-hidden">
                
                {/* Default State: The Problem */}
                <div className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                      <h3 className="font-bold text-sm text-foreground tracking-tight leading-snug">{item.problem}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="flex items-center gap-1 text-[10px] font-bold text-primary border-t border-border/40 pt-4">
                    <span>Inspect AI Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Hover State: The Solution */}
                <div className="absolute inset-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto flex flex-col justify-between h-[calc(100%-48px)]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h3 className="font-bold text-sm text-foreground tracking-tight leading-snug">{item.solution}</h3>
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>

                  {/* Outcome Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-bold text-primary uppercase tracking-wider self-start">
                    <Zap className="w-3 h-3 text-primary animate-pulse" />
                    {item.metric}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
