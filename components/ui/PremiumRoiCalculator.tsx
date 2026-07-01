"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Cpu, Laptop, Smartphone, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { HireMeModal } from "@/components/ui/HireMeModal";

type ServiceKey = "ai" | "saas" | "mobile" | "redesign";
type CurrencyKey = "USD" | "INR";

interface ServiceConfig {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  accuracyImprovement: string;
  capacityIncrease: string;
  paybackPeriod: string;
}

const SERVICES: Record<ServiceKey, ServiceConfig> = {
  ai: {
    label: "AI Automations & Agents",
    icon: Cpu,
    accuracyImprovement: "99.9% Error Reduction",
    capacityIncrease: "+350% Process Speed",
    paybackPeriod: "Est. Payback: 2.5 months"
  },
  saas: {
    label: "SaaS & Custom Web Dev",
    icon: Laptop,
    accuracyImprovement: "98.5% Server Uptime",
    capacityIncrease: "+220% Data Pipeline Velocity",
    paybackPeriod: "Est. Payback: 4 months"
  },
  mobile: {
    label: "Mobile Apps & Integrations",
    icon: Smartphone,
    accuracyImprovement: "99.2% Crash-free Sessions",
    capacityIncrease: "+180% Support Scalability",
    paybackPeriod: "Est. Payback: 3 months"
  },
  redesign: {
    label: "Web Redesign & AI Upgrades",
    icon: Sparkles,
    accuracyImprovement: "90% Bounce Rate Drop",
    capacityIncrease: "+300% Interface Responsiveness",
    paybackPeriod: "Est. Payback: 1.5 months"
  }
};

