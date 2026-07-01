"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, DollarSign, Clock, ArrowRight, Activity, Code, Users, CheckCircle2, ChevronRight, Info, UserCheck } from "lucide-react";
import { CALENDLY_LINK } from "@/config/socials";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

// Live Counters State Interface
interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

const TIMELINE_STAGES = [
  { stage: "Discovery", time: "1 - 3 Days", desc: "Strategy session to outline system targets and core business metrics.", deliverables: "Operational bottleneck sheet, core API review" },
  { stage: "Research", time: "3 - 5 Days", desc: "Auditing current software databases, webhook triggers, and data structures.", deliverables: "API access scope list, technical feasibility logs" },
  { stage: "Planning", time: "1 Week", desc: "Scoping the final milestones, database diagrams, and system wireframes.", deliverables: "Architectural blueprint, fixed cost proposal" },
  { stage: "Design", time: "1 - 2 Weeks", desc: "Drafting high-end visual wireframes, responsive screens, and client dashboard portals.", deliverables: "Interactive Figma files, responsive wireframes" },
  { stage: "Development", time: "2 - 6 Weeks", desc: "Full-stack coding (Next.js server Actions, supabase database, n8n integrations).", deliverables: "Staging sandbox preview access, weekly sprint releases" },
  { stage: "Testing", time: "1 Week", desc: "Rigorous sandbox tests: database concurrency limits, webhook logs, prompt validation.", deliverables: "QA checklist results, load tests data sheet" },
  { stage: "Deployment", time: "2 - 3 Days", desc: "Production launch on Vercel, auth activations, and database index adjustments.", deliverables: "Live URL handoff, sitemap updates, Google Search indexing" },
  { stage: "Support", time: "Ongoing", desc: "30-day post-launch code warranty and dynamic maintenance retainer support.", deliverables: "Bug fix support, monthly DB indexing, scaling audits" }
];

interface EstimatorOutput {
  title: string;
  roi: string;
  tech: string[];
  timeline: string;
  steps: string[];
}

