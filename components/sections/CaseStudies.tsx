"use client";

import { Button } from "@/components/ui/button";

export function CaseStudies() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">In-Depth Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the architecture, challenges, and business impact behind the solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-background rounded-3xl overflow-hidden border border-border shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Deep Dive</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Scaling E-commerce Support with Generative AI
              </h3>
              <p className="text-muted-foreground mb-6">
                How we reduced support ticket response times from 4 hours to 5 seconds by integrating a custom LLM trained on the client&apos;s internal knowledge base, resulting in a 30% increase in customer satisfaction.
              </p>
              <div className="space-y-2 mb-8 text-sm">
                <div className="flex gap-2">
                  <span className="font-semibold text-foreground w-24">Challenge:</span>
                  <span className="text-muted-foreground">Overwhelmed support team</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-foreground w-24">Solution:</span>
                  <span className="text-muted-foreground">Custom RAG-based AI Agent</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-foreground w-24">Impact:</span>
                  <span className="text-muted-foreground text-primary font-medium">$5k/month saved in operational costs</span>
                </div>
              </div>
              <div>
                <Button>Read Full Case Study</Button>
              </div>
            </div>
            <div className="bg-muted relative min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                [Case Study Visual/Architecture Diagram]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