export function PremiumRoiCalculator() {
  const [service, setService] = useState<ServiceKey>("ai");
  const [currency, setCurrency] = useState<CurrencyKey>("USD");
  const [isHireOpen, setIsHireOpen] = useState(false);

  // AI Slider States
  const [aiProcesses, setAiProcesses] = useState(30); // count
  const [aiTimePerProcess, setAiTimePerProcess] = useState(15); // minutes
  const [aiWage, setAiWage] = useState(35); // per hour

  // SaaS Slider States
  const [saasTransactions, setSaasTransactions] = useState(1500); // monthly count
  const [saasTimePerTx, setSaasTimePerTx] = useState(12); // minutes saved per tx
  const [saasWage, setSaasWage] = useState(40);

  // Mobile Slider States
  const [mobileInquiries, setMobileInquiries] = useState(800); // weekly count
  const [mobileResolution, setMobileResolution] = useState(45); // percent
  const [mobileCostPerInquiry, setMobileCostPerInquiry] = useState(6);

  // Redesign Slider States
  const [redesignTraffic, setRedesignTraffic] = useState(8000); // monthly traffic
  const [redesignConversion, setRedesignConversion] = useState(1.5); // percent bump
  const [redesignLeadValue, setRedesignLeadValue] = useState(120);

  // Handle currency scaling
  const handleCurrencyChange = (curr: CurrencyKey) => {
    if (curr === currency) return;
    setCurrency(curr);
    if (curr === "INR") {
      setAiWage(w => Math.round(w * 80));
      setSaasWage(w => Math.round(w * 80));
      setMobileCostPerInquiry(c => Math.round(c * 80));
      setRedesignLeadValue(v => Math.round(v * 80));
    } else {
      setAiWage(w => Math.round(w / 80));
      setSaasWage(w => Math.round(w / 80));
      setMobileCostPerInquiry(c => Math.round(c / 80));
      setRedesignLeadValue(v => Math.round(v / 80));
    }
  };

  // Calculations
  let monthlyHoursSaved = 0;
  let monthlySavings = 0;
  let estimatedImplementationCost = 0;

  if (service === "ai") {
    // 30 days * count * (minutes / 60)
    monthlyHoursSaved = Math.round(30.4 * aiProcesses * (aiTimePerProcess / 60));
    monthlySavings = monthlyHoursSaved * aiWage;
    estimatedImplementationCost = currency === "USD" ? 4500 : 360000;
  } else if (service === "saas") {
    // tx count * (minutes / 60)
    monthlyHoursSaved = Math.round(saasTransactions * (saasTimePerTx / 60));
    monthlySavings = monthlyHoursSaved * saasWage;
    estimatedImplementationCost = currency === "USD" ? 8500 : 680000;
  } else if (service === "mobile") {
    // weekly inquiries * 4.3 * (resolution percent / 100) * cost per inquiry
    const totalInquiries = mobileInquiries * 4.3;
    const resolvedCount = totalInquiries * (mobileResolution / 100);
    monthlySavings = Math.round(resolvedCount * mobileCostPerInquiry);
    monthlyHoursSaved = Math.round(resolvedCount * 0.15); // assume 9 mins (0.15 hrs) per support rep session
    estimatedImplementationCost = currency === "USD" ? 9500 : 760000;
  } else if (service === "redesign") {
    // traffic * (conversion percent / 100) * lead value
    const additionalLeads = redesignTraffic * (redesignConversion / 100);
    monthlySavings = Math.round(additionalLeads * redesignLeadValue);
    monthlyHoursSaved = Math.round(additionalLeads * 0.5); // assume 30 mins saved qualifying each lead manually
    estimatedImplementationCost = currency === "USD" ? 3800 : 300000;
  }

  const annualSavings = monthlySavings * 12;
  const roiPercentage = estimatedImplementationCost > 0 
    ? Math.round(((annualSavings - estimatedImplementationCost) / estimatedImplementationCost) * 100)
    : 320;

  // Sync to localStorage for lead pipeline
  useEffect(() => {
    const data = {
      calculator: "premium",
      service,
      currency,
      monthlyHoursSaved,
      monthlySavings,
      annualSavings,
      estimatedCost: estimatedImplementationCost,
      roiPercentage,
      inputs: {
        ai: { processes: aiProcesses, mins: aiTimePerProcess, wage: aiWage },
        saas: { tx: saasTransactions, mins: saasTimePerTx, wage: saasWage },
        mobile: { inquiries: mobileInquiries, resolution: mobileResolution, cost: mobileCostPerInquiry },
        redesign: { traffic: redesignTraffic, conversion: redesignConversion, value: redesignLeadValue }
      }
    };
    localStorage.setItem("lead-estimation-data", JSON.stringify(data));
  }, [
    service, currency, monthlyHoursSaved, monthlySavings, annualSavings, 
    estimatedImplementationCost, roiPercentage, aiProcesses, aiTimePerProcess, 
    aiWage, saasTransactions, saasTimePerTx, saasWage, mobileInquiries, 
    mobileResolution, mobileCostPerInquiry, redesignTraffic, redesignConversion, 
    redesignLeadValue
  ]);

  const currencySymbol = currency === "USD" ? "$" : "₹";
  const currencyLabel = currency === "USD" ? "USD" : "INR";

  return (
    <div className="bg-card border border-border/80 p-6 md:p-8 rounded-3xl space-y-8 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header controls */}
      <div className="border-b border-border/50 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2.5">
            <TrendingUp className="w-5 h-5 text-primary" />
            Strategic Business ROI Engine
          </h3>
          <p className="text-xs text-muted-foreground mt-1">Simulate exact operational gains & financial leverages</p>
        </div>

        {/* Currency Switcher */}
        <div className="flex bg-muted/60 border border-border p-1 rounded-xl shrink-0">
          {(["USD", "INR"] as const).map((curr) => (
            <button
              key={curr}
              onClick={() => handleCurrencyChange(curr)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currency === curr 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {curr === "USD" ? "USD ($)" : "INR (₹)"}
            </button>
          ))}
        </div>
      </div>

      {/* Service Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {(Object.keys(SERVICES) as ServiceKey[]).map((key) => {
          const cfg = SERVICES[key];
          const Icon = cfg.icon;
          const isActive = service === key;
          return (
            <button
              key={key}
              onClick={() => setService(key)}
              className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between min-h-[90px] transition-all cursor-pointer ${
                isActive 
                  ? "border-primary bg-primary/5 shadow-xs" 
                  : "border-border/80 bg-background/50 hover:bg-muted/30"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-[11px] font-bold tracking-tight leading-tight block mt-2 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {cfg.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Inputs & Outputs Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Sliders (Left: 7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Adjust Parameters</h4>
          
          {service === "ai" && (
            <div className="space-y-6">
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Processes Automated / Day</label>
                  <span className="text-foreground">{aiProcesses} tasks</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="150" 
                  value={aiProcesses} 
                  onChange={(e) => setAiProcesses(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Manual Minutes Spent per Process</label>
                  <span className="text-foreground">{aiTimePerProcess} mins</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="90" 
                  value={aiTimePerProcess} 
                  onChange={(e) => setAiTimePerProcess(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Average Hourly Staff Salary/Cost</label>
                  <span className="text-foreground">{currencySymbol}{aiWage.toLocaleString()} / hr</span>
                </div>
                <input 
                  type="range" 
                  min={currency === "USD" ? 15 : 400} 
                  max={currency === "USD" ? 120 : 6000} 
                  value={aiWage} 
                  onChange={(e) => setAiWage(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          )}

          {service === "saas" && (
            <div className="space-y-6">
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Monthly Active Platform Transactions</label>
                  <span className="text-foreground">{saasTransactions} transactions</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="8000" 
                  step="100"
                  value={saasTransactions} 
                  onChange={(e) => setSaasTransactions(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Minutes Saved per Transaction</label>
                  <span className="text-foreground">{saasTimePerTx} mins</span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="60" 
                  value={saasTimePerTx} 
                  onChange={(e) => setSaasTimePerTx(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Average Hourly Staff Salary/Cost</label>
                  <span className="text-foreground">{currencySymbol}{saasWage.toLocaleString()} / hr</span>
                </div>
                <input 
                  type="range" 
                  min={currency === "USD" ? 15 : 400} 
                  max={currency === "USD" ? 120 : 6000} 
                  value={saasWage} 
                  onChange={(e) => setSaasWage(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          )}

          {service === "mobile" && (
            <div className="space-y-6">
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Customer Support Inquiries / Week</label>
                  <span className="text-foreground">{mobileInquiries} tickets</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="5000" 
                  step="50"
                  value={mobileInquiries} 
                  onChange={(e) => setMobileInquiries(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Target AI Resolution Rate</label>
                  <span className="text-foreground">{mobileResolution}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="90" 
                  value={mobileResolution} 
                  onChange={(e) => setMobileResolution(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Average Cost per Human Inquiry</label>
                  <span className="text-foreground">{currencySymbol}{mobileCostPerInquiry.toLocaleString()} / session</span>
                </div>
                <input 
                  type="range" 
                  min={currency === "USD" ? 2 : 100} 
                  max={currency === "USD" ? 25 : 1200} 
                  value={mobileCostPerInquiry} 
                  onChange={(e) => setMobileCostPerInquiry(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          )}

          {service === "redesign" && (
            <div className="space-y-6">
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Monthly Website Traffic (Visitors)</label>
                  <span className="text-foreground">{redesignTraffic.toLocaleString()} visitors</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="500"
                  value={redesignTraffic} 
                  onChange={(e) => setRedesignTraffic(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Target Lead Conversion Rate Bump</label>
                  <span className="text-foreground">+{redesignConversion}%</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="8" 
                  step="0.1"
                  value={redesignConversion} 
                  onChange={(e) => setRedesignConversion(parseFloat(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-bold">
                  <label className="text-muted-foreground">Average Qualified Lead Value</label>
                  <span className="text-foreground">{currencySymbol}{redesignLeadValue.toLocaleString()} / lead</span>
                </div>
                <input 
                  type="range" 
                  min={currency === "USD" ? 20 : 1000} 
                  max={currency === "USD" ? 500 : 25000} 
                  step={currency === "USD" ? 5 : 250}
                  value={redesignLeadValue} 
                  onChange={(e) => setRedesignLeadValue(parseInt(e.target.value))} 
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Metrics Panel (Right: 5 columns) */}
        <div className="lg:col-span-5 bg-secondary border border-border/80 p-5 rounded-2xl flex flex-col justify-between min-h-[360px]">
          <div className="space-y-5">
            <div className="flex justify-between items-center border-b border-border/40 pb-3">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Financial Outcomes</span>
              <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 rounded-full text-[10px] font-bold">
                {roiPercentage}% Projected ROI
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Monthly Savings</span>
                <h4 className="text-3xl font-black text-emerald-500 dark:text-emerald-400 tracking-tight leading-none">
                  {currencySymbol}{monthlySavings.toLocaleString()} <span className="text-xs font-bold text-muted-foreground">{currencyLabel}</span>
                </h4>
              </div>

              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Annual Reclaimed Overhead</span>
                <h4 className="text-3xl font-black text-foreground tracking-tight leading-none">
                  {currencySymbol}{annualSavings.toLocaleString()} <span className="text-xs font-bold text-muted-foreground">{currencyLabel}</span>
                </h4>
              </div>
            </div>

            {/* Qualitative & Performance Leverages */}
            <div className="border-t border-border/40 pt-4 space-y-3">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Qualitative Multipliers</span>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs text-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{SERVICES[service].accuracyImprovement}</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{SERVICES[service].capacityIncrease}</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-semibold text-primary">{SERVICES[service].paybackPeriod}</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => setIsHireOpen(true)}
            className="w-full btn-premium btn-premium-primary text-xs mt-6 flex items-center justify-center gap-1.5 cursor-pointer py-3 rounded-xl"
          >
            Stash & Consult on calculation
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      <HireMeModal isOpen={isHireOpen} onClose={() => setIsHireOpen(false)} />
    </div>
  );
}
