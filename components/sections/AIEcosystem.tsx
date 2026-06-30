"use client";

import { motion } from "framer-motion";
import { Bot, Mic, FileText, Database, Cpu, Code2, Network } from "lucide-react";

const expertisePillars = [
  {
    id: "agents",
    title: "Autonomous AI Agents & Chatbots",
    description: "Building resilient, multi-agent workflows with stateful orchestration and tool-calling capabilities.",
    icon: Bot,
    color: "from-blue-500 to-indigo-600",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    technologies: ["LangGraph", "CrewAI", "Mastra", "Tool-Calling"],
    bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"
  },
  {
    id: "voice",
    title: "Real-Time Voice AI Agents",
    description: "Engineering low-latency conversational AI with WebRTC streaming, interruption management, and native Speech-to-Speech.",
    icon: Mic,
    color: "from-emerald-400 to-teal-600",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
    technologies: ["Vapi", "Retell AI", "WebRTC", "S2S Models"],
    bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-background to-background"
  },
  {
    id: "documents",
    title: "AI-Driven Document Generation",
    description: "Parsing and structuring unpredictable LLM outputs into strictly typed schemas for programmatic PDF and report generation.",
    icon: FileText,
    color: "from-purple-500 to-fuchsia-600",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
    technologies: ["Zod / JSON Schema", "Raw Buffers", "PDF Rendering", "Structured Outputs"],
    bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"
  },
  {
    id: "integration",
    title: "Intelligent Full-Stack Integration",
    description: "Connecting advanced RAG architectures with contextual embeddings, high-performance vector databases, and streaming UIs.",
    icon: Database,
    color: "from-orange-400 to-rose-600",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]",
    technologies: ["pgvector", "MongoDB Vector", "RAG Pipelines", "Streaming UI"],
    bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-900/20 via-background to-background"
  }
];

export function AIEcosystem() {
  return (
    <section className="py-24 relative bg-background overflow-hidden border-t border-border/50">
      {/* Ambient glowing background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border text-sm font-semibold text-primary mb-6"
          >
            <Cpu className="w-4 h-4" />
            <span>Deep Tech Stack</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            AI Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I don&apos;t just make API calls. I engineer complex, autonomous systems that handle edge cases, maintain state, and execute flawlessly at scale.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {expertisePillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`group relative rounded-3xl border border-border/50 bg-card/20 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 ${pillar.glowColor}`}
            >
              {/* Dynamic Background Pattern */}
              <div className={`absolute inset-0 ${pillar.bgPattern} opacity-50 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative p-8 md:p-10 h-full flex flex-col z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center">
                      <pillar.icon className="w-7 h-7 text-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <Network className="w-6 h-6 text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-8 flex-grow">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/30">
                  {pillar.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 group-hover:border-primary/20 transition-colors"
                    >
                      <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
