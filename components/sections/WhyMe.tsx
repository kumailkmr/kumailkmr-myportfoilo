"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Business-First Approach",
    desc: "I don't just write code; I build solutions designed to increase your revenue and decrease operational costs."
  },
  {
    title: "Scalable Architecture",
    desc: "Systems engineered to grow with your business, handling increased traffic and data seamlessly."
  },
  {
    title: "Responsive Communication",
    desc: "Direct access to the developer. No account managers or middlemen. Fast, transparent updates."
  },
  {
    title: "Long-Term Partnership",
    desc: "I provide ongoing support, maintenance, and iterative improvements to ensure sustained success."
  }
];

export function WhyMe() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With Me?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choosing the right engineering partner can be the difference between a stalled project and a market-leading product. Here is what you can expect when working with me.
          </p>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-1">{reason.title}</h4>
                  <p className="text-muted-foreground">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative h-full min-h-[400px] bg-muted/30 rounded-3xl border border-border p-8 flex items-center justify-center">
          <div className="text-center">
             <div className="text-6xl font-bold text-primary mb-2">100%</div>
             <div className="text-xl font-medium text-foreground">Project Delivery Rate</div>
             <p className="text-muted-foreground mt-4 max-w-sm mx-auto">
               Every project is delivered on time, within budget, and exceeding expectations.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
