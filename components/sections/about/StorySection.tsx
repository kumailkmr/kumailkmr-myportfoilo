"use client";

import { motion } from "framer-motion";
import { User, Wrench, Users, Target } from "lucide-react";
import { VisualComposition } from "./VisualComposition";

export function StorySection() {
  const narrativeBlocks = [
    {
      icon: <User className="w-6 h-6 text-primary" />,
      title: "Who I Am",
      content: "I'm a Senior Frontend Engineer and AI Automation expert. I blend deep technical expertise with a strategic business mindset to deliver software that doesn't just look good, but fundamentally improves how businesses operate."
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: "What I Build",
      content: "From intelligent WhatsApp ordering systems and automated appointment schedulers to full-scale SaaS applications. I build custom, scalable solutions designed to reduce overhead and increase conversion rates."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Who I Help",
      content: "I partner with Restaurants, Healthcare Clinics, CA Firms, Real Estate Agencies, and Service-based SMEs who are ready to modernize their workflows and eliminate manual bottlenecks."
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Why Businesses Choose Me",
      content: "No agency overhead, direct developer access, and a relentless focus on ROI. I don't just write code; I architect solutions that solve real-world operational challenges."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="space-y-12">
            {narrativeBlocks.map((block, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group flex gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {block.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{block.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {block.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:pl-8">
            <VisualComposition />
          </div>

        </div>
      </div>
    </section>
  );
}
