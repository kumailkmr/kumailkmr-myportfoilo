"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scene } from "@/components/three/Scene";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Placeholder for actual 3D geometry later */}
        <mesh rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#4f46e5" wireframe />
        </mesh>
      </Scene>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Engineering Premium Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            I architect and develop production-ready SaaS products, AI assistants, and enterprise automation systems that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full">
              Book a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full bg-background/50 backdrop-blur-sm">
              View My Work
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center gap-8 text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">50+</span>
              <span className="text-sm uppercase tracking-wider">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">100%</span>
              <span className="text-sm uppercase tracking-wider">Client Satisfaction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">&lt; 2h</span>
              <span className="text-sm uppercase tracking-wider">Response Time</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
