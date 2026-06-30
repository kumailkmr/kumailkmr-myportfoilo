"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "Business-focused solutions",
    "Scalable architecture",
    "Modern technology stack",
    "Clean, maintainable code",
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden bg-muted border border-border">
            {/* Placeholder for Profile Image */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-br from-muted to-background">
              [Professional Portrait Placeholder]
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Bridging the gap between <span className="text-primary">Business</span> and <span className="text-secondary">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            I specialize in transforming complex business challenges into elegant, scalable digital solutions. With a strong focus on AI automation, custom software, and high-performance SaaS applications, my mission is to empower businesses to operate more efficiently.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you need a custom CRM, an intelligent AI customer support assistant, or a complete digital transformation, I bring engineering excellence and strategic thinking to every project.
          </p>
          
          <ul className="space-y-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-primary mr-4" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
