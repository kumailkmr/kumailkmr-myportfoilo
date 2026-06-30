"use client";

import { motion } from "framer-motion";
import { Search, Map, Cpu, Rocket } from "lucide-react";

const processSteps = [
  { 
    id: "01", 
    title: "Deep-Dive Audit", 
    desc: "We don't start with code. We start by auditing your current operational bottlenecks, identifying where you are losing time and revenue, and defining exactly how technology can solve it.",
    icon: Search
  },
  { 
    id: "02", 
    title: "Strategic Architecture", 
    desc: "I map out the exact ROI of the proposed solution. You get a clear, transparent roadmap detailing the data models, AI integrations, and the automation flows that will run your business.",
    icon: Map
  },
  { 
    id: "03", 
    title: "Rapid Implementation", 
    desc: "Development happens fast. Using modern frameworks and scalable cloud infrastructure, I build, test, and integrate your new systems without disrupting your day-to-day operations.",
    icon: Cpu
  },
  { 
    id: "04", 
    title: "Scale & Optimize", 
    desc: "Once deployed, we don't just walk away. We monitor system performance, optimize AI responses based on real-world data, and scale the infrastructure as your business grows.",
    icon: Rocket
  }
];

export function Process() {
  return (
    <section className="py-32 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The <span className="text-primary">Partner</span> Framework</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A strategic, transparent approach to delivering enterprise-grade solutions. You are not just hiring a developer; you are gaining a technical partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Connector Line (Desktop only) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}
              
              <div className="relative z-10 bg-background/60 backdrop-blur-md border border-border/50 p-8 rounded-3xl h-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <span className="text-6xl font-black text-muted/30 absolute top-6 right-6 select-none">{step.id}</span>
                
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
