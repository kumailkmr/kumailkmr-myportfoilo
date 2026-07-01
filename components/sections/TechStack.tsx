"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiSupabase, SiOpenai, SiStripe, SiZapier, SiNotion, SiTwilio, SiAirtable} from "react-icons/si";
import { Workflow, Bot, Component, Server, Webhook, Mail, Database, Layers, Network, X, BookOpen, ExternalLink, Award } from "lucide-react";

const techDetails: Record<string, {
  description: string;
  whyUse: string;
  projects: string[];
  experience: string;
  docLink: string;
}> = {
  "n8n": {
    description: "A state-of-the-art node-based workflow automation tool that enables deep software integrations.",
    whyUse: "It is open-source, highly customizable, and allows hosting complex multi-step background jobs without third-party API timeout limits.",
    projects: ["Enterprise CRM Automation Pipeline"],
    experience: "Specialist (3+ years architecting custom self-hosted n8n workflows)",
    docLink: "https://n8n.io"
  },
  "Make": {
    description: "A visual automation platform that connects apps and automates workflows without writing code.",
    whyUse: "Ideal for rapid visual prototyping of APIs and automated data syncing between standard marketing SaaS tools.",
    projects: ["Real Estate Automated Booking Engine"],
    experience: "Expert level integration architect",
    docLink: "https://make.com"
  },
  "Zapier": {
    description: "A workflow automation platform connecting over 5,000 web apps.",
    whyUse: "Useful for fast connections when bespoke custom code is unnecessary.",
    projects: ["Consulting Lead Routing Pipeline"],
    experience: "Highly experienced in Webhook hooks & custom JS code actions",
    docLink: "https://zapier.com"
  },
  "Pipedream": {
    description: "An integration platform for developers to connect APIs, code-first.",
    whyUse: "Perfect for code-level automation steps using serverless Node.js/Python functions with pre-built auth.",
    projects: ["SaaS Email Sync System"],
    experience: "Expert code step writer",
    docLink: "https://pipedream.com"
  },
  "OpenAI API": {
    description: "Cutting-edge artificial intelligence API providing access to GPT-4 and reasoning models.",
    whyUse: "Delivers unmatched reasoning capacity, function calling accuracy, and structured JSON outputs.",
    projects: ["Scaling E-Commerce Support Agent", "AI Real Estate Booking Bot"],
    experience: "Specialist (Prompt engineering, context windows, agentic architectures)",
    docLink: "https://platform.openai.com"
  },
  "Anthropic API": {
    description: "Advanced AI systems access supporting Claude 3.5 Sonnet.",
    whyUse: "Claude offers superior long-form reasoning, complex coding syntax checks, and highly natural conversational tone.",
    projects: ["Autonomous Multi-Agent Helpdesk Ecosystem"],
    experience: "RAG retrieval pipeline architect",
    docLink: "https://anthropic.com"
  },
  "LangChain": {
    description: "A framework for developing applications powered by language models.",
    whyUse: "Simplifies building complex chains, memory buffers, and document parser loaders.",
    projects: ["RAG Knowledge Retrieval System"],
    experience: "Senior integrator",
    docLink: "https://langchain.com"
  },
  "LlamaIndex": {
    description: "A data framework for connecting private business files to LLMs.",
    whyUse: "Optimized for indexing structured databases, parsing PDFs, and delivering highly accurate context retrieval.",
    projects: ["Corporate Policy RAG Bot"],
    experience: "Embedding and database indexing specialist",
    docLink: "https://llamaindex.ai"
  },
  "Flowise": {
    description: "A drag-and-drop UI to build customized LLM orchestration apps.",
    whyUse: "Speeds up UI layouts of LangChain pipelines and agentic tool node diagrams.",
    projects: ["Customer Service Agent Visual MVP"],
    experience: "UI Flow designer",
    docLink: "https://flowiseai.com"
  },
  "Langflow": {
    description: "A user interface for LangChain, designed with react-flow.",
    whyUse: "Helpful for rapid node prototyping and visual prompt testing.",
    projects: ["Lead Generation Triage flow"],
    experience: "Flow developer",
    docLink: "https://langflow.org"
  },
  "Node.js": {
    description: "A JavaScript runtime built on Chrome's V8 engine.",
    whyUse: "Highly performant event loops that handle thousands of concurrent API requests cleanly.",
    projects: ["Bespoke Enterprise CRM Integration Server"],
    experience: "Senior Backend Engineer (6+ years building robust APIs)",
    docLink: "https://nodejs.org"
  },
  "TypeScript": {
    description: "A strongly typed programming language that builds on JavaScript.",
    whyUse: "Eliminates compile-time bugs, enforces clean data models, and dramatically improves code readability.",
    projects: ["SaaS Subscription App", "Centralized Admin Dashboard"],
    experience: "Specialist (All production code is written in TypeScript)",
    docLink: "https://typescriptlang.org"
  },
  "Server Actions": {
    description: "Next.js feature to execute server-side database tasks directly from client triggers.",
    whyUse: "Removes standard API route boilerplate and ensures secure server calculations in React.",
    projects: ["Premium Hire Me form page"],
    experience: "Production framework designer",
    docLink: "https://nextjs.org"
  },
  "Supabase": {
    description: "An open-source Firebase alternative providing serverless Postgres, auth, and real-time sync.",
    whyUse: "Provides a secure, instant database layer with row-level security policy checks directly integrated.",
    projects: ["Business SaaS Portal dashboard", "E-Commerce Customer Portal"],
    experience: "Expert (Advanced setups of supabase-auth, edge functions, storage buckets)",
    docLink: "https://supabase.com"
  },
  "PostgreSQL": {
    description: "A powerful, open-source object-relational database system.",
    whyUse: "Exceptional transactional safety (ACID), robust index searches, and native vector storage (pgvector).",
    projects: ["Autonomous Multi-Agent Ecosystem", "B2B CRM Database Core"],
    experience: "Senior DBA (Postgres schema design, vacuum parameters, query optimization)",
    docLink: "https://postgresql.org"
  },
  "Pinecone": {
    description: "A managed, cloud-native vector database designed for fast semantic checks.",
    whyUse: "Handles millions of vector query embeddings in milliseconds, providing real-time RAG context retrieval.",
    projects: ["E-Commerce Knowledge Support Agent"],
    experience: "Vector indexer & metadata designer",
    docLink: "https://pinecone.io"
  },
  "Weaviate": {
    description: "An open-source vector database designed for AI semantic querying.",
    whyUse: "Features hybrid keyword/vector searches out of the box with high indexing speed.",
    projects: ["Corporate Knowledge Base RAG Search"],
    experience: "Semantic search architect",
    docLink: "https://weaviate.io"
  },
  "Airtable": {
    description: "A low-code database and spreadsheet platform.",
    whyUse: "Acts as a visual, user-friendly admin portal for clients while serving as a secure database via APIs.",
    projects: ["Lead Intake Pipeline Sync"],
    experience: "Expert API builder",
    docLink: "https://airtable.com"
  },
  "Notion": {
    description: "A connected workspace for doc wikis, database boards, and projects.",
    whyUse: "Perfect for keeping client wikis and tracking project milestones dynamically via webhooks.",
    projects: ["Client Intake Automations"],
    experience: "Notion API integrator",
    docLink: "https://notion.so"
  },
  "Twilio": {
    description: "Cloud communications platform for SMS, Voice, and WhatsApp notifications.",
    whyUse: "Secures reliable transactional text dispatch with standard compliance logic.",
    projects: ["Corporate SMS Lead Alerts"],
    experience: "API SMS integrator",
    docLink: "https://twilio.com"
  },
  "Resend": {
    description: "Email API for developers to send transactional emails with React templates.",
    whyUse: "Highest delivery rates, clean Next.js integration, and gorgeous HTML layout rendering.",
    projects: ["Admin Notification dispatch systems"],
    experience: "Resend developer and template designer",
    docLink: "https://resend.com"
  },
  "Stripe": {
    description: "Online payment processing suite for internet businesses.",
    whyUse: "Handles recurring subscription checkouts, billing webhooks, and secure user checkout portals seamlessly.",
    projects: ["Next.js SaaS Platform subscription module"],
    experience: "Stripe checkout & webhook listener developer",
    docLink: "https://stripe.com"
  },
  "Next.js": {
    description: "A production-grade React framework providing serverless page renders, page preloading, and edge caching.",
    whyUse: "Sub-second load times, dynamic bundle optimizations, and native route rendering speeds.",
    projects: ["All web applications built in the last 3 years"],
    experience: "Senior Next.js Developer",
    docLink: "https://nextjs.org"
  },
  "React": {
    description: "A JavaScript library for building interactive user interfaces.",
    whyUse: "Enables component reusability, modular layouts, and highly interactive client interfaces.",
    projects: ["Next.js App router apps, React Native apps"],
    experience: "Senior developer",
    docLink: "https://react.dev"
  },
  "Tailwind CSS": {
    description: "A utility-first CSS framework for rapid UI styling.",
    whyUse: "Ensures CSS remains compact, eliminates stylesheet clutter, and speeds up responsive layout design.",
    projects: ["All responsive web interfaces built"],
    experience: "Specialist",
    docLink: "https://tailwindcss.com"
  }
};

