"use client";

import * as React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CALENDLY_LINK } from "@/config/socials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type Testimonial = {
  id: string;
  clientName: string;
  company: string;
  industry: string;
  service: string;
  rating: number;
  verified: boolean;
  initials: string;
  testimonial: string;
  website?: string;
};

// Keeping all existing real testimonials
const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    clientName: "The Royal Gift Gallery",
    company: "The Royal Gift Gallery",
    industry: "E-Commerce",
    service: "Business Website Development",
    rating: 5,
    verified: true,
    initials: "TR",
    testimonial: "Working with Kumail was incredibly smooth. He delivered a high-quality, professional e-commerce site that handles our inventory perfectly. The communication was excellent from start to finish, and the final result precisely matched our complex requirements.",
    website: "theroyalgiftgallery.com",
  },
  {
    id: "t2",
    clientName: "Al Buraaq",
    company: "Al Buraaq Overseas Consultancy",
    industry: "Consultancy",
    service: "Corporate Website Development",
    rating: 5,
    verified: true,
    initials: "AB",
    testimonial: "Kumail understood exactly what we needed for our corporate presence. The development process was well-organized, and the final website represents our consultancy perfectly. His technical expertise is evident in the fast, reliable performance of the site.",
    website: "alburaaqoverseasconsultancy.co.in",
  },
  {
    id: "t3",
    clientName: "Rehan Shetty",
    company: "Rehan Shetty (CA)",
    industry: "Finance",
    service: "Professional CA Website Development",
    rating: 5,
    verified: true,
    initials: "RS",
    testimonial: "I needed a professional online presence that built trust with my clients. The website was delivered on time, looks extremely premium, and the entire experience was highly professional. Kumail is reliable and very easy to work with.",
  },
  {
    id: "t4",
    clientName: "Abrar",
    company: "Learning Management SaaS",
    industry: "EdTech",
    service: "LMS Software",
    rating: 5,
    verified: true,
    initials: "AR",
    testimonial: "Building our LMS required complex architecture, but Kumail handled it with impressive technical skill. The platform is robust, the user experience is modern, and he provided excellent support even after delivery. Highly recommended for complex SaaS.",
  },
  {
    id: "t5",
    clientName: "SSOVA ROBERSTSON",
    company: "Real Estate",
    industry: "Real Estate",
    service: "AI Property Marketing Videos",
    rating: 5,
    verified: true,
    initials: "SR",
    testimonial: "The AI-generated property videos are visually stunning and have modernized how we present listings. Kumail was prompt, understood our brand standards, and delivered an exceptional solution that saves us hours of manual editing.",
  },
  {
    id: "t9",
    clientName: "RJ Tour and Travels",
    company: "RJ Tour and Travels",
    industry: "Travel",
    service: "AI Customer Support Assistant",
    rating: 5,
    verified: true,
    initials: "RJ",
    testimonial: "Our customers now have a much better experience with the AI assistant handling common travel inquiries. The bot is accurate, responds instantly, and Kumail made sure it integrated perfectly with our existing workflows.",
  },
  {
    id: "t10",
    clientName: "Al Buraaq Employment",
    company: "Al Buraaq Employment Services",
    industry: "Recruitment",
    service: "AI Recruitment Assistant",
    rating: 5,
    verified: true,
    initials: "AB",
    testimonial: "The custom AI assistant has significantly improved our organization and candidate screening process. Kumail understood our recruitment challenges and delivered an automation solution that is reliable, saving our team countless hours.",
  }
];

export function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Premium Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-bold uppercase tracking-widest text-foreground mb-6"
          >
            Verified Client Endorsements
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Don&apos;t just take my word for it. Here is what business owners, founders, and executives say after partnering with me.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            // eslint-disable-next-line react-hooks/refs
            plugins={[plugin.current]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {testimonialsData.map((t) => (
                <CarouselItem key={t.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-card/20 backdrop-blur-xl border border-border/50 hover:border-primary/40 rounded-3xl p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-card/40 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)] relative group">
                    
                    {/* Glowing Accent */}
                    <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors duration-500" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8 flex-1">
                      &quot;{t.testimonial}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-border/30 mt-auto">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center font-bold text-foreground text-lg border border-border/50">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-base tracking-tight">{t.clientName}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-sm text-muted-foreground">{t.company}</span>
                          {t.verified && (
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static transform-none bg-card/50 border-border hover:bg-primary hover:text-primary-foreground transition-colors" />
              <CarouselNext className="static transform-none bg-card/50 border-border hover:bg-primary hover:text-primary-foreground transition-colors" />
            </div>
          </Carousel>
        </motion.div>

        <div className="mt-20 text-center">
          <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
              Become a Success Story <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
