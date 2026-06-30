"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    id: "backend",
    label: "Backend",
    techs: ["Node.js", "Express", "Python", "FastAPI", "Next.js API Routes"]
  },
  {
    id: "databases",
    label: "Databases",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma ORM"]
  },
  {
    id: "ai",
    label: "AI & Automation",
    techs: ["OpenAI", "LangChain", "HuggingFace", "Make.com", "Zapier"]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare"]
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
          <Tabs defaultValue="frontend" className="w-full">
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
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {category.techs.map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-background border border-border rounded-xl p-6 text-center font-medium shadow-sm hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
