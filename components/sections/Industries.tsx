"use client";

import { motion } from "framer-motion";
import { 
  Building2, HeartPulse, Home, Scale, Cloud, ShoppingBag, ArrowRight
} from "lucide-react";
import { CALENDLY_LINK } from "@/config/socials";

const premiumIndustries = [
  { 
    name: "Healthcare & Clinics", 
    icon: HeartPulse, 
    desc: "HIPAA-compliant automation. We implement automated patient scheduling, secure telehealth portals, and AI triage systems to reduce administrative load.",
    highlight: "Reduce no-shows by 40%"
  },
  { 
    name: "Real Estate & Agencies", 
    icon: Home, 
    desc: "Never miss a lead. Automated lead capture from property listings, instant WhatsApp viewing schedules, and centralized broker dashboards.",
    highlight: "Engage leads in < 30 seconds"
  },
  { 
    name: "Law Firms & Finance", 
    icon: Scale, 
    desc: "Secure document management, client intake automation, and billing workflows that keep your practice strictly compliant and heavily efficient.",
    highlight: "Zero data leakage"
  },
  { 
    name: "SaaS & Tech Startups", 
    icon: Cloud, 
    desc: "Rapid MVP architecture, scalable cloud foundations, and custom AI integrations that help you secure funding and scale aggressively.",
    highlight: "Enterprise-grade architecture"
  },
  { 
    name: "E-commerce & Retail", 
    icon: ShoppingBag, 
    desc: "Omnichannel inventory syncing, AI-driven product recommendations, and automated abandoned cart recovery via SMS and Email.",
    highlight: "Boost revenue by 20%+"
  },
  { 
    name: "B2B Consulting", 
    icon: Building2, 
    desc: "High-ticket sales funnels. We automate your outbound outreach, calendar bookings, and client onboarding sequences.",
    highlight: "Scale your agency effortlessly"
  }
];

export function Industries() {
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
            I don&apos;t build generic software. I engineer highly specialized systems designed to solve the exact operational bottlenecks inherent to your specific industry.
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
              className="group relative"
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

                <div className="pt-6 border-t border-border/50 mt-auto">
                  <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    Discuss your industry
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
