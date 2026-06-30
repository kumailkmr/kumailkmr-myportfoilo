"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, MessageSquare } from "lucide-react";

const services = [
  "Custom AI Automation",
  "Full Stack Web Development",
  "Mobile App Development",
  "Backend & API Architecture",
  "UI/UX Design",
  "AI Property Real Estate Videos",
  "AI Ads Videos",
  "AI Chatbot",
  "AI Agent Customer Support Assistant",
  "Website Redesign and Upgrade AI Integration",
  "Other"
];

export function HireMeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]);
  const [requirements, setRequirements] = useState("");
  const [hireType, setHireType] = useState("One-time");
  const [mounted, setMounted] = useState(false);

  // Only render portal after component mounts (client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Kumail! I'm interested in working with you.%0A%0A*Name:* ${name}%0A*Service:* ${service}%0A*Hire Type:* ${hireType}%0A*Requirements:*%0A${requirements}`;
    const whatsappUrl = `https://wa.me/916006121193?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 9999 }}
        >
          {/* Backdrop — solid dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-lg sm:mx-4 bg-background sm:rounded-3xl sm:border sm:border-border/50 sm:shadow-[0_0_60px_rgba(124,58,237,0.2)] overflow-y-auto overscroll-contain"
          >
            {/* Header — sticky so close button is always reachable */}
            <div className="sticky top-0 z-20 p-5 sm:p-6 border-b border-border/30 bg-background sm:rounded-t-3xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">Hire Me</h2>
                  <p className="text-sm text-muted-foreground">Let&apos;s discuss your next big project.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 flex flex-col gap-5">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="hire-name" className="text-sm font-semibold text-foreground/80">
                  Your Name
                </label>
                <input
                  id="hire-name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50 text-base text-foreground"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label htmlFor="hire-service" className="text-sm font-semibold text-foreground/80">
                  Service Required
                </label>
                <div className="relative">
                  <select
                    id="hire-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer text-base pr-10 text-foreground"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Hire Type */}
              <div className="space-y-2">
                <label htmlFor="hire-type" className="text-sm font-semibold text-foreground/80">
                  Hire Type
                </label>
                <div className="relative">
                  <select
                    id="hire-type"
                    value={hireType}
                    onChange={(e) => setHireType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer text-base pr-10 text-foreground"
                  >
                    <option value="One-time">One-time</option>
                    <option value="Recurring">Recurring</option>
                    <option value="Permanent">Permanent</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <label htmlFor="hire-requirements" className="text-sm font-semibold text-foreground/80">
                  Project Requirements
                </label>
                <textarea
                  id="hire-requirements"
                  required
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Tell me a bit about what you're looking to build..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted-foreground/50 text-base text-foreground"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1EBE5D] hover:to-[#0F7569] text-white font-bold tracking-wide shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <MessageSquare className="w-5 h-5" />
                Submit to WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // Use portal to render at document.body level, escaping <header> constraints
  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
