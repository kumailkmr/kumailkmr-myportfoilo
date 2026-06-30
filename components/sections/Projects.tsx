"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Customer Support Agent",
    description: "Automated support resolution reducing ticket volume by 40%.",
    tech: ["Next.js", "OpenAI", "Supabase"],
  },
  {
    title: "Enterprise Workflow CRM",
    description: "Custom management dashboard unifying fragmented operations.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Real Estate Booking Platform",
    description: "End-to-end booking platform with automated contract generation.",
    tech: ["Next.js", "Prisma", "Stripe"],
  },
];

export function Projects() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A selection of recent engineering solutions that drove measurable business impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full overflow-hidden bg-muted/20 hover:border-primary/50 transition-colors">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  [Project Visual Placeholder]
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
