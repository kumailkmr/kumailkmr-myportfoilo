"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, LayoutGrid, User, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  isExternal?: boolean;
};

const mobileNavLinks: NavLink[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Layers },
  { name: "Work", href: "/work", icon: LayoutGrid },
  { name: "About", href: "/about", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full">
      <nav className="flex items-center justify-around px-2 py-3 bg-background/80 backdrop-blur-3xl border-t border-border/50 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_-8px_30px_rgb(0,0,0,0.4)]">
        {mobileNavLinks.map((link) => {
          const isActive = pathname === link.href && !link.isExternal;
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn(
                "relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                link.isExternal && "text-primary bg-primary/5 hover:bg-primary/10" // Make CTA distinct
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10 mb-1" />
              <span className="text-[10px] font-medium relative z-10 tracking-wide">
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
