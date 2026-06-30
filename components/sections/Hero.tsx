"use client";

import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Bot, Code2, Cpu, LineChart, UserCircle } from "lucide-react";
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const tags = [
    { name: "AI Automation", icon: <Bot className="w-4 h-4" /> },
    { name: "Web Development", icon: <Code2 className="w-4 h-4" /> },
    { name: "Business Systems", icon: <Cpu className="w-4 h-4" /> },
    { name: "SaaS Solutions", icon: <LineChart className="w-4 h-4" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"> 
      
      {/* Background Particles & Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/15 blur-[150px] pointer-events-none" />
      
      {/* Animated Flowing Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-20 pointer-events-none mask-image-fade" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[calc(100vh-120px)]">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl relative z-20"
          >
            {/* Service Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag, idx) => (
                <div 
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                >
                  {tag.icon}
                  {tag.name}
                </div>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight mb-6 text-foreground leading-[1.1]"
            >
              I Build AI Systems & Websites That Automate Businesses and {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 drop-shadow-sm">
                Increase Revenue
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Helping businesses reduce manual work, automate operations, and scale faster using AI, automation, and modern web solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              {/* Primary Button */}
              <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold transition-all bg-primary text-primary-foreground h-14 hover-lift w-full sm:w-auto text-base px-8 rounded-full group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] border border-primary/50 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Let’s Build Your System
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              {/* Secondary Button */}
              <Link 
                href="/work"
                className="inline-flex items-center justify-center font-medium transition-all text-foreground h-14 w-full sm:w-auto text-base px-8 rounded-full border border-border/50 bg-background/30 backdrop-blur-md hover:bg-muted/50 hover:border-primary/50 shadow-sm hover:-translate-y-1 duration-300"
              >
                View My Work
              </Link>
              
              {/* About Me Modal Button */}
              <button 
                onClick={() => setIsAboutMeOpen(true)}
                className="inline-flex items-center justify-center font-medium transition-all text-foreground h-14 w-full sm:w-auto text-base px-8 rounded-full border border-border/50 bg-background/30 backdrop-blur-md hover:bg-muted/50 hover:border-purple-500/50 shadow-sm hover:-translate-y-1 duration-300 group"
              >
                <UserCircle className="w-5 h-5 mr-2 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                About Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Visual */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative h-[450px] lg:h-[700px] w-full rounded-3xl overflow-visible hidden md:block"
          >
            {/* Subtle glow behind the 3D canvas to ground it */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <Scene className="w-full h-full relative z-10">
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" /> {/* Cyan */}
              <pointLight position={[-10, -10, -10]} intensity={1.5} color="#2563eb" /> {/* Electric Blue */}
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
