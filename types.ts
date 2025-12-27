export interface SubCategory {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
  path?: string;
  subCategories?: SubCategory[];
  features?: Feature[];
  process?: ProcessStep[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}