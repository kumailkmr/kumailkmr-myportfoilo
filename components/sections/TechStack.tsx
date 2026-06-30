"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPostgresql, SiSupabase, SiPrisma,
  SiOpenai, SiVercel, SiCloudflare, SiSentry,
  SiWhatsapp, SiStripe, SiGoogle
} from "react-icons/si";
import { Workflow, Bot, Component, Server, Cpu, Webhook, Mail, ShieldCheck } from "lucide-react";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    techs: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-primary" },
      { name: "React", icon: SiReact, color: "text-primary" },
      { name: "TypeScript", icon: SiTypescript, color: "text-primary" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-primary" },
      { name: "shadcn/ui", icon: Component, color: "text-primary" }
    ]
  },
  {
    id: "backend",
    label: "Backend",
    techs: [
      { name: "Server Actions", icon: Server, color: "text-primary" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-primary" }
    ]
  },
  {
    id: "database",
    label: "Database",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-primary" },
      { name: "Supabase", icon: SiSupabase, color: "text-primary" },
      { name: "Prisma", icon: SiPrisma, color: "text-primary" }
    ]
  },
  {
    id: "auth",
    label: "Authentication",
    techs: [
      { name: "Supabase Auth", icon: ShieldCheck, color: "text-primary" }
    ]
  },
  {
    id: "ai",
    label: "AI",
    techs: [
      { name: "OpenAI", icon: SiOpenai, color: "text-primary" },
      { name: "Gemini", icon: SiGoogle, color: "text-primary" },
      { name: "Claude", icon: Bot, color: "text-primary" },
      { name: "Vercel AI SDK", icon: Cpu, color: "text-primary" }
    ]
  },
  {
    id: "automation",
    label: "Automation",
    techs: [
      { name: "n8n", icon: Workflow, color: "text-primary" },
      { name: "Webhooks", icon: Webhook, color: "text-primary" }
    ]
  },
  {
    id: "integrations",
    label: "Integrations",
    techs: [
      { name: "WhatsApp", icon: SiWhatsapp, color: "text-primary" },
      { name: "Google APIs", icon: SiGoogle, color: "text-primary" },
      { name: "Resend", icon: Mail, color: "text-primary" },
      { name: "Stripe", icon: SiStripe, color: "text-primary" }
    ]
  },
  {
    id: "deployment",
    label: "Deployment",
    techs: [
      { name: "Vercel", icon: SiVercel, color: "text-primary" },
      { name: "Railway", icon: Server, color: "text-primary" },
      { name: "Cloudflare", icon: SiCloudflare, color: "text-primary" }
    ]
  },
  {
    id: "monitoring",
    label: "Monitoring",
    techs: [
      { name: "Sentry", icon: SiSentry, color: "text-primary" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I leverage modern, scalable, and secure technologies to build enterprise-grade applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full flex-col">
            <TabsList className="w-full flex flex-wrap justify-center h-auto bg-transparent gap-2 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-3 text-base"
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
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                >
                  {category.techs.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-background border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 text-center shadow-sm hover:border-primary/50 hover:shadow-md transition-all group"
                      >
                        <Icon className={`w-12 h-12 transition-transform group-hover:scale-110 ${tech.color}`} />
                        <span className="font-medium text-sm">{tech.name}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
