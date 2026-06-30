"use client";

import { motion } from "framer-motion";

export function InteractiveTimeline() {
  const milestones = [
    { title: "Mastering Modern Engineering", year: "2019" },
    { title: "Building Scalable Business Websites", year: "2021" },
    { title: "Developing Full-Stack SaaS Applications", year: "2023" },
    { title: "Pioneering AI Automation for SMEs", year: "2024" },
    { title: "Scaling Enterprise Digital Transformation", year: "Present" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            The Evolution of <span className="text-primary">Value</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            A continuous journey of adapting the latest technologies to solve increasingly complex business challenges.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-12 relative">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${isEven ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-1 md:top-auto w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20 shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10" />
                  
                  {/* Content Box */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                    <div className="glass-panel p-6 rounded-2xl hover-lift inline-block w-full">
                      <span className="text-primary text-sm font-bold tracking-wider uppercase mb-1 block">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {milestone.title}
                      </h3>
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
