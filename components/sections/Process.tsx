"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery", desc: "Understanding your business goals, pain points, and technical requirements." },
  { id: "02", title: "Strategy", desc: "Formulating a scalable architecture and precise project roadmap." },
  { id: "03", title: "Design", desc: "Creating intuitive UI/UX and finalizing the data models." },
  { id: "04", title: "Development", desc: "Engineering the solution using clean, modern, and performant code." },
  { id: "05", title: "Testing", desc: "Rigorous QA to ensure flawless execution under load." },
  { id: "06", title: "Deployment", desc: "Seamless launch into your production environment." },
  { id: "07", title: "Support", desc: "Ongoing maintenance and optimization to ensure long-term success." },
];

export function Process() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Development Process</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A systematic, transparent approach to delivering enterprise-grade solutions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 w-full" />
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center -translate-x-1/2 z-10">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="flex-1 w-full pl-12 md:pl-0">
              <div className={`bg-muted/30 p-6 rounded-2xl border border-border ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <span className="text-primary font-bold text-xl mb-2 block">{step.id}</span>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
