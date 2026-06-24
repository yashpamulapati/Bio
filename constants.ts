
import { Experience, Research, SocialLink, Project, Tool, Recognition } from './types';

export const PROFILE = {
  name: "Yash Pamulapati",
  title: "Product Manager",
  shortBio: "Product Manager at Trimble building B2B SaaS for fleet & asset management",
  email: "yashwanth.pamulapati@gmail.com",
  phone: "225-371-2596",
  location: "Oklahoma City, OK",
  systemInstruction: `You are an AI assistant for Yash Pamulapati's portfolio website. Your role is to represent Yash professionally and answer questions about his background, skills, and experience based strictly on the provided context.

  CONTEXT:
  Name: Yash Pamulapati
  Role: Product Manager
  Location: Oklahoma City, OK
  Contact: yashwanth.pamulapati@gmail.com, 225-371-2596

  PROFESSIONAL SUMMARY:
  Product Manager with 8+ years spanning Transportation Management Systems (TMS), Fleet, Logistics, Asset Management Systems (AMS), and Enterprise B2B SaaS. Owned product strategy, pricing, and delivery for a $1.5M+ ARR fleet & asset-management SaaS platform serving owner & public-sector clientele — owning the PDLC from customer discovery and MVP through production launch. Shipped an AI-powered product from zero-to-one (concept through prototype to stakeholder adoption) and drove cross-functional delivery across engineering, design, and go-to-market (GTM).

  EXPERIENCE:
  1. Product Owner (Fleet & Asset Management Systems) at Trimble Inc. (Oklahoma City, OK) | May 2022 – Present
     - Owns product strategy, roadmap, and OKRs for a $1.5M+ ARR TMS & asset-management SaaS portfolio serving public-sector and enterprise customers, leading the full cycle from customer discovery through production launch.
     - Shipped an MCP-powered agentic AI assistant embedded in the platform (hackathon runner-up), turning natural-language prompts into live API actions.
     - Delivered IoT/fleet-telematics integration and a zero-downtime migration of enterprise data pipelines to AWS.

  2. Program Manager (Construction & Infrastructure Technology) at Borton-Lawson (Bethlehem, PA) | June 2019 - May 2022
     - Managed full-lifecycle delivery for architecture, engineering, and construction programs — scope, budgets up to $2M, and risk across eight industrial and public-infrastructure portfolios.
     - Coordinated 18 internal and external stakeholders, including PennDOT, contractors, and design teams.
     - Built standardized project frameworks and data-driven controls that accelerated delivery timelines roughly 15%.

  3. Staff Engineer (Construction Program Delivery) at SaLUT Inc. (Glen Burnie, MD) | Nov 2017 - June 2019
     - Served as the Procore SME for a $1B airport infrastructure program, supporting a $5M Terminal 2B delivery.
     - Owned the full implementation lifecycle across concurrent multi-site projects, managing scheduling, training, and adoption for 14+ personnel.
     - Ran end-to-end program delivery across the DC, MD, and VA regions with standardized reporting.

  SKILLS:
  Product & Strategy: Product Management, New Product Launch (MVP → Production), Customer Discovery & Research, Strategic Roadmaps, Agile/Scrum, Backlog & User Story Management, OKRs, UAT, Staged Rollouts.
  Pricing & Monetization: Value-Based & Usage Pricing, Packaging & Tiering, Profitability & Conversion Metrics, Price Experimentation (A/B), Discounting & GTM Strategy, ARR & Unit Economics.
  Domain Expertise: AECO, Infrastructure Technology, Transportation & Fleet Logistics, Enterprise B2B SaaS.
  Technical & AI: APIs/SDKs (REST/JSON), IoT & Telematics, AI-Driven Prototyping, Claude, Codex, Figma, Cursor, n8n, MCP, Jenkins, Postman, Tableau, Miro, Jira.

  PROJECTS:
  - Web Development & Prototyping: Builds business websites, portfolios, and rapid prototypes, transforming ideas into functional, interactive digital experiences.
  - Explorations: Builds early-stage products that tackle everyday problems, turning ideas into ventures that make day-to-day life a little simpler.

  RESEARCH:
  Thesis: "Evaluation of self-healing of asphalt concrete through induction heating and metallic fibers"
  Publication: Construction and Building Materials-146 (2017) 66-75, Journal - ELSEVIER & Transportation Research Board (TRB).
  Summary: Investigated artificial healing of asphaltic materials using metallic fibers and induction heating to recover cracking damage.

  TONE:
  Professional, concise, enthusiastic, and helpful. Always refer to Yash in the third person. If asked about something not in this context, politley state you only have information regarding his professional background.
  `
};

