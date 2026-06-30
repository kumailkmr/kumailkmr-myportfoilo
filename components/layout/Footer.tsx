"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { YoutubeModal } from "@/components/ui/YoutubeModal";
import { CALENDLY_LINK } from "@/config/socials";
import { 
  SiFacebook, 
  SiInstagram, 
  SiWhatsapp, 
  SiX, 
  SiKaggle, 
  SiReddit, 
  SiGithub, 
  SiDiscord, 
  SiYoutube 
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const footerSocials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/kumailkmr", icon: FaLinkedin, hoverColor: "group-hover:text-[#0077b5]", hoverBorder: "hover:border-[#0077b5]/50" },
  { name: "X (Twitter)", url: "https://x.com/kumailkmr", icon: SiX, hoverColor: "group-hover:text-white", hoverBorder: "hover:border-white/50" },
  { name: "GitHub", url: "https://github.com/kumailkmr", icon: SiGithub, hoverColor: "group-hover:text-[#fafafa]", hoverBorder: "hover:border-[#fafafa]/50" },
  { name: "Kaggle", url: "https://www.kaggle.com/kumailkmr", icon: SiKaggle, hoverColor: "group-hover:text-[#20BEFF]", hoverBorder: "hover:border-[#20BEFF]/50" },
  { name: "Instagram", url: "https://instagram.com/kumail.kmr", icon: SiInstagram, hoverColor: "group-hover:text-[#E1306C]", hoverBorder: "hover:border-[#E1306C]/50" },
  { name: "Facebook", url: "https://facebook.com/kumailkmr", icon: SiFacebook, hoverColor: "group-hover:text-[#1877F2]", hoverBorder: "hover:border-[#1877F2]/50" },
  { name: "WhatsApp", url: "https://wa.me/916006121193", icon: SiWhatsapp, hoverColor: "group-hover:text-[#25D366]", hoverBorder: "hover:border-[#25D366]/50" },
  { name: "Reddit", url: "#", icon: SiReddit, hoverColor: "group-hover:text-[#FF4500]", hoverBorder: "hover:border-[#FF4500]/50" },
  { name: "Discord", url: "#", icon: SiDiscord, hoverColor: "group-hover:text-[#5865F2]", hoverBorder: "hover:border-[#5865F2]/50" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/work" }
];

const expertiseLinks = [
  { name: "AI Automation", href: "/services" },
  { name: "Custom SaaS", href: "/services" },
  { name: "Business Systems", href: "/services" },
  { name: "Voice Agents", href: "/services" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-border/20 bg-background pt-24 pb-12 relative overflow-hidden">
        {/* Subtle glowing ambient backdrop */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Column 1: Brand Identity & CTA (Takes up more space) */}
            <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-8">
              <Link href="/" className="text-3xl font-black tracking-tight text-foreground flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="font-bold text-xl text-white">K</span>
                </div>
                <span>Kumail Kmr</span>
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Engineering premium AI software, intelligent automation workflows, and high-ticket digital solutions for ambitious founders.
              </p>
              
              <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 mt-4 text-sm font-bold text-white bg-secondary/80 border border-border rounded-xl transition-all duration-300 hover:border-primary/50 hover:bg-card">
                  Discuss Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Column 2: Navigation */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-base flex items-center group w-fit">
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Expertise */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Expertise</h4>
              <ul className="space-y-4">
                {expertiseLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-base flex items-center group w-fit">
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Social Connections */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Connect</h4>
              
              <div className="flex flex-wrap gap-3">
                {footerSocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-12 h-12 rounded-xl bg-card/20 backdrop-blur-md border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.hoverBorder}`}
                    title={social.name}
                    aria-label={social.name}
                  >
                    <social.icon className={`w-5 h-5 text-muted-foreground transition-colors duration-300 ${social.hoverColor}`} />
                  </a>
                ))}

                {/* Interactive YouTube Button */}
                <button
                  onClick={() => setIsYoutubeOpen(true)}
                  className="group flex items-center justify-center w-12 h-12 rounded-xl bg-card/20 backdrop-blur-md border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#FF0000]/50"
                  title="YouTube Channels"
                  aria-label="YouTube Channels"
                >
                  <SiYoutube className="w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:text-[#FF0000]" />
                </button>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-border/20 flex flex-col items-center justify-center gap-4 text-sm font-medium text-muted-foreground">
            <p>© {currentYear} @kumailkmr. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Render the Modal */}
      <YoutubeModal isOpen={isYoutubeOpen} onClose={() => setIsYoutubeOpen(false)} />
    </>
  );
}
