
import { Experience, Research, SocialLink, Project, Tool } from './types';

export const PROFILE = {
  name: "Yash Pamulapati",
  title: "Product Management Professional",
  shortBio: "Product Consultant at Trimble supporting B2B SaaS products",
  email: "yashwanth.pamulapati@gmail.com",
  phone: "225-371-2596",
  location: "Oklahoma City, OK",
  systemInstruction: `You are an AI assistant for Yash Pamulapati's portfolio website. Your role is to represent Yash professionally and answer questions about his background, skills, and experience based strictly on the provided context.

  CONTEXT:
  Name: Yash Pamulapati
  Role: Product Management Professional & Civil Engineer
  Location: Oklahoma City, OK
  Contact: yashwanth.pamulapati@gmail.com, 225-371-2596

  PROFESSIONAL SUMMARY:
  Product management professional with over 3 years as product owner and software consulting in enterprise software solutions, complimented by more than 4 years as a civil project engineer. Proficient in delivering complex B2B enterprise SaaS products for mobile and web applications, SDLC, implementations, and solutions consulting.

  EXPERIENCE:
  1. Product Consultant at Trimble Inc. (Oklahoma City, OK) | May 2022 – Present
     - Technical Product Owner for Oklahoma account API projects.
     - Lead the $1.5M ARR account as SME & Lead Analyst.
     - Managed Jenkins CI/CD pipelines and end-to-end SDLC.
     - Partnered with security teams for data governance.
     - Conducted user engagement sessions and usability tests.
     - Developed client relationships and delivered solutions for transportation asset management.
     - Provided demos, technical documentation, and on-site training.
     - Conducted prototype walkthroughs and field interviews.

  3. Highway Project Engineer at Borton-Lawson (Bethlehem, PA) | June 2019 - May 2022
     - Managed design projects as Project Manager.
     - Implemented risk management strategies for external vendors.
     - Developed design analysis procedures to eliminate redundancies.

  4. Project Engineer at SaLUT Inc. (Glen Burnie, MD) | Nov 2017 - June 2019
     - Collaborated on project scopes, resource planning, and budget allocations.
     - performed design analysis of geotechnical & pavement projects.
     - Supervised junior engineers and lab technicians.

  SKILLS:
  Tools: Jira, Tableau, GitHub, SQL, JavaScript, Groovy Script, IntelliJ, Confluence, Power BI, Postman, Zapier, n8n.
  Methodologies: Agile-Scrum, SDLC, CI/CD pipelines, Roadmap planning, Release Planning.
  
  PROJECTS:
  - Owtento: A web and mobile application for owner and tenant documentation and payments for private luxury holdings.
  - BuckBi: FnB marketplace for private chefs.
  - AgileAssets Implementation: Technical implementation for transportation asset management SaaS.

  RESEARCH:
  Thesis: "Evaluation of self-healing of asphalt concrete through induction heating and metallic fibers"
  Publication: Construction and Building Materials-146 (2017) 66-75, Journal - ELSEVIER & Transportation Research Board (TRB).
  Summary: Investigated artificial healing of asphaltic materials using metallic fibers and induction heating to recover cracking damage.

  TONE:
  Professional, concise, enthusiastic, and helpful. Always refer to Yash in the third person. If asked about something not in this context, politley state you only have information regarding his professional background.
  `
};

