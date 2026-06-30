"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Workflow, Code, CheckCircle2, MessageSquare, Briefcase, Database, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "AI", "Automation", "Business Software", "CRM", "Web Development"];

const premiumServices = [
  {
    id: 1,
    name: "AI Customer Support Assistant",
    category: "AI",
    description: "Intelligent conversational agents that resolve tickets 24/7, providing instant answers to your customers and qualifying leads automatically before they reach your human team.",
    icon: Bot,
    color: "from-blue-500 to-indigo-600",
    benefits: [
      "Save 40+ hours of staff time weekly",
      "Instant 24/7 customer responses",
      "Automatically qualify inbound leads",
      "Seamless human handoff protocols"
    ],
    tech: ["OpenAI", "Next.js", "LangChain", "Pinecone"]
  },
  {
    id: 2,
    name: "Business Process Automation",
    category: "Automation",
    description: "Connect your fragmented apps and automate repetitive operational tasks so your team can focus on high-value work.",
    icon: Workflow,
    color: "from-emerald-400 to-teal-600",
    benefits: [
      "Eliminate manual data entry",
      "Connect CRM, Email & Billing",
      "Reduce human error to zero",
    ],
    tech: ["n8n", "Make", "Webhooks"]
  },
  {
    id: 3,
    name: "Custom CRM & Dashboards",
    category: "CRM",
    description: "Tailored centralized hubs to manage your operations, clients, and data without the bloat of generic enterprise software.",
    icon: Database,
    color: "from-purple-500 to-fuchsia-600",
    benefits: [
      "Customized to your exact workflow",
      "Real-time business insights",
      "Secure role-based access",
    ],
    tech: ["React", "Supabase", "Prisma"]
  },
  {
    id: 4,
    name: "SaaS Application Development",
    category: "Web Development",
    description: "End-to-end architecture and development of scalable, secure, and highly performant SaaS products ready for market.",
    icon: Code,
    color: "from-orange-400 to-rose-600",
    benefits: [
      "Production-ready architecture",
      "Scalable database design",
      "Stripe payment integration",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    id: 5,
    name: "WhatsApp AI Assistants",
    category: "AI",
    description: "Meet your customers where they are. Automate sales, bookings, and support directly through the WhatsApp Business API.",
    icon: MessageSquare,
    color: "from-green-400 to-emerald-600",
    benefits: [
      "High open & conversion rates",
      "Automated appointment booking",
      "Direct CRM integration",
    ],
    tech: ["WhatsApp API", "Node.js"]
  },
  {
    id: 6,
    name: "High-Converting Portfolios",
    category: "Web Development",
    description: "Premium web presence that builds trust immediately. Designed for agencies and freelancers to close high-ticket clients.",
    icon: Briefcase,
    color: "from-cyan-400 to-blue-600",
    benefits: [
      "Ultra-premium aesthetics",
      "Optimized for lead capture",
      "Lightning fast performance",
    ],
    tech: ["Next.js", "Framer Motion"]
  }
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = premiumServices.filter(
    (service) => activeCategory === "All" || service.category === activeCategory
  );

  // Split out the first item as the featured flagship (if 'All' is selected and ID 1 is present)
  const isAllSelected = activeCategory === "All";
  const featuredService = isAllSelected ? filteredServices[0] : null;
  const gridServices = isAllSelected ? filteredServices.slice(1) : filteredServices;

  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-[#0A0A0A]">
      {/* Subtle Enterprise Background Layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Enterprise Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm font-semibold text-[#2563EB] dark:text-blue-400"
          >
            Premium Solutions
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight text-[#111827] dark:text-white leading-[1.1]"
          >
            Enterprise Software & <br className="hidden md:block" /> Business Automation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#6B7280] dark:text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto"
          >
            I build highly scalable, intelligent software systems that eliminate manual work, accelerate growth, and deliver exceptional customer experiences.
          </motion.p>
        </div>

        {/* Animated Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category 
                  ? "bg-[#111827] dark:bg-white text-white dark:text-[#111827] border-transparent shadow-md" 
                  : "bg-white dark:bg-[#171717] text-[#6B7280] dark:text-[#A1A1AA] border-[#E5E7EB] dark:border-[#262626] hover:border-[#2563EB] hover:text-[#111827] dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="flex flex-col gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {/* Flagship Featured Service (Only shown when "All" is active) */}
            {featuredService && (
              <motion.div
                key={`featured-${featuredService.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="group relative w-full flex flex-col lg:flex-row bg-white dark:bg-[#171717] border border-[#E5E7EB] dark:border-[#262626] hover:border-[#2563EB] dark:hover:border-[#2563EB] rounded-[32px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]"
              >
                {/* Image Side */}
                <div className="relative w-full lg:w-1/2 h-64 lg:h-auto bg-gray-50 dark:bg-black/20 p-8 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E7EB] dark:border-[#262626]">
                  <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${featuredService.color} group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Premium Abstract Mockup Layout for Featured */}
                  <div className="relative z-10 w-full max-w-sm aspect-video rounded-xl bg-white dark:bg-[#262626] shadow-2xl border border-black/5 dark:border-white/5 flex flex-col overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
                    <div className="h-8 border-b border-black/5 dark:border-white/5 flex items-center px-4 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 flex items-center justify-center relative">
                      <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${featuredService.color}`} />
                      <featuredService.icon className="w-16 h-16 text-[#111827] dark:text-white opacity-80" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-[#111827] dark:text-white flex items-center gap-1.5 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      Most Popular
                    </div>
                    <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[#6B7280] dark:text-[#A1A1AA] shadow-sm">
                      {featuredService.category}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-10 lg:p-14 flex flex-col justify-center lg:w-1/2">
                  <h3 className="text-3xl font-extrabold mb-4 text-[#111827] dark:text-white">
                    {featuredService.name}
                  </h3>
                  <p className="text-lg text-[#6B7280] dark:text-[#A1A1AA] mb-8 leading-relaxed">
                    {featuredService.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {featuredService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#2563EB] shrink-0" />
                        <span className="text-[15px] font-medium text-[#111827] dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-auto pt-8 border-t border-[#E5E7EB] dark:border-[#262626]">
                    <div className="flex flex-wrap gap-2">
                      {featuredService.tech.map((tech) => (
                        <span key={tech} className="text-xs font-bold tracking-wide px-3 py-1.5 rounded-md bg-gray-100 dark:bg-[#262626] text-[#111827] dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full px-6 group/btn shadow-md">
                      Explore Solution
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grid Services */}
            <motion.div key="grid-services-container" layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {gridServices.map((service) => (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="group relative flex flex-col bg-white dark:bg-[#171717] border border-[#E5E7EB] dark:border-[#262626] hover:border-[#2563EB] dark:hover:border-[#2563EB] rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)]"
                >
                  <div className="relative h-56 w-full bg-gray-50 dark:bg-black/20 p-6 flex items-center justify-center border-b border-[#E5E7EB] dark:border-[#262626] overflow-hidden">
                    <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${service.color} group-hover:opacity-15 transition-opacity duration-500`} />
                    
                    {/* Standard Premium Abstract Graphic */}
                    <div className="relative z-10 w-32 h-32 rounded-2xl bg-white dark:bg-[#262626] shadow-lg border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                      <service.icon className="w-12 h-12 text-[#111827] dark:text-white opacity-80" />
                    </div>

                    <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-[#6B7280] dark:text-[#A1A1AA] shadow-sm">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-[#111827] dark:text-white">
                      {service.name}
                    </h3>
                    <p className="text-[#6B7280] dark:text-[#A1A1AA] mb-8 text-[15px] leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="mb-8 space-y-3">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#2563EB] shrink-0" />
                          <span className="text-sm font-medium text-[#111827] dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-[#E5E7EB] dark:border-[#262626]">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tech.map((tech) => (
                          <span key={tech} className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-md bg-gray-100 dark:bg-[#262626] text-[#111827] dark:text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-sm font-bold text-[#2563EB] group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors cursor-pointer w-fit">
                        Explore Solution
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enterprise CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white dark:bg-[#171717] border border-[#E5E7EB] dark:border-[#262626] rounded-[32px] p-10 md:p-16 text-center shadow-sm relative overflow-hidden"
        >
          {/* Subtle CTA Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#111827] dark:text-white relative z-10">Ready to Upgrade Your Operations?</h3>
          <p className="text-lg text-[#6B7280] dark:text-[#A1A1AA] mb-10 max-w-2xl mx-auto relative z-10">
            Let&apos;s build intelligent, scalable software that saves time, improves customer experience, and helps your business grow without adding overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button size="lg" className="bg-[#2563EB] hover:bg-blue-700 text-white text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full border-[#E5E7EB] dark:border-[#262626] bg-white dark:bg-[#171717] text-[#111827] dark:text-white hover:bg-gray-50 dark:hover:bg-[#262626] transition-all">
              Let&apos;s Discuss Your Project
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
