"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, HeartPulse, Home, Scale, Cloud, ShoppingBag, ArrowRight, X, AlertTriangle, Lightbulb, RefreshCw, BarChart, FileText
} from "lucide-react";

const premiumIndustries = [
  { 
    name: "Healthcare & Clinics", 
    icon: HeartPulse, 
    desc: "HIPAA-compliant automation. We implement automated patient scheduling, secure telehealth portals, and AI triage systems to reduce administrative load.",
    highlight: "Reduce no-shows by 40%",
    problems: "Long booking queues, manual follow-up calls, high patient no-show rates, administrative data overload.",
    solutions: "Automated booking portals with active SMS verification, instant calendar synchronization for doctors, self-intake forms.",
    automations: "Twilio SMS notification cascades, Google Calendar/Outlook bidirectional CRM sync, secure document upload queues.",
    expectedROI: "40% reduction in appointment no-shows, reclaiming 15+ hours of front-desk labor weekly.",
    caseStudies: "Scaling support with Generative AI (RAG data checks)",
    recommendedServices: "Intelligent Automation Hubs"
  },
  { 
    name: "Real Estate & Agencies", 
    icon: Home, 
    desc: "Never miss a lead. Automated lead capture from property listings, instant WhatsApp viewing schedules, and centralized broker dashboards.",
    highlight: "Engage leads in < 30 seconds",
    problems: "Prospects drop out due to slow agent response times after-hours, manual property description uploads, outdated listing sync.",
    solutions: "24/7 conversational WhatsApp AI Assistant to qualify budgets, schedule listing viewings, and send rich PDFs.",
    automations: "WhatsApp Business API webhook listeners, automated PDF description generation, calendar booking slot updates.",
    expectedROI: "3x appointment booking volumes within 30 days, 100% after-hours lead conversion check.",
    caseStudies: "Automated Booking & Lead WhatsApp Engine",
    recommendedServices: "AI-Driven Conversion Systems"
  },
  { 
    name: "Law Firms & Finance", 
    icon: Scale, 
    desc: "Secure document management, client intake automation, and billing workflows that keep your practice strictly compliant and heavily efficient.",
    highlight: "Zero data leakage",
    problems: "Time-intensive contract preparation, manual billing reconciliation, client onboarding delays.",
    solutions: "Custom client onboarding CRM dashboards, template-based contract generators, and secure client checkout panels.",
    automations: "Stripe payment checkouts, custom Node.js document formatting scripts, automated Notion files assembly.",
    expectedROI: "Zero dropped leads, billing administration time cut by 90% (from 30 mins to 1 click).",
    caseStudies: "Enterprise Workflow CRM Automation",
    recommendedServices: "Bespoke Enterprise Portals"
  },
  { 
    name: "SaaS & Tech Startups", 
    icon: Cloud, 
    desc: "Rapid MVP architecture, scalable cloud foundations, and custom AI integrations that help you secure funding and scale aggressively.",
    highlight: "Enterprise-grade architecture",
    problems: "High agency costs, slow time-to-market, complex multi-tenant database systems, insecure API handshakes.",
    solutions: "Next.js 14 App Router scaffolding, Supabase databases, secure auth flows, and Stripe webhook listeners.",
    automations: "Stripe checkout billing triggers, automated email confirmation cascades via Resend, pgvector searches.",
    expectedROI: "Production-ready MVP built in 4 - 6 weeks (saving $15,000+ compared to agency overhead).",
    caseStudies: "Bespoke Enterprise Portals (Next.js & Supabase)",
    recommendedServices: "Bespoke Enterprise Portals"
  },
  { 
    name: "E-commerce & Retail", 
    icon: ShoppingBag, 
    desc: "Omnichannel inventory syncing, AI-driven product recommendations, and automated abandoned cart recovery via SMS and Email.",
    highlight: "Boost revenue by 20%+",
    problems: "Abandoned checkout carts, delayed customer service response, mismatched inventory databases.",
    solutions: "AI support chatbots parsing return policies, multi-channel inventory sync scripts, and dynamic SMS recovery flows.",
    automations: "Shopify / custom webhooks, OpenAI assistants, Twilio/Resend automated cart recovery triggers.",
    expectedROI: "20%+ revenue boost through automated abandoned cart recovery, 60% customer support cost drop.",
    caseStudies: "Scaling Support with Generative AI",
    recommendedServices: "AI-Driven Conversion Systems"
  },
  { 
    name: "B2B Consulting", 
    icon: Building2, 
    desc: "High-ticket sales funnels. We automate your outbound outreach, calendar bookings, and client onboarding sequences.",
    highlight: "Scale your agency effortlessly",
    problems: "Manual client onboarding, lead data leakage, administrative scheduling friction, repetitive invoice preparation.",
    solutions: "Centralized lead routing CRM portals, automated onboarding forms, and unified Calendly booking pathways.",
    automations: "n8n webhooks connecting HubSpot/Notion/Stripe, automated email templates, PDF proposal builders.",
    expectedROI: "Reclaim 20+ hours of manual administrative labor per week, zero lead dropouts.",
    caseStudies: "Enterprise Workflow CRM Automation",
    recommendedServices: "Intelligent Automation Hubs"
  }
];

