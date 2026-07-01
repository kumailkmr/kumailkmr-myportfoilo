"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Sparkles, DollarSign, ChevronRight, RefreshCw, Compass, HelpCircle, ChevronDown } from "lucide-react";
import { CALENDLY_LINK } from "@/config/socials";
import { queryKnowledgeBase } from "@/lib/ai-engine";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  isStreaming?: boolean;
  actions?: { label: string; actionType: string; value: string }[];
}

const CATEGORIZED_QUESTIONS = [
  {
    category: "About Me",
    questions: [
      "Who is Kumail Kmr?",
      "Tell me about yourself.",
      "What is your experience?",
      "Why should I hire you?",
      "What industries do you work with?"
    ]
  },
  {
    category: "Services",
    questions: [
      "What services do you offer?",
      "Can you build custom software?",
      "Can you build SaaS products?",
      "Can you develop websites?",
      "Can you build AI applications?",
      "Can you automate my business?",
      "Can you build internal dashboards?",
      "Can you integrate APIs?",
      "Can you create WhatsApp AI assistants?"
    ]
  },
  {
    category: "AI Solutions",
    questions: [
      "How can AI help my business?",
      "What AI tools do you use?",
      "Can you build customer support AI?",
      "Can you automate lead generation?",
      "Can you automate sales?",
      "Can AI reduce operational costs?",
      "Can AI improve customer support?"
    ]
  },
  {
    category: "Portfolio",
    questions: [
      "Show your projects.",
      "What projects have you completed?",
      "Show website development work.",
      "Show AI automation projects.",
      "Show dashboards.",
      "Show business systems."
    ]
  },
  {
    category: "Technology",
    questions: [
      "Which programming languages do you use?",
      "Why Next.js?",
      "Why TypeScript?",
      "Which database do you use?",
      "What AI APIs do you use?",
      "Can you integrate OpenAI?",
      "Can you use PostgreSQL?",
      "Can you build scalable systems?"
    ]
  },
  {
    category: "Pricing",
    questions: [
      "How much does a website cost?",
      "How much does an AI assistant cost?",
      "How much does automation cost?",
      "What is your development process?",
      "How do payments work?",
      "How long does a project take?"
    ]
  },
  {
    category: "Industries",
    questions: [
      "Restaurant automation",
      "Real estate automation",
      "Healthcare automation",
      "Education solutions",
      "Travel agency automation",
      "E-commerce automation",
      "Small business automation"
    ]
  },
  {
    category: "Process",
    questions: [
      "How do we start?",
      "What happens after payment?",
      "How do you communicate?",
      "Will I get support?",
      "Do you provide maintenance?",
      "Can you host the project?"
    ]
  },
  {
    category: "Contact",
    questions: [
      "Book a consultation.",
      "Schedule a meeting.",
      "Open WhatsApp.",
      "Send an email.",
      "Download resume."
    ]
  }
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! I am Kumail Kmr's Personal Assistant. I can help you estimate project costs, qualify your business goals, recommend technical blueprints, or book a strategy session directly. How can I assist you today?"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeCatalogCategory, setActiveCatalogCategory] = useState<string | null>(null);
  const [showCatalog, setShowCatalog] = useState(false);

  // Estimator State
  const [estimatorStep, setEstimatorStep] = useState(0);
  const [estimatorData, setEstimatorData] = useState({ service: "", complexity: "", timeline: "" });
  
  // Qualifier State
  const [qualifierStep, setQualifierStep] = useState(0);
  const [qualifierData, setQualifierData] = useState({ name: "", scope: "", timeline: "" });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const msgCounterRef = useRef(0);

  // Auto-scroll logic
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Stream Response
  const streamAIResponse = (text: string, actions?: Message["actions"]) => {
    setIsTyping(true);
    msgCounterRef.current += 1;
    const id = `stream-ai-${msgCounterRef.current}`;
    const intervalTime = text.length > 200 ? 5 : 12;
    let index = 0;
    let currentText = "";

    setMessages(prev => [...prev, { id, sender: "ai", text: "", isStreaming: true }]);

    const interval = setInterval(() => {
      currentText += text[index];
      setMessages(prev => 
        prev.map(msg => msg.id === id ? { ...msg, text: currentText } : msg)
      );
      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setMessages(prev => 
          prev.map(msg => msg.id === id ? { ...msg, isStreaming: false, actions } : msg)
        );
        setIsTyping(false);
      }
    }, intervalTime);
  };

  // Submit Logic
  const handleSubmitMessage = (textToSend?: string) => {
    const rawText = textToSend || inputText;
    if (!rawText.trim()) return;

    msgCounterRef.current += 1;
    const userMsg: Message = {
      id: `user-msg-${msgCounterRef.current}`,
      sender: "user",
      text: rawText
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText("");
    setShowCatalog(false);

    // Run custom RAG query resolver
    setIsTyping(true);
    setTimeout(() => {
      const response = queryKnowledgeBase(rawText, messages);
      streamAIResponse(response.text, response.actions);
    }, 450);
  };

  // Estimator Action Logic
  const startEstimator = () => {
    setEstimatorStep(1);
    setMessages(prev => [
      ...prev,
      {
        id: `est-${Date.now()}`,
        sender: "ai",
        text: "Let's configure your project parameters to estimate a price range. Step 1: Select your project category:"
      }
    ]);
  };

  const handleEstimatorSelect = (field: "service" | "complexity" | "timeline", value: string) => {
    const updated = { ...estimatorData, [field]: value };
    setEstimatorData(updated);

    if (field === "service") {
      setEstimatorStep(2);
      setMessages(prev => [
        ...prev,
        {
          id: `est-step2-${Date.now()}`,
          sender: "ai",
          text: `Great. Step 2: Choose the project scope/complexity for *${value}*:`
        }
      ]);
    } else if (field === "complexity") {
      setEstimatorStep(3);
      setMessages(prev => [
        ...prev,
        {
          id: `est-step3-${Date.now()}`,
          sender: "ai",
          text: `Perfect. Step 3: What is your target timeline?`
        }
      ]);
    } else if (field === "timeline") {
      setEstimatorStep(4);
      let baseMinUSD = 2000;
      let baseMaxUSD = 5000;

      if (updated.service.includes("AI Agent") || updated.service.includes("Automation")) {
        baseMinUSD = updated.complexity === "Simple" ? 2500 : updated.complexity === "Medium" ? 5000 : 12000;
        baseMaxUSD = updated.complexity === "Simple" ? 4000 : updated.complexity === "Medium" ? 9500 : 25000;
      } else if (updated.service.includes("Web App")) {
        baseMinUSD = updated.complexity === "Simple" ? 3500 : updated.complexity === "Medium" ? 7500 : 15000;
        baseMaxUSD = updated.complexity === "Simple" ? 6000 : updated.complexity === "Medium" ? 14000 : 35000;
      } else {
        baseMinUSD = updated.complexity === "Simple" ? 1500 : updated.complexity === "Medium" ? 3000 : 8000;
        baseMaxUSD = updated.complexity === "Simple" ? 2500 : updated.complexity === "Medium" ? 6000 : 18000;
      }

      if (updated.timeline === "Fast (Urgent)") {
        baseMinUSD = Math.round(baseMinUSD * 1.2);
        baseMaxUSD = Math.round(baseMaxUSD * 1.25);
      }

      // Localized Indian client budget ranges (approx ₹83 per USD, with localized optimization)
      const inrRate = 83;
      let baseMinINR = Math.round(baseMinUSD * inrRate * 0.85); // 15% localization discount
      let baseMaxINR = Math.round(baseMaxUSD * inrRate * 0.85);
      baseMinINR = Math.round(baseMinINR / 5000) * 5000;
      baseMaxINR = Math.round(baseMaxINR / 5000) * 5000;

      const formattedRangeUSD = `$${baseMinUSD.toLocaleString()} - $${baseMaxUSD.toLocaleString()} USD`;
      const formattedRangeINR = `₹${baseMinINR.toLocaleString('en-IN')} - ₹${baseMaxINR.toLocaleString('en-IN')} INR`;
      const combinedRange = `${formattedRangeUSD} / ${formattedRangeINR}`;

      setMessages(prev => [
        ...prev,
        {
          id: `est-result-${Date.now()}`,
          sender: "ai",
          text: `### Project Cost Blueprint:\n\n* **Category**: ${updated.service}\n* **Scope**: ${updated.complexity}\n* **Timeline**: ${updated.timeline}\n\n**International Budget**: \`${formattedRangeUSD}\`\n**National (India) Budget**: \`${formattedRangeINR}\`\n\n*Note: Localized regional pricing is provided for Indian clients. Final quotes are confirmed during strategy sessions depending on API configurations.*`,
          actions: [
            { label: "Book Strategy Call 🗓️", actionType: "calendly", value: "" },
            { label: "Send Parameters to WhatsApp 💬", actionType: "whatsapp", value: `Hello Kumail! I estimated my project:\nCategory: ${updated.service}\nScope: ${updated.complexity}\nTimeline: ${updated.timeline}\nBudget: ${combinedRange}` }
          ]
        }
      ]);
    }
  };

  // Lead Qualifier Action Logic
  const startQualifier = () => {
    setQualifierStep(1);
    setMessages(prev => [
      ...prev,
      {
        id: `qual-${Date.now()}`,
        sender: "ai",
        text: "Let's qualify your project goals. Step 1: What is your company or project name?"
      }
    ]);
  };

  const handleQualifierSubmit = (text: string) => {
    if (!text.trim()) return;

    if (qualifierStep === 1) {
      setQualifierData(prev => ({ ...prev, name: text }));
      setQualifierStep(2);
      setMessages(prev => [
        ...prev,
        { id: `user-name-${Date.now()}`, sender: "user", text },
        {
          id: `qual-step2-${Date.now()}`,
          sender: "ai",
          text: "Got it! Step 2: Briefly describe the system or features you need built:"
        }
      ]);
    } else if (qualifierStep === 2) {
      setQualifierData(prev => ({ ...prev, scope: text }));
      setQualifierStep(3);
      setMessages(prev => [
        ...prev,
        { id: `user-scope-${Date.now()}`, sender: "user", text },
        {
          id: `qual-step3-${Date.now()}`,
          sender: "ai",
          text: "Excellent. Step 3: What is your target timeline or launch date?"
        }
      ]);
    } else if (qualifierStep === 3) {
      const updated = { ...qualifierData, timeline: text };
      setQualifierData(updated);
      setQualifierStep(4);
      
      setMessages(prev => [
        ...prev,
        { id: `user-time-${Date.now()}`, sender: "user", text },
        {
          id: `qual-result-${Date.now()}`,
          sender: "ai",
          text: `### Lead Qualified! 🎉\n\n* **Project Name**: ${updated.name}\n* **Key Scope**: ${updated.scope}\n* **Target Date**: ${updated.timeline}\n\nClick below to hand off this blueprint directly to Kumail on WhatsApp, or book your strategy session.`,
          actions: [
            { label: "Book Consultation 🗓️", actionType: "calendly", value: "" },
            { label: "Handoff to WhatsApp 💬", actionType: "whatsapp", value: `Hello Kumail! I qualified my project requirements:\nCompany Name: ${updated.name}\nScope: ${updated.scope}\nTarget Date: ${updated.timeline}` }
          ]
        }
      ]);
    }
  };

  const handleActionTrigger = (action: { label: string; actionType: string; value: string }) => {
    if (action.actionType === "calendly") {
      window.open(CALENDLY_LINK, "_blank");
    } else if (action.actionType === "whatsapp") {
      window.open(`https://wa.me/916006121193?text=${encodeURIComponent(action.value)}`, "_blank");
    } else if (action.actionType === "link") {
      if (action.value.startsWith("http")) {
        window.open(action.value, "_blank");
      } else if (action.value.startsWith("#")) {
        if (action.value === "#qualify") {
          startQualifier();
        }
      } else {
        window.location.assign(action.value);
      }
    } else if (action.actionType === "email") {
      window.location.assign(`mailto:${action.value}`);
    }
  };

  return (
    <>
      <CursorGlow />
      {/* Floating Trigger Button */}
      <div className="fixed bottom-24 right-6 md:bottom-6 md:right-6 z-[9990]">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white shadow-[0_4px_30px_rgba(124,58,237,0.4)] cursor-pointer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle AI Assistant"
        >
          <motion.div 
            className="absolute -inset-2 rounded-full border border-primary/40 opacity-70"
            animate={{ scale: [1, 1.25, 1], rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -inset-4 rounded-full border border-purple-500/20 opacity-40"
            animate={{ scale: [1, 1.4, 1], rotate: -360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="relative">
                <Bot className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Glassmorphic Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-4 left-4 md:bottom-24 md:right-6 md:left-auto w-auto md:w-[92vw] md:max-w-[440px] h-[65vh] md:h-[78vh] max-h-[680px] z-[9990] bg-card/65 backdrop-blur-2xl border border-border/50 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.3)"
            }}
          >
            {/* Header */}
            <div className="p-4 border-b border-border/30 bg-background/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-background" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                    Kumail Kmr Personal Assistant
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">AI Business Consultant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowCatalog(!showCatalog)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${showCatalog ? "bg-primary text-white" : "hover:bg-muted text-muted-foreground"}`}
                  title="Browse Catalog Questions"
                >
                  <Compass className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Area Panel */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain bg-background/10 relative">
              
              {/* Message Log */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} max-w-[88%] ${msg.sender === "user" ? "ml-auto" : "mr-auto"}`}
                >
                  <div
                    className={`p-3.5 rounded-2xl text-sm leading-relaxed border ${
                      msg.sender === "user"
                        ? "bg-primary border-primary/20 text-white rounded-tr-none shadow-md"
                        : "bg-card border-border/50 text-foreground rounded-tl-none shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                    }`}
                  >
                    {msg.text.split("\n").map((para, i) => {
                      const trimmed = para.trim();
                      if (trimmed === "") return <div key={i} className="h-2" />;
                      
                      // Heading rendering
                      if (trimmed.startsWith("### ")) {
                        return <h4 key={i} className="text-base font-bold text-foreground mt-3 mb-2 first:mt-0">{trimmed.replace("### ", "")}</h4>;
                      }
                      
                      // Bullet lists rendering
                      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                        const cleanText = trimmed.replace(/^[\*\-]\s+/, "");
                        const parts = cleanText.split(/(\*\*[^*]+\*\*)/g);
                        return (
                          <div key={i} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary mb-1 last:mb-0">
                            {parts.map((part, idx) => {
                              if (part.startsWith("**") && part.endsWith("**")) {
                                return <strong key={idx} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
                              }
                              return part;
                            })}
                          </div>
                        );
                      }

                      // Standard paragraph parsing dynamic inline bold formatting
                      const parts = para.split(/(\*\*[^*]+\*\*)/g);
                      return (
                        <p key={i} className="mb-1.5 last:mb-0">
                          {parts.map((part, idx) => {
                            if (part.startsWith("**") && part.endsWith("**")) {
                              return <strong key={idx} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    })}
                  </div>

                  {/* Actions buttons */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pl-1">
                      {msg.actions.map((act, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionTrigger(act)}
                          className="text-xs font-bold px-3 py-2 rounded-xl transition-all border border-border bg-muted hover:bg-muted/80 text-foreground hover:-translate-y-0.5 shadow-sm cursor-pointer"
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Dynamic Interactive Panel Overlay */}
              {estimatorStep > 0 && estimatorStep < 4 && (
                <div className="p-4 bg-muted/60 border border-border/50 rounded-2xl space-y-3 shadow-md">
                  <div className="flex items-center justify-between border-b border-border/30 pb-2">
                    <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      Project Cost Estimator
                    </span>
                    <button 
                      onClick={() => setEstimatorStep(0)}
                      className="text-muted-foreground hover:text-foreground text-[10px] font-bold"
                    >
                      Cancel
                    </button>
                  </div>

                  {estimatorStep === 1 && (
                    <div className="grid grid-cols-2 gap-2">
                      {["AI Agents / Automations", "Next.js Web App", "Mobile Development", "Custom Scripting"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleEstimatorSelect("service", opt)}
                          className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-left text-xs font-bold text-foreground transition-all cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {estimatorStep === 2 && (
                    <div className="flex flex-col gap-2">
                      {["Simple (MVP / Base Features)", "Medium (Core SaaS integrations)", "Enterprise (Highly Scalable / Complex LLMs)"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleEstimatorSelect("complexity", opt.split(" ")[0])}
                          className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-left text-xs font-bold text-foreground transition-all cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {estimatorStep === 3 && (
                    <div className="flex flex-col gap-2">
                      {["Fast (Urgent)", "Standard (4-8 weeks)", "Flexible"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleEstimatorSelect("timeline", opt)}
                          className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-left text-xs font-bold text-foreground transition-all cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Lead Qualifier Input Prompt */}
              {qualifierStep > 0 && qualifierStep < 4 && (
                <div className="p-4 bg-muted/60 border border-border/50 rounded-2xl space-y-3 shadow-md">
                  <div className="flex items-center justify-between border-b border-border/30 pb-2">
                    <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                      Qualification Blueprint
                    </span>
                    <button 
                      onClick={() => setQualifierStep(0)}
                      className="text-muted-foreground hover:text-foreground text-[10px] font-bold"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      placeholder={
                        qualifierStep === 1 ? "Enter company name..." : 
                        qualifierStep === 2 ? "e.g., custom real estate RAG CRM..." : 
                        "e.g., end of next month..."
                      }
                      className="flex-1 bg-card border border-border px-3 py-2 rounded-xl text-xs text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleQualifierSubmit((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).value = "";
                        }
                      }}
                    />
                    <button 
                      onClick={(e) => {
                        const inputEl = e.currentTarget.previousSibling as HTMLInputElement;
                        handleQualifierSubmit(inputEl.value);
                        inputEl.value = "";
                      }}
                      className="bg-primary text-white px-3 py-2 rounded-xl hover:bg-primary/95 text-xs font-bold cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Typing Loader */}
              {isTyping && (
                <div className="flex items-center gap-1.5 text-muted-foreground pl-1">
                  <Bot className="w-4 h-4 animate-pulse" />
                  <div className="flex gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />

              {/* Sliding Suggestion Topics Catalog Overlay */}
              <AnimatePresence>
                {showCatalog && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute inset-0 bg-background/95 backdrop-blur-md z-20 p-4 overflow-y-auto flex flex-col space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-border/30 pb-2">
                      <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                        <Compass className="w-4 h-4 text-purple-400" />
                        Suggested Questions Catalog
                      </h4>
                      <button 
                        onClick={() => setShowCatalog(false)}
                        className="text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                      >
                        Close
                      </button>
                    </div>

                    <div className="space-y-3 flex-1">
                      {CATEGORIZED_QUESTIONS.map((cat, idx) => (
                        <div key={idx} className="border border-border/40 rounded-xl overflow-hidden bg-card/40">
                          <button
                            onClick={() => setActiveCatalogCategory(activeCatalogCategory === cat.category ? null : cat.category)}
                            className="w-full p-3 flex items-center justify-between text-xs font-bold text-foreground hover:bg-muted/40 transition-colors text-left cursor-pointer"
                          >
                            {cat.category}
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-250 ${activeCatalogCategory === cat.category ? "rotate-180" : ""}`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeCatalogCategory === cat.category && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden bg-background/20"
                              >
                                <div className="p-2.5 border-t border-border/20 flex flex-col gap-1.5">
                                  {cat.questions.map((q, qIdx) => (
                                    <button
                                      key={qIdx}
                                      onClick={() => handleSubmitMessage(q)}
                                      className="w-full text-left text-[11px] p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all flex items-center gap-1.5 cursor-pointer"
                                    >
                                      <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                                      {q}
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Quick Actions Shortcuts Bar */}
            {estimatorStep === 0 && qualifierStep === 0 && !showCatalog && (
              <div className="px-4 py-2.5 flex flex-wrap gap-2 border-t border-border/10 shrink-0 bg-background/30">
                <button
                  onClick={() => startEstimator()}
                  className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-full bg-muted border border-border/40 hover:bg-muted/80 text-foreground transition-all cursor-pointer"
                >
                  <DollarSign className="w-3 h-3 text-emerald-400" />
                  Cost Estimator
                </button>
                <button
                  onClick={() => startQualifier()}
                  className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-full bg-muted border border-border/40 hover:bg-muted/80 text-foreground transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-purple-400" />
                  Qualify Project
                </button>
                <button
                  onClick={() => setShowCatalog(true)}
                  className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-full bg-muted border border-border/40 hover:bg-muted/80 text-foreground transition-all cursor-pointer"
                >
                  <HelpCircle className="w-3 h-3 text-primary" />
                  Browse Questions
                </button>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-4 border-t border-border/20 bg-background/30 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about AI, SaaS, project pricing..."
                className="flex-1 bg-card/50 border border-border/50 px-4 py-2.5 rounded-xl text-xs text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmitMessage();
                  }
                }}
              />
              <button
                onClick={() => handleSubmitMessage()}
                disabled={!inputText.trim()}
                className="p-2.5 rounded-xl bg-primary text-white disabled:opacity-40 transition-opacity hover:bg-primary/95 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.04), transparent 45%)`,
      }}
    />
  );
}
