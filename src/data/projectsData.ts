import { ProjectItem } from '../types';

export const ARCHIVE_PROJECTS: ProjectItem[] = [
  {
    id: 'kallos-health',
    caseNumber: '01 / Concept Case',
    category: 'healthcare',
    categoryBadge: 'Healthcare',
    title: 'Kallos Integrative Health',
    description:
      'An empathetic, serene digital sanctuary featuring muted sage, warm ivory, legible typography, and intuitive telehealth booking. Designed to dissolve patient anxiety while maintaining clinical rigor.',
    domainUrl: 'kallos-integrative.health/telehealth-portal',
    scopeDeliverables: [
      'Brand Identity',
      'Custom Web Experience',
      'Patient Consultation Flow',
      'Design Token System'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAu1qMEw7pKokNSY02cg7XREaCCdCBeMnCj4RZnFAgqBro1SwLtObsjpcFku8xDzzetcW0BYE1-rzbt3p-cNBEiSyV-SjclRu9wpIMl_lXOVpbD27upfcoWxsUlsztW2FdEBgyS3MAniaZz2lwXA1JywMXblM8W2S2ocBhhar_cBvM8vnx-R9IoyF3ohNbWNpiNxXtHIMIk9cfjkHcO00AeV4A7H-p1IpiYLqTZ5yHbqmREHOHwnoPE',
    imageAlt:
      'Editorial photograph of an architectural wellness medical sanctuary with soft morning light filtered through linen drapery, muted sage and warm beige palette, natural stone medical counter, minimalist ceramics and botanical stems. High-end Scandinavian health aesthetic, quiet luxury and clinical warmth.',
    bannerTag: 'Telehealth Sanctuary Flow',
    bannerTitle: 'Compassionate intake pathways engineered for zero cognitive fatigue.',
    bottomLeftLabel: 'CLINICAL INTEGRATION ARCHITECTURE',
    bottomRightValue: '100% ACCESSIBILITY COMPLIANT',
    layoutVariant: 'image-left',
    theme: 'light',
    colorHarmony: {
      label: 'COLOR HARMONY',
      colors: ['#506355', '#EAE8E2', '#1C1D1B'],
      names: 'EUCALYPTUS / CHALK / OBSIDIAN'
    },
    deepDive: {
      summary:
        'Kallos sought to transcend the antiseptic sterility of traditional medical portals. We architected a serene, patient-centered digital intake ecosystem that reduces stress by 68% before patients even arrive for consultation.',
      challenge:
        'Complex medical intake questionnaires historically cause patient fatigue and high drop-off rates, leading to inaccurate diagnostic profiles.',
      solution:
        'Progressive disclosure typography, ambient micro-animations, and asynchronous medical records synchronization built with WCAG AAA contrast guarantees.',
      techStack: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'HL7 FHIR API', 'Radix UI'],
      lighthouseScore: { performance: 100, accessibility: 100, seo: 100 }
    }
  },
  {
    id: 'table-42',
    caseNumber: '02 / Concept Case',
    category: 'hospitality',
    categoryBadge: 'Hospitality & Dining',
    title: 'Table 42 & Wine Cellar',
    description:
      'Deep charcoal and amber photography, custom typography pairings, interactive sommelier cellar archive, and frictionless OpenTable booking integration. Evoking the moody intimacy of candlelit private dining.',
    domainUrl: 'table42-cellar.com/reserve/tasting-menu',
    scopeDeliverables: [
      'Digital Editorial',
      'Reservations System',
      'Seasonal Menu Architecture',
      'Wine Cellar Index'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUv_LLXh6LEW1LEnRS4ecmI1V0wTNDggGJLMzWWYuPUqsvOIrJzCzta4yhKzrw3irkfrRArvvko0w6Bdm3aLgUXeGIdanYHiw8UfWAasMADiC2Cl9pxUo9niFYaOM3gI-QQNyjQ6dwHheDkSn4YMT-f0fQVBpuz0Uv567hN5D48Vfr_Tn-uBRPNxxJNY_jRu-PrZZMxKT2ebKCH3Ae-a_FgjBXbr26dnXe-O9bVBuaduL7iuDODXCN',
    imageAlt:
      'Intimate dark atmosphere fine dining setting with rich dark charcoal timber walls, amber candlelight casting dramatic shadows on crystal glassware and decanted ruby red wine, hand-crafted ceramic plate with culinary gastronomy art. High contrast editorial food and hospitality photography, opulent yet austere.',
    bannerTag: 'Sommelier Interaction Layer',
    bannerTitle: 'Seamless table reservations linked to bespoke multi-course wine pairings.',
    bottomLeftLabel: 'DYNAMIC SEAT CONVERTER',
    bottomRightValue: '0.6S TIME TO CHECKOUT',
    layoutVariant: 'image-right',
    theme: 'dark',
    specialMetric: {
      label: 'Wine Reserve Database',
      value: '840+ Curated Bottles',
      icon: 'wine_bar'
    },
    deepDive: {
      summary:
        'A digital culinary proscenium for a Michelin-starred private cellar. The interactive sommelier interface allows diners to curate bespoke vintage flights synchronously with reservation confirmations.',
      challenge:
        'Standard booking widgets fail to capture the sensory atmosphere of high-end gastronomy, resulting in commoditized perceptions and lower average order value.',
      solution:
        'Cinematic dark-mode typography, real-time live cellar cellar-level inventory streaming, and immersive dish pairing previews.',
      techStack: ['Astro', 'TypeScript', 'WebAudio API', 'Stripe Terminal', 'SevenRooms API'],
      lighthouseScore: { performance: 99, accessibility: 100, seo: 98 }
    }
  },
  {
    id: 'vance-sterling',
    caseNumber: '03 / Concept Case',
    category: 'legal',
    categoryBadge: 'Legal & Advisory',
    title: 'Vance & Sterling LLP',
    description:
      'Authoritative editorial layout, crisp monochromatic contrast, subtle electric blue accents, and deep focus on practice precedent. Engineered to command respect and project relentless capability.',
    domainUrl: 'vancesterling.law/precedents/cross-border-arbitration',
    scopeDeliverables: [
      'Full Redesign',
      'Practice Area Guides',
      'Partner Directory CMS',
      'Regulatory Search'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLpuyPMvx1LOdAsUlJVQYRwgDcm3uwKSzeTMx2CdeJLn13b8DXA0VhjvCfpZosjz40K-dnDy4nCBMMswzJLyRtikor0SHbzgnXyftYtJ2a_VTDtrPymycidOWFW6tzX1aDk4jwAGyHjbkHgIVlK6wqe4nnbnHlaKqGCNRJyCbG8SQ6hooROTnMbLFcnViErDOJmMAN1pYbDcYfhZngobsP0D7Ik_fBKoH92h75oCAEFvpDv-tcgESd',
    imageAlt:
      'Monochromatic architectural photography of a prestigious high-rise law firm library in London, dark oak book stacks, monolithic marble conference table with crisp documents, floor-to-ceiling glass windows overlooking rainy city skyline. Precision lighting, high-contrast black and white with subtle slate blue reflections.',
    bannerTag: 'Authoritative Practice Ledger',
    bannerTitle: 'Decades of international corporate litigation framed through editorial precision.',
    bottomLeftLabel: 'EDITORIAL PRECEDENT ARCHIVE',
    bottomRightValue: '2,400+ CITATIONS ACCESSIBLE',
    layoutVariant: 'image-large-left',
    theme: 'light',
    specialMetric: {
      label: 'Global Jurisdictions',
      value: '14 Practice Corridors'
    },
    deepDive: {
      summary:
        'For high-stakes commercial litigation and cross-border finance, digital authority directly impacts mandate acquisition. We engineered a searchable precedent dossier that showcases landmark rulings with academic rigor.',
      challenge:
        'Law firm websites are notoriously verbose, cluttered with dense partner bios, and difficult to navigate on mobile devices.',
      solution:
        'Swiss typography grid system, instant client conflict triage filter, and searchable precedent index powered by algorithmic citation cross-linking.',
      techStack: ['React', 'Next.js', 'Typesense Search', 'Tailwind CSS', 'Sanity CMS'],
      lighthouseScore: { performance: 100, accessibility: 100, seo: 100 }
    }
  },
  {
    id: 'nordic-haven',
    caseNumber: '04 / Concept Case',
    category: 'realestate',
    categoryBadge: 'Architecture & Real Estate',
    title: 'Nordic Haven Estates',
    description:
      'Cinematic panoramic viewport framing, minimalist architectural grid, floorplan interactives, and high-contrast typography. Celebrating the harmony of brutalist concrete and sub-arctic landscape.',
    domainUrl: 'nordichaven.estate/residences/fjord-villa-03',
    scopeDeliverables: [
      'Architecture Portfolio',
      'Virtual Spatial Tours',
      'Spec Sheet System',
      'Floorplan Vector Engine'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnv_CbYjgzYNAuJsMllEI9vKAzDSfDWPTztkTsqa04-hZfaPUgmnBps5NvWREyw-pIXA2QUgHXlH-zDRUWXOPLcRQaMYhmk45dTxPNtBeqhTpmZsL_JetFCrEokUioN5Pbm1kQJilp5ZgwidOxNFpMpZ_MhUsf6GB7rqKlWI17KlfIF6nHDxW_tLTsclSjHduy-sY0U0MJqMc1ukL-vuWsX5HGrDlvEmIn5i_sM0hc1EJHMw2Bvj-x',
    imageAlt:
      'Ultra luxury modern Nordic villa cantilevered over a misty Norwegian fjord at dusk, warm interior glow from expansive floor-to-ceiling glass, textured poured concrete walls, minimalist scandinavian pine deck overlooking tranquil mirror-like waters and pine forests. Cinematic architectural photography.',
    bannerTag: 'Panoramic Spatial Engine',
    bannerTitle: 'Framing estate architecture with cinematic gravitas and precision environmental data.',
    bottomLeftLabel: 'REAL-TIME SOLAR ORIENTATION SIMULATOR',
    bottomRightValue: '4K PANORAMA STREAMING',
    layoutVariant: 'image-large-right',
    theme: 'light',
    specialMetric: {
      label: 'Interactive Blueprint Spec',
      value: 'Precision CAD to WebGL pipeline',
      icon: 'architecture'
    },
    deepDive: {
      summary:
        'Nordic Haven showcases multi-million dollar cantilevered fjord residences to global buyers. We constructed a spatial web experience featuring simulated sun angles throughout Norwegian seasonal solstices.',
      challenge:
        'Conveying the sheer monumental scale and atmospheric presence of sub-arctic architectural works without sluggish render lag.',
      solution:
        'GPU-accelerated vector floorplans, dynamic lighting simulation, and ultra-high-definition panoramic tile streaming with zero layout shift.',
      techStack: ['Three.js', 'WebGL', 'Tailwind CSS', 'Vite', 'GeoJSON Solar Model'],
      lighthouseScore: { performance: 98, accessibility: 100, seo: 99 }
    }
  },
  {
    id: 'kanso-ceramics',
    caseNumber: '05 / Concept Case',
    category: 'retail',
    categoryBadge: 'Retail & Commerce',
    title: 'Kanso Ceramics',
    description:
      'Earthy textured backgrounds, oversized product imagery, artisan stories, and frictionless one-page checkout. Transforming delicate craft objects into an irresistible, immersive digital shopping ritual.',
    domainUrl: 'kansoceramics.jp/collection/wabi-vessels',
    scopeDeliverables: [
      'Boutique Shop',
      'Cart UX Re-engineering',
      'Editorial Lookbook',
      'Artisan Bio CMS'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB66bYpdFH7oHQyNHZnJYyR3BwGsR3FNOs6RQOBZ549EUJWfY-f6Y22AGilZGGXp_wFKNoX1wzHlmoRnW8E6lvI4pvNAi8dUmPhldANfkb25xrXmxrkwk9tkb2AjBqbeJl5n28nElkvmzuHwMZGWKqliiFUfE4PfD8tJz_S-EKZ7nZKmpfjGtF807nsVmHVc8rOe8AHlZwRaChs5on6rYyR3Y3WL354Qkix8Lm5NeaD5V1euXW7hF2I',
    imageAlt:
      'Artisanal studio ceramics workshop with rustic stoneware bowls, textured glazed tea cups and raku vases resting on a weathered linen tablecloth. Soft natural raking daylight, raw wabi-sabi textures, tactile clay glazes in oatmeal, terracotta and charcoal. Editorial Japanese craft and luxury retail photography.',
    bannerTag: 'Tactile Cart Experience',
    bannerTitle: 'Bridging centuries-old artisanal pottery with modern headless commerce.',
    bottomLeftLabel: 'SUB-SECOND ONE-PAGE CHECKOUT',
    bottomRightValue: 'HEADLESS SHOPIFY ENGINE',
    layoutVariant: 'image-left',
    theme: 'warm',
    specialMetric: {
      label: 'Cart Conversion Impact',
      value: '+44% Checkout Completion',
      badge: '↗'
    },
    deepDive: {
      summary:
        'Kanso represents 8th-generation Japanese wood-fired ceramic masters. We built an artisanal digital flagship honoring the philosophy of wabi-sabi while operating on high-velocity headless commerce rails.',
      challenge:
        'Direct-to-consumer artisanal shops often suffer from disjointed third-party checkout flows that kill high-ticket emotional impulse purchases.',
      solution:
        'Sub-second drawer cart, tactile tactile clay glaze zoom inspection, and multi-currency global shipping calculation in real time.',
      techStack: ['Shopify Storefront API', 'React 19', 'Tailwind CSS', 'Stripe Elements', 'Cloudflare Workers'],
      lighthouseScore: { performance: 100, accessibility: 100, seo: 100 }
    }
  },
  {
    id: 'soren-lindqvist',
    caseNumber: '06 / Concept Case',
    category: 'personal',
    categoryBadge: 'Personal Brand',
    title: 'Soren Lindqvist',
    subtitle: 'Strategy Director & Board Advisor',
    description:
      'Swiss-inspired asymmetric grid, provocative typography, reading mode toggle, and concise case studies. Crafted for an intellectual heavyweight demanding a web presence as sharp as their counsel.',
    domainUrl: 'sorenlindqvist.com/essays/organizational-decay',
    scopeDeliverables: [
      'Thought Leadership Hub',
      'Keynote Speaking Portfolio',
      'Longform Essays CMS',
      'Dynamic Reader Mode'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0vVGDqwfAy30IyqliLYjcCtuqXai5vP0X_TBnXNG4Si_16hxoqdC2dtjhXr3lwhA-Zfekx7sd_8YtdEJtSu4q2bPAf7AK6wkXD46FiYHwqOEv-ADxKop4hRLi4QbXJNY3ugck_wrEpWfTePjY3u2JL2U1FHHdwpjVqN20DlEc0HJzq7IEPyBjIktvERmcSMZB6RP965cy2j-ucG0zgoJGkaYgzMMx_FUKG85popPETLgRbqNWl9aJ',
    imageAlt:
      'Monochrome black and white portrait of a thoughtful Scandinavian creative director in a minimal black turtleneck sitting in an architectural modernist studio with high concrete ceilings, stark dramatic shadowplay, holding a design monograph. Magazine editorial photography style with rich grain.',
    bannerTag: 'Swiss Typographic Framework',
    bannerTitle: 'Stripping away digital noise to let strategic thought leadership lead.',
    bottomLeftLabel: 'EDITORIAL PROSE WEIGHT OPTIMIZED',
    bottomRightValue: '100% LIGHTHOUSE SCORE',
    layoutVariant: 'image-right',
    theme: 'light',
    specialMetric: {
      label: 'Editorial Reader',
      value: 'Distraction-free Typography Toggle',
      badge: 'LIVE SPEC',
      icon: 'menu_book'
    },
    deepDive: {
      summary:
        'A monograph website for a trusted board advisor to Fortune 50 enterprises. Designed with uncompromising Swiss typography discipline, customizable reader modes, and zero extraneous marketing fluff.',
      challenge:
        'Executive advisors struggle to showcase longform intellectual property without looking like academic blogs or sterile corporate pages.',
      solution:
        'Asymmetric grid layout, instantaneous distraction-free reading mode with custom serif/sans toggle, and curated monograph downloads.',
      techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'Framer Motion', 'Web Typography Standards'],
      lighthouseScore: { performance: 100, accessibility: 100, seo: 100 }
    }
  }
];

export const HOME_SELECTED_WORKS = [
  {
    id: 'atelier-solis',
    categoryTag: 'Spatial Practice · Zurich',
    type: 'Concept Study · Web Architecture',
    status: 'Live Experience',
    title: 'Atelier Solis',
    description:
      'A digital monograph celebrating monumental architecture through full-viewport spatial sequencing, custom typesetting, and an ultra-lean 0.8s time-to-interactive payload.',
    year: 'Archived 2024',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNjkvMLb6vdOXnxgFG9URshifgLOBs7RNBc45rwWgMcBS4yIZIStq05hjP6nsBE_Fgvf3PxnRTu3oeJ0V9Bp-kt54XxzDX7_SCLiXxPigTbe69IvISYXSxpcCx1nZwWNzbigAy_BUPWEdBLNFYkjwM0yiWa_GWr7kqiYsxNmj6SPCgAysxVIbuYAxt4jNQgcnGtLvWXbFwY_AohGBrKxK4ajzbp8INNAUt5UtlygTyxTprJpqeBbgU',
    imageAlt:
      'Monolithic architectural concrete pavilion exterior with reflecting water pool, minimalist landscape design, dramatic dusk natural lighting, brutalist elegance.'
  },
  {
    id: 'komorebi-roasters',
    categoryTag: 'Specialty Commerce · Kyoto',
    type: 'E-Commerce & Brand Narrative',
    title: 'Komorebi Roasters',
    description:
      'Direct-trade single origin subscription engine engineered with headless Shopify, tailored grind selectors, and sensory tasting note wheels.',
    year: 'Archived 2024',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhUFjr5ujgnqbfAjPO9WdeyqodHKdf9vZOWtj9d1uuO6Aemo_deDqKgHlQdn3junfK2I49sqVNUDEUPxiWwN2E8Y8vBdyGmX-hTDGm1TnKzXeNtQHP3Wh3FiG0pkhFd8i5kJt3oD2-abI0RKpSQAcP7vLyE1oHIfQeADda3BZwIDasclyTZXbTdJncSW2BmIy094QTCHosSC5ZgV9QXxehQ4Qtr42LQACpcDF6ofOPXgfffBV-xCAP',
    imageAlt:
      'Dark roast single-origin coffee beans tumbling into a precision cast brass cupping bowl, warm steam rising, deep dark charcoal tones and sensory contrast.'
  },
  {
    id: 'dr-julian-mercer',
    categoryTag: 'Neurology Clinic · Vancouver',
    type: 'Clinical Flagship & Intake',
    title: 'Dr. Julian Mercer',
    description:
      'Restoring empathy to specialized clinical neurology with a frictionless digital triage intake portal and ADA-compliant typography.',
    year: 'Archived 2025',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzTWLvEqVPvagBqwIqIFt3aW7AinUQciozRoxf1VPDUap1GkLfK4A1i9iRSVnVMKEhrvBk8XUBPlesLD527fWqLwT-2aqDPP-e2Fe3ORXxhf5bPT5oMsHqaUpfC4L_vwpdVpco7uqHHwDKMt_4hhGTmOgkvI0AnuGQwGnxoUwX46U9lC6WY5ZS6tht6vgkSTQ5JCMBfxSvP-PspnIjRqLVXRPyDezMlvGX_Nsp9cbf9u2yjUOtKBkm',
    imageAlt:
      'Calming serene medical clinic consultation room with expansive windows looking onto a peaceful Japanese zen moss garden, warm white wood accents and clean light.'
  }
];

export const HOME_BROWSER_WINDOWS = [
  {
    id: 'dr-elena-vance',
    title: 'Dr. Elena Vance',
    tag: 'Dermatology · Ginza',
    badge: 'Restorative Protocol',
    headline: 'Evidence-led skin architecture.',
    copy: 'Bespoke procedural dermatology respecting biological equilibrium and cellular longevity.',
    url: 'drelenance.com/practice',
    ctaText: 'Consultation Request ↗',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRMw_3Ax3ZpevqsqFVhChnhlUwVFzvAj27SeOBbfFpA4pHXbhYPRa7YhfTbiguZDwJwpNejX2kU7tn7M16ZZ8IPtLE2v0MeHNOB4Jg5fGAB3hRk9PfIpi5VglOfTTKuEHIb15GLSlu_tnEx9JmcvqAMprrwL_e_0re_YmRuN0vLl0_tkbJJfgwufGayyv2wdApGTufFJQCWVngmlj6mVeKsdCGzSYf-el3svYEUtVn6QR_PhJOGywq',
    imageAlt:
      'Minimalist high-end dermatology clinical sanctuary with warm travertine stone, soft indirect daylight, frosted architectural glass, and medicinal glass vials on an oak plinth, warm natural ivory tones.',
    specs: ['01 Private Consultation', '02 Diagnostic Biopsy', '03 Light Therapy']
  },
  {
    id: 'maison-noire',
    title: 'Maison Noire',
    tag: 'Fire · Cellar',
    badge: 'Autumn Omakase',
    headline: 'Seasonal embers, untamed fermentations.',
    copy: 'Eight courses dictated daily by mountain foraged botanical harvests and coastal catches.',
    url: 'maisonnoire.restaurant',
    ctaText: 'Reserve Counter ↗',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNNlk0hgrD48xbadD4idMRt8IpLYyDRTzBJzGfPDBrKK7acAUSIzJ2Q1SvAvLI7QkwAzyE_jANblGwA-4tLqNTUTAQGlTxl2_4rNFjEUXA4BygJbKGHpu6rJ0uFTuk72OnTxZIHLYFAMGzqdHrsUXiNuDKuhqtz68LKqj0ph9XSaj88RgvbZBLBi6sgxGxTWEUwBV8VJ4C7yNgsko-2SAJz5i93mcZz5Zecf4MoP7zplK7GSMb2uw9',
    imageAlt:
      'Dark moody fine dining table with open binchotan charcoal grill embers glow, artisanal hand-thrown ceramic tableware, natural biodynamic wine in crystal glass, cinematic moody shadows.',
    specs: ['12 Seats Only', 'Daily 18:00 / 20:30', 'Cellar Pairing'],
    theme: 'dark'
  },
  {
    id: 'vanguard-hale',
    title: 'Vanguard & Hale',
    tag: 'London · Zurich',
    badge: 'Legal Mandates',
    headline: 'Strategic counsel for complex cross-border liquidity and governance.',
    copy: 'Advising sovereign funds, tier-one family offices, and emerging technology pioneers through decisive legal clarity.',
    url: 'vanguardhale.legal/practice',
    mandates: [
      { label: '01 Mandate', name: 'Cross-Border M&A' },
      { label: '02 Defense', name: 'Regulatory Inquiry' },
      { label: '03 Trust', name: 'Private Capital' }
    ]
  },
  {
    id: 'aura-objects',
    title: 'Aura Objects',
    tag: 'Shop Edition 04',
    priceTag: 'Kuro Sand Vessel — $190',
    copy: 'Direct craft from Shigaraki kilns.',
    url: 'auraobjects.store',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhdAXss3z1n3gO0JkVD29BQ0URlU9S2ubRcgunguMxNGxOboCUjOkvyQZwiNyI4LQrGrrR_r67vmQlLcCRo2W1AsMDgkmXeGxMCujaatpSaNoHIgWKc4wiKelBwGPR0KbtdFrWpPsyX-HkN6fRQm8dCRuCPFnqHV1e761rGxxVgpz0okP6InEXd07-EZaNNM9FyNPEU8glJJDCcucjr170t0ATxqBHCMD1wiiNJgx8sUbfXAWHhHeg',
    imageAlt:
      'Refined Scandinavian stoneware tea kettle and brushed bronze cutlery arranged on a raw sanded lime-washed oak shelf, crisp natural shadows, architectural editorial composition.'
  }
];

export const STUDIO_BELIEFS = [
  {
    num: '01',
    title: 'Every business has a story worth telling',
    body: 'Your work has nuance and character. A generic template strips that away. We uncover what makes you distinct and let it lead the digital experience.',
    tag: 'Distinct Identity',
    icon: 'auto_stories'
  },
  {
    num: '02',
    title: 'Good design should make things clearer',
    body: 'We design to reduce friction, illuminate value, and help your visitors find what they need effortlessly.',
    tag: 'Cognitive Ease',
    icon: 'visibility'
  },
  {
    num: '03',
    title: 'Details matter',
    body: 'From micro-copy and font kerning to mobile tap targets and load speed, the subtle details compound into a perception of unmistakable quality.',
    tag: 'Tactile Rigor',
    icon: 'tune'
  },
  {
    num: '04',
    title: 'Collaboration beats guesswork',
    body: "We don't vanish for weeks and return with a rigid reveal. We partner with you through an open, transparent, iterative dialogue.",
    tag: 'Shared Discovery',
    icon: 'handshake'
  },
  {
    num: '05',
    title: 'Technology should serve people',
    body: 'We build with lightweight, dependable technologies that are easy to manage and accessible to everyone on any device. Digital experiences should empower users, not create technical debt.',
    tag: 'Sustainable Systems',
    icon: 'devices',
    span: 2
  }
];
