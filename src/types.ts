export type ProjectCategory = 
  | 'all' 
  | 'healthcare' 
  | 'hospitality' 
  | 'legal' 
  | 'realestate' 
  | 'retail' 
  | 'personal';

export interface ProjectDeliverable {
  label: string;
}

export interface ProjectItem {
  id: string;
  caseNumber: string;
  category: ProjectCategory;
  categoryBadge: string;
  title: string;
  subtitle?: string;
  description: string;
  domainUrl: string;
  scopeDeliverables: string[];
  imageUrl: string;
  imageAlt: string;
  bannerTag: string;
  bannerTitle: string;
  bottomLeftLabel: string;
  bottomRightValue: string;
  colorHarmony?: {
    label: string;
    colors: string[];
    names: string;
  };
  specialMetric?: {
    label: string;
    value: string;
    icon?: string;
    badge?: string;
  };
  accentColor?: string;
  layoutVariant?: 'image-left' | 'image-right' | 'image-large-left' | 'image-large-right';
  theme?: 'light' | 'dark' | 'warm';
  deepDive?: {
    summary: string;
    challenge: string;
    solution: string;
    techStack: string[];
    lighthouseScore: { performance: number; accessibility: number; seo: number };
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  description: string;
  keyDeliverables: string[];
  icon: string;
  taglineTokens?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  businessName: string;
  websiteType: string;
  budgetBracket: string;
  projectDetails: string;
}
