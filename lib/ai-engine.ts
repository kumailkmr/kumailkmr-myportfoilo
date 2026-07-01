/**
 * Kumail Kmr - Real AI Personal Assistant Knowledge Base & NLP Engine
 * Runs 100% client-side with zero external API dependencies.
 */

export interface KnowledgeNode {
  id: string;
  category: "about" | "services" | "ai" | "projects" | "tech" | "pricing" | "industries" | "process" | "contact";
  keywords: string[];
  title: string;
  content: string;
  cta?: { label: string; actionType: "whatsapp" | "calendly" | "link" | "email"; value: string };
}

export const KNOWLEDGE_BASE: KnowledgeNode[] = [
  // --- ABOUT SECTION ---
  {
    id: "about-kumail",
    category: "about",
    keywords: ["kumail", "kmr", "who are you", "who is", "about yourself", "tell me about yourself", "developer", "engineer", "bio"],
    title: "Who is Kumail Kmr?",
    content: "Kumail Kmr is a premium, independent AI & Software Engineer and Business Systems Architect. He acts as a direct technical partner for founders and businesses, bypassing agency overhead to build custom SaaS, high-end AI agents, automated database workflows, and ultra-performance web platforms.",
    cta: { label: "Schedule a Session", actionType: "calendly", value: "" }
  },
  {
    id: "kumail-background",
    category: "about",
    keywords: ["background", "experience", "history", "years", "career", "past", "track record", "qualification"],
    title: "Background & Experience",
    content: "Kumail has years of experience architecting stateful software systems. He specializes in bridging the gap between business operational friction and modern technology—integrating AI ecosystems (like OpenAI, LangGraph, and Mastra) with solid web architecture (Next.js, Postgres) to replace manual database tasks and cut business operational costs by up to 40%.",
    cta: { label: "Download Resume", actionType: "link", value: "/resume.pdf" }
  },
  {
    id: "why-hire-kumail",
    category: "about",
    keywords: ["why hire you", "why you", "benefits", "advantage", "agency vs freelancer", "competence", "hire", "freelancer", "consultant"],
    title: "Why Hire Kumail Kmr?",
    content: "When you work with Kumail, you get Direct Developer Access. There is no account manager, no agency bloat, and no communication lag. This translates to 3x faster delivery, custom tailored clean code, and solutions built specifically to drive operational ROI, not just check a box.",
    cta: { label: "Start Qualification Quiz", actionType: "link", value: "#qualify" }
  },

  // --- SERVICES SECTION ---
  {
    id: "services-general",
    category: "services",
    keywords: ["services", "what do you offer", "what can you do", "capabilities", "skills list", "offerings"],
    title: "Services Offered",
    content: "Kumail specializes in 5 core service pillars:\n1. **Autonomous AI Agents & Chatbots**: Multi-agent support/sales setups using LangGraph (-40% support costs).\n2. **Full-Stack SaaS Web Apps**: High-converting Next.js portals with sub-second page loads.\n3. **Business Automations**: Connecting CRMs, databases, and APIs via custom Node/n8n workflows.\n4. **React Native Mobile Apps**: Cross-platform iOS/Android development.\n5. **AI Automated Media**: Custom AI-driven marketing and real-estate video generation.",
    cta: { label: "Book a Strategy Call", actionType: "calendly", value: "" }
  },
  {
    id: "services-custom-software",
    category: "services",
    keywords: ["custom software", "build custom", "tailored solution", "scratch", "from scratch"],
    title: "Custom Software Development",
    content: "Unlike rigid off-the-shelf software or templates, Kumail builds fully custom software tailored to your specific operational workflows. Every module is written in clean, modern TypeScript, ensuring it scales alongside your user growth without legacy bottlenecks.",
    cta: { label: "Discuss Your Project", actionType: "whatsapp", value: "I want to discuss a custom software project" }
  },
  {
    id: "services-saas",
    category: "services",
    keywords: ["saas", "software as a service", "saas product", "subscription", "startup MVP", "mvp"],
    title: "SaaS Development",
    content: "Turn your startup idea into a production-ready SaaS application. Kumail sets up robust multi-tenant database models, secure subscription payments via Stripe, user auth, and sleek client dashboards in Next.js, allowing you to launch and iterate fast.",
    cta: { label: "Book Strategy Call", actionType: "calendly", value: "" }
  },
  {
    id: "services-web-dev",
    category: "services",
    keywords: ["website", "web development", "develop websites", "landing page", "frontend", "next.js web"],
    title: "Full-Stack Web Development",
    content: "Build high-end, responsive websites using Next.js, React, and Tailwind CSS. Kumail implements premium visual design (glassmorphism, clean layouts) combined with serverless performance and edge rendering to ensure search crawlers rank you highly and users experience zero loading lag.",
    cta: { label: "Start Project Chat", actionType: "whatsapp", value: "Hi Kumail, I'd like to build a web application" }
  },
  {
    id: "services-ai-dev",
    category: "services",
    keywords: ["ai applications", "build ai", "llm integration", "integrate ai", "openai integration", "anthropic", "gpt"],
    title: "AI Application Development",
    content: "Integrate large language models (like GPT-4o, Claude 3.5, or open-source Llama) directly into your business tools. From AI-assisted analysis systems to dynamic content generators, Kumail structures clean prompt flows and context retrieval structures to prevent hallucinations.",
    cta: { label: "Schedule AI Consultation", actionType: "calendly", value: "" }
  },
  {
    id: "services-automation",
    category: "services",
    keywords: ["automate my business", "automation", "n8n", "make.com", "zapier", "workflows", "internal sync", "efficiency"],
    title: "Business & Workflow Automation",
    content: "Stop wasting time copying data between spreadsheets, CRMs, and email tools. Kumail designs custom automation pathways (using n8n, Make, or custom serverless webhooks) that sync systems 24/7/365, turning manual operation loops into instant background events.",
    cta: { label: "Automate My Workflows", actionType: "whatsapp", value: "Hi Kumail, I want to automate my business workflows" }
  },
  {
    id: "services-dashboards",
    category: "services",
    keywords: ["dashboard", "internal dashboard", "internal tool", "crm development", "crm custom", "admin panel"],
    title: "Internal Dashboards & Custom CRMs",
    content: "Bring all your metrics under a single glassmorphic pane. Kumail builds admin dashboards and custom CRMs that display real-time analytics, user management controls, and process queues, letting you run operations from one centralized control center.",
    cta: { label: "Schedule Consultation", actionType: "calendly", value: "" }
  },
  {
    id: "services-api",
    category: "services",
    keywords: ["api", "integrate api", "api integration", "stripe", "twilio", "resend", "custom webhook"],
    title: "API Integrations",
    content: "Connect any third-party software securely. Kumail implements robust API connections for Stripe (payments), Twilio (SMS/Voice), Resend (Transactional emails), Slack, WhatsApp Business API, and sales tools with custom retry logs to handle network failures smoothly.",
    cta: { label: "Inquire about APIs", actionType: "whatsapp", value: "Hi Kumail, I need help integrating some APIs" }
  },
  {
    id: "services-whatsapp-ai",
    category: "services",
    keywords: ["whatsapp ai", "whatsapp chatbot", "whatsapp assistant", "chat logic"],
    title: "WhatsApp AI Assistants",
    content: "Engage your customers where they hang out. Kumail builds autonomous WhatsApp AI assistants using the official WhatsApp Business API. These bots can answer support queries, schedule client calls, qualify sales leads, and push notifications directly to your CRM.",
    cta: { label: "Build a WhatsApp Bot", actionType: "whatsapp", value: "Hi Kumail, I want a WhatsApp AI Assistant" }
  },

  // --- AI SOLUTIONS SECTION ---
  {
    id: "ai-value",
    category: "ai",
    keywords: ["how can ai help", "reduce cost", "operational cost", "ai help my business", "ai value", "why ai"],
    title: "How AI Drives Business Value",
    content: "AI is not just a trend—it's an operational leverage. By deploying stateful AI agents, you can:\n- Automate 60%+ of recurring support tickets.\n- Qualify leads instantly 24/7 without manual sales labor.\n- Run data analysis pipelines that instantly clean spreadsheet inputs.\nThis reduces operational overhead by up to 40% and allows your team to focus on scaling sales, not sorting data.",
    cta: { label: "Book Strategy Call", actionType: "calendly", value: "" }
  },
  {
    id: "ai-tools",
    category: "ai",
    keywords: ["ai tools", "apis", "openai", "langgraph", "crewai", "mastra", "pinecone", "weaviate", "vector", "embedding"],
    title: "AI Tools & APIs Used",
    content: "Kumail works with advanced AI frameworks and APIs, including:\n- **Orchestration**: LangGraph, crewAI, Mastra (stateful multi-agent flows).\n- **APIs**: OpenAI (GPT-4o), Anthropic (Claude 3.5), Google Gemini Pro.\n- **Vector Databases**: Pinecone, Weaviate, pgvector (for semantic search & RAG data retrieval).\n- **Infrastructure**: Langfuse (LLM tracing, cost audit, and performance logs).",
    cta: { label: "View Portfolio Cases", actionType: "link", value: "/work" }
  },
  {
    id: "ai-support",
    category: "ai",
    keywords: ["customer support ai", "sales bot", "lead generation", "sales agent", "support agent", "support chatbot"],
    title: "AI Support & Sales Agents",
    content: "Provide instantaneous, human-like answers to customers 24/7. Kumail architects custom Retrieval-Augmented Generation (RAG) chatbots that parse your internal handbooks, policy guides, or FAQs to answer customer queries accurately while flagging complex cases for human review.",
    cta: { label: "Configure a Support Agent", actionType: "whatsapp", value: "Hi Kumail, I'd like to implement an AI customer support agent" }
  },

  // --- PORTFOLIO PROJECTS SECTION ---
  {
    id: "projects-general",
    category: "projects",
    keywords: ["projects", "completed", "portfolio", "examples", "show case", "show work"],
    title: "Featured Case Studies",
    content: "Kumail's portfolio consists of high-impact case studies focused on ROI:\n1. **Next.js SaaS Platform**: Custom admin portal driving +300% client engagement.\n2. **Autonomous AI Support Agents**: LangGraph integration resolving 60% of tickets, yielding a 40% reduction in customer support costs.\n3. **AI Video Generator**: Real-estate media automation multiplying organic leads by 3x.\n4. **AI Dynamic Ads Generator**: Dynamic social media asset pipeline reducing Cost Per Acquisition (CPA) by 25%.",
    cta: { label: "View Case Studies Page", actionType: "link", value: "/work" }
  },
  {
    id: "projects-ai-cases",
    category: "projects",
    keywords: ["ai automation projects", "agent projects", "bot case studies", "langgraph work"],
    title: "AI Automation Case Studies",
    content: "Featured AI Automation:\n- **The Project**: Autonomous Customer Support Ecosystem.\n- **The Solution**: LangGraph stateful multi-agent system connected to PostgreSQL CRM.\n- **The Outcome**: Handled 60% of incoming tickets instantly; reduced monthly operational support costs by 40% while preserving a high customer satisfaction index.",
    cta: { label: "Explore Case Studies", actionType: "link", value: "/work" }
  },
  {
    id: "projects-web-cases",
    category: "projects",
    keywords: ["website development work", "saas projects", "dashboard work", "web cases"],
    title: "Web & SaaS Case Studies",
    content: "Featured Next.js SaaS:\n- **The Project**: Business Management SaaS Portal.\n- **The Solution**: Serverless Next.js App Router, Supabase auth, Stripe recurring checkouts, PostgreSQL database schema, Tailwind CSS layout.\n- **The Outcome**: Achieved a 3x lift in user retention and a 300% lift in engagement due to sub-second dashboard updates and smooth responsive layout.",
    cta: { label: "View All Projects", actionType: "link", value: "/work" }
  },

  // --- TECHNOLOGY SECTION ---
  {
    id: "tech-languages",
    category: "tech",
    keywords: ["programming languages", "typescript", "javascript", "node.js", "python", "languages"],
    title: "Core Programming Languages",
    content: "Kumail is a specialist in **TypeScript** and **JavaScript** for building resilient web and api layers, and uses **Python** for machine learning, AI model scripting, and large-scale data scraper structures.",
    cta: { label: "Start Tech Strategy", actionType: "calendly", value: "" }
  },
  {
    id: "tech-frameworks",
    category: "tech",
    keywords: ["next.js", "react", "tailwind", "framer motion", "frameworks", "technologies used"],
    title: "Frameworks & Frontend Technologies",
    content: "Kumail builds modern, high-performance interfaces using:\n- **Next.js**: The React Framework for production-ready, SEO-optimized, and static/server rendering.\n- **React / React Native**: Dynamic UI components and cross-platform mobile apps.\n- **Tailwind CSS**: Sleek styling with custom utility extensions.\n- **Framer Motion**: Smooth spring-based micro-animations that make sites feel alive.",
    cta: { label: "Discuss Front-End", actionType: "whatsapp", value: "Hi Kumail, I want to talk about Next.js front-end build" }
  },
  {
    id: "tech-databases",
    category: "tech",
    keywords: ["database", "postgresql", "supabase", "postgres", "mongodb", "redis", "prisma"],
    title: "Databases & ORMs",
    content: "For data layer durability, Kumail implements:\n- **PostgreSQL**: The standard for robust, relational transactional data.\n- **Supabase**: Serverless PostgreSQL database with real-time sync, secure auth, and storage logic.\n- **Prisma**: Type-safe ORM to ensure database schema changes are clean.\n- **Redis**: In-memory caching to guarantee sub-millisecond data reads under heavy traffic.",
    cta: { label: "Book Technical Session", actionType: "calendly", value: "" }
  },
  {
    id: "tech-scalable",
    category: "tech",
    keywords: ["scalable", "security", "reliable", "heavy traffic", "cloud", "aws", "vercel", "docker"],
    title: "Scalable Cloud Architecture",
    content: "All apps are built for high performance and low server latency. Kumail deploys projects on **Vercel** (for Next.js frontend pages) and **Supabase/AWS** (for databases and background processes). By structuring database indices properly, implementing Redis cache layers, and containerizing background apps with Docker, your software remains fast and reliable.",
    cta: { label: "Review Architecture", actionType: "calendly", value: "" }
  },

  // --- PRICING SECTION ---
  {
    id: "pricing-general",
    category: "pricing",
    keywords: ["website cost", "ai assistant cost", "automation cost", "how much", "fees", "rates", "pricing", "pricing process"],
    title: "Pricing & Projects Budget Guide",
    content: "Kumail works on a fixed-scope or retainer basis. Every project begins with a free initial strategy call to evaluate requirements. Approximate budgets are:\n\n* **International clients**: Standard custom SaaS or AI agent pipelines typically range from `$2,500 - $25,000+ USD` depending on database complexity and API requirements.\n* **National (India) clients**: Localized regional rates typically start from `₹1,80,000 - ₹12,00,000+ INR` based on scale and API integrations.\n\n*Note: Dynamic regional pricing ensures Kumail offers highly competitive solutions globally. Let's schedule a session to lock in a final fixed quote.*",
    cta: { label: "Book Consultation", actionType: "calendly", value: "" }
  },
  {
    id: "pricing-timeline",
    category: "pricing",
    keywords: ["how long", "timeline", "project take", "duration", "weeks", "months", "delivery speed"],
    title: "Project Timelines & Durations",
    content: "Timelines depend on scope complexity:\n- **Landing pages & Simple Automations**: 2 - 4 weeks.\n- **Core SaaS MVPs & Mid-tier AI agents**: 4 - 8 weeks.\n- **Enterprise software / Custom platforms**: 2 - 4 months.\nKumail follows agile weekly iterations, meaning you review live clickable progress builds every week.",
    cta: { label: "Discuss Timelines", actionType: "whatsapp", value: "Hi Kumail, I have a project timeline question" }
  },
  {
    id: "pricing-payments",
    category: "pricing",
    keywords: ["payment work", "milestone", "deposit", "installments", "refund"],
    title: "How Payments Work",
    content: "To align incentives, projects are divided into milestone payments:\n- **Deposit**: 30% to 50% upfront to reserve development bandwidth.\n- **Milestones**: Installment releases triggered after specific visual demonstrations (e.g., database working, admin panel complete).\n- **Final Handoff**: Remaining balance due upon deployment and code repository ownership transfer.",
    cta: { label: "Schedule Strategy Call", actionType: "calendly", value: "" }
  },

  // --- INDUSTRIES SECTION ---
  {
    id: "industries-list",
    category: "industries",
    keywords: ["industries", "restaurant automation", "real estate", "healthcare", "education", "travel agency", "e-commerce", "small business"],
    title: "Industries Worked With",
    content: "Kumail creates tailored automation engines across several core industries:\n- **Real Estate**: AI Property description scripts and automated video rendering (3x lead flow).\n- **Restaurants**: WhatsApp booking assistants and QR ordering links.\n- **E-commerce**: Custom shopping carts, payment gates, and automated email follow-ups.\n- **Travel Agencies**: Auto-syncing API packages, customized routing sheets, and email quotation scripts.\n- **Healthcare & Education**: Secure intake forms, student management, and internal scheduling CRMs.",
    cta: { label: "Discuss Industry Blueprint", actionType: "whatsapp", value: "Hi Kumail, I'd like to discuss automation for my industry" }
  },

  // --- PROCESS SECTION ---
  {
    id: "process-start",
    category: "process",
    keywords: ["how do we start", "get started", "onboarding", "step", "strategy session", "discovery"],
    title: "Development Process: How We Start",
    content: "Working together follows 4 straightforward steps:\n1. **Discovery Call**: Free 30-min strategy session to map requirements and technical goals.\n2. **Architectural Blueprint**: Kumail drafts a detailed tech design, project milestones, and a fixed quote.\n3. **Weekly Sprints**: Agile coding loops where you review live, clickable staging updates weekly.\n4. **Launch & Handover**: Complete code repository access transfer, sitemap setup, and dynamic documentation handoff.",
    cta: { label: "Schedule Discovery Call", actionType: "calendly", value: "" }
  },
  {
    id: "process-support",
    category: "process",
    keywords: ["after payment", "support", "maintenance", "retainer", "updates", "hosting"],
    title: "Hosting, Support & Ongoing Maintenance",
    content: "Yes, you get support. Every project includes a **30-day post-launch warranty** covering bug fixes, server launch tuning, and performance checks. For long-term upgrades, Kumail offers monthly retainer agreements (maintenance, database indexing, and feature additions) ensuring your platform stays cutting-edge.",
    cta: { label: "Inquire about retainers", actionType: "whatsapp", value: "Hi Kumail, I want to talk about monthly retainer support packages" }
  },

  // --- CONTACT & SOCIAL SECTION ---
  {
    id: "contact-details",
    category: "contact",
    keywords: ["book a consultation", "schedule a meeting", "open whatsapp", "send an email", "resume", "github", "linkedin", "contact information", "social links"],
    title: "Contact & Scheduling Channels",
    content: "Connect directly with Kumail Kmr:\n- **Calendly**: Schedule strategy sessions via [Calendly Session](https://calendly.com/ka6307464/business-automation-strategy-session).\n- **WhatsApp**: Direct chat via [WhatsApp](https://wa.me/916006121193).\n- **Email**: hello@kumailkmr.com / kumailkmr.dev@gmail.com\n- **GitHub**: [github.com/kumailkmr](https://github.com/kumailkmr) (View open-source work).\n- **LinkedIn**: [linkedin.com/in/kumailkmr](https://linkedin.com/in/kumailkmr) (Professional network).",
    cta: { label: "Book Calendly Session", actionType: "calendly", value: "" }
  }
];

