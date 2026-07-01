"use client";

import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";
import { CALENDLY_LINK } from "@/config/socials";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const objections = [
  {
    question: "Do I need to be highly technical to manage this?",
    answer: "Absolutely not. I engineer the complexity under the hood so that the interface you (and your team) use is simpler than what you currently have. If you can use an iPhone, you can run the systems I build."
  },
  {
    question: "Will this disrupt my current day-to-day operations?",
    answer: "No. All architecture, development, and testing happen in an isolated staging environment. I only deploy and integrate when the system is 100% verified and you are fully trained."
  },
  {
    question: "Why shouldn't I just hire a big agency?",
    answer: "Agencies have massive overhead, bloated communication chains, and often pass the actual work down to junior developers. With me, you get direct, 1-on-1 access to a senior engineer who executes fast."
  },
  {
    question: "How long does a typical implementation take?",
    answer: "Depending on the scope, an intelligent automation hub or custom CRM takes anywhere from 3 to 8 weeks to deploy. I provide a strict, transparent roadmap before we even sign a contract."
  },
  {
    question: "Is my company's data and client information secure?",
    answer: "Absolutely. I implement enterprise-grade security protocols, including end-to-end encryption and role-based access controls. You retain 100% ownership of your data, and I adhere strictly to compliance standards like HIPAA or GDPR when required."
  },
  {
    question: "What happens after the system is built? Do you just leave?",
    answer: "No. My Partner Framework includes a 'Scale & Optimize' phase. I provide ongoing maintenance, performance monitoring, and rapid updates to ensure the system scales smoothly as your business grows."
  },
  {
    question: "Do you use generic templates to build these?",
    answer: "Never. Off-the-shelf software is what causes bottlenecks in the first place. Every line of code and every automation flow is engineered entirely from scratch to map perfectly to your unique operational needs."
  }
];

export function WorkCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20 border-t border-border/20">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* FAQ Section (Objection Handling) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Common <span className="text-primary">Questions</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              You are investing in a core business asset. Here are the answers to the questions you probably have right now.
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-10 shadow-sm">
            <Accordion className="w-full">
              {objections.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/30 px-2">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                    <div className="flex items-center gap-4">
                      <HelpCircle className="w-5 h-5 text-primary/50 flex-shrink-0" />
                      {item.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-9 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* High-Ticket CTA (Scarcity & Action) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-purple-600/20 z-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-10 dark:opacity-5 z-0" />
          
          <div className="relative z-10 p-10 md:p-16 text-center border border-border/50 rounded-3xl bg-background/40 backdrop-blur-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 border border-red-500/20">
              Limited Availability
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
              Ready to build your engine?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              To ensure absolute quality and dedicated focus, I only partner with <strong className="text-foreground">2 new clients per month</strong>. If you are ready to eliminate bottlenecks and scale, let&apos;s talk.
            </p>
            
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl group hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                Book a Strategy Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4 font-medium">
              100% Free Consultation. No high-pressure sales.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
