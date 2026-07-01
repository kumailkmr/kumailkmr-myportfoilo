"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, ShieldCheck, Zap, ExternalLink, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ProjectDetailsModal } from "@/components/ui/ProjectDetailsModal";

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  roi: { icon: React.ComponentType<{ className?: string }>; text: string }[];
  tech: string[];
  color: string;
  overview: string;
  timeline: string;
  challenges: string;
  businessImpact: string[];
  liveDemo?: string;
  github?: string;
  testimonial: { quote: string; author: string; role: string };
}

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    client: "E-Commerce Brand",
    industry: "E-Commerce & Retail",
    title: "Scaling Support with Generative AI",
    metric: "40% Reduction",
    metricLabel: "in support ticket volume",
    challenge: "The client was drowning in repetitive customer support tickets, leading to 4-hour response times and plummeting customer satisfaction scores.",
    solution: "I integrated a custom RAG-based LLM agent trained exclusively on their internal knowledge base and return policies. It now autonomously resolves Tier 1 inquiries instantly.",
    roi: [
      { icon: Clock, text: "Response time dropped from 4 hours to 5 seconds." },
      { icon: TrendingUp, text: "$5,000/month saved in operational staffing costs." }
    ],
    tech: ["Next.js", "OpenAI", "Pinecone", "Supabase"],
    color: "from-blue-500 to-cyan-500",
    overview: "A specialized multi-agent customer support pipeline designed to replace manual triage and resolve standard inquiries instantly using custom semantic knowledge checks.",
    timeline: "4 weeks from kickoff",
    challenges: "Synchronizing dynamic return parameters across legacy databases while preserving context during complex multi-part customer chats.",
    businessImpact: [
      "Resolved 60%+ of standard support inquiries instantly without human intervention.",
      "Customer satisfaction index rose from 3.2 to 4.8 out of 5 stars.",
      "Saved $60,000+ in annual staffing overhead while expanding support to 24/7."
    ],
    liveDemo: "https://radiant-kepler.vercel.app",
    github: "https://github.com/kumailkmr",
    testimonial: {
      quote: "Kumail's custom AI engine resolved 60% of our support tickets instantly. Our response time went from hours to seconds.",
      author: "Sarah Jenkins",
      role: "VP of Operations"
    }
  },
  {
    id: "02",
    client: "B2B Consulting Agency",
    industry: "B2B Professional Services",
    title: "Enterprise Workflow CRM Automation",
    metric: "20+ Hours",
    metricLabel: "saved per week manually",
    challenge: "Their team was using 6 different tools for lead capture, emails, invoicing, and project management. Data was constantly falling through the cracks.",
    solution: "I built a centralized, custom CRM dashboard that unified their entire stack using webhooks. Leads are now automatically captured, enriched, and invoiced without human touch.",
    roi: [
      { icon: ShieldCheck, text: "Zero dropped leads due to automated pipeline tracking." },
      { icon: Zap, text: "Contract generation time reduced from 30 mins to 1 click." }
    ],
    tech: ["React", "n8n", "Node.js", "PostgreSQL"],
    color: "from-emerald-400 to-teal-600",
    overview: "An automated enterprise operations framework connecting pipeline CRMs, proposal generators, and accounting software into a zero-latency sync loop.",
    timeline: "6 weeks onboarding",
    challenges: "Designing multi-path custom retries for API endpoints during stripe billing token changes and sync queue blockages.",
    businessImpact: [
      "Freed up 20+ hours of executive administration labor per week.",
      "Reduced invoice creation delay to less than 3 seconds.",
      "Achieved 100% data fidelity between lead source channels and internal boards."
    ],
    liveDemo: "https://radiant-kepler.vercel.app",
    github: "https://github.com/kumailkmr",
    testimonial: {
      quote: "Bypassing agency overhead and working directly with Kumail meant we delivered a custom PostgreSQL CRM two weeks ahead of schedule.",
      author: "David Vance",
      role: "Managing Director"
    }
  },
  {
    id: "03",
    client: "Real Estate Firm",
    industry: "Real Estate & Brokerage",
    title: "Automated Booking & Lead Engine",
    metric: "3x Increase",
    metricLabel: "in qualified appointments",
    challenge: "Agents were losing high-value prospects because they couldn't respond to listing inquiries fast enough outside of working hours.",
    solution: "I deployed a 24/7 WhatsApp AI Assistant that instantly answers property questions, qualifies the buyer's budget, and directly schedules viewings in the agent's calendar.",
    roi: [
      { icon: TrendingUp, text: "300% increase in after-hours appointment bookings." },
      { icon: Clock, text: "Agents now only speak with pre-qualified, warm leads." }
    ],
    tech: ["WhatsApp API", "Make", "Next.js", "Stripe"],
    color: "from-purple-500 to-fuchsia-600",
    overview: "An automated lead generation conversational funnel integrated with the official WhatsApp Business API to qualify prospects and schedules calendar dates instantly.",
    timeline: "5 weeks delivery",
    challenges: "Building conversational state trees that handle unpredictable user responses during budget qualification phases without stalling.",
    businessImpact: [
      "3x jump in qualified property viewing bookings within 30 days.",
      "Eliminated 90% of manual follow-up labor for listing agents.",
      "Captured and categorized 100% of after-hours leads automatically."
    ],
    liveDemo: "https://radiant-kepler.vercel.app",
    github: "https://github.com/kumailkmr",
    testimonial: {
      quote: "The WhatsApp booking bot Kumail built qualifier-leads our buyers 24/7. Our viewing bookings tripled in the first 30 days.",
      author: "Elena Rostova",
      role: "Principal Broker"
    }
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section className="pt-12 pb-16 relative overflow-hidden bg-background">
      {/* Ambient Premium Glows */}
      <div className="absolute top-0 right-0 w-[min(800px,90vw)] h-[min(600px,90vw)] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
            Proven Results
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground"
          >
            Work That Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Massive ROI</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I don&apos;t just deliver code; I deliver high-performing operational infrastructure. Explore the metrics behind my business integrations.
          </motion.p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${study.color} rounded-[2.5rem] blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative flex flex-col lg:flex-row bg-card/40 backdrop-blur-xl border border-border/60 rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)] group-hover:border-primary/30 transition-colors duration-500">
                
                {/* Left Side: The Metric Highlight */}
                <div className={`lg:w-1/3 p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br ${study.color} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
                  
                  <div className="relative z-10">
                    <span className="text-white/70 font-semibold uppercase tracking-widest text-xs mb-2 block">
                      {study.client}
                    </span>
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest block mb-4">
                      {study.industry}
                    </span>
                    <h3 className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">
                      {study.metric}
                    </h3>
                    <p className="text-lg text-white/90 font-medium">
                      {study.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Right Side: The Breakdown */}
                <div className="lg:w-2/3 p-10 lg:p-12 flex flex-col justify-center bg-background/50">
                  <h4 className="text-2xl font-bold text-foreground mb-8 tracking-tight">{study.title}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">The Challenge</h5>
                      <p className="text-xs text-foreground/80 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">The Solution</h5>
                      <p className="text-xs text-foreground/80 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 p-6 rounded-2xl bg-muted/30 border border-border/50">
                    {study.roi.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-4">
                          <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-xs text-foreground font-medium">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-lg text-[10px] font-bold uppercase tracking-wider border border-border/50">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3.5 w-full sm:w-auto">
                      {study.liveDemo && (
                        <a href={study.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
                          <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-border hover:bg-muted text-foreground flex items-center gap-1.5 h-11 px-4 cursor-pointer">
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                      
                      {study.github && (
                        <a href={study.github} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
                          <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-border hover:bg-muted text-foreground flex items-center gap-1.5 h-11 px-4 cursor-pointer">
                            <SiGithub className="w-3.5 h-3.5" />
                            GitHub
                          </Button>
                        </a>
                      )}

                      <Button
                        onClick={() => setSelectedProject(study)}
                        variant="outline"
                        className="flex-1 sm:flex-initial rounded-xl border-primary/20 text-xs font-bold hover:bg-muted text-foreground h-11 px-4 cursor-pointer"
                      >
                        Case Study Blueprint
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
