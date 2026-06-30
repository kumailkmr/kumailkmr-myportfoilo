"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow Solutions",
    content: "The custom AI integration completely transformed our customer service. We saw a 50% reduction in response times and our CSAT scores have never been higher.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director of Operations, GlobalLogistics",
    content: "An absolute professional. The dashboard they built gave us real-time visibility into our supply chain that we didn't think was possible within our budget.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Boutique Retreats",
    content: "The booking platform is flawless. Our direct bookings increased by 40% in the first month because the user experience is just so smooth.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here is what business leaders say about working with me.
            <br/>
            <span className="text-xs text-primary uppercase tracking-wider">(Demo Data)</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/20 text-primary font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-muted-foreground">&quot;{testimonial.content}&quot;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
