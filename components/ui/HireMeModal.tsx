"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Briefcase, Mail, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const services = [
  "Custom AI Automation",
  "Full Stack Web Development",
  "Mobile App Development",
  "Backend & API Architecture",
  "UI/UX Design",
  "Other"
];

export function HireMeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]);
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `Hello Kumail! I'm interested in working with you.%0A%0A*Name:* ${name}%0A*Service:* ${service}%0A*Requirements:*%0A${requirements}`;
    const whatsappUrl = `https://wa.me/916006121193?text=${message}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-3xl"
          />

          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl shadow-[0_0_50px_rgba(124,58,237,0.15)] overflow-hidden relative pointer-events-auto"
            >
              {/* Header */}
              <div className="relative p-6 border-b border-border/30 bg-gradient-to-r from-primary/10 to-purple-500/10">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Hire Me</h2>
                    <p className="text-sm text-muted-foreground">Let's discuss your next big project.</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/80">Your Name</label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-foreground/80">Service Required</label>
                  <div className="relative">
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer"
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-background text-foreground">{s}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="requirements" className="text-sm font-semibold text-foreground/80">Project Requirements</label>
                  <textarea
                    id="requirements"
                    required
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Tell me a bit about what you're looking to build..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1EBE5D] hover:to-[#0F7569] text-white font-bold tracking-wide shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  Submit to WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
