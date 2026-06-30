"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Home, Layers, LayoutGrid, User, UserCircle, Menu, ArrowRight, Briefcase, BarChart3 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { getSocials } from "@/config/socials";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CALENDLY_LINK } from "@/config/socials";
import { HireMeModal } from "@/components/ui/HireMeModal";
import { AboutMeModal } from "@/components/ui/AboutMeModal";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Layers },
  { name: "Work", href: "/work", icon: LayoutGrid },
  { name: "About", href: "/about", icon: User },
];

// Sidebar-only links (Work removed — accessible via bottom nav)
const sidebarLinks = [
  { name: "Insights", href: "/insights", icon: BarChart3 },
];

export function Navbar() {
  const pathname = usePathname();
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navSocials = getSocials(["GitHub", "LinkedIn"]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground flex items-center gap-3">
          <div className="w-12 h-12 border-2 border-primary/20 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow overflow-hidden relative">
            <Image 
              src="/images/logo.jpg" 
              alt="Kumail Kmr Logo" 
              fill 
              className="object-cover object-[50%_25%]"
              sizes="48px"
              priority
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

            {/* Desktop Hire Me Button */}
            <button
              onClick={() => setIsHireMeOpen(true)}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              Hire Me
            </button>

            <ThemeToggle />
          <a 
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 rounded-full px-6 hover-lift"
          >
            Book Consultation
          </a>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center ml-2">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger className="p-2 -mr-2 text-secondary-foreground hover:text-primary transition-colors focus:outline-none">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Toggle Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background border-l border-border/20 pt-16 shadow-2xl flex flex-col">
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                <SheetDescription className="sr-only">Links to navigate the website.</SheetDescription>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 flex-grow">
                  {sidebarLinks.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                          isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                        }`}
                      >
                        <div className={`p-2 rounded-xl ${isActive ? "bg-primary/20" : "bg-card/50 group-hover:bg-card"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-semibold text-foreground tracking-tight">{link.name}</span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    );
                  })}
                  
                  {/* About Me Button — opens the same modal as hero */}
                  <button
                    onClick={() => { setIsAboutMeOpen(true); setIsSidebarOpen(false); }}
                    className="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 text-muted-foreground hover:bg-card/50 hover:text-foreground text-left"
                  >
                    <div className="p-2 rounded-xl bg-card/50 group-hover:bg-card">
                      <UserCircle className="w-5 h-5 text-purple-500" />
                    </div>
                    <span className="text-xl font-semibold text-foreground tracking-tight">About Me</span>
                  </button>

                  {/* Hire Me Button */}
                  <button
                    onClick={() => { setIsHireMeOpen(true); setIsSidebarOpen(false); }}
                    className="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 text-muted-foreground hover:bg-card/50 hover:text-foreground text-left"
                  >
                    <div className="p-2 rounded-xl bg-card/50 group-hover:bg-card">
                      <Briefcase className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="text-xl font-semibold text-foreground tracking-tight">Hire Me</span>
                  </button>
                </nav>

                {/* Footer CTA */}
                <div className="mt-auto pt-6 border-t border-border/20">
                  <a 
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full p-4 rounded-2xl bg-gradient-to-r from-primary/90 to-purple-600/90 hover:from-primary hover:to-purple-600 text-white shadow-lg transition-all duration-300 hover:shadow-primary/25 hover:-translate-y-1"
                  >
                    <span className="font-bold text-base tracking-tight">Book Consultation</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
      <HireMeModal isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
      <AboutMeModal isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />
    </header>
  );
}

