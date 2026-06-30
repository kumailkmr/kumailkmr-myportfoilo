"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Network } from "lucide-react";

const milestones = [
  { 
    title: "Full-Stack SaaS Architecture", 
    year: "2023",
    description: "Engineered scalable, high-performance web applications using modern frameworks like Next.js and React. Focused on building robust foundations for high-traffic business platforms.",
    icon: Code2,
    color: "from-blue-500 to-indigo-600"
  },
  { 
    title: "Pioneering AI Automation", 
    year: "2024",
    description: "Integrated generative AI into core business workflows. Deployed autonomous customer support agents and complex data-extraction systems to reduce operational overhead.",
    icon: Cpu,
    color: "from-emerald-400 to-teal-600"
  },
  { 
    title: "Advanced Autonomous Agents", 
    year: "2025",
    description: "Designed sophisticated multi-agent ecosystems with frameworks like LangGraph. Built real-time voice AI agents (Speech-to-Speech) capable of handling live client interactions.",
    icon: Sparkles,
    color: "from-purple-500 to-fuchsia-600"
  },
  { 
    title: "Enterprise Systems Architecture", 
    year: "Present",
    description: "Partnering directly with founders to architect end-to-end intelligent systems. Blending custom full-stack development with stateful AI workflows to drive massive ROI.",
    icon: Network,
    color: "from-orange-400 to-rose-600"
  }
];

export function InteractiveTimeline() {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-y border-border/20">
      {/* Premium ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-bold uppercase tracking-widest text-primary mb-6"
          >
            Track Record
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground"
          >
            The Evolution of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Value</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A relentless progression of adapting the latest bleeding-edge technologies to solve increasingly complex business challenges.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/50">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-purple-500 to-transparent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-16 md:space-y-24 relative">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${isEven ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* Glowing Timeline Node */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_rgba(37,99,235,0.6)] z-20" />
                  
                  {/* Content Glass Panel */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                    <div className="group relative bg-card/20 backdrop-blur-xl border border-border/40 hover:border-primary/40 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden w-full">
                      
                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${milestone.color} p-[1px] shadow-lg mb-6 flex-shrink-0`}>
                          <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center">
                            <milestone.icon className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>

                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/80 border border-border text-primary text-sm font-bold tracking-widest uppercase mb-4">
                          {milestone.year}
                        </span>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {milestone.description}
                        </p>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
