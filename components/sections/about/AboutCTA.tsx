"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CALENDLY_LINK } from "@/config/socials";

export function AboutCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
      <div className="absolute inset-0 bg-noise opacity-50" />
      
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-panel p-10 md:p-16 rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(37,99,235,0.15)]"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something That Makes Your Business More <span className="text-primary">Efficient</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you need AI automation, a custom web application, or a scalable software solution, I'm ready to help transform your ideas into reliable digital products.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1 duration-300 w-full sm:w-auto"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link 
              href="/work" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-secondary text-secondary-foreground font-medium text-lg hover:bg-secondary/80 transition-colors w-full sm:w-auto hover:-translate-y-1 duration-300"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
