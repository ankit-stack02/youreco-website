import React from 'react';
import { HOME_SELECTED_WORKS, HOME_BROWSER_WINDOWS } from '../data/projectsData';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onFilterWorkCategory: (category: string) => void;
  onSelectProjectById?: (projectId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onFilterWorkCategory,
  onSelectProjectById
}) => {
  const handleStartProject = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreWork = () => {
    onNavigate('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectorClick = (category: string) => {
    onFilterWorkCategory(category);
    onNavigate('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1 & 2. HERO COMPOSITION */}
      <section className="relative w-full px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg pb-space-xl overflow-hidden">
        {/* Ambient Backdrop Gradient & Subtle Architectural Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#1b1c1a_0.75px,transparent_0.75px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-secondary-fixed/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-surface-variant/70 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Editorial Header Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-8 flex flex-col space-y-space-md">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface-container-low border-0 shadow-sm self-start">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface">
                  Independent Web Design Studio
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-extrabold tracking-tight">
                Good businesses deserve better websites.
              </h1>

              <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl leading-relaxed">
                We design thoughtful, distinctive websites for people building something of their own. From independent professionals to ambitious businesses, we turn ideas into digital experiences that feel unmistakably yours.
              </p>

              <div className="pt-space-xs flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm sm:gap-space-md">
                <button
                  type="button"
                  onClick={handleStartProject}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-on-primary font-label-ui text-label-ui font-semibold shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-200 group cursor-pointer"
                >
                  <span>Start a Project</span>
                  <span className="inline-block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleExploreWork}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-ui text-label-ui font-medium transition-colors shadow-sm cursor-pointer"
                >
                  Explore Our Work
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="material-symbols-outlined text-[16px] text-secondary-container">
                  verified
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant italic">
                  Made with intention. Built around your business.
                </span>
              </div>
            </div>

            {/* Studio Status Widget */}
            <div className="lg:col-span-4 lg:pt-8 flex flex-col items-start lg:items-end">
              <div className="w-full max-w-xs p-5 bg-surface-container-lowest rounded-xl shadow-md space-y-3">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                    Production Capacity
                  </span>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps font-bold">
                    Active
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between font-label-ui text-label-ui text-on-surface font-semibold">
                    <span>Q2 Allocation</span>
                    <span className="text-secondary-container">1 Spot Available</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-container rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs leading-relaxed">
                  Direct engagements with founders and practice leaders. Based in Tokyo, shipping worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* 2. HERO VISUAL: Multi-Window Architectural Display */}
          <div className="mt-space-xl relative w-full pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative">
              {/* Window 1: Medical Practice (Ivory & Clinical Restraint) */}
              <div 
                onClick={() => onSelectProjectById && onSelectProjectById('kallos-health')}
                className="lg:col-span-6 bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Browser Header */}
                <div className="h-10 bg-surface-container-low px-4 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-error/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim" />
                    <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-surface text-on-surface-variant font-label-caps text-label-caps tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[12px] text-outline">lock</span>
                    drelenance.com/practice
                  </div>
                  <div className="w-4" />
                </div>

                {/* Mockup Content */}
                <div className="p-6 md:p-8 bg-surface-bright flex flex-col justify-between min-h-[340px]">
                  <div className="flex items-center justify-between pb-4">
                    <div className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
                      Dr. Elena Vance
                    </div>
                    <span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest font-bold">
                      Dermatology · Ginza
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center py-4">
                    <div className="space-y-3">
                      <div className="inline-block px-2 py-0.5 bg-surface-container text-on-surface-variant font-label-caps text-label-caps uppercase">
                        Restorative Protocol
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold tracking-tight text-primary leading-tight">
                        Evidence-led skin architecture.
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Bespoke procedural dermatology respecting biological equilibrium and cellular longevity.
                      </p>
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-ui text-label-ui font-medium">
                          Consultation Request ↗
                        </span>
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden h-44 shadow-sm bg-surface-container">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Minimalist high-end dermatology clinical sanctuary"
                        src={HOME_BROWSER_WINDOWS[0].imageUrl}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 font-label-caps text-label-caps uppercase text-on-surface-variant">
                    <span>01 Private Consultation</span>
                    <span>02 Diagnostic Biopsy</span>
                    <span>03 Light Therapy</span>
                  </div>
                </div>
              </div>

              {/* Window 2: Sophisticated Restaurant (Dark Moody Charcoal) */}
              <div 
                onClick={() => onSelectProjectById && onSelectProjectById('table-42')}
                className="lg:col-span-6 bg-tertiary rounded-xl shadow-xl overflow-hidden flex flex-col text-on-tertiary transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Browser Header */}
                <div className="h-10 bg-tertiary-container px-4 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container/40" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-tertiary text-on-tertiary-container font-label-caps text-label-caps tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[12px] text-on-tertiary-container">lock</span>
                    maisonnoire.restaurant
                  </div>
                  <div className="w-4" />
                </div>

                {/* Mockup Content */}
                <div className="p-6 md:p-8 bg-tertiary flex flex-col justify-between min-h-[340px]">
                  <div className="flex items-center justify-between pb-4">
                    <div className="font-headline-sm text-headline-sm font-bold tracking-widest uppercase">
                      Maison Noire
                    </div>
                    <span className="font-label-caps text-label-caps uppercase text-secondary-fixed tracking-widest font-bold">
                      Fire · Cellar
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center py-4">
                    <div className="rounded-lg overflow-hidden h-44 shadow-inner bg-tertiary-container">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Dark moody fine dining table with open binchotan charcoal grill"
                        src={HOME_BROWSER_WINDOWS[1].imageUrl}
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
                        Autumn Omakase
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold tracking-tight leading-tight text-on-tertiary">
                        Seasonal embers, untamed fermentations.
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-tertiary-container">
                        Eight courses dictated daily by mountain foraged botanical harvests and coastal catches.
                      </p>
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-on-tertiary text-tertiary font-label-ui text-label-ui font-semibold">
                          Reserve Counter ↗
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 font-label-caps text-label-caps uppercase text-on-tertiary-container">
                    <span>12 Seats Only</span>
                    <span>Daily 18:00 / 20:30</span>
                    <span>Cellar Pairing</span>
                  </div>
                </div>
              </div>

              {/* Window 3: Contemporary Law Firm (Strategic Monochrome Counsel) */}
              <div 
                onClick={() => onSelectProjectById && onSelectProjectById('vance-sterling')}
                className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 lg:-mt-4 z-20 group cursor-pointer"
              >
                {/* Browser Header */}
                <div className="h-10 bg-surface-container-low px-4 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-surface text-on-surface-variant font-label-caps text-label-caps tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[12px] text-outline">lock</span>
                    vanguardhale.legal/practice
                  </div>
                  <div className="w-4" />
                </div>

                {/* Mockup Content */}
                <div className="p-6 md:p-8 bg-surface-container-lowest flex flex-col justify-between">
                  <div className="flex items-baseline justify-between pb-3">
                    <div className="font-headline-md text-headline-md font-extrabold tracking-tight text-primary">
                      Vanguard &amp; Hale
                    </div>
                    <div className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">
                      London · Zurich
                    </div>
                  </div>

                  <div className="space-y-4 py-2">
                    <div className="max-w-xl">
                      <h4 className="font-headline-lg text-headline-lg font-bold text-on-surface leading-tight">
                        Strategic counsel for complex cross-border liquidity and governance.
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                        Advising sovereign funds, tier-one family offices, and emerging technology pioneers through decisive legal clarity.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3 bg-surface-container-low rounded-lg">
                        <span className="font-label-caps text-label-caps uppercase text-secondary-container font-semibold">
                          01 Mandate
                        </span>
                        <div className="font-label-ui text-label-ui font-semibold text-primary mt-1">
                          Cross-Border M&amp;A
                        </div>
                      </div>
                      <div className="p-3 bg-surface-container-low rounded-lg">
                        <span className="font-label-caps text-label-caps uppercase text-secondary-container font-semibold">
                          02 Defense
                        </span>
                        <div className="font-label-ui text-label-ui font-semibold text-primary mt-1">
                          Regulatory Inquiry
                        </div>
                      </div>
                      <div className="p-3 bg-surface-container-low rounded-lg">
                        <span className="font-label-caps text-label-caps uppercase text-secondary-container font-semibold">
                          03 Trust
                        </span>
                        <div className="font-label-ui text-label-ui font-semibold text-primary mt-1">
                          Private Capital
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Window 4: Modern Lifestyle Retail (Considered Homeware) */}
              <div 
                onClick={() => onSelectProjectById && onSelectProjectById('kanso-ceramics')}
                className="lg:col-span-5 bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 lg:-mt-4 group cursor-pointer"
              >
                {/* Browser Header */}
                <div className="h-10 bg-surface-container-low px-4 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-surface text-on-surface-variant font-label-caps text-label-caps tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[12px] text-outline">lock</span>
                    auraobjects.store
                  </div>
                  <div className="w-4" />
                </div>

                {/* Mockup Content */}
                <div className="p-6 bg-surface-container-low flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
                      Aura Objects
                    </span>
                    <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary-container font-bold">
                      Shop Edition 04
                    </span>
                  </div>

                  <div className="relative rounded-lg overflow-hidden my-4 h-40 bg-surface-container-lowest">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Refined Scandinavian stoneware tea kettle"
                      src={HOME_BROWSER_WINDOWS[3].imageUrl}
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-surface/90 backdrop-blur-md font-label-caps text-label-caps text-primary uppercase font-bold">
                      Kuro Sand Vessel — $190
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Direct craft from Shigaraki kilns.
                    </span>
                    <span className="inline-flex items-center gap-1 font-label-ui text-label-ui font-semibold text-secondary-container">
                      Add ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK PREVIEW */}
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
            <div className="space-y-space-xs">
              <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-container font-bold">
                Selected Work (2024–2025)
              </p>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-bold tracking-tight">
                Different businesses. Different stories.
              </h2>
            </div>
            <button
              type="button"
              onClick={handleExploreWork}
              className="inline-flex items-center gap-2 font-label-ui text-label-ui font-semibold text-primary hover:text-secondary-container transition-colors group cursor-pointer"
            >
              <span>View All 18 Selected Works</span>
              <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
            </button>
          </div>

          {/* Bespoke Project Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-stretch">
            {/* Project 1: Large Editorial Spread (7 Cols) */}
            <article 
              onClick={() => onSelectProjectById && onSelectProjectById('nordic-haven')}
              className="md:col-span-7 bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative w-full h-[360px] md:h-[440px] bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt={HOME_SELECTED_WORKS[0].imageAlt}
                  src={HOME_SELECTED_WORKS[0].imageUrl}
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-surface/90 backdrop-blur-md font-label-caps text-label-caps uppercase tracking-widest text-primary font-semibold">
                  {HOME_SELECTED_WORKS[0].categoryTag}
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-wider font-semibold">
                      {HOME_SELECTED_WORKS[0].type}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant" />
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      {HOME_SELECTED_WORKS[0].status}
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">
                    {HOME_SELECTED_WORKS[0].title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
                    {HOME_SELECTED_WORKS[0].description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                    {HOME_SELECTED_WORKS[0].year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container text-on-surface font-label-ui text-label-ui font-medium group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span>View Project</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>
            </article>

            {/* Project 2 & 3: Stacked Column (5 Cols) */}
            <div className="md:col-span-5 flex flex-col gap-gutter-desktop">
              {/* Project 2: Komorebi Roasters */}
              <article 
                onClick={() => onSelectProjectById && onSelectProjectById('kanso-ceramics')}
                className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group flex-1 cursor-pointer"
              >
                <div className="relative w-full h-[220px] bg-tertiary overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt={HOME_SELECTED_WORKS[1].imageAlt}
                    src={HOME_SELECTED_WORKS[1].imageUrl}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-tertiary/90 backdrop-blur-md font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary font-semibold">
                    {HOME_SELECTED_WORKS[1].categoryTag}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
                  <div className="space-y-1">
                    <span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-wider font-semibold">
                      {HOME_SELECTED_WORKS[1].type}
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
                      {HOME_SELECTED_WORKS[1].title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {HOME_SELECTED_WORKS[1].description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                      {HOME_SELECTED_WORKS[1].year}
                    </span>
                    <span className="inline-flex items-center gap-1 font-label-ui text-label-ui font-medium text-primary group-hover:text-secondary-container transition-colors">
                      <span>View Project ↗</span>
                    </span>
                  </div>
                </div>
              </article>

              {/* Project 3: Dr. Julian Mercer */}
              <article 
                onClick={() => onSelectProjectById && onSelectProjectById('kallos-health')}
                className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group flex-1 cursor-pointer"
              >
                <div className="relative w-full h-[220px] bg-surface-container-high overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt={HOME_SELECTED_WORKS[2].imageAlt}
                    src={HOME_SELECTED_WORKS[2].imageUrl}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-surface/90 backdrop-blur-md font-label-caps text-label-caps uppercase tracking-widest text-primary font-semibold">
                    {HOME_SELECTED_WORKS[2].categoryTag}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
                  <div className="space-y-1">
                    <span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-wider font-semibold">
                      {HOME_SELECTED_WORKS[2].type}
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
                      {HOME_SELECTED_WORKS[2].title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {HOME_SELECTED_WORKS[2].description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                      {HOME_SELECTED_WORKS[2].year}
                    </span>
                    <span className="inline-flex items-center gap-1 font-label-ui text-label-ui font-medium text-primary group-hover:text-secondary-container transition-colors">
                      <span>View Project ↗</span>
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Context Note Callout */}
          <div className="mt-space-lg p-5 rounded-lg bg-surface-container-highest/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container">
                auto_awesome
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                All showcase items are custom concept directions crafted to demonstrate industry-specific versatility and technical discipline.
              </p>
            </div>
            <button
              type="button"
              onClick={handleExploreWork}
              className="shrink-0 font-label-ui text-label-ui font-semibold text-primary hover:text-secondary-container transition-colors cursor-pointer"
            >
              Browse Complete Archive (18) ↗
            </button>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl space-y-space-xs pb-space-lg">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-container font-bold">
              Capabilities · How We Partner
            </p>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-bold tracking-tight">
              From first idea to a website that feels right.
            </h2>
            <p className="font-body-xl text-body-xl text-on-surface-variant pt-2">
              We avoid bloat and templated formulas. Every project is scoped with precision and designed bespoke.
            </p>
          </div>

          {/* Capabilities Grid (6 Cards Bento Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div 
              onClick={() => onNavigate('services')}
              className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">design_services</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary-container font-semibold">
                    01 · Creative Direction
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-primary">
                    Website Design
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Custom art direction, responsive layout systems, expressive typography, and bespoke design systems that capture your exact brand tone.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-surface-variant/40 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center justify-between">
                <span>Figma · Tokens · System</span>
                <span className="material-symbols-outlined text-[16px] text-secondary-container">check_circle</span>
              </div>
            </div>

            {/* Service 2 */}
            <div 
              onClick={() => onNavigate('services')}
              className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">terminal</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary-container font-semibold">
                    02 · Engineering
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-primary">
                    Website Development
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Clean semantic code, sub-second load times, flawless mobile touch gestures, and intuitive headless CMS integrations you can actually update.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-surface-variant/40 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center justify-between">
                <span>Next.js · Astro · Sanity</span>
                <span className="material-symbols-outlined text-[16px] text-secondary-container">check_circle</span>
              </div>
            </div>

            {/* Service 3 */}
            <div 
              onClick={() => onNavigate('services')}
              className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">apartment</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary-container font-semibold">
                    03 · High Trust
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-primary">
                    Business Websites
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Authoritative online flagships engineered specifically for doctors, lawyers, specialized advisory consultants, and boutique practices.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-surface-variant/40 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center justify-between">
                <span>Triage · Credentialing · Trust</span>
                <span className="material-symbols-outlined text-[16px] text-secondary-container">check_circle</span>
              </div>
            </div>

            {/* Service 4 */}
            <div 
              onClick={() => onNavigate('services')}
              className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">ads_click</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary-container font-semibold">
                    04 · Focused Outcomes
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-primary">
                    Landing Pages
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    High-converting campaign, cohort enrollment, and flagship product launch single-pages designed with surgical narrative rhythm.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-surface-variant/40 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center justify-between">
                <span>Launch · Product · Conversion</span>
                <span className="material-symbols-outlined text-[16px] text-secondary-container">check_circle</span>
              </div>
            </div>

            {/* Service 5 */}
            <div 
              onClick={() => onNavigate('services')}
              className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">shopping_bag</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary-container font-semibold">
                    05 · Digital Retail
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-primary">
                    E-commerce
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Boutique shopping experiences designed around tactile product discovery, seamless checkout flows, and customer retention.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-surface-variant/40 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center justify-between">
                <span>Shopify · Custom Cart · Global</span>
                <span className="material-symbols-outlined text-[16px] text-secondary-container">check_circle</span>
              </div>
            </div>

            {/* Service 6 */}
            <div 
              onClick={() => onNavigate('services')}
              className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">refresh</span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary-container font-semibold">
                    06 · Evolution
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-primary">
                    Website Redesign
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Elevating established businesses burdened by dated digital presences into refined, contemporary market leaders.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-surface-variant/40 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center justify-between">
                <span>Audit · Restructure · Relaunch</span>
                <span className="material-symbols-outlined text-[16px] text-secondary-container">check_circle</span>
              </div>
            </div>
          </div>

          {/* CTA Footer Link */}
          <div className="mt-space-lg flex justify-start">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 font-label-ui text-label-ui font-semibold text-primary hover:text-secondary-container transition-colors group cursor-pointer"
            >
              <span>Explore Detailed Capabilities &amp; Pricing Structures</span>
              <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES PREVIEW */}
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 space-y-space-sm">
              <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-container font-bold">
                Deep Sector Understanding
              </p>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-bold tracking-tight">
                Your work is unique. Your website should be too.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                A medical practice demands empathetic clarity and frictionless appointment triage. A luxury hospitality venue thrives on sensory atmosphere and anticipatory hospitality. We design through the reality of how your customers actually make decisions.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-on-surface font-label-ui text-label-ui font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary-container" />
                  No off-the-shelf industry skins. Ever.
                </span>
              </div>
            </div>

            {/* Interactive Sector Chips Matrix */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div
                  onClick={() => handleSectorClick('healthcare')}
                  className="p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[22px]">
                      medical_services
                    </span>
                    <div>
                      <div className="font-label-ui text-label-ui font-bold text-primary">
                        Healthcare &amp; Medical
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Doctors, clinics, wellness
                      </div>
                    </div>
                  </div>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-secondary-container transition-colors">
                    ↗
                  </span>
                </div>

                <div
                  onClick={() => handleSectorClick('hospitality')}
                  className="p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[22px]">
                      restaurant
                    </span>
                    <div>
                      <div className="font-label-ui text-label-ui font-bold text-primary">
                        Hospitality &amp; Dining
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Chefs, wine bars, hotels
                      </div>
                    </div>
                  </div>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-secondary-container transition-colors">
                    ↗
                  </span>
                </div>

                <div
                  onClick={() => handleSectorClick('legal')}
                  className="p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[22px]">
                      gavel
                    </span>
                    <div>
                      <div className="font-label-ui text-label-ui font-bold text-primary">
                        Legal &amp; Advisory
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Attorneys, partners, tax
                      </div>
                    </div>
                  </div>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-secondary-container transition-colors">
                    ↗
                  </span>
                </div>

                <div
                  onClick={() => handleSectorClick('realestate')}
                  className="p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[22px]">
                      domain
                    </span>
                    <div>
                      <div className="font-label-ui text-label-ui font-bold text-primary">
                        High-End Real Estate
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Developments, brokerages
                      </div>
                    </div>
                  </div>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-secondary-container transition-colors">
                    ↗
                  </span>
                </div>

                <div
                  onClick={() => handleSectorClick('retail')}
                  className="p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[22px]">
                      storefront
                    </span>
                    <div>
                      <div className="font-label-ui text-label-ui font-bold text-primary">
                        Boutique Retail
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Curated goods, makers
                      </div>
                    </div>
                  </div>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-secondary-container transition-colors">
                    ↗
                  </span>
                </div>

                <div
                  onClick={() => handleSectorClick('personal')}
                  className="p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[22px]">
                      psychology
                    </span>
                    <div>
                      <div className="font-label-ui text-label-ui font-bold text-primary">
                        Independent Consultants
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Strategists, advisors
                      </div>
                    </div>
                  </div>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-secondary-container transition-colors">
                    ↗
                  </span>
                </div>

                <div
                  onClick={() => handleSectorClick('all')}
                  className="p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[22px]">
                      rocket_launch
                    </span>
                    <div>
                      <div className="font-label-ui text-label-ui font-bold text-primary">
                        Venture &amp; Startups
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Seed through Series B
                      </div>
                    </div>
                  </div>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-secondary-container transition-colors">
                    ↗
                  </span>
                </div>

                <div
                  onClick={() => handleSectorClick('all')}
                  className="p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[22px]">
                      museum
                    </span>
                    <div>
                      <div className="font-label-ui text-label-ui font-bold text-primary">
                        Education &amp; Culture
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Institutes, foundations
                      </div>
                    </div>
                  </div>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-secondary-container transition-colors">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STUDIO PHILOSOPHY (Intense Charcoal Immersion) */}
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl bg-[#000000] text-[#ffffff] relative overflow-hidden">
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            <div className="lg:col-span-5 space-y-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1b21] text-[#83838b] font-label-caps text-label-caps uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                Studio Manifesto
              </div>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold tracking-tight text-[#ffffff]">
                Not another template. A better way to show up online.
              </h2>
              <p className="font-body-xl text-body-xl text-[#83838b] leading-relaxed">
                Every business has its own character. We bring that character into the digital world through considered design, useful functionality, and a website made around the people it serves.
              </p>
              <div className="pt-4">
                <div className="p-6 rounded-xl bg-[#1a1b21]/60 border border-[#83838b]/20 space-y-3">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">
                    Quality Metric
                  </span>
                  <p className="font-headline-sm text-headline-sm font-semibold text-[#ffffff]">
                    “We don’t participate in pitch marathons. We work with a maximum of two clients at a time.”
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Pillars of Practice */}
            <div className="lg:col-span-7 flex flex-col space-y-6 pt-4 lg:pt-0">
              <div className="p-8 rounded-xl bg-[#1a1b21]/80 hover:bg-[#1a1b21] border border-[#83838b]/20 transition-colors duration-200 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-display-lg-mobile font-bold text-secondary-fixed">01</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-[#83838b]">
                    Design Ethos
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-[#ffffff]">
                  Purpose over decoration.
                </h3>
                <p className="font-body-md text-body-md text-[#83838b] leading-relaxed">
                  We do not add visual noise to disguise thin ideas. Every typographic decision, layout rhythm, and interactive cue exists to answer a client’s business priority and clarify their value.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-[#1a1b21]/80 hover:bg-[#1a1b21] border border-[#83838b]/20 transition-colors duration-200 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-display-lg-mobile font-bold text-secondary-fixed">02</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-[#83838b]">
                    Engineering Rigor
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-[#ffffff]">
                  Performance &amp; accessibility as first-class citizens.
                </h3>
                <p className="font-body-md text-body-md text-[#83838b] leading-relaxed">
                  A gorgeous site that stalls on a mobile connection is a failed investment. We engineer with lean web standards, semantic HTML, and rigorous WCAG AA compliance out of the box.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-[#1a1b21]/80 hover:bg-[#1a1b21] border border-[#83838b]/20 transition-colors duration-200 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-display-lg-mobile font-bold text-secondary-fixed">03</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-[#83838b]">
                    Partnership Model
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-[#ffffff]">
                  Direct communication with the makers.
                </h3>
                <p className="font-body-md text-body-md text-[#83838b] leading-relaxed">
                  No account directors, no games of telephone. When you brief our studio, you collaborate directly with the lead designers and senior engineers executing the craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL HIGH-CONTRAST ACTION CALLOUT */}
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl bg-surface-container">
        <div className="max-w-5xl mx-auto p-8 md:p-14 bg-surface-container-lowest rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg relative overflow-hidden">
          {/* Accent Line Indicator */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-container via-secondary-fixed to-secondary" />

          <div className="space-y-space-xs max-w-xl">
            <div className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-secondary-container font-bold">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              Now Booking Q2 &amp; Q3 2025
            </div>
            <h2 className="font-headline-lg text-headline-lg font-extrabold text-primary tracking-tight">
              Ready to make a better first impression?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We are currently booking projects for Q2 &amp; Q3. Tell us about your business, your timeline, and what you want your website to accomplish.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleStartProject}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-on-primary font-label-ui text-label-ui font-semibold shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-200 group cursor-pointer"
            >
              <span>Let’s Talk About Your Project</span>
              <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                ↗
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
