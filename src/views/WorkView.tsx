import React, { useState } from 'react';
import { ARCHIVE_PROJECTS } from '../data/projectsData';
import { ProjectCategory, ProjectItem } from '../types';

interface WorkViewProps {
  onNavigate: (path: string) => void;
  selectedCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({
  onNavigate,
  selectedCategory,
  onSelectCategory,
  onOpenCaseStudy
}) => {
  // Micro-interactive states for in-page elements
  const [activeThemeSwatch, setActiveThemeSwatch] = useState<number | null>(null);
  const [sorenReadingMode, setSorenReadingMode] = useState<boolean>(false);
  const [tastingNotesVisible, setTastingNotesVisible] = useState<boolean>(false);

  const filterTabs: { label: string; count: string; cat: ProjectCategory }[] = [
    { label: 'All Projects', count: '06', cat: 'all' },
    { label: 'Healthcare', count: '01', cat: 'healthcare' },
    { label: 'Hospitality', count: '01', cat: 'hospitality' },
    { label: 'Professional Services', count: '01', cat: 'legal' },
    { label: 'Real Estate', count: '01', cat: 'realestate' },
    { label: 'Retail & E-commerce', count: '01', cat: 'retail' },
    { label: 'Personal Brand', count: '01', cat: 'personal' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? ARCHIVE_PROJECTS
    : ARCHIVE_PROJECTS.filter((p) => p.category === selectedCategory);

  const handleInquireClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Concept Notice Bar */}
      <div className="w-full bg-surface-container-high text-on-surface-variant py-2.5 px-margin md:px-margin-tablet lg:px-margin-desktop border-b border-surface-variant">
        <div className="flex items-center justify-between gap-4 font-label-caps text-label-caps tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse shrink-0" />
            <span className="text-on-surface font-semibold">Curated Archive / Vol. 04</span>
            <span className="text-outline-variant hidden sm:inline">—</span>
            <span className="hidden sm:inline">
              Original creative explorations demonstrating adaptive design methodology
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span>6 Core Disciplines</span>
            <span className="text-outline-variant">/</span>
            <span>Independent Practice</span>
          </div>
        </div>
      </div>

      {/* Editorial Hero Section */}
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg md:pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-surface-container rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                Portfolio &amp; Concept Archive
              </span>
            </div>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-background font-extrabold tracking-tight">
              Work that gives every business its own voice.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-6 space-y-space-sm pt-4 lg:pt-0">
            <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
              A collection of digital concepts exploring how thoughtful design can transform the way different businesses present themselves. No repetitive templates, no generic aesthetics — each built from the ground up.
            </p>
            <div className="pt-2 flex items-center gap-4 text-on-surface-variant font-label-ui text-label-ui">
              <span className="font-semibold text-primary">06 Archival Studies</span>
              <span className="text-outline-variant">·</span>
              <span>Tokyo / Remote</span>
            </div>
          </div>
        </div>

        {/* Filter Bar Component */}
        <div className="mt-space-lg pt-space-md flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.cat;
            return (
              <button
                key={tab.cat}
                type="button"
                onClick={() => onSelectCategory(tab.cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-label-ui text-label-ui transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] ${isActive ? 'opacity-70' : 'opacity-60'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Editorial Cases Flow */}
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md space-y-space-xl">
        {filteredProjects.map((project) => {
          // Render specific layout variations matching Screen 1

          // 1. PROJECT 01: Healthcare (Kallos) - Asymmetric 7/5 Layout
          if (project.id === 'kallos-health') {
            return (
              <article
                key={project.id}
                className="group w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-surface-variant/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                  {/* Browser Showcase Canvas */}
                  <div className="lg:col-span-7 bg-surface-container-low p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-fixed opacity-40 blur-3xl pointer-events-none" />
                    
                    {/* Mini Browser Header */}
                    <div className="w-full bg-surface rounded-t-lg px-4 py-3 flex items-center justify-between shadow-sm relative z-10 border border-surface-variant/50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
                      </div>
                      <div className="bg-surface-container-high px-4 py-1 rounded text-[11px] font-label-ui text-on-surface-variant tracking-tight truncate max-w-[240px]">
                        {project.domainUrl}
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">lock</span>
                      </div>
                    </div>

                    {/* Browser Mockup Body */}
                    <div 
                      onClick={() => onOpenCaseStudy(project)}
                      className="w-full bg-surface rounded-b-lg overflow-hidden relative shadow-md z-10 flex-1 flex flex-col cursor-pointer"
                    >
                      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden group/img">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                          alt={project.imageAlt}
                          src={project.imageUrl}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                          <span className="font-label-caps text-label-caps tracking-widest uppercase opacity-80 mb-1">
                            {project.bannerTag}
                          </span>
                          <p className="font-headline-sm text-headline-sm font-semibold max-w-md">
                            {project.bannerTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Micro Data Bar */}
                    <div className="mt-4 pt-4 flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps tracking-widest relative z-10">
                      <span>{project.bottomLeftLabel}</span>
                      <span className="text-secondary font-bold">{project.bottomRightValue}</span>
                    </div>
                  </div>

                  {/* Editorial Details Panel */}
                  <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-surface-container-lowest">
                    <div className="space-y-space-md">
                      <div className="flex items-center justify-between">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">
                          {project.caseNumber}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-on-surface-variant uppercase">
                          {project.categoryBadge}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">
                          {project.title}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Deliverables Breakdown */}
                      <div className="space-y-3 pt-2">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                          Scope &amp; Deliverables
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.scopeDeliverables.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-surface-container text-on-surface font-label-ui text-body-sm rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Typography & Color System Specimen */}
                      {project.colorHarmony && (
                        <div className="bg-surface-container-low p-4 rounded-lg space-y-2">
                          <div className="flex items-center justify-between text-xs font-label-caps text-on-surface-variant">
                            <span>{project.colorHarmony.label}</span>
                            <span>{project.colorHarmony.names}</span>
                          </div>
                          <div className="flex h-3 w-full rounded overflow-hidden">
                            {project.colorHarmony.colors.map((c, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setActiveThemeSwatch(i)}
                                title={`Click to view swatch ${c}`}
                                className="w-1/3 h-full transition-transform hover:opacity-90"
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-space-md flex items-center justify-between">
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        <span>Status: Archival Exploration</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(project)}
                        className="inline-flex items-center gap-2 font-label-ui text-label-ui font-bold text-primary hover:text-secondary-container transition-colors cursor-pointer"
                      >
                        <span>Explore Case Concept</span>
                        <span className="text-base">↗</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // 2. PROJECT 02: Hospitality (Table 42) - Reversed 5/7 Layout
          if (project.id === 'table-42') {
            return (
              <article
                key={project.id}
                className="group w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-surface-variant/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                  {/* Editorial Details Panel (Left) */}
                  <div className="lg:col-span-5 order-2 lg:order-1 p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-surface-container-lowest">
                    <div className="space-y-space-md">
                      <div className="flex items-center justify-between">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">
                          {project.caseNumber}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-on-surface-variant uppercase">
                          {project.categoryBadge}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">
                          {project.title}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                          Scope &amp; Deliverables
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.scopeDeliverables.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-surface-container text-on-surface font-label-ui text-body-sm rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Sommelier Metric Card */}
                      {project.specialMetric && (
                        <div 
                          onClick={() => setTastingNotesVisible(!tastingNotesVisible)}
                          className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-surface-container transition-colors"
                        >
                          <div>
                            <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                              {project.specialMetric.label}
                            </p>
                            <p className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                              {project.specialMetric.value}
                            </p>
                            {tastingNotesVisible && (
                              <p className="text-xs text-secondary mt-1">
                                Vintage Barolo · Grand Cru Burgundy · Biodynamic Jura
                              </p>
                            )}
                          </div>
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                            <span className="material-symbols-outlined text-[20px]">
                              {project.specialMetric.icon || 'wine_bar'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-space-md flex items-center justify-between">
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        <span>Status: Archival Exploration</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(project)}
                        className="inline-flex items-center gap-2 font-label-ui text-label-ui font-bold text-primary hover:text-secondary-container transition-colors cursor-pointer"
                      >
                        <span>Explore Case Concept</span>
                        <span className="text-base">↗</span>
                      </button>
                    </div>
                  </div>

                  {/* Browser Showcase Canvas (Right) */}
                  <div className="lg:col-span-7 order-1 lg:order-2 bg-tertiary-container p-6 md:p-10 flex flex-col justify-between relative overflow-hidden text-on-tertiary">
                    <div className="w-full bg-surface-dim/20 backdrop-blur-md rounded-t-lg px-4 py-3 flex items-center justify-between border border-on-tertiary-container/20">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container/40" />
                      </div>
                      <div className="bg-tertiary/60 px-4 py-1 rounded text-[11px] font-label-ui text-on-tertiary-container tracking-tight truncate max-w-[240px]">
                        {project.domainUrl}
                      </div>
                      <div className="flex items-center gap-2 text-on-tertiary-container">
                        <span className="material-symbols-outlined text-sm">lock</span>
                      </div>
                    </div>

                    <div 
                      onClick={() => onOpenCaseStudy(project)}
                      className="w-full bg-tertiary rounded-b-lg overflow-hidden shadow-2xl relative flex-1 flex flex-col cursor-pointer"
                    >
                      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden group/img">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                          alt={project.imageAlt}
                          src={project.imageUrl}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-on-tertiary">
                          <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary-fixed mb-1">
                            {project.bannerTag}
                          </span>
                          <p className="font-headline-sm text-headline-sm font-semibold max-w-md">
                            {project.bannerTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 flex items-center justify-between text-on-tertiary-container font-label-caps text-label-caps tracking-widest">
                      <span>{project.bottomLeftLabel}</span>
                      <span className="text-secondary-fixed">{project.bottomRightValue}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // 3. PROJECT 03: Professional Services (Vance & Sterling) - Full Width Grid
          if (project.id === 'vance-sterling') {
            return (
              <article
                key={project.id}
                className="group w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-surface-variant/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                  {/* Browser Mockup Canvas */}
                  <div className="lg:col-span-8 bg-surface-container p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
                    <div className="w-full bg-surface rounded-t-lg px-4 py-3 flex items-center justify-between shadow-sm border border-surface-variant/50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                      </div>
                      <div className="bg-surface-container-highest px-4 py-1 rounded text-[11px] font-label-ui text-on-surface-variant tracking-tight truncate max-w-[280px]">
                        {project.domainUrl}
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">balance</span>
                      </div>
                    </div>

                    <div 
                      onClick={() => onOpenCaseStudy(project)}
                      className="w-full bg-surface rounded-b-lg overflow-hidden shadow-lg flex-1 flex flex-col cursor-pointer"
                    >
                      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden group/img">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                          alt={project.imageAlt}
                          src={project.imageUrl}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-6 text-on-primary">
                          <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary-fixed mb-1">
                            {project.bannerTag}
                          </span>
                          <p className="font-headline-sm text-headline-sm font-semibold max-w-lg">
                            {project.bannerTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps tracking-widest">
                      <span>{project.bottomLeftLabel}</span>
                      <span className="text-secondary font-bold">{project.bottomRightValue}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-4 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-surface-container-lowest">
                    <div className="space-y-space-md">
                      <div className="flex items-center justify-between">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">
                          {project.caseNumber}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-on-surface-variant uppercase">
                          {project.categoryBadge}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">
                          {project.title}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                          Scope &amp; Deliverables
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.scopeDeliverables.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-surface-container text-on-surface font-label-ui text-body-sm rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Law Practice Key Metric */}
                      {project.specialMetric && (
                        <div className="p-4 bg-surface-container-low rounded-lg space-y-1">
                          <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                            {project.specialMetric.label}
                          </p>
                          <p className="font-headline-sm text-headline-sm font-bold text-on-surface">
                            {project.specialMetric.value}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-space-md flex items-center justify-between">
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        <span>Status: Archival Exploration</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(project)}
                        className="inline-flex items-center gap-2 font-label-ui text-label-ui font-bold text-primary hover:text-secondary-container transition-colors cursor-pointer"
                      >
                        <span>Explore Case Concept</span>
                        <span className="text-base">↗</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // 4. PROJECT 04: Real Estate (Nordic Haven Estates) - Architectural Split
          if (project.id === 'nordic-haven') {
            return (
              <article
                key={project.id}
                className="group w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-surface-variant/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                  {/* Details (Left) */}
                  <div className="lg:col-span-4 order-2 lg:order-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-surface-container-lowest">
                    <div className="space-y-space-md">
                      <div className="flex items-center justify-between">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">
                          {project.caseNumber}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-on-surface-variant uppercase">
                          {project.categoryBadge}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">
                          {project.title}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                          Scope &amp; Deliverables
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.scopeDeliverables.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-surface-container text-on-surface font-label-ui text-body-sm rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Architectural Blueprint Graphic Specimen */}
                      {project.specialMetric && (
                        <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4">
                          <div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-secondary">
                              {project.specialMetric.icon || 'architecture'}
                            </span>
                          </div>
                          <div className="space-y-0.5">
                            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                              {project.specialMetric.label}
                            </span>
                            <p className="font-body-sm text-body-sm font-semibold text-on-surface">
                              {project.specialMetric.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-space-md flex items-center justify-between">
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        <span>Status: Archival Exploration</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(project)}
                        className="inline-flex items-center gap-2 font-label-ui text-label-ui font-bold text-primary hover:text-secondary-container transition-colors cursor-pointer"
                      >
                        <span>Explore Case Concept</span>
                        <span className="text-base">↗</span>
                      </button>
                    </div>
                  </div>

                  {/* Panoramic Mockup (Right) */}
                  <div className="lg:col-span-8 order-1 lg:order-2 bg-surface-container-high p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
                    <div className="w-full bg-surface rounded-t-lg px-4 py-3 flex items-center justify-between shadow-sm border border-surface-variant/50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                      </div>
                      <div className="bg-surface-container px-4 py-1 rounded text-[11px] font-label-ui text-on-surface-variant tracking-tight truncate max-w-[280px]">
                        {project.domainUrl}
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">explore</span>
                      </div>
                    </div>

                    <div 
                      onClick={() => onOpenCaseStudy(project)}
                      className="w-full bg-surface rounded-b-lg overflow-hidden shadow-xl flex-1 flex flex-col cursor-pointer"
                    >
                      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden group/img">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                          alt={project.imageAlt}
                          src={project.imageUrl}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                          <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary-fixed mb-1">
                            {project.bannerTag}
                          </span>
                          <p className="font-headline-sm text-headline-sm font-semibold max-w-lg">
                            {project.bannerTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps tracking-widest">
                      <span>{project.bottomLeftLabel}</span>
                      <span className="text-secondary font-bold">{project.bottomRightValue}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // 5. PROJECT 05: Retail & E-Commerce (Kanso Ceramics) - Editorial Boutique
          if (project.id === 'kanso-ceramics') {
            return (
              <article
                key={project.id}
                className="group w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-surface-variant/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                  {/* Mockup Left */}
                  <div className="lg:col-span-7 bg-[#ede9e3] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
                    <div className="w-full bg-[#f8f6f2] rounded-t-lg px-4 py-3 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                      </div>
                      <div className="bg-surface-container-highest px-4 py-1 rounded text-[11px] font-label-ui text-on-surface-variant tracking-tight truncate max-w-[240px]">
                        {project.domainUrl}
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">shopping_bag</span>
                      </div>
                    </div>

                    <div 
                      onClick={() => onOpenCaseStudy(project)}
                      className="w-full bg-[#f8f6f2] rounded-b-lg overflow-hidden shadow-lg flex-1 flex flex-col cursor-pointer"
                    >
                      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden group/img">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                          alt={project.imageAlt}
                          src={project.imageUrl}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                          <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary-fixed mb-1">
                            {project.bannerTag}
                          </span>
                          <p className="font-headline-sm text-headline-sm font-semibold max-w-md">
                            {project.bannerTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps tracking-widest">
                      <span>{project.bottomLeftLabel}</span>
                      <span className="text-secondary font-bold">{project.bottomRightValue}</span>
                    </div>
                  </div>

                  {/* Details Right */}
                  <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-surface-container-lowest">
                    <div className="space-y-space-md">
                      <div className="flex items-center justify-between">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">
                          {project.caseNumber}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-on-surface-variant uppercase">
                          {project.categoryBadge}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">
                          {project.title}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                          Scope &amp; Deliverables
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.scopeDeliverables.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-surface-container text-on-surface font-label-ui text-body-sm rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* E-comm Conversion Highlight */}
                      {project.specialMetric && (
                        <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                          <div>
                            <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                              {project.specialMetric.label}
                            </p>
                            <p className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                              {project.specialMetric.value}
                            </p>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">
                            ↗
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-space-md flex items-center justify-between">
                      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        <span>Status: Archival Exploration</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(project)}
                        className="inline-flex items-center gap-2 font-label-ui text-label-ui font-bold text-primary hover:text-secondary-container transition-colors cursor-pointer"
                      >
                        <span>Explore Case Concept</span>
                        <span className="text-base">↗</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // 6. PROJECT 06: Personal Brand (Soren Lindqvist) - Monograph Editorial
          return (
            <article
              key={project.id}
              className={`group w-full rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-surface-variant/40 ${
                sorenReadingMode ? 'bg-[#18181b] text-white' : 'bg-surface-container-lowest'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                {/* Details Left */}
                <div className={`lg:col-span-5 order-2 lg:order-1 p-8 md:p-12 lg:p-14 flex flex-col justify-between ${
                  sorenReadingMode ? 'bg-[#18181b]' : 'bg-surface-container-lowest'
                }`}>
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">
                        {project.caseNumber}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-on-surface-variant uppercase">
                        {project.categoryBadge}
                      </span>
                    </div>

                    <div>
                      <h2 className={`font-display-lg text-display-lg-mobile md:text-headline-lg font-bold tracking-tight ${
                        sorenReadingMode ? 'text-white' : 'text-on-surface'
                      }`}>
                        {project.title}
                      </h2>
                      {project.subtitle && (
                        <p className="font-headline-sm text-headline-sm text-secondary font-medium mt-1">
                          {project.subtitle}
                        </p>
                      )}
                      <p className={`font-body-md text-body-md mt-3 leading-relaxed ${
                        sorenReadingMode ? 'text-neutral-300 font-serif' : 'text-on-surface-variant'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                        Scope &amp; Deliverables
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.scopeDeliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 font-label-ui text-body-sm rounded ${
                              sorenReadingMode ? 'bg-neutral-800 text-white' : 'bg-surface-container text-on-surface'
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Reading Mode Pill Specimen */}
                    <div className={`p-4 rounded-lg flex items-center justify-between ${
                      sorenReadingMode ? 'bg-neutral-800 text-white' : 'bg-surface-container-low text-on-surface'
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">menu_book</span>
                        <div>
                          <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                            Editorial Reader
                          </p>
                          <p className="font-body-sm text-body-sm font-semibold">
                            Distraction-free Typography Toggle
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSorenReadingMode(!sorenReadingMode)}
                        title="Click to toggle distraction-free reading mode"
                        className="font-label-caps text-label-caps px-2 py-1 bg-primary text-on-primary hover:bg-secondary-container rounded cursor-pointer transition-colors"
                      >
                        {sorenReadingMode ? 'ACTIVE SPEC' : 'LIVE SPEC'}
                      </button>
                    </div>
                  </div>

                  <div className="pt-space-md flex items-center justify-between">
                    <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      <span>Status: Archival Exploration</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(project)}
                      className={`inline-flex items-center gap-2 font-label-ui text-label-ui font-bold hover:text-secondary-container transition-colors cursor-pointer ${
                        sorenReadingMode ? 'text-white' : 'text-primary'
                      }`}
                    >
                      <span>Explore Case Concept</span>
                      <span className="text-base">↗</span>
                    </button>
                  </div>
                </div>

                {/* Mockup Right */}
                <div className="lg:col-span-7 order-1 lg:order-2 bg-surface-container-highest p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="w-full bg-surface rounded-t-lg px-4 py-3 flex items-center justify-between shadow-sm border border-surface-variant/50">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                    </div>
                    <div className="bg-surface-container px-4 py-1 rounded text-[11px] font-label-ui text-on-surface-variant tracking-tight truncate max-w-[260px]">
                      {project.domainUrl}
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">article</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => onOpenCaseStudy(project)}
                    className="w-full bg-surface rounded-b-lg overflow-hidden shadow-xl flex-1 flex flex-col cursor-pointer"
                  >
                    <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden group/img">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                        alt={project.imageAlt}
                        src={project.imageUrl}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                        <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary-fixed mb-1">
                          {project.bannerTag}
                        </span>
                        <p className="font-headline-sm text-headline-sm font-semibold max-w-md">
                          {project.bannerTitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps tracking-widest">
                    <span>{project.bottomLeftLabel}</span>
                    <span className="text-secondary font-bold">{project.bottomRightValue}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Editorial Methodology Callout Panel */}
      <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="w-full bg-surface-container-high rounded-xl p-8 md:p-14 border border-surface-variant">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-4 space-y-2">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">
                Design Philosophy
              </span>
              <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                Why we craft distinct concepts.
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Most digital agencies recycle the same pre-packaged design kits across clinics, law firms, and coffee roasters. At youReco, we believe your visual grammar should be as unique as your commercial proposition. Every layout, cadence, color temperature, and typographic rhythm is engineered specifically for your audience&apos;s emotional frequency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Inquiry Section (Deep Charcoal Obsidian) */}
      <section className="w-full bg-primary text-on-primary py-space-xl px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="space-y-space-sm max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container" />
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-fixed-dim">
                Tailored Architecture
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg font-extrabold tracking-tight text-on-primary">
              Have a unique business or industry? We&apos;d love to tailor an experience for you.
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed-dim">
              From specialized medical practices to avant-garde hospitality and boutique commerce — we bring creative rigor to complex challenges.
            </p>
          </div>
          <div className="shrink-0 pt-4 md:pt-0">
            <button
              type="button"
              onClick={handleInquireClick}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm font-bold shadow-lg hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all duration-200 cursor-pointer"
            >
              <span>Inquire for Your Industry</span>
              <span className="text-xl">↗</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
