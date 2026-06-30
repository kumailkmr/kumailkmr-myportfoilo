"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, BarChart3, Users, Zap, Play, Target, Bot } from "lucide-react";
import Link from "next/link";

const insights = [
  {
    title: "High-Performance Next.js Platform",
    category: "Web Development",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    description: "Delivered a fully optimized, interactive web application resulting in unprecedented user retention and lead generation.",
    metrics: [
      { label: "User Engagement", value: "+300%", trend: "up" },
      { label: "Page Load Time", value: "<0.8s", trend: "neutral" },
      { label: "Conversion Rate", value: "+145%", trend: "up" },
    ]
  },
  {
    title: "Autonomous AI Customer Agent",
    category: "AI Agents & Chatbots",
    icon: Bot,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    description: "Deployed a customized LLM-powered agent to handle frontline support, qualification, and sales routing 24/7.",
    metrics: [
      { label: "Operational Costs", value: "-40%", trend: "down" },
      { label: "Response Time", value: "Instant", trend: "neutral" },
      { label: "Resolution Rate", value: "85%", trend: "up" },
    ]
  },
  {
    title: "Dynamic AI Property Showcases",
    category: "AI Property Videos",
    icon: Play,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    description: "Automated the generation of cinematic real estate property videos using AI, drastically reducing marketing turnarounds.",
    metrics: [
      { label: "Production Time", value: "-90%", trend: "down" },
      { label: "Lead Generation", value: "3x", trend: "up" },
      { label: "Click-Throughs", value: "+210%", trend: "up" },
    ]
  },
  {
    title: "Predictive AI Ad Delivery",
    category: "AI Ads & Marketing",
    icon: Target,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    description: "Built a machine learning pipeline that dynamically optimizes ad creatives and bidding strategies in real-time.",
    metrics: [
      { label: "Cost Per Acq. (CPA)", value: "-25%", trend: "down" },
      { label: "Return on Ad Spend", value: "4.5x", trend: "up" },
      { label: "Audience Reach", value: "+180%", trend: "up" },
    ]
  }
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
        >
          <BarChart3 className="w-4 h-4" />
          <span className="text-sm font-bold tracking-widest uppercase">Market Performance</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
        >
          Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Insights</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Real-world deliverables showcasing the quantitative business impact of premium software and AI automation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/50 p-8 rounded-3xl hover:bg-card/60 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${insight.bg} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${insight.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{insight.category}</h3>
                    <h2 className="text-2xl font-bold text-foreground mt-1 tracking-tight">{insight.title}</h2>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {insight.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
                  {insight.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-1.5 mb-1">
                        {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-emerald-500" />}
                        {metric.trend === 'down' && <TrendingUp className="w-4 h-4 text-emerald-500 rotate-180" />}
                        <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-black tracking-tight text-foreground">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center"
      >
        <Link 
          href="https://wa.me/916006121193"
          target="_blank"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-primary transition-colors hover:text-primary-foreground hover-lift shadow-2xl"
        >
          <span>Achieve Similar Results</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
