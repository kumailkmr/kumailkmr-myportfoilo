"use client";

import { motion } from "framer-motion";
import { getSocials } from "@/config/socials";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function FloatingContact() {
  const dockSocials = getSocials(["WhatsApp", "Email", "LinkedIn"]);

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-[#E5E7EB] dark:border-[#262626] shadow-2xl rounded-full p-2 flex flex-col gap-2"
      >
        <TooltipProvider delay={100}>
          {dockSocials.map((social) => {
            if (!social) return null;
            const Icon = social.icon;
            return (
              <Tooltip key={social.platform}>
                <TooltipTrigger>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100 dark:hover:bg-[#262626] text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#2563EB] dark:hover:text-[#2563EB] transition-colors duration-300"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={15} className="bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg border-none">
                  <p>{social.platform}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </motion.div>
    </div>
  );
}