export const SOCIALS: SocialLink[] = [
  { platform: 'Github', url: 'https://github.com/yashpamulapati', icon: 'Github' },
  { platform: 'Linkedin', url: 'https://www.linkedin.com/in/yashpamulapati', icon: 'Linkedin' },
  { platform: 'Projects', url: '#projects', icon: 'FolderKanban' },
  { platform: 'Contact', url: '#contact', icon: 'Mail' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'trimble',
    company: 'Trimble Inc.',
    role: 'Product Owner, Fleet & Asset Management Systems',
    period: 'May 2022 – Present',
    description: 'Own product strategy, roadmap, and OKRs for a $1.5M+ ARR TMS and asset-management SaaS portfolio serving public-sector and enterprise customers, leading the full cycle from customer discovery through production launch. Recently shipped an MCP-powered agentic AI assistant embedded in the platform (hackathon runner-up), and delivered IoT/fleet-telematics integration and a zero-downtime migration of enterprise data pipelines to AWS.',
    website: 'https://assetlifecycle.trimble.com/en',
    logoUrl: 'https://www.google.com/s2/favicons?domain=trimble.com&sz=256' 
  },
  {
    id: 'borton-lawson',
    company: 'Borton-Lawson',
    role: 'Program Manager',
    period: 'June 2019 - May 2022',
    description: 'Managed full-lifecycle delivery for architecture, engineering, and construction programs — overseeing scope, budgets up to $2M, and risk across eight industrial and public-infrastructure portfolios. Coordinated 18 internal and external stakeholders, including PennDOT, contractors, and design teams, to deliver mission-critical infrastructure, and built standardized project frameworks and data-driven controls that accelerated delivery timelines roughly 15%.',
    website: 'https://www.verdantas.com/news-insights/news/1690/borton-lawson-joins-top-enr-firm-verdantas',
    logoUrl: 'https://www.google.com/s2/favicons?domain=verdantas.com&sz=256' 
  },
  {
    id: 'salut',
    company: 'SaLUT Inc.',
    role: 'Staff Engineer',
    period: 'Nov 2017 - June 2019',
    description: 'Served as the Procore SME for a $1B airport infrastructure program, driving system configuration, deployment, and optimization in direct support of a $5M Terminal 2B delivery. Owned the full implementation lifecycle across concurrent multi-site projects — managing scheduling, training, and adoption for 14+ personnel — and ran end-to-end program delivery across the DC, MD, and VA regions with standardized reporting.',
    website: 'https://salutinc.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=salutinc.com&sz=256' 
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'services',
    title: 'Web Development & Prototyping',
    category: 'Services',
    description: 'Specializing in transforming ideas into functional, interactive digital experiences efficiently.',
    tags: ['Business Websites', 'Portfolios', 'Rapid Prototyping'],
    link: 'https://shouldabought.us/',
    ariaLabel: 'Open shouldabought.us, a project I built',
    coverImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ventures',
    title: 'Explorations',
    category: 'Startups',
    description: "Building early-stage products that tackle everyday problems — turning ideas into ventures that make day-to-day life a little simpler.",
    tags: ['0 → 1', 'Product', 'Problem Solving', 'Side Projects'],
    link: '#contact',
    coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'highway-design',
    title: 'Highway Interchange Design',
    category: 'Civil Infrastructure',
    description: 'Managed complex highway design projects, establishing frameworks for risk mitigation and timeline adherence while coordinating with multiple external vendors and sub-contractors.',
    tags: ['Project Management', 'Risk Analysis', 'Infrastructure']
  }
];