// Conversational intros
const CONVERSATIONAL_INTROS = [
  "Certainly! Here is the relevant information regarding your query:",
  "I'd be glad to clarify that. Based on Kumail Kmr's portfolio and documentation:",
  "Great question. Here's a technical breakdown of how Kumail handles that:",
  "Regarding that topic, here's what you need to know about Kumail's capabilities:",
  "Here is what's detailed in Kumail's operational blueprint:"
];

// Stopwords to filter for query cleaning
const STOP_WORDS = new Set([
  "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be",
  "because", "been", "before", "being", "below", "between", "both", "but", "by", "can", "cannot", "could", "couldn't",
  "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further",
  "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's",
  "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is",
  "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not",
  "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same",
  "shant", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's",
  "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll",
  "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we",
  "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which",
  "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll",
  "you're", "you've", "your", "yours", "yourself", "yourselves"
]);

/**
 * Parses queries, calculates relevance scores against the knowledge nodes,
 * incorporates conversation history for context, and outputs a synthesized response.
 */
export function queryKnowledgeBase(
  userInput: string,
  history: { sender: "user" | "ai"; text: string }[]
): { text: string; matchedNode?: KnowledgeNode; actions?: { label: string; actionType: string; value: string }[] } {
  const cleanQuery = userInput.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
  const queryTerms = cleanQuery.split(/\s+/).filter(term => !STOP_WORDS.has(term) && term.length > 1);

  // 1. Context Resolution from History
  let activeCategoryContext: KnowledgeNode["category"] | null = null;
  
  // Look backward to check if previous AI answer was associated with a specific category
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].sender === "ai") {
      const prevText = history[i].text.toLowerCase();
      // Look for a node match in the previous text
      const matched = KNOWLEDGE_BASE.find(node => prevText.includes(node.title.toLowerCase()) || node.keywords.some(k => prevText.includes(k)));
      if (matched) {
        activeCategoryContext = matched.category;
        break;
      }
    }
  }

  // 2. Compute Match Relevance Scores
  let bestScore = 0;
  let bestNode: KnowledgeNode | null = null;

  for (const node of KNOWLEDGE_BASE) {
    let score = 0;

    // Check keyword intersections
    for (const term of queryTerms) {
      // Direct keyword match
      if (node.keywords.some(k => k === term || k.includes(term) || term.includes(k))) {
        score += 2;
      }
    }

    // Exact keyword combination match
    for (const keyword of node.keywords) {
      if (cleanQuery.includes(keyword)) {
        score += 1.5;
      }
    }

    // Category context boost if query contains relative pronouns or continuation keywords
    const isContinuation = cleanQuery.startsWith("what about") || cleanQuery.startsWith("how") || cleanQuery.startsWith("do you") || cleanQuery.startsWith("can you") || cleanQuery.startsWith("show") || cleanQuery.includes("cost") || cleanQuery.includes("price") || cleanQuery.includes("time") || cleanQuery.includes("tech");
    if (activeCategoryContext === node.category && isContinuation) {
      score += 1.25;
    }

    // Title match bonus
    if (cleanQuery.includes(node.title.toLowerCase())) {
      score += 4;
    }

    if (score > bestScore) {
      bestScore = score;
      bestNode = node;
    }
  }

  // 3. Synthesize the final conversational output
  if (bestNode && bestScore >= 1.0) {
    const randomIntro = CONVERSATIONAL_INTROS[Math.floor(Math.random() * CONVERSATIONAL_INTROS.length)];
    const introText = `${randomIntro}\n\n`;
    
    // Build actions array from node CTA
    const actions = [];
    if (bestNode.cta) {
      actions.push({
        label: bestNode.cta.label,
        actionType: bestNode.cta.actionType,
        value: bestNode.cta.value
      });
    }
    
    // Always append booking / whatsapp actions as standard lead conversion triggers
    if (bestNode.category !== "contact") {
      actions.push({
        label: "Book Strategy Call 🗓️",
        actionType: "calendly",
        value: ""
      });
    }

    return {
      text: `${introText}**${bestNode.title}**\n\n${bestNode.content}`,
      matchedNode: bestNode,
      actions
    };
  }

  // Fallback response: honest disclaimer and prompt direct connection
  return {
    text: "I couldn't find a direct detail about that in Kumail Kmr's portfolio. I want to be entirely accurate, so I recommend asking me about:\n\n* **His AI tools & frameworks** (e.g. LangGraph, crewAI, Mastra).\n* **His core services** (SaaS, custom databases, WhatsApp automations).\n* **Pricing guides** (for both national and international clients).\n* **Completed projects & case studies**.\n\nAlternatively, you can book a consultation call or chat directly on WhatsApp to speak with Kumail directly.",
    actions: [
      { label: "Book Consultation 🗓️", actionType: "calendly", value: "" },
      { label: "Connect on WhatsApp 💬", actionType: "whatsapp", value: `I had a question about: "${userInput}"` }
    ]
  };
}
