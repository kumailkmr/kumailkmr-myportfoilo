"use client";

import * as React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
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

const testimonialsData: Testimonial[] = [
  // Website Development
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
  
  // AI Property Videos
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
    id: "t6",
    clientName: "Nicole Pauline Griffith",
    company: "Real Estate",
    industry: "Real Estate",
    service: "AI Property Videos",
    rating: 5,
    verified: true,
    initials: "NG",
    testimonial: "The quality of the AI videos exceeded my expectations. Kumail's communication was clear, and he quickly understood the specific style we needed. Our properties now look incredibly premium, leading to a much better experience for potential buyers.",
  },
  {
    id: "t7",
    clientName: "RJ Properties",
    company: "RJ Properties",
    industry: "Real Estate",
    service: "AI Real Estate Marketing Videos",
    rating: 5,
    verified: true,
    initials: "RP",
    testimonial: "Partnering with Kumail was a great decision for our agency. The AI marketing videos are delivered consistently with high quality. His workflow is highly organized, making the entire process seamless from our end.",
  },
  {
    id: "t8",
    clientName: "Alpine Real Estate",
    company: "Alpine Real Estate",
    industry: "Real Estate",
    service: "AI Property Showcase Videos",
    rating: 5,
    verified: true,
    initials: "AE",
    testimonial: "We were looking for a reliable way to automate our property showcases, and Kumail provided the perfect solution. The final videos are professional and engaging. His expertise in AI automation really sets his work apart.",
  },

  // AI Agents & AI Chatbots
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
  },
  {
    id: "t11",
    clientName: "CA Dhanashree Goyal",
    company: "CA Dhanashree Goyal",
    industry: "Finance",
    service: "AI Client Support Assistant",
    rating: 5,
    verified: true,
    initials: "DG",
    testimonial: "Implementing an AI assistant for client support seemed daunting, but Kumail made the process straightforward. The bot handles initial tax queries flawlessly, providing faster responses to our clients and improving our overall professional image.",
  },
  {
    id: "t12",
    clientName: "Dr. Abrar Dental Clinic",
    company: "Dr Abrar Dental Clinic",
    industry: "Healthcare",
    service: "AI Patient Support Assistant",
    rating: 5,
    verified: true,
    initials: "DA",
    testimonial: "Kumail developed an AI assistant that manages patient inquiries perfectly. The communication throughout the project was excellent, and the final solution is highly reliable, making clinic management much easier for our staff.",
  },
  {
    id: "t13",
    clientName: "Dr Rajat Das",
    company: "Superspeciality Clinic",
    industry: "Healthcare",
    service: "AI Appointment & Patient Assistant",
    rating: 5,
    verified: true,
    initials: "RD",
    testimonial: "The AI appointment system has modernized our patient experience. It handles scheduling inquiries securely and accurately. Kumail delivered a robust, high-quality solution that perfectly aligned with our strict healthcare requirements.",
  },
  {
    id: "t14",
    clientName: "TSAS by Dholkhar",
    company: "TSAS Restaurant",
    industry: "Hospitality",
    service: "WhatsApp AI Ordering Assistant",
    rating: 5,
    verified: true,
    initials: "TD",
    testimonial: "Our WhatsApp AI assistant has completely transformed how we handle peak ordering hours. The automation is incredibly reliable, and Kumail's technical support ensures everything runs smoothly. It's a massive upgrade for our customer service.",
  },
];

const TestimonialCard = ({ data }: { data: Testimonial }) => {
  return (
    <div className="w-full p-6 rounded-2xl bg-white dark:bg-[#171717] border border-border transition-all duration-300 hover:border-primary shadow-soft hover:shadow-medium hover:-translate-y-1 group relative overflow-hidden flex flex-col h-full cursor-default select-none">
      {/* Decorative gradient blur */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          {/* Initials Avatar */}
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20 group-hover:scale-105 transition-transform duration-300">
            {data.initials}
          </div>
          <div>
            <h4 className="font-semibold text-foreground leading-tight">{data.clientName}</h4>
            <p className="text-sm text-muted-foreground">{data.company}</p>
          </div>
        </div>
        {/* Verification */}
        {data.verified && (
          <div className="flex items-center gap-1 bg-success/10 text-success text-[10px] px-2 py-1 rounded-full font-medium tracking-wide uppercase">
            <CheckCircle2 className="w-3 h-3" />
            Verified
          </div>
        )}
      </div>

      {/* Ratings & Tags */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4 transition-all duration-300",
                i < data.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted",
                "group-hover:scale-110"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 mt-2 relative z-10">
        <p className="text-secondary-foreground text-[15px] leading-relaxed italic">
          &quot;{data.testimonial}&quot;
        </p>
      </div>

      {/* Bottom Tags */}
      <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap items-center gap-2 relative z-10">
        <span className="text-[11px] font-medium text-foreground bg-secondary px-2 py-1 rounded-md border border-border">
          {data.service}
        </span>
        {data.industry && (
          <span className="text-[10px] font-medium text-muted-foreground bg-background px-2 py-1 rounded-md border border-border">
            {data.industry}
          </span>
        )}
      </div>
    </div>
  );
};

export function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-background overflow-hidden border-y border-border relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-primary" />
            Client Success
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Trusted by Businesses Across Multiple Industries
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Helping business owners, agencies, and clinics automate operations, improve customer experience, and build enterprise-grade digital solutions.
          </motion.p>
        </div>
      </div>

      {/* Carousel */}
      <div className="container mx-auto px-12 md:px-16 mb-10 relative z-10">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 items-stretch">
            {testimonialsData.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:pl-6 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                <div className="h-full py-2">
                  <TestimonialCard data={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
          <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          
          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>

      {/* Trust Metrics */}
      <div className="container mx-auto px-4 mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border/60">
          {[
            { label: "Projects Delivered", value: "30+" },
            { label: "Clients Served", value: "14+" },
            { label: "Industries Supported", value: "8+" },
            { label: "AI Solutions Built", value: "10+" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Ready to become my next success story?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 duration-300 w-full sm:w-auto"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <Link 
              href="/work" 
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors w-full sm:w-auto"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
