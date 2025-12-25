import { Service, PortfolioItem, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Placeholder images using nature/wood themes to simulate furniture/interiors
export const SERVICES: (Service & { path: string })[] = [
  {
    id: 'educational',
    title: 'Educational Furniture',
    description: 'Inspiring minds through ergonomic design.',
    details: 'We craft durable, ergonomic, and inspiring furniture solutions for schools, universities, and libraries. Our designs foster collaboration and comfort, ensuring conducive learning environments.',
    imageUrl: 'https://picsum.photos/id/20/1200/1600', // Desk/workplace vibe
    path: '/educational-furniture'
  },
  {
    id: 'office',
    title: 'Office Furniture',
    description: 'Productivity meets elegance.',
    details: 'From executive suites to collaborative hubs, our office furniture merges functionality with high-end aesthetics. We use premium hardwoods and sustainable materials to define your corporate identity.',
    imageUrl: 'https://picsum.photos/id/180/1200/1600', // Office/study vibe
    path: '/office-furniture'
  },
  {
    id: 'home',
    title: 'Home Furniture',
    description: 'Warmth and sophistication for your sanctuary.',
    details: 'Bespoke living room, bedroom, and dining sets designed to fit your space perfectly. Every curve and joint is hand-finished to ensure heirloom quality that lasts generations.',
    imageUrl: 'https://picsum.photos/id/369/1200/1600', // Home interior vibe
    path: '/home-furniture'
  },
  {
    id: 'interior',
    title: 'Interior Solutions',
    description: 'Holistic spatial transformation.',
    details: 'Complete interior fit-outs including wall paneling, flooring, and custom cabinetry. We transform bare shells into warm, inviting, and functionally superior spaces.',
    imageUrl: 'https://picsum.photos/id/437/1200/1600', // Abstract interior
    path: '/interior-solutions'
  },
  {
    id: 'artefacts',
    title: 'Artefacts',
    description: 'Details that define character.',
    details: 'Hand-carved wooden sculptures, decorative panels, and unique accent pieces. These artefacts serve as the soul of the room, adding a layer of artistic depth to any environment.',
    imageUrl: 'https://picsum.photos/id/250/1200/1600', // Texture/camera detail
    path: '/artefacts'
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'The Obsidian Desk', category: 'Office', imageUrl: 'https://picsum.photos/id/1/800/1000' },
  { id: '2', title: 'Oak Library Series', category: 'Educational', imageUrl: 'https://picsum.photos/id/24/800/600' },
  { id: '3', title: 'Zen Living Area', category: 'Home', imageUrl: 'https://picsum.photos/id/42/800/1000' },
  { id: '4', title: 'Mahogany Paneling', category: 'Interior', imageUrl: 'https://picsum.photos/id/58/800/600' },
  { id: '5', title: 'Sculpted Archway', category: 'Artefacts', imageUrl: 'https://picsum.photos/id/89/800/1000' },
  { id: '6', title: 'Minimalist Dining', category: 'Home', imageUrl: 'https://picsum.photos/id/162/800/600' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "VBWoodworks transformed our university library into a space where students actually want to study. The craftsmanship is impeccable.",
    author: "Dr. Elena Rostova",
    role: "Dean of Architecture, State University"
  },
  {
    id: '2',
    text: "The bespoke conference table they created is the centerpiece of our new headquarters. It speaks volumes about quality without saying a word.",
    author: "Marcus Thorne",
    role: "CEO, Thorne Holdings"
  },
  {
    id: '3',
    text: "Minimalist, sturdy, and undeniably beautiful. Their home furniture range brings a sense of calm to my chaotic life.",
    author: "Sarah Jenkins",
    role: "Interior Designer"
  }
];