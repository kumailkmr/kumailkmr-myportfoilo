import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { IntroExperience } from "@/components/ui/IntroExperience";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased pb-24 md:pb-0`}>
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
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <MobileNav />
              </div>
            </IntroExperience>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