export default function AIHubPage() {
  // ROI Calculator inputs
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlySalary, setHourlySalary] = useState(30);

  // Estimator inputs
  const [industry, setIndustry] = useState("Real Estate");
  const [size, setSize] = useState("2-10 staff");
  const [timeline, setTimeline] = useState("Standard (4-8 weeks)");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["AI Agents / Automations"]);
  const [estimatorOutput, setEstimatorOutput] = useState<EstimatorOutput | null>(null);

  // Client Journey Active Node
  const [activeTimelineStage, setActiveTimelineStage] = useState<number | null>(null);

  // Calculate ROI outputs
  const monthlyHoursSaved = employees * hoursPerWeek * 4.3;
  const monthlySavings = monthlyHoursSaved * hourlySalary;
  const annualSavings = monthlySavings * 12;
  const estimatedCost = selectedFeatures.length * 4000;
  const roiPercentage = estimatedCost > 0 ? Math.round(((annualSavings - estimatedCost) / estimatedCost) * 100) : 350;

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const handleGenerateEstimate = () => {
    // Generate simulated blueprint outcome
    let solutionTitle = "Enterprise Workflow Engine";
    let roiEstimate = "250% Annualized ROI";
    let techStack = ["Next.js", "TypeScript", "PostgreSQL", "n8n"];
    
    if (selectedFeatures.includes("AI Agents / Automations") && selectedFeatures.includes("WhatsApp Business API Bot")) {
      solutionTitle = "Autonomous Lead WhatsApp Engine";
      roiEstimate = "320% ROI (Instant response time)";
      techStack = ["WhatsApp API", "Make", "OpenAI API", "Pinecone"];
    } else if (selectedFeatures.includes("Next.js Custom SaaS Portal")) {
      solutionTitle = "Bespoke SaaS Operations Dashboard";
      roiEstimate = "180% ROI (Centralized metrics database)";
      techStack = ["Next.js", "Supabase", "React", "PostgreSQL"];
    }

    setEstimatorOutput({
      title: solutionTitle,
      roi: roiEstimate,
      tech: techStack,
      timeline: timeline === "Urgent" ? "3 - 5 weeks" : "6 - 9 weeks",
      steps: [
        "Create developer sandbox keys for API connections",
        "Construct type-safe supabase SQL tables",
        "Deploy n8n webhook routing steps",
        "Finalize Stripe/WhatsApp checkout loops"
      ]
    });
  };

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background relative text-foreground transition-colors duration-300">
        
        {/* Subtle glowing elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 space-y-24">
          
          {/* Header Title */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary tracking-wider uppercase">
              <Bot className="w-3.5 h-3.5 animate-pulse" />
              AI Agency Operations Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-none">
              Futuristic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Business Engineering</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Analyze your operational savings, construct custom tech blueprints, and explore our agile software lifecycle dashboards.
            </p>
          </div>

          {/* 1. Live Stats Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Completed Projects", value: 42, suffix: "+", icon: Code },
              { label: "Happy Founders", value: 35, suffix: "+", icon: Users },
              { label: "AI Ecosystems Built", value: 18, suffix: "+", icon: Bot },
              { label: "Manual Hours Automated", value: 12000, suffix: " hrs+", icon: Clock },
              { label: "GitHub Code Commits", value: 2800, suffix: "+", icon: Activity }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border/80 p-5 rounded-2xl flex flex-col justify-between hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">{stat.label}</span>
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                    <stat.icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-foreground tracking-tight">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h3>
              </motion.div>
            ))}
          </div>

          {/* 2. Interactive Calculator Tools Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* ROI Savings Calculator */}
            <div className="bg-card border border-border/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="border-b border-border pb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-500" />
                    Automation ROI Calculator
                  </h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-1">Operational savings projection</p>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 rounded-full text-xs font-bold">
                  {roiPercentage}% Projected ROI
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <label className="text-muted-foreground">Number of Employees Affected</label>
                    <span className="text-foreground">{employees} Staff</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={employees} 
                    onChange={(e) => setEmployees(parseInt(e.target.value))} 
                    className="w-full h-1 bg-muted dark:bg-[#171717] rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <label className="text-muted-foreground">Admin/CRM Hours Spent per Staff / Week</label>
                    <span className="text-foreground">{hoursPerWeek} Hours</span>
                  </div>
                  <input 
                    type="range" 
                    min="2" 
                    max="30" 
                    value={hoursPerWeek} 
                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))} 
                    className="w-full h-1 bg-muted dark:bg-[#171717] rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <label className="text-muted-foreground">Average Hourly Staff Salary/Cost</label>
                    <span className="text-foreground">${hourlySalary} / hr</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="100" 
                    value={hourlySalary} 
                    onChange={(e) => setHourlySalary(parseInt(e.target.value))} 
                    className="w-full h-1 bg-muted dark:bg-[#171717] rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>

              {/* Savings Results Grid */}
              <div className="grid grid-cols-2 gap-4 bg-secondary p-4 border border-border/80 rounded-2xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1">Monthly Savings</span>
                  <h4 className="text-2xl font-black text-emerald-500 dark:text-emerald-400 tracking-tight">
                    ${Math.round(monthlySavings).toLocaleString()} USD
                  </h4>
                  <p className="text-[10px] text-muted-foreground mt-1">≈ ₹{(Math.round(monthlySavings * 83)).toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1">Annual Reclaimed Overhead</span>
                  <h4 className="text-2xl font-black text-foreground tracking-tight">
                    ${Math.round(annualSavings).toLocaleString()} USD
                  </h4>
                  <p className="text-[10px] text-muted-foreground mt-1">≈ ₹{(Math.round(annualSavings * 83)).toLocaleString('en-IN')}</p>
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Projected Organizational Leverage</h4>
                <ul className="space-y-2.5 text-xs text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Reclaims {Math.round(monthlyHoursSaved)} hours of core manual labor every month.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Eliminates human indexing / copywriting errors completely.
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Custom Project Estimator */}
            <div className="bg-card border border-border/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="border-b border-border pb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Bot className="w-5 h-5 text-primary animate-pulse" />
                    AI System Project Blueprint
                  </h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-1">Calculate scope and target timelines</p>
                </div>
              </div>

              {/* Form Grid */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase">Industry</label>
                    <select 
                      value={industry} 
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-secondary border border-border p-2.5 rounded-xl text-xs text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    >
                      {["Real Estate", "Healthcare", "E-commerce", "Professional Services", "Restaurant"].map((ind) => (
                        <option key={ind} value={ind} className="bg-background text-foreground">{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase">Business Size</label>
                    <select 
                      value={size} 
                      onChange={(e) => setSize(e.target.value)}
                      className="w-full bg-secondary border border-border p-2.5 rounded-xl text-xs text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    >
                      {["Solopreneur", "2-10 staff", "11-50 staff", "Enterprise"].map((sz) => (
                        <option key={sz} value={sz} className="bg-background text-foreground">{sz}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase">Timeline Target</label>
                  <div className="flex gap-2">
                    {["Urgent", "Standard (4-8 weeks)", "Flexible"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          timeline === t ? "bg-primary border-primary text-white" : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features checkboxes */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Select Features to Integrate</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["AI Agents / Automations", "Next.js Custom SaaS Portal", "WhatsApp Business API Bot", "Third-Party CRM integrations"].map((feat) => {
                      const isSelected = selectedFeatures.includes(feat);
                      return (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => handleFeatureToggle(feat)}
                          className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected ? "bg-primary/10 border-primary text-primary" : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {feat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={handleGenerateEstimate}
                  type="button"
                  className="w-full py-3.5 bg-primary hover:bg-primary/95 text-white font-bold text-xs rounded-xl hover:scale-[1.01] transition-all shadow-md mt-4 cursor-pointer"
                >
                  Generate System Blueprint
                </button>
              </div>

              {/* Estimate Outputs Overlay */}
              <AnimatePresence>
                {estimatorOutput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-secondary border border-border rounded-2xl space-y-4 overflow-hidden"
                  >
                    <div className="flex justify-between items-center border-b border-border/60 pb-2">
                      <span className="text-xs font-bold text-foreground">Blueprint Result</span>
                      <span className="text-[10px] font-extrabold text-emerald-500 dark:text-emerald-400 uppercase">{estimatorOutput.roi}</span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-[10px] uppercase font-bold text-muted-foreground">Proposed Architecture</h4>
                        <p className="text-sm font-bold text-foreground mt-0.5">{estimatorOutput.title}</p>
                      </div>
                      
                      {/* Tech stack used icons map */}
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[10px] font-bold text-muted-foreground">Tech Stack:</span>
                        {estimatorOutput.tech.map((t: string) => (
                          <span key={t} className="px-2.5 py-1 bg-background text-foreground rounded-md text-[10px] font-bold border border-border/80">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-muted-foreground">Build Actions List</span>
                        {estimatorOutput.steps.map((st: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {st}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/60 flex gap-2">
                      <button
                        onClick={() => window.open(CALENDLY_LINK, "_blank")}
                        type="button"
                        className="flex-1 py-2.5 px-4 rounded-xl border border-border text-xs font-bold hover:bg-muted text-foreground transition-all cursor-pointer text-center"
                      >
                        Book Strategy Call
                      </button>
                      <button
                        onClick={() => {
                          const text = `Hi Kumail! I generated a custom AI Agency blueprint:\nCategory: ${estimatorOutput.title}\nTimeline: ${estimatorOutput.timeline}\nROI: ${estimatorOutput.roi}`;
                          window.open(`https://wa.me/916006121193?text=${encodeURIComponent(text)}`, "_blank");
                        }}
                        type="button"
                        className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        Lock in Quote
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* 3. Interactive Development Timeline Lifecycle */}
          <div className="bg-card border border-border/80 p-6 md:p-8 rounded-3xl space-y-8">
            <div className="border-b border-border pb-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Agile Software Development Lifecycle
              </h3>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-1">Hover or tap on any node to view deliverables and timing</p>
            </div>

            {/* Lifecycle Timeline Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative">
              {TIMELINE_STAGES.map((node, i) => {
                const isActive = activeTimelineStage === i;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveTimelineStage(i)}
                    onMouseLeave={() => setActiveTimelineStage(null)}
                    onClick={() => setActiveTimelineStage(isActive ? null : i)}
                    className={`relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[140px] ${
                      isActive ? "bg-primary/10 border-primary shadow-[0_0_15px_rgba(37,99,235,0.2)]" : "bg-secondary border-border/80 hover:border-muted-foreground/30"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-black text-muted-foreground/30 mb-2 block">0{i+1}</span>
                      <h4 className="font-bold text-xs text-foreground mb-1">{node.stage}</h4>
                      <span className="text-[10px] font-semibold text-primary block">{node.time}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground self-end" />
                  </div>
                );
              })}
            </div>

            {/* Display Deliverables Overlay */}
            <div className="min-h-[90px] bg-secondary border border-border/80 p-5 rounded-2xl">
              <AnimatePresence mode="wait">
                {activeTimelineStage !== null ? (
                  <motion.div
                    key={activeTimelineStage}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="grid sm:grid-cols-3 gap-4 text-xs"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-1">Active Phase</span>
                      <p className="font-bold text-foreground text-sm">{TIMELINE_STAGES[activeTimelineStage].stage} Lifecycle</p>
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-primary block">Target Deliverables & Output</span>
                      <p className="text-foreground/90 font-medium leading-relaxed">{TIMELINE_STAGES[activeTimelineStage].desc}</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        <strong className="text-foreground/75">Milestone assets:</strong> {TIMELINE_STAGES[activeTimelineStage].deliverables}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center h-full">
                    <Info className="w-4 h-4 text-primary" />
                    <span>Hover or click any lifecycle node above to expand phase deliverables.</span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 4. Visual Client Journey flowchart */}
          <div className="bg-card border border-border/80 p-6 md:p-8 rounded-3xl space-y-8">
            <div className="border-b border-border pb-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-500" />
                Collaborator Onboarding Journey
              </h3>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-1">Our visual workflow path from introduction to monthly retainers</p>
            </div>

            {/* Vertical Flowchart nodes */}
            <div className="relative pl-8 border-l border-border space-y-6 max-w-2xl mx-auto py-2">
              {[
                { title: "Strategy Session", desc: "We schedule a Calendly review slots to inspect system requirements and verify core database integrations." },
                { title: "Blueprint Specification", desc: "Kumail drafts a secure proposal outline, database diagram flow, and locks in a fixed project quote." },
                { title: "Weekly Development Sprints", desc: "Agile dev cycles with weekly visual demo updates in sandboxed staging portals." },
                { title: "Deployment Handshake", desc: "Complete repository ownership transfer, server index tuning, and sitemap deployment checks." },
                { title: "Maintenance Contract", desc: "Monthly retention retainer schedules ensuring server database backups and minor additions." }
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing connector bullet */}
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-background border border-border/80 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  
                  <div className="bg-secondary border border-border p-4 rounded-2xl space-y-1 hover:border-primary/30 transition-all">
                    <h4 className="text-xs font-extrabold text-foreground flex items-center gap-2">
                      <span className="text-[10px] text-muted-foreground">Step {idx + 1}:</span>
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SmoothScroll>
  );
}
