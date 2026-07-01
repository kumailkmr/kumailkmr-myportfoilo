"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { getSocials } from "@/config/socials";

export function Contact() {
  const contactCards = getSocials(["GitHub", "LinkedIn", "WhatsApp", "Email"]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  interface ConfettiParticle {
    id: number;
    startX: number;
    duration: number;
    color: string;
    rotate: number;
    leftOffset: number;
  }
  const [confettiParticles, setConfettiParticles] = useState<ConfettiParticle[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !message) {
      alert("Please fill out all required fields.");
      return;
    }
    
    setSubmitting(true);
    
    const colors = ["bg-blue-500", "bg-purple-500", "bg-cyan-400", "bg-emerald-400", "bg-yellow-400"];
    const particles = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100,
      duration: Math.random() * 2.5 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: Math.random() * 720,
      leftOffset: Math.random() * 20 - 10
    }));
    setConfettiParticles(particles);

    const fullName = `${firstName} ${lastName}`.trim();
    const formattedMessage = `Hello Kumail! I'd like to get in touch.%0A%0A*Name:* ${fullName}%0A*Email:* ${email}%0A*Message:*%0A${message}`;
    const whatsappUrl = `https://wa.me/916006121193?text=${formattedMessage}`;
    
    setShowConfetti(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSubmitting(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      
      setTimeout(() => setShowConfetti(false), 4000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#0A0A0A] relative overflow-hidden">
      {/* Confetti Particles Stream Overlay */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
            {confettiParticles.map((p) => {
              return (
                <motion.div
                  key={p.id}
                  className={`absolute w-3 h-3 rounded-sm ${p.color}`}
                  initial={{ top: "100%", left: `${p.startX}%`, rotate: 0, opacity: 1 }}
                  animate={{ 
                    top: "-10%", 
                    left: `${p.startX + p.leftOffset}%`,
                    rotate: p.rotate,
                    opacity: [1, 1, 0.8, 0]
                  }}
                  transition={{ duration: p.duration, ease: "easeOut" }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#111827] dark:text-white tracking-tight">Let&apos;s Build Something Great</h2>
          <p className="text-lg text-[#6B7280] dark:text-[#A1A1AA]">
            Ready to automate your workflows or build a custom SaaS? Reach out via any of the platforms below or send a direct message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Social Cards Grid & Availability Column */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactCards.map((social, idx) => {
                if (!social) return null;
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex flex-col bg-gray-50 dark:bg-[#171717] border border-[#E5E7EB] dark:border-[#262626] hover:border-[#2563EB] dark:hover:border-[#2563EB] p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]"
                    aria-label={social.platform}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#262626] border border-black/5 dark:border-white/5 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:text-[#2563EB] transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#111827] dark:text-white group-hover:text-[#2563EB] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#111827] dark:text-white">{social.platform}</h3>
                    <p className="text-sm text-[#6B7280] dark:text-[#A1A1AA] mb-6 flex-grow">{social.description}</p>
                    <div className="flex items-center text-sm font-semibold text-[#2563EB] mt-auto">
                      Connect
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Direct Response Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-5 bg-gray-50 dark:bg-[#171717] border border-[#E5E7EB] dark:border-[#262626] rounded-2xl flex flex-col justify-between min-h-[100px]">
                <span className="text-[10px] uppercase font-bold text-[#6B7280] dark:text-muted-foreground tracking-wider block mb-1">Availability</span>
                <span className="text-xs font-semibold text-[#111827] dark:text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Q3 2026 Checkouts
                </span>
              </div>
              <div className="p-5 bg-gray-50 dark:bg-[#171717] border border-[#E5E7EB] dark:border-[#262626] rounded-2xl flex flex-col justify-between min-h-[100px]">
                <span className="text-[10px] uppercase font-bold text-[#6B7280] dark:text-muted-foreground tracking-wider block mb-1">Response Time</span>
                <span className="text-xs font-semibold text-[#111827] dark:text-white">
                  Under 4 Hours
                </span>
              </div>
              <div className="p-5 bg-gray-50 dark:bg-[#171717] border border-[#E5E7EB] dark:border-[#262626] rounded-2xl flex flex-col justify-between min-h-[100px]">
                <span className="text-[10px] uppercase font-bold text-[#6B7280] dark:text-muted-foreground tracking-wider block mb-1">Office Location</span>
                <span className="text-xs font-semibold text-[#111827] dark:text-white">
                  Remote Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-[#171717] border-[#E5E7EB] dark:border-[#262626] shadow-xl rounded-[32px] overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8 text-[#111827] dark:text-white">Send a Direct Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-semibold text-[#111827] dark:text-gray-300">First Name</label>
                      <Input 
                        id="first-name" 
                        required 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        placeholder="John" 
                        className="bg-gray-50 dark:bg-[#262626] border-transparent focus-visible:ring-[#2563EB]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-semibold text-[#111827] dark:text-gray-300">Last Name</label>
                      <Input 
                        id="last-name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        placeholder="Doe" 
                        className="bg-gray-50 dark:bg-[#262626] border-transparent focus-visible:ring-[#2563EB]" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-semibold text-[#111827] dark:text-gray-300">Email</label>
                    <Input 
                      id="contact-email" 
                      required 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="john@company.com" 
                      className="bg-gray-50 dark:bg-[#262626] border-transparent focus-visible:ring-[#2563EB]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-semibold text-[#111827] dark:text-gray-300">How can I help?</label>
                    <textarea 
                      id="contact-message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex min-h-[140px] w-full rounded-xl bg-gray-50 dark:bg-[#262626] border-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                      placeholder="Tell me about your project goals..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 text-base font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
