"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Workflow, Code, CheckCircle2, Zap, X, ShieldAlert, Sparkles, Clock, HelpCircle, Layers } from "lucide-react";
import { CALENDLY_LINK } from "@/config/socials";
import { Button } from "@/components/ui/button";

const premiumServices = [
  {
    id: "01",
    name: "Intelligent Automation Hubs",
    tagline: "Stop Doing Manual Data Entry.",
    description: "I connect your fragmented software (CRMs, Email, Billing) into a seamless, autonomous engine. Eliminate human error and reclaim hundreds of hours a month.",
    icon: Workflow,
    color: "from-blue-500 to-indigo-600",
    outcomes: [
      "Save 40+ hours of staff time weekly",
      "Zero manual data entry between tools",
      "Automated invoice & contract generation",
    ],
    tech: ["n8n", "Make", "Zapier", "Python"],
    // Extended parameters
    benefits: "Save hours of copy-pasting, get real-time client record updates across all boards, and automatically dispatch invoices after every sale.",
    problems: "Mismatched spreadsheets, manual onboarding delays, human typing errors, delayed proposals.",
    features: ["Bi-directional CRM sync", "Automated contract & PDF creation", "Multi-path custom API retry logic", "Slack/Teams notifications"],
    workflow: "API Audit → Trigger mapping → Code-level scripting → Beta review → Production deployment.",
    pricing: "Custom packages starting from $2,500 USD / ₹1,80,000 INR.",
    timeline: "2 - 4 weeks standard delivery.",
    faqs: [
      { q: "Do I have to pay monthly software fees?", a: "No. I prioritize self-hosted open-source tools like n8n which reduces your subscription overhead to near zero." },
      { q: "Can we add new apps later?", a: "Yes. The system is modular and written in clean JS, allowing you to connect extra APIs easily." }
    ],
    caseStudies: "Enterprise Workflow CRM Automation"
  },
  {
    id: "02",
    name: "AI-Driven Conversion Systems",
    tagline: "Turn Traffic into Qualified Meetings 24/7.",
    description: "Custom AI agents and WhatsApp assistants that engage your prospects instantly, qualify leads based on your strict criteria, and automatically book them into your calendar.",
    icon: Bot,
    color: "from-emerald-400 to-teal-600",
    outcomes: [
      "Instant 24/7 lead response times",
      "Automated lead qualification & booking",
      "Pre-trained on your specific business data",
    ],
    tech: ["OpenAI", "LangChain", "WhatsApp API", "Pinecone"],
    // Extended parameters
    benefits: "Engage warm leads instantly, reply outside of standard business hours, filter prospects by budget, and push booking dates to calendar slots automatically.",
    problems: "Lost leads due to delayed replies, time spent chasing cold prospects, scheduling friction.",
    features: ["RAG knowledge base querying", "Conversational qualifying pathways", "WhatsApp & SMS API configurations", "Calendly scheduling API sync"],
    workflow: "Knowledge ingestion → Prompt scoping → Bot tree engineering → API integration → Launch review.",
    pricing: "Custom packages starting from $5,000 USD / ₹3,80,000 INR.",
    timeline: "4 - 8 weeks delivery.",
    faqs: [
      { q: "Does the AI hallucinate or make up false info?", a: "No. I write custom system boundaries and use vector databases to restrict the AI to your official data." },
      { q: "Can it transfer to a human?", a: "Yes. The assistant flags complex questions and instantly alerts your sales team via SMS or Slack." }
    ],
    caseStudies: "Scaling Support with Generative AI"
  },
  {
    id: "03",
    name: "Bespoke Enterprise Portals",
    tagline: "Your Business, Your Software.",
    description: "Off-the-shelf software is bloated and forces you to adapt to it. I build bespoke SaaS platforms and internal dashboards engineered specifically for your unique operational workflows.",
    icon: Code,
    color: "from-purple-500 to-fuchsia-600",
    outcomes: [
      "Customized strictly to your processes",
      "Real-time analytics and KPI visibility",
      "Enterprise-grade security and role access",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    // Extended parameters
    benefits: "Ditch bloated subscription portals, own 100% of your source code, and run client portals that load in milliseconds.",
    problems: "Rigid templates, high seat-based monthly fees, slow UI response times, insecure data shares.",
    features: ["Serverless PostgreSQL databases", "Supabase auth layers with secure policies", "Real-time metrics charts", "Stripe payment checkouts"],
    workflow: "UI wireframing → Database schema design → Full-stack scripting → Webhook configuration → Serverless deployment.",
    pricing: "Bespoke engineering starting from $7,500 USD / ₹5,50,000 INR.",
    timeline: "1 - 3 months delivery.",
    faqs: [
      { q: "Who owns the code after delivery?", a: "You do. You get full ownership of the GitHub repository and all deployment access credentials." },
      { q: "How does the hosting scale?", a: "I deploy on serverless platforms (like Vercel and Supabase) meaning your hosting costs scale dynamically with your actual traffic." }
    ],
    caseStudies: "Next.js SaaS Platform Case Study"
  }
];

export function Services() {
  const [activeService, setActiveService] = useState<typeof premiumServices[number] | null>(null);

  return (
    <section className="pt-12 pb-16 relative overflow-hidden bg-background">
      {/* Subtle Premium Background Layers */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.15] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Enterprise Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary"
          >
            <Zap className="w-4 h-4 mr-2" />
            High-ROI Solutions
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-foreground leading-[1.1]"
          >
            Engineering Systems That <br className="hidden md:block" /> <span className="text-primary">Scale Revenue</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I don&apos;t just sell code. I partner with businesses to eliminate operational bottlenecks, automate growth, and build enterprise-grade software that drives measurable returns. Click a solution to inspect details.
          </motion.p>
        </div>

        {/* Stacked Service Pillars */}
        <div className="space-y-12">
          {premiumServices.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative"
            >
              {/* Premium Glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-8 md:p-12 bg-card/40 backdrop-blur-2xl border border-border/50 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] overflow-hidden">
                
                {/* Left Side: Context */}
                <div className="flex-1 lg:max-w-lg z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black text-muted/30 dark:text-muted-foreground/10">{service.id}</span>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-[14px] flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{service.name}</h3>
                  <h4 className="text-lg font-semibold text-primary mb-6">{service.tagline}</h4>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-md text-sm font-medium border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Outcomes */}
                <div className="flex-1 w-full relative z-10">
                  <div className="bg-background/80 dark:bg-black/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 lg:p-10 shadow-inner">
                    <h5 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">Direct Business Outcomes</h5>
                    <ul className="space-y-6">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-lg text-foreground/90 font-medium leading-tight">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-10 pt-8 border-t border-border/50 flex flex-wrap gap-3">
                      <Button
                        onClick={() => setActiveService(service)}
                        variant="outline"
                        className="flex-1 text-xs font-bold rounded-xl border-primary/20 hover:bg-muted text-foreground"
                      >
                        Inspect Blueprint
                      </Button>
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full group/btn h-12 rounded-xl bg-primary text-white text-xs font-bold hover:scale-[1.02] transition-all">
                          Discuss This Solution
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expandable Service Details Dialog */}
      <AnimatePresence>
        {activeService && (
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
                    <activeService.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{activeService.name} Blueprint</h3>
                    <p className="text-[10px] text-primary uppercase font-bold tracking-wider">{activeService.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contents */}
              <div className="space-y-4 text-sm text-foreground/80">
                
                {/* Benefits & Problems */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary border border-border/40 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-emerald-500 dark:text-emerald-400 uppercase mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Client Benefits
                    </h4>
                    <p className="text-xs leading-relaxed">{activeService.benefits}</p>
                  </div>

                  <div className="bg-secondary border border-border/40 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-red-500 dark:text-red-400 uppercase mb-2 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Problems Solved
                    </h4>
                    <p className="text-xs leading-relaxed">{activeService.problems}</p>
                  </div>
                </div>

                {/* Features & Workflow */}
                <div className="bg-secondary border border-border/40 p-4 rounded-2xl space-y-3">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Key Architecture Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs">
                    {activeService.features.map((feat: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary border border-border/40 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-foreground uppercase mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      Workflow & Delivery Timeline
                    </h4>
                    <p className="text-xs font-semibold text-foreground/90 leading-relaxed mb-2">{activeService.timeline}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{activeService.workflow}</p>
                  </div>

                  <div className="bg-secondary border border-border/40 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-foreground uppercase mb-1.5 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                      Pricing Guidelines
                    </h4>
                    <p className="text-xs font-semibold text-foreground/90 leading-relaxed mb-2">{activeService.pricing}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">Budgets vary depending on API loads and endpoints count.</p>
                  </div>
                </div>

                {/* FAQs */}
                <div className="bg-secondary border border-border/40 p-4 rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Frequently Asked Questions</h4>
                  {activeService.faqs.map((faq, idx: number) => (
                    <div key={idx} className="space-y-1 text-xs">
                      <p className="font-bold text-foreground flex items-center gap-1">
                        <span>Q:</span> {faq.q}
                      </p>
                      <p className="text-muted-foreground pl-3">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-border/20 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <span>Case Study:</span>
                  <span className="font-bold text-foreground">{activeService.caseStudies}</span>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveService(null)}
                    className="flex-1 sm:flex-initial py-2.5 px-5 rounded-xl border border-border text-xs font-bold hover:bg-muted text-foreground transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const text = `Hi Kumail! I'm interested in the "${activeService.name}" solution package.`;
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
