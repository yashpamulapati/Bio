
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  website: string;
  logoUrl: string; // Using generic placeholder or lucide icon names if dynamic
}

export interface Research {
  title: string;
  summary: string;
  journalUrl?: string;
  journalLogo?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Project {
  id: string;
  title: string;
  category: string; // Displayed inside the image placeholder
  description: string;
  tags: string[];
  imageUrl?: string; // Small logo/image inside card
  coverImage?: string; // Full background image
  link?: string; // External URL
}
