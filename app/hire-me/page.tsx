"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, MessageSquare } from "lucide-react";
import Link from "next/link";

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

export default function HireMePage() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]);
  const [hireType, setHireType] = useState("One‑time");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Kumail! I'm interested in working with you.%0A%0A*Name:* ${name}%0A*Service:* ${service}%0A*Hire Type:* ${hireType}%0A*Requirements:*%0A${requirements}`;
    const whatsappUrl = `https://wa.me/916006121193?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-full max-w-md bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl shadow-[0_0_50px_rgba(124,58,237,0.15)] p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Hire Me</h2>
          <Link href="/" className="p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground/80">Your Name</label>
            <input
              id="name"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium text-foreground/80">Service Required</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none appearance-none cursor-pointer"
            >
              {services.map((s) => (
                <option key={s} value={s} className="bg-background text-foreground">{s}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="hireType" className="text-sm font-medium text-foreground/80">Hire Type</label>
            <select
              id="hireType"
              value={hireType}
              onChange={(e) => setHireType(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none appearance-none cursor-pointer"
            >
              <option value="One‑time" className="bg-background text-foreground">One‑time</option>
              <option value="Recurring" className="bg-background text-foreground">Recurring</option>
              <option value="Permanent" className="bg-background text-foreground">Permanent</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="requirements" className="text-sm font-medium text-foreground/80">Project Requirements</label>
            <textarea
              id="requirements"
              required
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full px-4 py-2 rounded-xl bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none resize-none placeholder:text-muted-foreground/50"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1EBE5D] hover:to-[#0F7569] text-white font-bold tracking-wide shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            Submit to WhatsApp
          </button>
        </form>
      </motion.div>
    </div>
  );
}
