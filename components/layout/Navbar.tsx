"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { getSocials } from "@/config/socials";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const navSocials = getSocials(["GitHub", "LinkedIn"]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            <span className="font-bold text-lg">A</span>
          </div>
          <span className="hidden sm:inline-block">AI Automations</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-secondary-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-7 left-0 right-0 h-[2px] bg-primary"
                    initial={false}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop Minimal Socials */}
          <div className="hidden lg:flex items-center gap-1 mr-2 border-r border-border pr-6">
            <TooltipProvider delay={100}>
              {navSocials.map(social => {
                if (!social) return null;
                const Icon = social.icon;
                return (
                  <Tooltip key={social.platform}>
                    <TooltipTrigger>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-secondary-foreground hover:text-primary hover:bg-secondary rounded-full transition-colors"
                        aria-label={social.platform}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs">
                      <p>{social.platform}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>

          <ThemeToggle />
          <Button className="hidden sm:inline-flex hover-lift rounded-full px-6">
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}

