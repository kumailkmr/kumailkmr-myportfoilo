"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, XCircle, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const businessProblems = [
  {
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
    issue: "Bloated Agency Overhead",
    issueDesc: "Paying massive agency retainers for slow execution and getting passed down to junior developers.",
    solutionIcon: <ShieldCheck className="w-6 h-6 text-primary" />,
    solution: "Direct Expert Access",
    solutionDesc: "You work directly with a senior engineer. No middlemen, no bloat—just fast, high-ROI execution."
  },
  {
    icon: <XCircle className="w-6 h-6 text-red-500" />,
    issue: "Manual Operations Scaling",
    issueDesc: "Your business growth is bottlenecked by manual data entry, repetitive tasks, and disconnected software.",
    solutionIcon: <Zap className="w-6 h-6 text-primary" />,
    solution: "Intelligent Automation",
    solutionDesc: "Custom AI and workflow automations that connect your entire stack and run your operations 24/7."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-yellow-500" />,
    issue: "Leaky Revenue Pipelines",
    issueDesc: "Losing leads due to slow response times and disorganized, messy CRM data.",
    solutionIcon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    solution: "Automated Conversion Engines",
    solutionDesc: "AI-driven engagement and bespoke internal tools that automatically capture and nurture your prospects."
  }
];

export function ProblemsSolved() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Premium background effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Why Companies Hire <span className="text-primary">Independents</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I don&apos;t just write code. I architect strategic technical solutions designed to eliminate your most expensive operational bottlenecks.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {businessProblems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Premium Glow on hover */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full flex flex-col p-8 md:p-10 bg-background/50 backdrop-blur-xl border border-border/50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-500">
                
                {/* The Problem (Before) */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{item.issue}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-15">
                    {item.issueDesc}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

                {/* The Solution (After) */}
                <div className="mt-8 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.15)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-shadow">
                      {item.solutionIcon}
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{item.solution}</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed pl-15">
                    {item.solutionDesc}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
