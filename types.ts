export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
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