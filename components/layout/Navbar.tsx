"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Home, Layers, LayoutGrid, User } from "lucide-react";
import { getSocials } from "@/config/socials";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CALENDLY_LINK } from "@/config/socials";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Layers },
  { name: "Work", href: "/work", icon: LayoutGrid },
  { name: "About", href: "/about", icon: User },
];

export function Navbar() {
  const pathname = usePathname();
  const navSocials = getSocials(["GitHub", "LinkedIn"]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <div className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow overflow-hidden relative">
            <Image 
              src="/images/logo.jpg" 
              alt="Kumail Kmr Logo" 
              fill 
              className="object-cover object-top"
              sizes="40px"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-base leading-none text-foreground tracking-tight">Kumail Kmr</span>
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-[0.2em] mt-1">Independent</span>
          </div>
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
          <a 
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 rounded-full px-6 hover-lift"
          >
            Book Consultation
          </a>

        </div>
      </div>
    </header>
  );
}

