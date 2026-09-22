export interface ProfileData {
  name: string;
  role: string;
  subRole: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  tagline: string;
  quickStats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface EducationItem {
  id: string;
  course: string;
  year: string;
  institute: string;
  percentage: number;
  highlights: string[];
  keySubjects: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  type: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
  featuredStat?: string;
  impactArea: string;
}

export interface MUNItem {
  id: string;
  title: string;
  conference: string;
  year: string;
  role: string;
  category: 'secretariat' | 'executive-board' | 'teamwork' | 'delegate';
  committee?: string;
  description?: string;
  location?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Expert"
    context: string;
  }[];
}

export type ThemeMode = 'slate' | 'emerald' | 'obsidian';

export interface ThemeColors {
  id: ThemeMode;
  name: string;
  description: string;
  bg: string;
  cardBg: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  accentHover: string;
  accentLight: string;
  border: string;
  badgeBg: string;
  badgeText: string;
}
