"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const problems = [
  {
    issue: "Slow customer responses leading to missed leads",
    solution: "Instant AI chatbots that engage prospects 24/7",
  },
  {
    issue: "Manual, repetitive data entry and disjointed workflows",
    solution: "Custom business automation integrating all your tools",
  },
  {
    issue: "Lost sales opportunities due to disorganized operations",
    solution: "Bespoke CRM systems providing clear pipeline visibility",
  },
  {
    issue: "Poor customer support scaling linearly with costs",
    solution: "WhatsApp AI assistants resolving common queries instantly",
  },
];

export function ProblemsSolved() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Problems I Solve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I don&apos;t just write code; I eliminate the friction points holding your business back from scaling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-4 p-6 bg-background rounded-2xl border border-border shadow-sm"
            >
              <div className="flex-1 flex items-center gap-4 text-destructive/80">
                <AlertCircle className="w-8 h-8 flex-shrink-0" />
                <p className="font-medium text-lg text-foreground">{item.issue}</p>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 flex items-center gap-4 text-primary">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                <p className="font-medium text-lg text-foreground">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
