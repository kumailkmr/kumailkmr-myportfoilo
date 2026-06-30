"use client";

import Link from "next/link";
import { SOCIALS } from "@/config/socials";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <span className="font-bold text-lg">A</span>
              </div>
              <span>AI Automations</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Premium AI software, automated workflows, and robust web applications engineered for business growth.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Professional</h4>
            <div className="flex flex-col gap-3">
              {SOCIALS.slice(0, 4).map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {social.platform}
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              {SOCIALS.slice(4).map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {social.platform}
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Kumail KMR. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
