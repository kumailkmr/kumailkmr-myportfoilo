"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bot, Calculator, Calendar, UserCheck, Moon, Sun, ArrowRight, X, Command } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { CALENDLY_LINK } from "@/config/socials";
import { HireMeModal } from "@/components/ui/HireMeModal";

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isHireOpen, setIsHireOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle command menu on Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const frame = requestAnimationFrame(() => {
        setSearch("");
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    {
      id: "estimator",
      title: "AI Estimator Hub",
      subtitle: "Estimate custom project budgets, workflows, and timelines",
      icon: Bot,
      action: () => {
        router.push("/ai-hub");
        setIsOpen(false);
      }
    },
    {
      id: "roi",
      title: "ROI Overhead Calculator",
      subtitle: "Calculate monthly and annual operational savings in USD / INR",
      icon: Calculator,
      action: () => {
        router.push("/ai-hub#roi");
        setIsOpen(false);
      }
    },
    {
      id: "consultation",
      title: "Book Strategy Session",
      subtitle: "Schedule a 1-on-1 video call directly on Calendly",
      icon: Calendar,
      action: () => {
        window.open(CALENDLY_LINK, "_blank");
        setIsOpen(false);
      }
    },
    {
      id: "hire",
      title: "Direct Developer Access (Hire Me)",
      subtitle: "Open onboarding questionnaire to scope your project",
      icon: UserCheck,
      action: () => {
        setIsOpen(false);
        setIsHireOpen(true);
      }
    },
    {
      id: "theme",
      title: "Toggle Theme Mode",
      subtitle: `Switch current theme to ${theme === "dark" ? "light" : "dark"} mode`,
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsOpen(false);
      }
    }
  ];

  // Static list of premium case studies
  const projects = [
    { id: "whatsapp", title: "WhatsApp Lead Qualifier Bot", desc: "Proven Outcome: 320% ROI" },
    { id: "crm", title: "Enterprise Systems Workflow CRM", desc: "Proven Outcome: 20+ Hours Saved Weekly" },
    { id: "realestate", title: "AI Real Estate Valuation", desc: "Proven Outcome: 3x Lead Conversion Increase" },
    { id: "restaurant", title: "Conversational Restaurant System", desc: "Proven Outcome: 90% Manual Labor Saved" }
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProjects = projects.filter(
    (proj) =>
      proj.title.toLowerCase().includes(search.toLowerCase()) ||
      proj.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Prompt trigger pill in desktop navbar or floating instructions */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-[9980]">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-card border border-border/80 text-xs font-semibold text-muted-foreground hover:text-foreground shadow-md transition-all hover:scale-[1.02] cursor-pointer"
        >
          <Command className="w-3.5 h-3.5" />
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-bold border border-border">⌘K</kbd>
          <span>to search</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              className="relative w-full max-w-xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[60vh]"
            >
              {/* Search Bar */}
              <div className="p-4 border-b border-border flex items-center gap-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or search blueprints..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50 text-sm py-1.5"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable results list */}
              <div className="overflow-y-auto flex-1 p-3 space-y-4">
                {/* Commands */}
                {filteredItems.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-3 mb-1 block">
                      Pipelines & Settings
                    </span>
                    {filteredItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={item.action}
                          className="w-full text-left p-3 rounded-2xl hover:bg-muted flex items-start gap-3 transition-colors group cursor-pointer"
                        >
                          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-foreground leading-tight">{item.title}</h4>
                            <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.subtitle}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground/30 ml-auto self-center group-hover:translate-x-0.5 group-hover:text-primary transition-all" />
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Case Studies */}
                {filteredProjects.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-3 mb-1 block">
                      Case Study Blueprints
                    </span>
                    {filteredProjects.map((proj) => (
                      <button
                        key={proj.id}
                        onClick={() => {
                          router.push(`/work?project=${proj.id}`);
                          setIsOpen(false);
                        }}
                        className="w-full text-left p-3 rounded-2xl hover:bg-muted flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground shrink-0 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                          <Command className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5 truncate">{proj.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground/30 ml-auto self-center group-hover:translate-x-0.5 group-hover:text-primary transition-all" />
                      </button>
                    ))}
                  </div>
                )}

                {filteredItems.length === 0 && filteredProjects.length === 0 && (
                  <div className="py-8 text-center text-sm text-muted-foreground">
                    No results matching &ldquo;{search}&rdquo; found.
                  </div>
                )}
              </div>

              {/* Panel Footer */}
              <div className="p-3 bg-muted/40 border-t border-border flex justify-between items-center text-[10px] text-muted-foreground">
                <div className="flex gap-2.5">
                  <span>Press <kbd className="px-1 py-0.5 rounded bg-muted border border-border font-bold">↑↓</kbd> to navigate</span>
                  <span><kbd className="px-1 py-0.5 rounded bg-muted border border-border font-bold">Enter</kbd> to select</span>
                </div>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <HireMeModal isOpen={isHireOpen} onClose={() => setIsHireOpen(false)} />
    </>
  );
}
