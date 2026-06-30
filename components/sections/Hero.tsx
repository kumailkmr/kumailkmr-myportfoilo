"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scene } from "@/components/three/Scene";
import { AIBrain } from "@/components/three/AIBrain";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background/80 to-background pointer-events-none" />


      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for New Projects
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
              I Build Premium AI Software That{" "}
              <span className="text-transparent bg-clip-text bg-hero-gradient">
                Scales Your Business
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
              Partner with an independent senior engineer to turn your complex business problems into elegant, automated software solutions. Skip the agency overhead and work directly with the expert.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <Button size="lg" className="hover-lift w-full sm:w-auto text-base px-8 py-6 rounded-full group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] border border-primary/50 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
              <Button size="lg" variant="outline" className="hover-lift w-full sm:w-auto text-base px-8 py-6 rounded-full text-foreground border-border/50 bg-background/30 backdrop-blur-md hover:bg-muted/50 hover:border-primary/50 transition-all">
                View My Portfolio
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-secondary-foreground mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Custom AI Solutions
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Direct Developer Access
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No Agency Overhead
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Fast Delivery
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div className="flex flex-col items-start p-4 rounded-2xl bg-card/40 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-card/60 transition-colors">
                <span className="text-2xl font-bold text-foreground">50+</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">Projects Built</span>
              </div>
              <div className="flex flex-col items-start p-4 rounded-2xl bg-card/40 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-card/60 transition-colors">
                <span className="text-2xl font-bold text-foreground">15+</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">Industries</span>
              </div>
              <div className="flex flex-col items-start p-4 rounded-2xl bg-card/40 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-card/60 transition-colors">
                <span className="text-2xl font-bold text-foreground">20+</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">Technologies</span>
              </div>
              <div className="flex flex-col items-start p-4 rounded-2xl bg-card/40 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-card/60 transition-colors">
                <span className="text-2xl font-bold text-foreground">&lt; 2h</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">Response</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-visible"
          >
            {/* Subtle glow behind the 3D canvas */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            <Scene className="w-full h-full relative z-10">
              <ambientLight intensity={0.8} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#2563EB" />
              <pointLight position={[-10, -10, -10]} intensity={1} color="#7C3AED" />
              <AIBrain />
            </Scene>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
