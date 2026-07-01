"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, TrendingUp, Calendar, ArrowRight, Check } from "lucide-react";
import { createPortal } from "react-dom";
import { CALENDLY_LINK } from "@/config/socials";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    client: string;
    title: string;
    metric: string;
    metricLabel: string;
    challenge: string;
    solution: string;
    tech: string[];
    color: string;
    // Extended parameters for interactive details
    overview?: string;
    architecture?: { step: string; desc: string }[];
    features?: string[];
    timeline?: string;
    challenges?: string;
    businessImpact?: string[];
    testimonial?: { quote: string; author: string; role: string };
  };
}

export function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "results">("overview");

  if (!isOpen) return null;

  // Set default details if not provided by parent
  const overviewText = project.overview || `A custom-engineered systems design constructed to address ${project.challenge.toLowerCase()}`;
  
  const architectureSteps = project.architecture || [
    { step: "Data Integration", desc: "Syncing APIs and database webhooks securely." },
    { step: "NLP Processing Agent", desc: "Tokenizing inputs and applying RAG database vector checks." },
    { step: "Decision Pipeline", desc: "Running stateful LangGraph node execution paths." },
    { step: "Client Sync & Delivery", desc: "Returning sub-second payloads to client interface portals." }
  ];

  const featureList = project.features || [
    "Stateful multi-agent LangGraph node pathways",
    "Vector embedding RAG indexing with semantic search",
    "Clean, premium Next.js dashboard controllers",
    "Fail-resilient Stripe and Twilio SMS api handshakes"
  ];

  const projectTimeline = project.timeline || "4 - 6 weeks from onboarding";
  const projectChallenges = project.challenges || "Managing real-time vector updates and syncing third-party auth tokens without API delays.";
  
  const impactPoints = project.businessImpact || [
    "Direct operational hours saved weekly: 20+ hours",
    "Customer service response latency dropped below 5 seconds",
    "Lead conversion rates elevated by 30% through instant qualifiers"
  ];

  const testimonialBlock = project.testimonial || {
    quote: "Kumail delivered the entire dashboard system two weeks ahead of schedule. Bypassing account managers meant we solved integration bugs in real-time.",
    author: "Founder & CEO",
    role: project.client
  };

  const handleRequestSimilar = () => {
    const text = `Hello Kumail! I reviewed your project blueprint for "${project.title}" (${project.metric} outcome). I'd like to request a similar setup for my business.`;
    window.open(`https://wa.me/916006121193?text=${encodeURIComponent(text)}`, "_blank");
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header decoration */}
          <div className={`h-2.5 bg-gradient-to-r ${project.color}`} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all z-10 cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div className="overflow-y-auto flex-1 p-6 md:p-10 space-y-8">
            
            {/* Title & Client */}
            <div>
              <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-3`}>
                {project.client} Blueprint
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">{project.title}</h2>
              <p className="text-primary font-semibold text-lg mt-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Proven Outcome: {project.metric} {project.metricLabel}
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-border gap-4">
              {(["overview", "architecture", "results"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-bold capitalize transition-colors relative cursor-pointer ${
                    activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeModalTab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color}`}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[250px]">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Overview</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">{overviewText}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Timeline</h4>
                        <div className="flex items-center gap-2 text-sm text-foreground/95">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{projectTimeline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Core Features Built</h4>
                      <ul className="space-y-2.5">
                        {featureList.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1.5">Operational Bottlenecks</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1.5">Engineered Solution</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "architecture" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Technical Pipeline Architecture</h4>
                  
                  {/* Pipeline Graph Visual */}
                  <div className="grid sm:grid-cols-4 gap-4 relative">
                    {architectureSteps.map((step, i) => (
                      <div key={i} className="bg-card border border-border/80 p-4 rounded-xl flex flex-col justify-between min-h-[120px] relative z-10">
                        <div>
                          <span className="text-xs font-extrabold text-muted-foreground/30 mb-2 block">0{i+1}</span>
                          <h5 className="font-bold text-xs text-foreground mb-1.5">{step.step}</h5>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Architectural Complexity & Challenges Overcome</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">{projectChallenges}</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "results" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Quantifiable Business Impact</h4>
                      <ul className="space-y-3">
                        {impactPoints.map((pt, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-emerald-500" />
                            </div>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-secondary border border-border p-6 rounded-2xl flex flex-col justify-between">
                      <p className="text-sm text-foreground/90 italic leading-relaxed">
                        &ldquo;{testimonialBlock.quote}&rdquo;
                      </p>
                      <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                          {testimonialBlock.author[0]}
                        </div>
                        <div>
                          <h6 className="font-bold text-xs text-foreground">{testimonialBlock.author}</h6>
                          <p className="text-[10px] text-muted-foreground">{testimonialBlock.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Tech stack used tags */}
            <div className="border-t border-border pt-6 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-muted-foreground mr-2">Technologies Used:</span>
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-xs font-semibold border border-border">
                  {t}
                </span>
              ))}
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-border bg-background/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <button
              onClick={onClose}
              className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Back to Portfolio
            </button>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => window.open(CALENDLY_LINK, "_blank")}
                className="flex-1 sm:flex-initial text-center py-3 px-6 rounded-xl border border-border text-xs font-bold hover:bg-muted text-foreground transition-all cursor-pointer"
              >
                Book Tech Review
              </button>
              <button
                onClick={handleRequestSimilar}
                className="flex-1 sm:flex-initial text-center py-3 px-6 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 hover:scale-[1.02] shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                Request Similar Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
