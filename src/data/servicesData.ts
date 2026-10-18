import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-design',
    number: '01',
    title: 'Website Design',
    categoryTag: 'Visual Identity & Systemic Direction',
    description:
      "Custom layouts, thoughtful visual direction, and clear user journeys. We build design systems that reflect your brand's unique identity rather than leaning on standard templates.",
    keyDeliverables: [
      'Art Direction & Moodboards',
      'Responsive Desktop & Mobile',
      'Figma Design Assets & Tokens',
      'Interactive Clickable Prototypes'
    ],
    icon: 'design_services',
    taglineTokens: 'Figma · Tokens · System'
  },
  {
    id: 'website-development',
    number: '02',
    title: 'Website Development',
    categoryTag: 'Engineering & Semantic Execution',
    description:
      'Responsive implementation, functional navigation, and reliable page structure. Clean semantic code engineered from scratch that loads in milliseconds and scales smoothly.',
    keyDeliverables: [
      'Modern HTML5 / CSS3 / Vanilla JS',
      'Custom Headless CMS Architecture',
      'Technical SEO & Schema Meta',
      'WCAG 2.1 AA Accessibility Compliant'
    ],
    icon: 'terminal',
    taglineTokens: 'Next.js · Astro · Sanity'
  },
  {
    id: 'business-websites',
    number: '03',
    title: 'Business Websites',
    categoryTag: 'Practices, Consultancies & Advisory',
    description:
      'Professional online experiences tailored to doctors, lawyers, consultants, architecture studios, and premium service businesses seeking credibility and seamless inbound inquiries.',
    keyDeliverables: [
      'Appointment Booking Integrations',
      'Secure Client Intake Systems',
      'Gated Client Portals',
      'High-Intent Local SEO Frameworks'
    ],
    icon: 'apartment',
    taglineTokens: 'Triage · Credentialing · Trust'
  },
  {
    id: 'landing-pages',
    number: '04',
    title: 'Landing Pages',
    categoryTag: 'High-Conversion Strategic Sprints',
    description:
      'Focused editorial experiences for a specific product offer, enterprise campaign, or capital event that maximize conversion velocity without compromising sophisticated aesthetics.',
    keyDeliverables: [
      'High-Converting Visual Hierarchy',
      'A/B Testing Infrastructure',
      'CRM & Lead Enrichment Hooks',
      'Rapid 10-Day Production Sprints'
    ],
    icon: 'ads_click',
    taglineTokens: 'Launch · Product · Conversion'
  },
  {
    id: 'ecommerce',
    number: '05',
    title: 'E-commerce',
    categoryTag: 'Boutique Retail & Direct-to-Consumer',
    description:
      'Tactile product presentation and frictionless purchasing journeys built around brand resonance. We elevate everyday catalog retail into an inspiring showroom experience.',
    keyDeliverables: [
      'Shopify Plus & Stripe Custom Carts',
      'Editorial Catalog Architecture',
      'Custom Micro-Interactions & Filters',
      'One-Page Accelerated Checkout'
    ],
    icon: 'shopping_bag',
    taglineTokens: 'Shopify · Custom Cart · Global'
  },
  {
    id: 'website-redesign',
    number: '06',
    title: 'Website Redesign',
    categoryTag: 'Platform Evolution & UX Modernization',
    description:
      'Modernise existing websites with improved information hierarchy, visual confidence, responsive speed, and usability while meticulously preserving search rank and established domain equity.',
    keyDeliverables: [
      'Comprehensive UX & Speed Audits',
      'Safe 301 SEO Migration Protocol',
      'Refreshed Modern Typographic Identity',
      'Legacy Tech-Stack Decoupling'
    ],
    icon: 'refresh',
    taglineTokens: 'Audit · Restructure · Relaunch'
  },
  {
    id: 'ongoing-support',
    number: '07',
    title: 'Ongoing Support',
    categoryTag: 'Post-Launch Partnership & Stewardship',
    description:
      'Proactive maintenance, feature iterations, and regular performance audits based on agreed scope. We view your flagship launch not as a finish line, but as the foundation of long-term digital growth.',
    keyDeliverables: [
      'Guaranteed 24h Response SLA',
      'Quarterly Core Web Vitals Audits',
      'Monthly Iterative Content Updates',
      'Continuous Security Hardening'
    ],
    icon: 'support_agent',
    taglineTokens: 'SLA · Security · Evolution'
  }
];

export const PROCESS_STAGES = [
  {
    stage: '01',
    timeframe: 'Week 1–2',
    name: 'Understand',
    description:
      'Deep dive into your business model, customer psychology, and competitive landscape. We define clear functional boundaries and establish measurable technical benchmarks.',
    deliverable: 'Discovery Brief',
    icon: 'search'
  },
  {
    stage: '02',
    timeframe: 'Week 3–5',
    name: 'Design',
    description:
      'Concept exploration, editorial art direction, and iterative wireframes until the vision feels unmistakable. You review full interactive screens, not flat static abstractions.',
    deliverable: 'Interactive Prototype',
    icon: 'palette'
  },
  {
    stage: '03',
    timeframe: 'Week 6–8',
    name: 'Build',
    description:
      'Engineering with meticulous attention to detail, performance benchmarks, responsive fidelity, and accessibility. Semantic, light code with zero unnecessary bloat.',
    deliverable: 'Staging Preview',
    icon: 'code'
  },
  {
    stage: '04',
    timeframe: 'Week 9',
    name: 'Launch',
    description:
      'Rigorous cross-browser testing, SEO checklist, analytics configuration, and hands-on handover training. We remain deployed live with you on launch day to ensure perfection.',
    deliverable: 'Live Production',
    icon: 'rocket_launch'
  }
];

export const STUDIO_PILLARS = [
  {
    tag: 'Direct Access',
    title: 'Zero account managers or game of telephone.',
    description:
      'You speak directly with the designers and developers building your project. Feedback is absorbed immediately, decisions are instantaneous, and alignment is guaranteed.',
    highlight: 'Instant communication'
  },
  {
    tag: 'Bespoke Craft',
    title: 'Zero off-the-shelf templates or cookie cutters.',
    description:
      'We engineer bespoke layouts and design tokens specifically for your brand typography and content architecture. Your digital footprint will never look like a generic clone.',
    highlight: 'Authentic differentiation'
  },
  {
    tag: 'Transparency',
    title: 'Fixed scopes with no hidden billing traps.',
    description:
      'Fair, transparent pricing with clear stage-gate timelines and concrete deliverables. You know exactly what will be delivered, when it arrives, and what it costs.',
    highlight: 'Clear commercial terms'
  },
  {
    tag: 'High Velocity',
    title: 'Agile turnaround with uncompromised quality.',
    description:
      'We intentionally limit studio intake to two flagship clients at any given time. This extreme focus translates into razor-sharp attention and faster time-to-market.',
    highlight: 'Focused attention'
  }
];
