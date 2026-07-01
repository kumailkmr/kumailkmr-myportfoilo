"use client";

import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Bot, Code2, Cpu, LineChart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AboutMeModal } from "@/components/ui/AboutMeModal";
import { CALENDLY_LINK } from "@/config/socials";

const Scene = dynamic(() => import("@/components/three/Scene").then((mod) => mod.Scene), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-transparent flex items-center justify-center text-muted-foreground/30 font-semibold tracking-wider text-sm">
      Loading 3D Visual...
    </div>
  )
});

const AIBrain = dynamic(() => import("@/components/three/AIBrain").then((mod) => mod.AIBrain), {
  ssr: false
});

export function Hero() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const tags = [
    { name: "AI Automation", icon: <Bot className="w-3.5 h-3.5" /> },
    { name: "Web Development", icon: <Code2 className="w-3.5 h-3.5" /> },
    { name: "Business Systems", icon: <Cpu className="w-3.5 h-3.5" /> },
    { name: "SaaS Solutions", icon: <LineChart className="w-3.5 h-3.5" /> },
  ];

  const stats = [
    { value: "₹50L+", label: "Value Delivered" },
    { value: "20+ Hrs", label: "Saved Weekly" },
    { value: "99.9%", label: "System Accuracy" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"> 
      
      {/* Background Particles & Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      
      {/* Animated Flowing Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-15 pointer-events-none mask-image-fade" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl relative z-20"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for projects • Response &lt; 2 hrs
            </motion.div>

            {/* Service Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, idx) => (
                <div 
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/65 backdrop-blur-md px-3 py-1 text-xs font-semibold text-muted-foreground transition-all hover:border-primary/30 hover:text-primary cursor-default"
                >
                  {tag.icon}
                  {tag.name}
                </div>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-black tracking-tight mb-6 text-foreground leading-[1.1]"
            >
              Building AI Automation Systems That {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Save Time & Increase Revenue.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants} 
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Helping businesses automate customer support, bookings, sales, follow-ups, operations, and workflows with modern AI-powered software. I build systems that help businesses scale.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3.5 w-full mb-10">
              {/* Primary: Consultation */}
              <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-premium-primary w-full sm:w-auto sm:min-w-[210px] group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center text-sm font-bold">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </a>
              
              {/* Secondary: View Portfolio */}
              <Link 
                href="/work"
                className="btn-premium btn-premium-secondary w-full sm:w-auto sm:min-w-[150px] text-sm font-bold text-center"
              >
                View Portfolio
              </Link>
              
              {/* Tertiary: ROI Calculator */}
              <Link 
                href="/ai-hub"
                className="btn-premium btn-premium-secondary w-full sm:w-auto sm:min-w-[170px] text-sm font-bold text-center"
              >
                See ROI Calculator
              </Link>
            </motion.div>

            {/* Business Stats Section */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-3 gap-6 border-t border-border/40 pt-6 w-full max-w-lg"
            >
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="text-xl md:text-2xl font-black text-foreground tracking-tight">{stat.value}</h4>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </motion.div>
 
          {/* Right Content - 3D Visual */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-visible hidden md:block"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <Scene className="w-full h-full relative z-10">
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={2} color="#FACC15" />
              <pointLight position={[-10, -10, -10]} intensity={1.5} color="#2563eb" />
              <pointLight position={[0, -5, 5]} intensity={1} color="#3b82f6" />
              <AIBrain />
            </Scene>
          </motion.div>

        </div>
      </div>
      
      {/* Mask for grid */}
      <style jsx>{`
        .mask-image-fade {
          mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
        }
      `}</style>

      {/* Render the About Me Modal */}
      <AboutMeModal isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />
    </section>
  );
}
