
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
  { platform: 'Linkedin', url: 'https://linkedin.com', icon: 'Linkedin' },
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
    logoUrl: 'https://logo.clearbit.com/trimble.com' 
  },
  {
    id: 'borton-lawson',
    company: 'Borton-Lawson',
    role: 'Highway Project Engineer',
    period: 'June 2019 - May 2022',
    description: 'Established project frameworks, deliverables, and timelines as Project Manager. Implemented risk management strategies for external contractors. Developed design analysis procedures to eliminate redundancies and managed relationships with multiple sub-contractors.',
    website: 'https://www.verdantas.com/news-insights/news/1690/borton-lawson-joins-top-enr-firm-verdantas',
    logoUrl: 'https://logo.clearbit.com/verdantas.com' 
  },
  {
    id: 'salut',
    company: 'SaLUT Inc.',
    role: 'Project Engineer',
    period: 'Nov 2017 - June 2019',
    description: 'Collaborated with senior project managers to develop project scopes and plan resources. Assisted in design analysis and inspections of geotechnical & pavement projects. Trained and supervised junior engineers and lab technicians.',
    website: 'https://salutinc.com',
    logoUrl: 'https://logo.clearbit.com/salutinc.com' 
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'OwtentO',
    title: 'OwtentO',
    category: 'B2B Web & Mobile Application',
    description: 'A streamlined platform for owner and tenant documentation and payments, designed specifically for private luxury holdings. Facilitates seamless document management and secure transactions.',
    tags: ['Luxury PropTech', 'Mobile App', 'Payment Integration'],
    link: 'https://yashpamulapati.dev'
  },
  {
    id: 'BuckB',
    title: 'BuckB',
    category: 'D2C Web & Mobile Application',
    description: 'An FnB app curated to professional chefs and cooks, personlaized options to manage their needs. Featuring |Snap Menu| a first of a kind app with no more than 5 clicks and customers spending no more than 2min from start to complete payment',
    tags: ['Snap Menu', 'Tracking', 'Payment'],
    link: 'https://yashpamulapati.dev'
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
  title: "Self-Healing Asphalt Technology",
  summary: "My Master's thesis, 'Evaluation of self-healing of asphalt concrete through induction heating and metallic fibers', investigated innovative methods to extend pavement life. Published in 'Construction and Building Materials' (Elsevier) and presented at the Transportation Research Board (TRB), this research demonstrated how embedding metallic fibers and applying induction heating could artificially heal cracks in asphalt, restoring up to 85% of load capacity. This deep dive into materials science and engineering testing methodology honed the analytical mindset I now apply to software product management.",
  journalUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0950061817307171?via%3Dihub',
  journalLogo: 'https://logo.clearbit.com/sciencedirect.com'
};

export const TOOLS: Tool[] = [
  { name: 'Anything AI', url: 'https://www.createanything.com/', logoUrl: 'https://logo.clearbit.com/createanything.com' },
  { name: 'Grok', url: 'https://x.ai/grok', logoUrl: 'https://www.google.com/s2/favicons?domain=x.ai&sz=128' },
  { name: 'NotebookLM', url: 'https://notebooklm.google.com/', logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/origin/notebooklm.png' },
  { name: 'Google AI Studio', url: 'https://aistudio.google.com/apps', logoUrl: 'https://logo.clearbit.com/ai.google.dev' },
  { name: 'Claude', url: 'https://claude.ai', logoUrl: 'https://logo.clearbit.com/anthropic.com' },
  { name: 'Microsoft 365 Copilot', url: 'https://www.microsoft.com/en-us/microsoft-365-copilot', logoUrl: 'https://logo.clearbit.com/copilot.microsoft.com' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logoUrl: 'https://logo.clearbit.com/javascript.com' },
  { name: 'Python', url: 'https://www.python.org', logoUrl: 'https://logo.clearbit.com/python.org' },
  { name: 'Groovy', url: 'https://groovy-lang.org', logoUrl: 'https://logo.clearbit.com/groovy-lang.org' },
  { name: 'Cursor', url: 'https://cursor.com', logoUrl: 'https://logo.clearbit.com/cursor.sh' },
  { name: 'MySQL', url: 'https://www.mysql.com', logoUrl: 'https://logo.clearbit.com/mysql.com' },
  { name: 'GitHub', url: 'https://github.com', logoUrl: 'https://logo.clearbit.com/github.com' },
  { name: 'Figma', url: 'https://www.figma.com', logoUrl: 'https://logo.clearbit.com/figma.com' },
  { name: 'IntelliJ', url: 'https://www.jetbrains.com/idea/', logoUrl: 'https://logo.clearbit.com/jetbrains.com' },
  { name: 'Jasper', url: 'https://www.jaspersoft.com', logoUrl: 'https://logo.clearbit.com/jaspersoft.com' },
];
