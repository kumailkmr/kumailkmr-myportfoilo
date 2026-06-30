"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much do projects cost?",
    answer: "Project costs vary based on complexity, scale, and timeline. I offer tailored quotes after a free initial consultation to ensure you only pay for exactly what you need."
  },
  {
    question: "How long does development take?",
    answer: "A standard landing page or simple automation can take 2-4 weeks. Complex SaaS platforms or custom enterprise software typically range from 2-4 months."
  },
  {
    question: "Do you offer maintenance?",
    answer: "Yes, I offer ongoing retainer packages for maintenance, security updates, and iterative feature development to ensure your software remains cutting-edge."
  },
  {
    question: "Can you integrate AI into existing systems?",
    answer: "Absolutely. I specialize in integrating LLMs (like OpenAI) into existing CRMs, customer support platforms, and internal dashboards using secure APIs."
  },
  {
    question: "Do you build custom solutions from scratch?",
    answer: "Yes, I architect and develop fully custom solutions tailored to your exact business requirements, avoiding the limitations of out-of-the-box software."
  }
];

export function FAQ() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Clear answers to common questions about working together.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
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
