"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";
import { CALENDLY_LINK } from "@/config/socials";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "01",
    client: "E-Commerce Brand",
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
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "02",
    client: "B2B Consulting Agency",
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
    color: "from-emerald-400 to-teal-600"
  },
  {
    id: "03",
    client: "Real Estate Firm",
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
    color: "from-purple-500 to-fuchsia-600"
  }
];

export function Projects() {
  return (
    <section className="pt-12 pb-16 relative overflow-hidden bg-background">
      {/* Ambient Premium Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary uppercase tracking-wider"
          >
            Proven Results
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-foreground leading-[1.1]"
          >
            Work That Drives <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Massive ROI</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I don&apos;t just deliver code; I deliver scalable business systems. Explore how I&apos;ve helped companies eliminate bottlenecks and multiply their revenue.
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
                    <span className="text-white/70 font-semibold uppercase tracking-widest text-sm mb-4 block">
                      {study.client}
                    </span>
                    <h3 className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">
                      {study.metric}
                    </h3>
                    <p className="text-xl text-white/90 font-medium">
                      {study.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Right Side: The Breakdown */}
                <div className="lg:w-2/3 p-10 lg:p-12 flex flex-col justify-center bg-background/50">
                  <h4 className="text-3xl font-bold text-foreground mb-8 tracking-tight">{study.title}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h5 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">The Challenge</h5>
                      <p className="text-foreground/80 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">The Solution</h5>
                      <p className="text-foreground/80 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 p-6 rounded-2xl bg-muted/30 border border-border/50">
                    {study.roi.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-xs font-semibold uppercase tracking-wider border border-border/50">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button className="w-full group/btn hover:scale-105 transition-transform rounded-xl">
                        Want similar results?
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
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