export function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof premiumIndustries[number] | null>(null);

  return (
    <section className="py-16 relative overflow-hidden bg-background border-t border-border/20">
      {/* Premium Ambient Backgrounds */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-secondary border border-border text-sm font-semibold text-foreground tracking-wide uppercase"
          >
            Specialized Niches
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-foreground"
          >
            Industries I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Transform</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            I don&apos;t build generic software. I engineer highly specialized systems designed to solve the exact operational bottlenecks inherent to your specific industry. Click a card to inspect blueprint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumIndustries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedIndustry(industry)}
            >
              {/* Premium Glow on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative h-full flex flex-col p-8 bg-card/40 backdrop-blur-xl border border-border/60 hover:border-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] rounded-3xl transition-all duration-500 hover:-translate-y-1">
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <industry.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                    {industry.highlight}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {industry.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {industry.desc}
                </p>

                <div className="pt-6 border-t border-border/50 mt-auto flex justify-between items-center text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  <span>View Industry Blueprint</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expandable Industry Details Dialog */}
      <AnimatePresence>
        {selectedIndustry && (
          <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <selectedIndustry.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{selectedIndustry.name} Solutions</h3>
                    <p className="text-[10px] text-primary uppercase font-bold tracking-wider">{selectedIndustry.highlight}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid content */}
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary border border-border/40 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Core Industry Problems
                    </h4>
                    <p className="text-xs text-foreground/80 leading-relaxed">{selectedIndustry.problems}</p>
                  </div>

                  <div className="bg-secondary border border-border/40 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      Engineered Solutions
                    </h4>
                    <p className="text-xs text-foreground/80 leading-relaxed">{selectedIndustry.solutions}</p>
                  </div>
                </div>

                <div className="bg-secondary border border-border/40 p-4 rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5" />
                    Target Automation Pipelines
                  </h4>
                  <p className="text-xs text-foreground/80 leading-relaxed">{selectedIndustry.automations}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary border border-border/40 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <BarChart className="w-3.5 h-3.5 text-primary" />
                      Expected ROI Metrics
                    </h4>
                    <p className="text-xs text-foreground/95 font-semibold leading-relaxed">{selectedIndustry.expectedROI}</p>
                  </div>

                  <div className="bg-secondary border border-border/40 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                      Featured Case Study
                    </h4>
                    <p className="text-xs text-foreground/90 leading-relaxed">{selectedIndustry.caseStudies}</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-border/20 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <span>Recommended:</span>
                  <span className="font-bold text-foreground">{selectedIndustry.recommendedServices}</span>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedIndustry(null)}
                    className="flex-1 sm:flex-initial py-2.5 px-5 rounded-xl border border-border text-xs font-bold hover:bg-muted text-foreground transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const text = `Hi Kumail! I'm interested in discussing automation solutions specifically for ${selectedIndustry.name}.`;
                      window.open(`https://wa.me/916006121193?text=${encodeURIComponent(text)}`, "_blank");
                    }}
                    className="flex-1 sm:flex-initial py-2.5 px-5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    Discuss Solution
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
