"use client";

import { motion } from "framer-motion";
import { 
  Utensils, Coffee, Bed, Stethoscope, Activity, HeartPulse, Home, 
  Plane, GraduationCap, Scale, Calculator, Briefcase, ShoppingBag, 
  ShoppingCart, Scissors, Dumbbell, Car, HardHat, Factory, Package, 
  Cloud, Rocket, Building2, Store 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  { name: "Restaurants", icon: Utensils, desc: "Automate orders, reservations, customer support, and WhatsApp communication." },
  { name: "Cafés", icon: Coffee, desc: "Streamline local ordering and loyalty programs." },
  { name: "Hotels", icon: Bed, desc: "Manage bookings, concierge services, and guest feedback automatically." },
  { name: "Hospitals", icon: Stethoscope, desc: "Improve appointment scheduling, patient communication, and administrative workflows." },
  { name: "Dental Clinics", icon: Activity, desc: "Automated reminders and seamless booking portals." },
  { name: "Medical Clinics", icon: HeartPulse, desc: "Secure patient portals and telehealth integrations." },
  { name: "Real Estate Agencies", icon: Home, desc: "Automate lead capture from property listings and schedule viewings." },
  { name: "Travel Agencies", icon: Plane, desc: "Automate bookings, package inquiries, customer support, and lead management." },
  { name: "Educational Institutes", icon: GraduationCap, desc: "Student portals, automated enrollment, and AI tutoring interfaces." },
  { name: "Law Firms", icon: Scale, desc: "Secure document management and client intake automation." },
  { name: "Chartered Accountants", icon: Calculator, desc: "Client portals for secure document upload and financial dashboards." },
  { name: "Business Consultants", icon: Briefcase, desc: "Lead generation funnels and scheduling automation." },
  { name: "Retail Stores", icon: ShoppingBag, desc: "Omnichannel inventory management and POS integrations." },
  { name: "E-commerce", icon: ShoppingCart, desc: "AI product recommendations and automated abandoned cart recovery." },
  { name: "Beauty Salons", icon: Scissors, desc: "Self-serve booking calendars and automated reminders." },
  { name: "Fitness Centers", icon: Dumbbell, desc: "Member management, class scheduling, and automated billing." },
  { name: "Automotive Businesses", icon: Car, desc: "Service scheduling and inventory browsing tools." },
  { name: "Construction Companies", icon: HardHat, desc: "Project management dashboards and automated quoting." },
  { name: "Manufacturing Companies", icon: Factory, desc: "Supply chain visibility and operational dashboards." },
  { name: "Logistics & Warehousing", icon: Package, desc: "Real-time tracking portals and fleet management tools." },
  { name: "SaaS Companies", icon: Cloud, desc: "Scalable architectures, API development, and custom frontends." },
  { name: "Startups", icon: Rocket, desc: "Rapid MVP development and scalable tech foundations." },
  { name: "Small & Medium Businesses", icon: Building2, desc: "End-to-end digital transformation tailored to your budget." },
  { name: "Retail", icon: Store, desc: "Digital storefronts and advanced analytics." }
];

export function Industries() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Premium Ambient Backgrounds */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-foreground"
          >
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">I Transform</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Every industry has repetitive tasks, customer communication challenges, and operational bottlenecks. I build AI-powered solutions tailored to solve your exact business problems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 8) * 0.05, duration: 0.4 }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-card/60 hover:border-primary/30 transition-all duration-300 rounded-2xl group hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-background border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                      <industry.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {industry.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
