"use client";

import { Sparkles } from "lucide-react";

import { 
  SiOpenai, 
  SiLangchain, 
  SiHuggingface, 
  SiElevenlabs, 
  SiHostinger, 
  SiVercel, 
  SiGooglecloud,
  SiDigitalocean,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiZapier,
  SiN8N,
  SiMake,
  SiSupabase,
  SiPostgresql
} from "react-icons/si";

const techList = [
  { name: "OpenAI", Icon: SiOpenai },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Hugging Face", Icon: SiHuggingface },
  { name: "Higgsfield AI", Icon: Sparkles },
  { name: "ElevenLabs", Icon: SiElevenlabs },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Zapier", Icon: SiZapier },
  { name: "n8n", Icon: SiN8N },
  { name: "Make", Icon: SiMake },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Hostinger", Icon: SiHostinger },
  { name: "Vercel", Icon: SiVercel },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "DigitalOcean", Icon: SiDigitalocean }
];

export function Technologies() {
  return (
    <section className="py-20 bg-muted/20 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none w-full" />
      
      <div className="container mx-auto px-4 text-center mb-10 relative z-20">
        <p className="text-sm font-bold uppercase tracking-widest text-primary/80">
          Powered By Premium Infrastructure & Next-Gen AI
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-12 sm:gap-16 items-center py-4 group-hover:[animation-play-state:paused]">
          {/* Double the list for seamless infinite scrolling */}
          {[...techList, ...techList].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors duration-300 cursor-default"
            >
              <tech.Icon className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 hover:scale-110 text-foreground group-hover/tech:text-primary" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight hidden sm:block">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
