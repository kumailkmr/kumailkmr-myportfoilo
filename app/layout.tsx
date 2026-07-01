import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { IntroExperience } from "@/components/ui/IntroExperience";
import { AIAssistant } from "@/components/ui/AIAssistant";
import { CommandMenu } from "@/components/ui/CommandMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kumailkmr.vercel.app"),
  title: {
    default: "Kumail Kmr | Freelance AI & Business Systems Architect",
    template: "%s | Kumail Kmr",
  },
  description: "Independent consultant building high-end AI software, automated workflows, and premium web experiences that help businesses scale.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kumail Kmr | Freelance AI & Business Systems Architect",
    description: "Independent consultant building high-end AI software, automated workflows, and premium web experiences that help businesses scale.",
    url: "https://kumailkmr.vercel.app",
    siteName: "Kumail Kmr Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Kumail Kmr Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumail Kmr | Freelance AI & Business Systems Architect",
    description: "Independent consultant building high-end AI software, automated workflows, and premium web experiences that help businesses scale.",
    creator: "@kumailkmr",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} min-h-screen bg-background antialiased pb-24 md:pb-0 overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <IntroExperience>
              <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 overflow-x-hidden w-full">
                  {children}
                </main>
                <Footer />
                <MobileNav />
                <AIAssistant />
                <CommandMenu />
              </div>
            </IntroExperience>
          </TooltipProvider>
        </ThemeProvider>
        
        {/* JSON-LD Structured SEO Schemas */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kumail KMR AI Solutions",
              "url": "https://kumailkmr.vercel.app",
              "logo": "https://kumailkmr.vercel.app/images/profile.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/kumail-kmr-/",
                "https://github.com/kumailkmr"
              ],
              "description": "I build intelligent systems that help businesses grow. Specialized in AI Customer Support, WhatsApp Automation, and Custom Web Software.",
              "founder": {
                "@type": "Person",
                "name": "Kumail KMR"
              }
            })
          }}
        />
        <Script
          id="json-ld-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Automation & Custom Software Development",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Kumail KMR AI Solutions",
                "url": "https://kumailkmr.vercel.app"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Automation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Customer Support Assistant",
                      "description": "24/7 conversational support agent pre-trained on vector RAG context databases."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "WhatsApp Commerce & Booking Bot",
                      "description": "Qualify prospects, schedule dates in calendars, and coordinate takeaway orders on WhatsApp."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Next.js Web Portals",
                      "description": "High-performance bespoke CRM dashboards, student portals, and SaaS platforms."
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
