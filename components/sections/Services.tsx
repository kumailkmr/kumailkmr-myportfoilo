"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Workflow, Code, CheckCircle2, Zap } from "lucide-react";
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
    tech: ["n8n", "Make", "Zapier", "Python"]
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
    tech: ["OpenAI", "LangChain", "WhatsApp API", "Pinecone"]
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
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"]
  }
];

export function Services() {
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
            I don&apos;t just sell code. I partner with businesses to eliminate operational bottlenecks, automate growth, and build enterprise-grade software that drives measurable returns.
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
                    
                    <div className="mt-10 pt-8 border-t border-border/50">
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full group/btn h-12 rounded-xl border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all">
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
    </section>
  );
}
