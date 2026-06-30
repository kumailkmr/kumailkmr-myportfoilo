"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code, Zap, ShieldCheck } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      title: "Business-Focused",
      description: "Technology should serve the business, not the other way around. Every line of code is written with ROI and efficiency in mind.",
      icon: <BriefcaseBusiness className="w-6 h-6 text-primary" />
    },
    {
      title: "Quality Engineering",
      description: "Robust architectures, clean codebases, and maintainable systems that scale seamlessly as your operations grow.",
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      title: "Performance First",
      description: "Lightning-fast applications and highly optimized automation flows that ensure zero downtime and perfect user experiences.",
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      title: "Long-Term Support",
      description: "I build enduring partnerships, offering continuous optimization and strategic guidance long after the initial launch.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Core Working <span className="text-primary">Principles</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            The foundation of every project I undertake, ensuring consistent delivery of high-tier software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover-lift flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
