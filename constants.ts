import { Service, PortfolioItem, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Placeholder images using nature/wood themes to simulate furniture/interiors
// Placeholder images using nature/wood themes to simulate furniture/interiors
export const SERVICES: (Service & { path: string })[] = [
  {
    id: 'educational',
    title: 'Educational Furniture',
    description: 'Inspiring minds through ergonomic design.',
    details: 'We craft durable, ergonomic, and inspiring furniture solutions for schools, universities, and libraries. Our designs foster collaboration and comfort, ensuring conducive learning environments.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-37559ccdad24?q=80&w=1200&auto=format&fit=crop',
    path: '/educational-furniture',
    subCategories: [
      {
        title: 'Student Desks',
        description: 'Ergonomic wooden desks designed for comfort and focus.',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Library Shelving',
        description: 'Modular wooden shelving systems for modern libraries.',
        imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Collaborative Tables',
        description: 'Large format tables fostering group work and interaction.',
        imageUrl: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Teacher Stations',
        description: 'Functional and elegant podiums and desks for educators.',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
      }
    ],
    features: [
      { title: 'Durability', description: 'Built to withstand decades of rigorous daily use.' },
      { title: 'Ergonomics', description: 'Designed to support posture and enhance learning focus.' },
      { title: 'Sustainability', description: 'Sourced from responsibly managed forests.' }
    ],
    process: [
      { step: '01', title: 'Consultation', description: 'Understanding student needs and spatial constraints.' },
      { step: '02', title: 'Design', description: 'Creating ergonomic prototypes and layouts.' },
      { step: '03', title: 'Production', description: 'Precision manufacturing with high-grade wood.' },
      { step: '04', title: 'Installation', description: 'Seamless setup to minimize classroom disruption.' }
    ]
  },
  {
    id: 'office',
    title: 'Office Furniture',
    description: 'Productivity meets elegance.',
    details: 'From executive suites to collaborative hubs, our office furniture merges functionality with high-end aesthetics. We use premium hardwoods and sustainable materials to define your corporate identity.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    path: '/office-furniture',
    subCategories: [
      {
        title: 'Executive Desks',
        description: 'Premium walnut and mahogany desks for leadership spaces.',
        imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Conference Tables',
        description: 'Statement pieces that command attention in meetings.',
        imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Workstations',
        description: 'Modular wooden systems for open-plan offices.',
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Reception Units',
        description: 'Welcoming front-desk units capable of leaving a lasting impression.',
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
      }
    ],
    features: [
      { title: 'Prestige', description: 'Exudes professionalism and corporate excellence.' },
      { title: 'Customization', description: 'Tailored finishes to match your brand guidelines.' },
      { title: 'Comfort', description: 'Optimized specifically for long working hours.' }
    ],
    process: [
      { step: '01', title: 'Space Planning', description: 'Optimizing workflow and office layout.' },
      { step: '02', title: 'Selection', description: 'Choosing the perfect wood grains and finishes.' },
      { step: '03', title: 'Crafting', description: 'Hand-finishing each piece for perfection.' },
      { step: '04', title: 'Delivery', description: 'White-glove delivery and assembly service.' }
    ]
  },
  {
    id: 'home',
    title: 'Home Furniture',
    description: 'Warmth and sophistication for your sanctuary.',
    details: 'Bespoke living room, bedroom, and dining sets designed to fit your space perfectly. Every curve and joint is hand-finished to ensure heirloom quality that lasts generations.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    path: '/home-furniture',
    subCategories: [
      {
        title: 'Living Room Sets',
        description: 'Coffee tables, media units, and accent chairs in rich woods.',
        imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Dining Collections',
        description: 'Handcrafted dining tables and chairs for family gatherings.',
        imageUrl: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Bedroom Suites',
        description: 'Bed frames, dressers, and nightstands with timeless appeal.',
        imageUrl: 'https://images.unsplash.com/photo-1505693416388-b0346efee958?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Custom Storage',
        description: 'Built-in wardrobes and shelving units tailored to your space.',
        imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop'
      }
    ],
    features: [
      { title: 'Heirloom Quality', description: 'Furniture built to be passed down through generations.' },
      { title: 'Bespoke Design', description: 'Made-to-measure pieces for your specific home.' },
      { title: 'Non-Toxic', description: 'Finished with natural, safe oils and waxes.' }
    ],
    process: [
      { step: '01', title: 'Vision', description: 'Discussing your style and functional needs.' },
      { step: '02', title: 'Sketching', description: 'Visualizing pieces in your actual living space.' },
      { step: '03', title: 'Joinery', description: 'Traditional techniques for lasting strength.' },
      { step: '04', title: 'Placement', description: 'Careful installation in your home.' }
    ]
  },
  {
    id: 'interior',
    title: 'Interior Solutions',
    description: 'Holistic spatial transformation.',
    details: 'Complete interior fit-outs including wall paneling, flooring, and custom cabinetry. We transform bare shells into warm, inviting, and functionally superior spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
    path: '/interior-solutions',
    subCategories: [
      {
        title: 'Wall Paneling',
        description: 'Acoustic and decorative wooden wall treatments.',
        imageUrl: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Flooring',
        description: 'Hardwood and engineered wood flooring installation.',
        imageUrl: 'https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Ceiling Treatments',
        description: 'Exposed beams and wooden false ceilings.',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Staircases',
        description: 'Custom wooden staircases and handrails.',
        imageUrl: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800&auto=format&fit=crop'
      }
    ],
    features: [
      { title: 'Acoustics', description: 'Natural sound dampening properties of wood.' },
      { title: 'Integration', description: 'Seamlessly blending storage and structural elements.' },
      { title: 'Atmosphere', description: 'Creating warm, inviting environments.' }
    ],
    process: [
      { step: '01', title: 'Survey', description: 'Detailed measurements and site analysis.' },
      { step: '02', title: 'Integration', description: 'Coordinating with electrical and plumbing systems.' },
      { step: '03', title: 'Fabrication', description: 'Off-site manufacturing to reduce on-site dust.' },
      { step: '04', title: 'Fit-out', description: 'Precise installation and final finishing.' }
    ]
  },
  {
    id: 'artefacts',
    title: 'Artefacts',
    description: 'Details that define character.',
    details: 'Hand-carved wooden sculptures, decorative panels, and unique accent pieces. These artefacts serve as the soul of the room, adding a layer of artistic depth to any environment.',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop',
    path: '/artefacts',
    subCategories: [
      {
        title: 'Sculptures',
        description: 'Abstract and figurative hand-carved art pieces.',
        imageUrl: 'https://images.unsplash.com/photo-1576082987178-500e31e34c9c?q=80&w=800&auto=format&fit=crop' // Using generic art/sculpture image
      },
      {
        title: 'Wall Decor',
        description: 'Intricate wooden relief panels and art.',
        imageUrl: 'https://images.unsplash.com/photo-1582568631105-d14dc74c4424?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Handcrafted Vessels',
        description: 'Turned wooden bowls and vases.',
        imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop'
      },
      {
        title: 'Lighting',
        description: 'Wooden lamp bases and pendant lights.',
        imageUrl: 'https://images.unsplash.com/photo-1513506003011-3b03c8b82438?q=80&w=800&auto=format&fit=crop'
      }
    ],
    features: [
      { title: 'Artistry', description: 'Created by master carvers with decades of experience.' },
      { title: 'Uniqueness', description: 'One-of-a-kind pieces that cannot be replicated.' },
      { title: 'Texture', description: 'Adding tactile richness to your space.' }
    ],
    process: [
      { step: '01', title: 'Concept', description: 'Sketching artistic ideas and themes.' },
      { step: '02', title: 'Selection', description: 'Finding the perfect block of wood for the piece.' },
      { step: '03', title: 'Carving', description: 'Weeks of patient hand-carving and shaping.' },
      { step: '04', title: 'Finishing', description: 'Oiling and polishing to reveal the grain.' }
    ]
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