"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Bot, Code, CheckCircle2, Zap, X, Sparkles, 
  Clock, Layers, Cpu, Smartphone, TrendingUp, LineChart, Code2 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  outcomes: string[];
  tech: string[];
  benefits: string;
  problems: string;
  features: string[];
  pricing: string;
  timeline: string;
}

const CATEGORIES = [
  "AI Automation",
  "WhatsApp Automation",
  "Website Development",
  "Booking Systems",
  "CRM & ERP",
  "Marketing Automation",
  "AI Creative Services",
  "Data & Analytics",
  "Custom Software",
  "Integrations"
];

const premiumServices: ServiceItem[] = [
  {
    id: "ai-support",
    category: "AI Automation",
    name: "AI Customer Support Assistant",
    tagline: "Instant 24/7 support scaling.",
    description: "Train a custom AI agent on your exact business data and handbooks to handle customer inquiries, solve issues, and qualify leads round-the-clock.",
    icon: Bot,
    color: "from-blue-500 to-indigo-600",
    outcomes: [
      "70% faster customer response time",
      "Reduced monthly support rep overhead",
      "Seamless handoff to human support"
    ],
    tech: ["OpenAI API", "Pinecone", "LangGraph", "Node.js"],
    benefits: "Reduce ticket backlogs, maintain 24/7 availability, and ensure factual responses based on vector data.",
    problems: "Missed inquiries after hours, high staffing costs, slow customer support resolution.",
    features: ["Vector RAG knowledge search", "Slack/Email alerts for team", "Stateful dialogue routing"],
    pricing: "$3,500 USD / ₹2,80,000 INR",
    timeline: "3 - 5 weeks"
  },
  {
    id: "wa-ordering",
    category: "WhatsApp Automation",
    name: "WhatsApp Ordering & Stores",
    tagline: "Close sales inside the chat thread.",
    description: "Construct conversational stores directly in WhatsApp. Allow users to browse catalog items, place orders, and pay securely via Stripe or UPI.",
    icon: Smartphone,
    color: "from-emerald-400 to-teal-600",
    outcomes: [
      "3.2x higher conversion than standard checkout",
      "Automated invoices & receipt delivery",
      "Zero manual CRM data entry"
    ],
    tech: ["WhatsApp Business API", "Stripe API", "Make", "Express.js"],
    benefits: "Eliminate friction. Buyers don't need to visit external pages or install apps; they purchase where they chat.",
    problems: "Low conversion rates on checkout pages, high customer drops, delayed manual order confirmations.",
    features: ["Stripe/UPI integration", "Automated stock check loops", "Interactive buttons list selection"],
    pricing: "$2,800 USD / ₹2,24,000 INR",
    timeline: "2 - 4 weeks"
  },
  {
    id: "web-corp",
    category: "Website Development",
    name: "Custom Web Apps & Portals",
    tagline: "Proprietary software tailored to your processes.",
    description: "Ditch rigid page templates. Build high-speed Next.js corporate dashboards, real estate directories, or custom SaaS panels designed strictly for your operations.",
    icon: Code,
    color: "from-purple-500 to-fuchsia-600",
    outcomes: [
      "98+ Google Lighthouse performance speeds",
      "Role-based secure member areas",
      "100% custom code repository ownership"
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    benefits: "Own your platform. Highly customized design matching Vercel/Linear vibes that load in milliseconds.",
    problems: "Bloated seat-based monthly subscriptions, slow template speeds, security gaps, poor search rankings.",
    features: ["Serverless database querying", "Supabase authentication", "SEO-optimized static page generation"],
    pricing: "$5,500 USD / ₹4,40,000 INR",
    timeline: "4 - 8 weeks"
  },
  {
    id: "book-appointment",
    category: "Booking Systems",
    name: "Appointment Scheduler & Reminders",
    tagline: "Automated schedule assignment.",
    description: "Custom appointment coordinators for clinics, gyms, salons, or consultants. Synchronizes live slots and automates confirmation triggers.",
    icon: Clock,
    color: "from-rose-500 to-red-600",
    outcomes: [
      "90% reduction in customer no-shows",
      "Real-time calendar collision check",
      "Automated SMS & WhatsApp reminders"
    ],
    tech: ["Google Calendar API", "Twilio API", "Cal.com API", "Node.js"],
    benefits: "Ditch back-and-forth emails. Allow bookings and prepayments while assigned staff receive dashboard alerts.",
    problems: "Double-bookings, manual entry mistakes, customer forgetfulness, administrative overhead.",
    features: ["Multi-time-zone conversion", "Collect deposits on booking", "Automated custom notification delay loops"],
    pricing: "$2,000 USD / ₹1,60,000 INR",
    timeline: "2 - 3 weeks"
  },
  {
    id: "crm-pipeline",
    category: "CRM & ERP",
    name: "Lead Management & Pipelines",
    tagline: "Track and organize every lead.",
    description: "Centralized client portals, invoice management tables, sales pipelines, and executive dashboards structured for your sales pipelines.",
    icon: Layers,
    color: "from-cyan-500 to-blue-600",
    outcomes: [
      "25+ manual paperwork hours saved weekly",
      "Consolidated contact interaction logs",
      "Visual charts of annual revenue pipelines"
    ],
    tech: ["Next.js", "PostgreSQL", "Prisma", "Chart.js"],
    benefits: "Ditch messy spreadsheets. Follow up with warm leads immediately and monitor sales velocities on interactive graphs.",
    problems: "Lost client email threads, double invoicing, lack of executive performance visibility.",
    features: ["Visual Kanban boards", "Automated PDF invoice generation", "Role security access layers"],
    pricing: "$4,800 USD / ₹3,84,000 INR",
    timeline: "4 - 8 weeks"
  },
  {
    id: "mkt-automation",
    category: "Marketing Automation",
    name: "Lead Funnels & Review Loop",
    tagline: "Turn visitors into active customers.",
    description: "Deploy high-converting landing pages integrated with email onboarding drips, WhatsApp broadcasts, and automated Google Review triggers.",
    icon: TrendingUp,
    color: "from-amber-500 to-orange-600",
    outcomes: [
      "35%+ conversion rate on landing flows",
      "Automated review requests after sale",
      "Dormant lead re-engagement drops"
    ],
    tech: ["ActiveCampaign API", "Resend", "Make", "TailwindCSS"],
    benefits: "Keep leads engaged automatically. Nurture visitors, trigger prompts based on customer actions, and capture 5-star ratings.",
    problems: "Cold traffic dropping, manually emailing proposals, zero customer re-engagement pipelines.",
    features: ["Automated email drip triggers", "A/B testable layouts", "Google Review API hooks"],
    pricing: "$2,500 USD / ₹2,00,000 INR",
    timeline: "2 - 4 weeks"
  },
  {
    id: "ai-creative",
    category: "AI Creative Services",
    name: "AI Ads & Product Videos",
    tagline: "Studio quality creative media at scale.",
    description: "Deploy high-converting AI commercial videos, restaurant reel showcases, real estate tours, and prompt-engineered custom graphics.",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    outcomes: [
      "5x drop in video production costs",
      "Immediate video edits and rendering",
      "Highly targeted ad creative hooks"
    ],
    tech: ["Midjourney", "Runway Gen-2", "ElevenLabs", "Premiere"],
    benefits: "Bypass camera and editor logistics. Generate voiceovers, mockups, and video advertisements in hours instead of weeks.",
    problems: "Expensive commercial filming shoots, content fatigue on ads, slow editing cycles.",
    features: ["AI voice synthesizers", "4K image rendering models", "Motion overlays editing"],
    pricing: "$1,800 USD / ₹1,44,000 INR",
    timeline: "1 - 2 weeks"
  },
  {
    id: "data-bi",
    category: "Data & Analytics",
    name: "BI Dashboards & PDF Automation",
    tagline: "Unlock hidden business intelligence.",
    description: "Automate PDF invoice extraction, document OCR parsing, and configure real-time reporting boards for company leadership.",
    icon: LineChart,
    color: "from-indigo-500 to-violet-600",
    outcomes: [
      "Zero manual paperwork parsing invoices",
      "Instant PDF data table extraction",
      "Automated Slack analytics reports"
    ],
    tech: ["Python", "Pandas", "Supabase", "Apache Superset"],
    benefits: "Base decisions on facts. Streamline manual billing files, parse scans using AI OCR, and dispatch reporting emails.",
    problems: "Blind spots in financial trends, staff spending hours copy-pasting numbers from PDF receipts.",
    features: ["OCR document parsing", "Weekly executive PDF exports", "Real-time metrics charts"],
    pricing: "$3,200 USD / ₹2,56,000 INR",
    timeline: "3 - 5 weeks"
  },
  {
    id: "saas-panel",
    category: "Custom Software",
    name: "SaaS Dev & Admin Panels",
    tagline: "Proprietary software engines.",
    description: "Develop serverless SaaS systems, inventory trackers, and internal back-office panels coded specifically for your company.",
    icon: Code2,
    color: "from-sky-500 to-blue-700",
    outcomes: [
      "Zero seat-based monthly billing fees",
      "Serverless architecture scaling cost-effectively",
      "Custom Stripe billing webhooks integration"
    ],
    tech: ["React", "TypeScript", "Node.js", "AWS Lambdas"],
    benefits: "Retain 100% code ownership. Your platform scales seamlessly to match user activity, keeping hosting bills low.",
    problems: "Rigid SaaS options that lack key features, climbing monthly software bills as your staff grows.",
    features: ["Stripe subscription webhooks", "Secure multi-user permissions", "Indexed relational tables"],
    pricing: "$6,500 USD / ₹5,20,000 INR",
    timeline: "6 - 12 weeks"
  },
  {
    id: "api-sync",
    category: "Integrations",
    name: "API Gateways & Sync Connectors",
    tagline: "Sync your software tools securely.",
    description: "Configure custom webhook receivers, payment gateway checkout links, and fail-safe API retry queues to keep databases aligned.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-700",
    outcomes: [
      "100% data alignment between tools",
      "Sub-second API dispatch speeds",
      "Fail-safe request queuing in Redis"
    ],
    tech: ["Express.js", "Redis Queue", "PostgreSQL", "Webhooks"],
    benefits: "Unify your stack. Keep Stripe, email dashboards, CRM pipelines, and messaging webhooks synchronized in real-time.",
    problems: "Dropped API notifications, out-of-sync contact databases, double payments, delayed logs.",
    features: ["Redis request retry loops", "Secure encryption credentials", "Webhook rate limiters"],
    pricing: "$2,200 USD / ₹1,76,000 INR",
    timeline: "2 - 3 weeks"
  }
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("AI Automation");
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const filteredServices = premiumServices.filter(s => s.category === activeCategory);

  return (
    <section className="pt-12 pb-16 relative overflow-hidden bg-background">
      {/* Subtle Premium Background Layers */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.15] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Enterprise Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary"
          >
            <Zap className="w-4 h-4 mr-2" />
            High-ROI Systems
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground leading-[1.1]"
          >
            Engineering Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Scale Revenue</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I build intelligent systems that help businesses grow. Select a category below to browse premium automated solutions engineered to save time and reduce overhead.
          </motion.p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex border-b border-border gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer relative ${
                activeCategory === cat 
                  ? "text-primary bg-primary/15 border border-primary/20" 
                  : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="group relative"
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative bg-card/40 backdrop-blur-2xl border border-border/50 p-6 rounded-3xl flex flex-col justify-between h-full shadow-sm hover:border-primary/30 transition-all duration-300">
                    <div>
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-md mb-6`}>
                        <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-[14px] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>

                      {/* Header copy */}
                      <h3 className="text-xl font-bold text-foreground tracking-tight mb-2">{service.name}</h3>
                      <h4 className="text-xs font-semibold text-primary mb-4 leading-none">{service.tagline}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                      {/* Core outcomes list */}
                      <div className="space-y-2 border-t border-border/40 pt-4 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Target ROI Highlights</span>
                        {service.outcomes.map((out, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2.5 mt-auto pt-4 border-t border-border/40">
                      <Button
                        onClick={() => setActiveService(service)}
                        variant="outline"
                        className="flex-1 text-xs font-bold rounded-xl border-primary/20 hover:bg-muted text-foreground cursor-pointer h-11"
                      >
                        Inspect Blueprint
                      </Button>
                      
                      <a 
                        href={`https://wa.me/916006121193?text=${encodeURIComponent(
                          `Hello Kumail! I'm interested in your service: "${service.name}". Let's discuss.`
                        )}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                      >
                        <Button className="w-full group/btn rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:scale-[1.01] transition-all cursor-pointer h-11">
                          Consult
                          <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Button>
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Detail Modal overlay */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
            >
              <div className={`h-2 bg-gradient-to-r ${activeService.color}`} />
              
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">{activeService.category} Profile</span>
                  <h3 className="text-2xl font-black text-foreground tracking-tight">{activeService.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{activeService.tagline}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 border-t border-border/50 pt-5">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-muted-foreground">Problems Solved</h4>
                      <p className="text-xs text-foreground/80 leading-relaxed mt-1">{activeService.problems}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-muted-foreground">Core Benefits</h4>
                      <p className="text-xs text-foreground/80 leading-relaxed mt-1">{activeService.benefits}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-muted-foreground">Technologies Stacked</h4>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {activeService.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-secondary text-foreground text-[10px] font-bold rounded border border-border/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[10px] uppercase font-bold text-muted-foreground">Pricing Target</h4>
                        <p className="text-xs font-bold text-primary mt-1">{activeService.pricing}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase font-bold text-muted-foreground">Target Timeline</h4>
                        <p className="text-xs font-bold text-foreground mt-1">{activeService.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="border-t border-border/50 pt-5">
                  <h4 className="text-[10px] uppercase font-bold text-muted-foreground mb-3">Engineered System Features</h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {activeService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-muted/40 border-t border-border flex gap-3 justify-end">
                <button
                  onClick={() => setActiveService(null)}
                  className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-4"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/916006121193?text=${encodeURIComponent(
                    `Hello Kumail! I reviewed the blueprint for "${activeService.name}" ($${activeService.pricing}). Let's schedule a build review.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:scale-[1.01] transition-all cursor-pointer px-6">
                    Request Build Review
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
