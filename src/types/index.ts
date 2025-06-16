export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null means "Present"
  description: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  aboutMe: string;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  socials: Social[];
}