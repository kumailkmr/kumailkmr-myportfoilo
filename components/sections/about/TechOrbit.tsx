"use client";

import { motion } from "framer-motion";

export function TechOrbit() {
  const technologies = [
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Supabase", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "OpenAI", category: "AI" },
    { name: "Claude", category: "AI" },
    { name: "LangChain", category: "AI" },
    { name: "n8n", category: "Automation" },
    { name: "Make", category: "Automation" },
    { name: "Zapier", category: "Automation" },
    { name: "Stripe API", category: "Integration" },
    { name: "Framer Motion", category: "Animation" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            The Technology <span className="text-primary">Ecosystem</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            A meticulously curated stack chosen for performance, scalability, and long-term reliability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center hover-lift cursor-default"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-xl" />
                
                <span className="font-semibold text-foreground relative z-10">{tech.name}</span>
                <span className="text-xs text-muted-foreground mt-1 relative z-10">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
