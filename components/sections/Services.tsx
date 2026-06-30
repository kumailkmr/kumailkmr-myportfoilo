"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Workflow, LineChart, Code, Globe, MessageCircle, CalendarClock, Briefcase, Database, AppWindow, Utensils, Stethoscope, PlaneTakeoff, Home, Layers, FileText, Search, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { name: "AI Customer Support", description: "Intelligent agents that resolve tickets 24/7.", icon: Bot },
  { name: "WhatsApp AI Assistants", description: "Automate sales and support via WhatsApp.", icon: MessageCircle },
  { name: "AI Chatbots", description: "Conversational interfaces for lead generation.", icon: MessageCircle },
  { name: "Business Process Automation", description: "Streamline repetitive operational tasks.", icon: Workflow },
  { name: "Workflow Automation", description: "Connect apps and automate data flow.", icon: Layers },
  { name: "Lead Capture & Follow-up", description: "Never miss a prospect with automated nurturing.", icon: LineChart },
  { name: "Appointment & Booking Systems", description: "Self-serve scheduling for clients.", icon: CalendarClock },
  { name: "Custom Business Software", description: "Tailored applications for your exact needs.", icon: Code },
  { name: "CRM & Admin Dashboards", description: "Centralized hubs to manage operations.", icon: Database },
  { name: "SaaS Application Development", description: "Scalable, secure, and performant SaaS products.", icon: AppWindow },
  { name: "Business Websites", description: "Premium web presence that builds trust.", icon: Globe },
  { name: "High-Converting Landing Pages", description: "Optimized pages designed to capture leads.", icon: Search },
  { name: "Portfolio Websites", description: "Showcase your work with stunning visuals.", icon: Briefcase },
  { name: "Restaurant Ordering Systems", description: "Digital menus and automated fulfillment.", icon: Utensils },
  { name: "Hospital Management Systems", description: "Secure patient and resource management.", icon: Stethoscope },
  { name: "Travel Agency Booking Systems", description: "End-to-end trip planning and booking.", icon: PlaneTakeoff },
  { name: "Real Estate CRM Solutions", description: "Manage properties, agents, and buyers.", icon: Home },
  { name: "Internal Business Tools", description: "Custom utilities to empower your team.", icon: Settings },
  { name: "AI Document Processing", description: "Extract data from invoices and forms instantly.", icon: FileText },
  { name: "AI Knowledge Base Assistants", description: "Internal AI that knows your company data.", icon: Bot },
  { name: "API Integrations", description: "Seamless connection between disparate systems.", icon: Workflow },
];

export function Services() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Premium Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            AI Solutions & Digital Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            I build intelligent AI-powered software, automation systems, and high-performance web applications that help businesses automate operations, improve customer experience, and scale efficiently.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 10) * 0.05, duration: 0.4 }}
            >
              <Card className="group relative h-full bg-muted/20 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden rounded-2xl cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-foreground/60 group-hover:text-primary transition-colors duration-300 mt-auto">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