const categories = [
  {
    id: "automation",
    label: "Automation",
    techs: [
      { name: "n8n", icon: Workflow, color: "text-primary" },
      { name: "Make", icon: Layers, color: "text-primary" },
      { name: "Zapier", icon: SiZapier, color: "text-primary" },
      { name: "Pipedream", icon: Webhook, color: "text-primary" }
    ]
  },
  {
    id: "ai",
    label: "AI & LLMs",
    techs: [
      { name: "OpenAI API", icon: SiOpenai, color: "text-primary" },
      { name: "Anthropic API", icon: Bot, color: "text-primary" },
      { name: "LangChain", icon: Network, color: "text-primary" },
      { name: "LlamaIndex", icon: Database, color: "text-primary" },
      { name: "Flowise", icon: Component, color: "text-primary" },
      { name: "Langflow", icon: Workflow, color: "text-primary" }
    ]
  },
  {
    id: "backend",
    label: "Backend & Scripting",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-primary" },
      { name: "TypeScript", icon: SiTypescript, color: "text-primary" },
      { name: "Server Actions", icon: Server, color: "text-primary" }
    ]
  },
  {
    id: "database",
    label: "Databases & Storage",
    techs: [
      { name: "Supabase", icon: SiSupabase, color: "text-primary" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-primary" },
      { name: "Pinecone", icon: Database, color: "text-primary" },
      { name: "Weaviate", icon: Database, color: "text-primary" },
      { name: "Airtable", icon: SiAirtable, color: "text-primary" },
      { name: "Notion", icon: SiNotion, color: "text-primary" }
    ]
  },
  {
    id: "integrations",
    label: "APIs & Comms",
    techs: [
      { name: "Twilio", icon: SiTwilio, color: "text-primary" },
      { name: "Resend", icon: Mail, color: "text-primary" },
      { name: "Stripe", icon: SiStripe, color: "text-primary" }
    ]
  },
  {
    id: "frontend",
    label: "Frontend",
    techs: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-primary" },
      { name: "React", icon: SiReact, color: "text-primary" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-primary" }
    ]
  }
];