export const SOCIALS: SocialLink[] = [
  { platform: 'Github', url: 'https://github.com', icon: 'Github' },
  { platform: 'Linkedin', url: 'https://www.linkedin.com/in/yashpamulapati', icon: 'Linkedin' },
  { platform: 'Projects', url: '#projects', icon: 'FolderKanban' },
  { platform: 'Contact', url: '#contact', icon: 'Mail' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'trimble',
    company: 'Trimble Inc.',
    role: 'Product Consultant',
    period: 'May 2022 – Present',
    description: 'Serving as Technical Product Owner for Oklahoma account API projects, managing product backlogs, sprint planning, and decision making. Lead a $1.5M ARR account as SME & Lead Analyst, overseeing client portfolios and vendor management. Drive product enhancements and enterprise compliance via strategic data analysis and cross-functional collaboration.',
    website: 'https://assetlifecycle.trimble.com/en',
    logoUrl: 'https://www.google.com/s2/favicons?domain=trimble.com&sz=256' 
  },
  {
    id: 'borton-lawson',
    company: 'Borton-Lawson',
    role: 'Highway Project Engineer',
    period: 'June 2019 - May 2022',
    description: 'Established project frameworks, deliverables, and timelines as Project Manager. Implemented risk management strategies for external contractors. Developed design analysis procedures to eliminate redundancies and managed relationships with multiple sub-contractors.',
    website: 'https://www.verdantas.com/news-insights/news/1690/borton-lawson-joins-top-enr-firm-verdantas',
    logoUrl: 'https://www.google.com/s2/favicons?domain=verdantas.com&sz=256' 
  },
  {
    id: 'salut',
    company: 'SaLUT Inc.',
    role: 'Project Engineer',
    period: 'Nov 2017 - June 2019',
    description: 'Collaborated with senior project managers to develop project scopes and plan resources. Assisted in design analysis and inspections of geotechnical & pavement projects. Trained and supervised junior engineers and lab technicians.',
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
    link: '#contact',
    coverImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ventures',
    title: 'Startup Ventures',
    category: 'Startups',
    description: "Currently building two startups: 'OtentO', a luxury proptech platform, and 'BuckBi', an FnB solution connecting private chefs with customers.",
    tags: ['OtentO', 'BuckBi', 'PropTech', 'FoodTech'],
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

export const TOOLS: Tool[] = [
  { name: 'Anything AI', url: 'https://www.createanything.com/', logoUrl: 'https://www.google.com/s2/favicons?domain=createanything.com&sz=128' },
  { name: 'Grok', url: 'https://x.ai/grok', logoUrl: 'https://www.google.com/s2/favicons?domain=x.ai&sz=128' },
  { name: 'Google AI Studio', url: 'https://aistudio.google.com/apps', logoUrl: 'https://www.google.com/s2/favicons?domain=ai.google.dev&sz=128' },
  { name: 'Claude', url: 'https://claude.ai', logoUrl: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=128' },
  { name: 'Microsoft 365 Copilot', url: 'https://www.microsoft.com/en-us/microsoft-365-copilot', logoUrl: 'https://www.google.com/s2/favicons?domain=copilot.microsoft.com&sz=128' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logoUrl: 'https://www.google.com/s2/favicons?domain=javascript.com&sz=128' },
  { name: 'Python', url: 'https://www.python.org', logoUrl: 'https://www.google.com/s2/favicons?domain=python.org&sz=128' },
  { name: 'Groovy', url: 'https://groovy-lang.org', logoUrl: 'https://www.google.com/s2/favicons?domain=groovy-lang.org&sz=128' },
  { name: 'Cursor', url: 'https://cursor.com', logoUrl: 'https://www.google.com/s2/favicons?domain=cursor.sh&sz=128' },
  { name: 'MySQL', url: 'https://www.mysql.com', logoUrl: 'https://www.google.com/s2/favicons?domain=mysql.com&sz=128' },
  { name: 'GitHub', url: 'https://github.com', logoUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=128' },
  { name: 'Figma', url: 'https://www.figma.com', logoUrl: 'https://www.google.com/s2/favicons?domain=figma.com&sz=128' },
  { name: 'IntelliJ', url: 'https://www.jetbrains.com/idea/', logoUrl: 'https://www.google.com/s2/favicons?domain=jetbrains.com&sz=128' },
  { name: 'Jasper', url: 'https://www.jaspersoft.com', logoUrl: 'https://www.google.com/s2/favicons?domain=jaspersoft.com&sz=128' },
  { name: 'Autodesk', url: 'https://www.autodesk.com', logoUrl: 'https://www.google.com/s2/favicons?domain=autodesk.com&sz=128' },
  { name: 'Bentley Systems', url: 'https://www.bentley.com', logoUrl: 'https://www.google.com/s2/favicons?domain=bentley.com&sz=128' },
  { name: 'Power BI', url: 'https://powerbi.microsoft.com', logoUrl: 'https://www.google.com/s2/favicons?domain=powerbi.microsoft.com&sz=128' },
  { name: 'Tableau', url: 'https://www.tableau.com', logoUrl: 'https://www.google.com/s2/favicons?domain=tableau.com&sz=128' },
  { name: 'Google Antigravity', url: 'https://antigravity.google/', logoUrl: 'https://www.google.com/s2/favicons?domain=antigravity.google&sz=128' },
];
