"use client";

import { motion } from "framer-motion";
import { 
  Search, BarChart2, Calendar, Layout, Code2, Bot, CheckSquare, 
  ExternalLink, Video, ShieldAlert, Sparkles 
} from "lucide-react";

interface Step {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const PROCESS_STEPS: Step[] = [
  {
    id: "01",
    title: "Discovery Audit",
    desc: "I perform a deep audit of your current business workflows, mapping out manual data bottlenecks and calculating baseline hours lost.",
    icon: Search,
    deliverables: ["Operational workflow map", "Identified hours lost audit sheet"]
  },
  {
    id: "02",
    title: "Business Analysis",
    desc: "I establish clear ROI goals and cost ceilings. I determine which automation steps will yield the fastest savings and highest margins.",
    icon: BarChart2,
    deliverables: ["Financial ROI calculation model", "Priority automation roadmaps"]
  },
  {
    id: "03",
    title: "Technical Planning",
    desc: "I plan out the data schema, API mapping coordinates, and vector database indexing guidelines before coding.",
    icon: Calendar,
    deliverables: ["Data flow diagrams", "API endpoint integrations sheet"]
  },
  {
    id: "04",
    title: "UI/UX Design",
    desc: "Design high-fidelity mockups of your dashboards, client portals, or WhatsApp dialog flows matching premium aesthetic standards.",
    icon: Layout,
    deliverables: ["Interactive Figma layout preview", "Design system tokens alignment"]
  },
  {
    id: "05",
    title: "Next.js & Backend Dev",
    desc: "Assemble responsive Next.js frontend pages and set up secure PostgreSQL/Supabase databases and AWS backend endpoints.",
    icon: Code2,
    deliverables: ["Deployable dev code repository", "Configured cloud relational tables"]
  },
  {
    id: "06",
    title: "AI Integration & RAG",
    desc: "Ingest your company documents and wikis into vector databases, configuring conversational LLM prompt boundaries.",
    icon: Bot,
    deliverables: ["Pre-trained vector databases", "Conversational qualifying dialogue trees"]
  },
  {
    id: "07",
    title: "Rigorous Testing",
    desc: "Run webhook rate-limit stress tests, payload simulation validations, and user validation cycles to guarantee stability.",
    icon: CheckSquare,
    deliverables: ["Stress test execution logs", "Edge-case code review metrics"]
  },
  {
    id: "08",
    title: "Production Deployment",
    desc: "I push code to static edge server arrays, configure custom domains, and activate live webhooks.",
    icon: ExternalLink,
    deliverables: ["Live cloud application URL", "Configured webhook trigger ports"]
  },
  {
    id: "09",
    title: "Manager Training",
    desc: "Deliver personalized Loom walkthroughs and instructional manuals so your managers can operate the dashboards easily.",
    icon: Video,
    deliverables: ["Video walkthrough library", "Operational manual documentation"]
  },
  {
    id: "10",
    title: "Dedicated Support",
    desc: "Monitor system uptime, review conversation logs to prune false responses, and optimize server routing queries.",
    icon: ShieldAlert,
    deliverables: ["Monthly database tune-ups", "Direct Slack support channel access"]
  }
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20 border-t border-border/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-bold uppercase tracking-widest text-primary mb-6 animate-pulse"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Build Roadmap
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            The 10-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Partner Framework</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A transparent, highly disciplined engineering roadmap that takes your initial ideas and converts them into production-ready business automations.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-border/80 pl-6 md:pl-10 ml-4 space-y-12">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.05 }}
                className="relative group"
              >
                {/* Timeline node circle */}
                <div className="absolute -left-[39px] md:-left-[55px] top-1.5 w-7 h-7 md:w-9 md:h-9 rounded-full bg-background border-2 border-border group-hover:border-primary flex items-center justify-center transition-colors shadow-xs z-10">
                  <Icon className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Content Card */}
                <div className="bg-card/45 backdrop-blur-xl border border-border/60 hover:border-primary/20 p-6 md:p-8 rounded-3xl transition-all shadow-xs relative">
                  {/* Step ID badge */}
                  <span className="absolute top-6 right-6 text-3xl font-black text-muted/30 select-none leading-none">
                    {step.id}
                  </span>

                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mb-6">
                    {step.desc}
                  </p>

                  {/* Deliverables tags */}
                  <div className="border-t border-border/40 pt-4">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-2 tracking-wider">Target Outputs</span>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map(del => (
                        <span key={del} className="px-2.5 py-1 bg-secondary/80 text-[10px] font-bold rounded-lg border border-border/40 text-foreground/80">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
