"use client";

import { motion } from "framer-motion";
import { Network, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import { CALENDLY_LINK } from "@/config/socials";

const advantages = [
  {
    title: "Zero Agency Bloat",
    desc: "Agencies charge you for account managers, office space, and junior developers. You work directly with me—a senior architect—meaning faster execution, clearer communication, and higher ROI.",
    icon: Zap,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Business-First Architecture",
    desc: "I don't just write code for the sake of it. Every system, automation, and AI agent I build is strictly engineered to reduce your operational costs or multiply your revenue.",
    icon: Network,
    color: "from-emerald-400 to-teal-600"
  },
  {
    title: "Enterprise-Grade Reliability",
    desc: "From robust error handling to SOC2-compliant data practices, the infrastructure I deploy for your business is designed to scale securely without breaking under pressure.",
    icon: ShieldCheck,
    color: "from-purple-500 to-fuchsia-600"
  }
];

export function WhyMe() {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-bold uppercase tracking-widest text-primary mb-6"
          >
            The Independent Advantage
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground"
          >
            Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Kumail?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Choosing the right technical partner is the difference between a stalled project and market dominance. Here is why high-growth companies hire me instead of traditional agencies.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: The Big Metric */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-[2.5rem] blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative h-full bg-card/40 backdrop-blur-xl border border-border/50 p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-center text-center group-hover:border-primary/30 transition-colors">
              <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 mb-4 tracking-tighter">
                100%
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Delivery Rate</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                I do not take on projects I cannot execute perfectly. Every single engagement is delivered on time, within budget, and engineered to spec.
              </p>
              <a 
                href={CALENDLY_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest"
              >
                Discuss Your Project <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: The Advantages */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative bg-card/20 hover:bg-card/40 backdrop-blur-md border border-border/40 hover:border-border p-8 rounded-3xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.color} p-[1px] shadow-lg flex-shrink-0`}>
                    <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center">
                      <adv.icon className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-3">{adv.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