export function TechStack() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const activeDetails = selectedTech ? techDetails[selectedTech] : null;

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">My Engineered Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I leverage battle-tested, high-performance frameworks, AI models, and automation platforms to build secure, enterprise-grade business systems. Click any logo to inspect parameters.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full flex-col">
            <TabsList className="w-full flex flex-wrap justify-center h-auto bg-transparent gap-2 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-3 text-base cursor-pointer"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {category.techs.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <button 
                        key={index}
                        onClick={() => setSelectedTech(tech.name)}
                        className="bg-background border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 text-center shadow-sm hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer w-full"
                      >
                        <Icon className={`w-12 h-12 transition-transform group-hover:scale-110 ${tech.color}`} />
                        <span className="font-medium text-sm text-foreground">{tech.name}</span>
                      </button>
                    );
                  })}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Slide-Up Tech Details Drawer Overlay */}
      <AnimatePresence>
        {selectedTech && activeDetails && (
          <div className="fixed inset-0 z-[9995] flex items-end justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 150 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-2xl bg-card border border-border/80 rounded-t-3xl shadow-2xl p-6 md:p-8 space-y-6 overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              {/* Header decoration bar */}
              <div className="w-16 h-1.5 bg-muted rounded-full mx-auto mb-4" />
              
              {/* Title & Close */}
              <div className="flex justify-between items-center pb-4 border-b border-border/30">
                <div>
                  <h3 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
                    {selectedTech} Explorer
                    <SiTypescript className="w-4 h-4 text-primary" />
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Technology Details Blueprint</p>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  Technical Specification
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">{activeDetails.description}</p>
              </div>

              {/* Why use */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  Why I Use It
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">{activeDetails.whyUse}</p>
              </div>

              {/* Projects utilizing */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Portfolio Case Integration</h4>
                <ul className="space-y-1.5">
                  {activeDetails.projects.map((proj, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {proj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience level */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Experience Index</h4>
                <p className="text-xs font-semibold text-foreground/90">{activeDetails.experience}</p>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-border/20 flex justify-between items-center gap-4">
                <a
                  href={activeDetails.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Official Documentation
                </a>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-primary/95 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
