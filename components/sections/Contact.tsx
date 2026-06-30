"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Globe } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Great</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to automate your workflows, build a custom SaaS, or integrate AI into your business? Reach out for a free technical consultation.
            </p>

            <div className="space-y-6 mb-8">
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">hello@yourdomain.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-medium">+1 (555) 123-4567</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-medium">linkedin.com/in/yourprofile</span>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background border-border shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">How can I help?</label>
                    <textarea 
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell me about your project goals..."
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Inquiry
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