export const RESEARCH: Research = {
  title: "Self-Healing Technology",
  summary: "Investigated artificial healing of asphaltic materials using metallic fibers and induction heating to recover cracking damage.",
  innovationTitle: "Civil to Software Transition",
  innovationSummary: "While I started my career with Construction and Design engineering, my transition to software was instinctive. By analyzing data at scale and leading cross-functional teams, I developed a strong foundation in data analysis, problem solving & stakeholder management early on. As a tech enthusiast focused on the software side of delivery, pivoting to Product Management was organic and seamless evolution—shifting from using enterprise tools to building them.",
  journalUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0950061817307171?via%3Dihub',
  journalLogo: 'https://www.google.com/s2/favicons?domain=sciencedirect.com&sz=128'
};

export const RECOGNITIONS: Recognition[] = [
  { label: "People's Choice Runner-up", detail: 'Trimble Agentic AI Hackathon 2026', icon: 'Trophy', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7465818516500291584/' },
  { label: 'Invited Speaker', detail: 'AI Summit 3.0 (2026)', icon: 'Mic' },
  { label: 'Featured Speaker', detail: 'Trimble Innovate (2024 & 2025)', icon: 'Presentation' },
  { label: 'Speaker', detail: 'Trimble Dimensions 2026 · November', icon: 'CalendarClock' },
  { label: 'Published Author', detail: 'Elsevier · Construction and Building Materials (TRB)', icon: 'BookOpen' },
];

export const TOOLS: Tool[] = [
  { name: 'Anything AI', url: 'https://www.createanything.com/', logoUrl: 'https://www.google.com/s2/favicons?domain=createanything.com&sz=128' },
  { name: 'Perplexity', url: 'https://www.perplexity.ai/', logoUrl: 'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128' },
  { name: 'Grok', url: 'https://x.ai/grok', logoUrl: 'https://www.google.com/s2/favicons?domain=x.ai&sz=128' },
  { name: 'Google AI Studio', url: 'https://aistudio.google.com/apps', logoUrl: 'https://www.google.com/s2/favicons?domain=aistudio.google.com&sz=128' },
  { name: 'Claude', url: 'https://claude.ai', logoUrl: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=128' },
  { name: 'Microsoft 365 Copilot', url: 'https://www.microsoft.com/en-us/microsoft-365-copilot', logoUrl: 'https://www.google.com/s2/favicons?domain=copilot.microsoft.com&sz=128' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Python', url: 'https://www.python.org', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Groovy', url: 'https://groovy-lang.org', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/groovy/groovy-original.svg' },
  { name: 'Cursor', url: 'https://cursor.com', logoUrl: 'https://www.google.com/s2/favicons?domain=cursor.com&sz=128' },
  { name: 'MySQL', url: 'https://www.mysql.com', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'GitHub', url: 'https://github.com', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'Figma', url: 'https://www.figma.com', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'IntelliJ', url: 'https://www.jetbrains.com/idea/', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
  { name: 'Jasper', url: 'https://www.jaspersoft.com', logoUrl: 'https://www.google.com/s2/favicons?domain=jaspersoft.com&sz=128' },
  { name: 'Autodesk', url: 'https://www.autodesk.com', logoUrl: 'https://www.google.com/s2/favicons?domain=autodesk.com&sz=128' },
  { name: 'Bentley Systems', url: 'https://www.bentley.com', logoUrl: 'https://www.google.com/s2/favicons?domain=bentley.com&sz=128' },
  { name: 'n8n', url: 'https://n8n.io/', logoUrl: 'https://www.google.com/s2/favicons?domain=n8n.io&sz=128' },
  { name: 'Tableau', url: 'https://www.tableau.com', logoUrl: 'https://www.google.com/s2/favicons?domain=tableau.com&sz=128' },
  { name: 'Google Antigravity', url: 'https://antigravity.google/', logoUrl: 'https://www.google.com/s2/favicons?domain=antigravity.google&sz=128' },
  { name: 'DBeaver', url: 'https://dbeaver.io', logoUrl: 'https://www.google.com/s2/favicons?domain=dbeaver.io&sz=128' },
  { name: 'Smartsheet', url: 'https://www.smartsheet.com', logoUrl: 'https://www.google.com/s2/favicons?domain=smartsheet.com&sz=128' },
];
