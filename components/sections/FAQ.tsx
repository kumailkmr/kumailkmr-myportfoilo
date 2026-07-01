"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is your pricing model for custom systems?",
    answer: "I offer clear, fixed-price contracts for scoped milestones, ensuring you pay exactly what is agreed upon. AI automations typically start at $3,500 USD / ₹2,80,000 INR. I do not charge high monthly agency retainers."
  },
  {
    question: "How long does a typical build timeline take?",
    answer: "A standard WhatsApp automation or CRM connector takes 2 - 4 weeks. High-performance Next.js portals and complex multi-agent LangGraph integrations range from 6 - 12 weeks from visual design sign-off."
  },
  {
    question: "Do you offer post-deployment maintenance and updates?",
    answer: "Yes. Every custom software integration includes a complimentary 30-day monitoring period. I also offer ongoing maintenance retainers covering security audits, API updates, and performance optimization."
  },
  {
    question: "Where is our database and software hosted?",
    answer: "I prioritize deploying systems on serverless architectures like Vercel and Supabase (PostgreSQL), keeping your cloud hosting bills near zero. You retain 100% ownership of all hosting account setups."
  },
  {
    question: "How do you handle API credential security?",
    answer: "I follow strict SOC2 aligned data practices. API keys and database credentials are stored in encrypted environment parameter vaults, ensuring no third parties can access your raw business data."
  },
  {
    question: "Which AI models do you use to train agents?",
    answer: "I leverage leading LLMs (OpenAI's GPT-4, Anthropic's Claude 3.5, and Meta's Llama 3) based on the exact reasoning complexity required. I use vector embeddings (Pinecone) to ground the models."
  },
  {
    question: "Can these automations scale as our traffic grows?",
    answer: "Absolutely. By utilizing serverless functions (like AWS Lambdas and Next.js Server Actions), the infrastructure scales dynamically to handle thousands of concurrent queries without performance drops."
  },
  {
    question: "How do you verify and measure project ROI?",
    answer: "Before starting, I perform a deep-dive workflow audit to calculate current operational hours lost. I align development milestones with specific KPIs, like dropping support tickets by 50% or recapturing after-hours leads."
  },
  {
    question: "Can you connect APIs that do not have pre-built integrations?",
    answer: "Yes. If your business tools lack standard connectors, I develop bespoke Express.js endpoints and custom webhook listeners to bridge databases securely."
  },
  {
    question: "Do you build custom CRM dashboards?",
    answer: "Yes, I build visual sales pipelines, project trackers, client portals, and invoice managers with Next.js and Tailwind, offering a modern alternative to bloated off-the-shelf software."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider"
          >
            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
            General Q&A
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground">Frequently Asked Questions</h2>
          <p className="text-base text-muted-foreground">
            Clear technical answers regarding integrations, pricing, scalability, and security.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-2xl px-5 bg-card/25 backdrop-blur-md hover:border-primary/20 transition-all"
              >
                <AccordionTrigger className="text-left text-sm font-bold text-foreground py-4 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs leading-relaxed pb-4 pt-1 border-t border-border/20 mt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
