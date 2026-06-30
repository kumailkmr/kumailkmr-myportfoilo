import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Mail, FileText, Calendar } from "lucide-react";

export type SocialProfile = {
  platform: string;
  url: string;
  handle: string;
  icon: React.ElementType<{ className?: string }>;
  description: string;
  tooltip: string;
};

export const SOCIALS: SocialProfile[] = [
  {
    platform: "GitHub",
    url: "https://github.com/kumailkmr",
    handle: "@kumailkmr",
    icon: FaGithub,
    description: "Explore my open-source projects, contributions, and code repositories.",
    tooltip: "View my repositories"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/kumailkmr",
    handle: "Kumail KMR",
    icon: FaLinkedin,
    description: "Connect with me professionally and view my career history.",
    tooltip: "Professional profile"
  },
  {
    platform: "X (Twitter)",
    url: "https://x.com/kumailkmr",
    handle: "@kumailkmr",
    icon: FaTwitter,
    description: "Follow my thoughts on AI, software engineering, and technology.",
    tooltip: "Follow me on X"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/kumailkmr",
    handle: "@kumailkmr",
    icon: FaInstagram,
    description: "A glimpse into my life, travels, and behind-the-scenes work.",
    tooltip: "Follow me on Instagram"
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/1234567890",
    handle: "Chat Now",
    icon: FaWhatsapp,
    description: "Send me a direct message to discuss your next big project.",
    tooltip: "Start a conversation"
  },
  {
    platform: "Email",
    url: "mailto:hello@kumailkmr.com",
    handle: "hello@kumailkmr.com",
    icon: Mail,
    description: "Reach out via email for business inquiries and collaborations.",
    tooltip: "Send me an email"
  },
  {
    platform: "Resume",
    url: "/resume.pdf",
    handle: "Download PDF",
    icon: FileText,
    description: "View my detailed work history, education, and technical skills.",
    tooltip: "Download my resume"
  },
  {
    platform: "Calendly",
    url: "https://calendly.com/kumailkmr",
    handle: "Book a Call",
    icon: Calendar,
    description: "Schedule a free consultation or strategy session directly.",
    tooltip: "Book a meeting"
  }
];

export const getSocial = (platform: string) => SOCIALS.find(s => s.platform === platform);
export const getSocials = (platforms: string[]) => SOCIALS.filter(s => platforms.includes(s.platform));
