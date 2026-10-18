import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesViewProps {
  onNavigate: (path: string) => void;
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onSelectServiceForInquiry
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('website-design');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleInquireService = (title: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(title);
    }
    onNavigate('contact');
  };

  const faqs = [
    {
      q: 'How long does a standard website build typically take?',
      a: 'A bespoke digital flagship typically takes between 4 to 8 weeks depending on scope, custom interactions, and CMS integration. Rapid landing page sprints can be delivered within 10 to 14 business days.'
    },
    {
      q: 'Do you use pre-made templates or Webflow themes?',
      a: 'Never. Every project begins with a clean Figma canvas and bespoke semantic code tailored specifically to your brand architecture. We do not use commercial themes or bloated page builders.'
    },
    {
      q: 'Can our internal team edit content easily after launch?',
      a: 'Yes. We pair every build with an intuitive headless CMS (Sanity, Strapi, or tailored Markdown) custom-modeled to your exact schema, allowing non-technical editors to update content effortlessly without breaking layouts.'
    },
    {
      q: 'How do you handle search ranking during a website redesign?',
      a: 'We execute a strict 301 URL migration plan, audit all existing ranking URLs, match search intent, and implement structured JSON-LD Schema to safeguard and usually improve your organic rankings post-launch.'
    },
    {
      q: 'What is your payment structure and engagement terms?',
      a: 'We work on a fixed-fee milestone model: 50% upon project kickoff, 25% at design sign-off, and 25% upon final QA and deployment. No surprise hourly fees or locked proprietary hosting.'
    }
  ];

  const processPhases = [
    {
      phase: '01',
      title: 'Discovery & Architecture',
      duration: 'Week 1–2',
      summary: 'Deep-dive into brand positioning, competitor landscapes, content hierarchy, and technical constraints.',
      deliverables: ['Creative Brief & Positioning', 'Information Architecture & Site Map', 'User Journey Diagrams']
    },
    {
      phase: '02',
      title: 'Art Direction & System Design',
      duration: 'Week 2–4',
      summary: 'Translating brand essence into high-craft responsive Figma prototypes, typography systems, and interaction models.',
      deliverables: ['Interactive Prototypes', 'Full Responsive Layouts', 'Design Token System']
    },
    {
      phase: '03',
      title: 'Engineering & Integration',
      duration: 'Week 4–6',
      summary: 'Handcrafted semantic frontend engineering paired with headless CMS, sub-second API routes, and motion physics.',
      deliverables: ['Clean Semantic Codebase', 'CMS Configuration', 'Custom Micro-Interactions']
    },
    {
      phase: '04',
      title: 'Calibration, SEO & Launch',
      duration: 'Week 6–8',
      summary: 'Rigorous cross-device QA, Lighthouse 98+ speed calibration, technical SEO tags, and DNS cutover.',
      deliverables: ['Lighthouse 98+ Benchmark', 'Structured Data Schema', 'CMS Editor Video Manuals']
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-surface text-on-surface">
      {/* Editorial Announcement Strip */}
      <section className="border-b border-[#e3e2df] bg-[#f5f4f0] py-3 px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Currently onboarding clients for Q3 / Q4</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>TOKYO STUDIO (JST)</span>
            <span>·</span>
            <span>GLOBAL REMOTE PARTNERSHIPS</span>
          </div>
        </div>
      </section>

      {/* Main Hero Header */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-label-caps text-label-caps font-semibold uppercase text-secondary tracking-widest border border-outline-variant">
            <span>Capabilities & Method</span>
          </div>

          <h1 className="font-headline text-headline font-bold text-primary max-w-4xl tracking-tight leading-[1.08]">
            We shape digital flagships with systemic discipline and quiet confidence.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            From bespoke architectural design to high-performance platform engineering, our practice crafts digital flagships that communicate authority, convert inbound interest, and outlast trends.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#e3e2df]">
            <div>
              <div className="font-headline-sm text-2xl font-bold text-primary font-mono">100%</div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">Bespoke Code</div>
            </div>
            <div>
              <div className="font-headline-sm text-2xl font-bold text-primary font-mono">&lt; 0.4s</div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">First Contentful Paint</div>
            </div>
            <div>
              <div className="font-headline-sm text-2xl font-bold text-primary font-mono">98+</div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">Median Lighthouse</div>
            </div>
            <div>
              <div className="font-headline-sm text-2xl font-bold text-primary font-mono">4–8 Wks</div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">Delivery Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Showcase Grid */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest mb-2">
                01 / CORE DISCIPLINES
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Six tailored practices for visionary brands
              </h2>
            </div>
            <p className="text-on-surface-variant text-sm max-w-md">
              Each engagement is staffed with senior craftspeople directly. Select a practice below to inspect deliverables.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`group p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-surface-bright border-primary shadow-lg ring-1 ring-primary/20'
                      : 'bg-surface-container-low border-[#e3e2df] hover:border-outline hover:bg-surface-bright'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-secondary px-2.5 py-1 bg-surface-container rounded-md border border-outline-variant">
                        {service.number}
                      </span>
                      <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-primary transition-colors">
                        {service.icon}
                      </span>
                    </div>

                    <div>
                      <span className="font-label-caps text-label-caps uppercase text-secondary block mb-1">
                        {service.categoryTag}
                      </span>
                      <h3 className="font-headline text-xl font-bold text-primary group-hover:text-black transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#e3e2df] space-y-3">
                    <div className="font-label-caps text-label-caps uppercase text-on-surface-variant font-semibold">
                      Deliverables Include:
                    </div>
                    <ul className="space-y-1.5 text-xs text-on-surface">
                      {service.keyDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-on-surface-variant">
                        {service.taglineTokens}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInquireService(service.title);
                        }}
                        className="text-xs font-semibold text-primary hover:text-black flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                      >
                        <span>Select</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep-Dive Inspection Card for Selected Service */}
          <div className="bg-surface-bright border border-primary/30 rounded-2xl p-8 md:p-10 shadow-sm mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-2.5 py-1 bg-surface-container rounded border border-outline-variant text-primary font-bold">
                    ACTIVE SELECTION: {selectedService.number}
                  </span>
                  <span className="text-secondary font-label-caps text-label-caps uppercase">
                    {selectedService.categoryTag}
                  </span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary">
                  {selectedService.title} Specification
                </h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                  {selectedService.description} Every asset is handed over with full copyright ownership, interactive component specs, and post-launch maintenance documentation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedService.keyDeliverables.map((d, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant font-medium">
                      ✓ {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1 bg-surface-container-low p-6 rounded-xl border border-outline-variant flex flex-col justify-between gap-6">
                <div>
                  <div className="font-label-caps text-label-caps uppercase text-on-surface-variant font-bold mb-1">
                    Engagement Options
                  </div>
                  <div className="text-sm text-primary font-semibold">
                    Fixed Scope Sprint or Retainer
                  </div>
                  <p className="text-xs text-on-surface-variant mt-2">
                    Ideal for teams seeking deliberate quality and transparent timelines.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleInquireService(selectedService.title)}
                  className="w-full py-3 px-4 bg-primary text-on-primary hover:bg-black rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Inquire for {selectedService.title}</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Process Timeline */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df] bg-[#f7f6f2]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl">
            <div className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest mb-2">
              02 / THE ARCHITECTURAL METHOD
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
              A structured sprint without bureaucratic bloat
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base mt-3">
              We eliminate account managers and junior handoffs. You work directly with the system architects who write your code and draw your vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPhases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-surface-bright p-6 rounded-xl border border-[#e3e2df] flex flex-col justify-between shadow-xs hover:border-outline transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-primary">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {phase.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e3e2df] space-y-1.5">
                  <span className="font-label-caps text-[10px] uppercase text-secondary font-bold">
                    Key Outputs:
                  </span>
                  {phase.deliverables.map((item, idx) => (
                    <div key={idx} className="text-xs text-on-surface flex items-center gap-1.5">
                      <span className="text-secondary text-sm">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards Table */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl">
            <div className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest mb-2">
              03 / ENGINEERING RIGOR
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Why our architectural foundation outlives trends
            </h2>
            <p className="text-on-surface-variant text-sm mt-3">
              Compare an independent engineered studio build against conventional mass-market page builders.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#e3e2df] bg-surface-bright">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-surface-container border-b border-[#e3e2df]">
                  <th className="p-4 font-bold text-primary">Benchmark Dimension</th>
                  <th className="p-4 font-bold text-primary bg-primary/5 border-l border-r border-primary/20">
                    youReco Studio Build
                  </th>
                  <th className="p-4 font-bold text-on-surface-variant">
                    Standard Agency / Webflow / WP
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e3e2df]">
                <tr>
                  <td className="p-4 font-medium text-primary">Source Code Ownership</td>
                  <td className="p-4 bg-primary/5 border-l border-r border-primary/20 font-semibold text-emerald-800">
                    100% Client-Owned Clean Git Repository
                  </td>
                  <td className="p-4 text-on-surface-variant">Locked inside third-party walled gardens</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-primary">Median First Contentful Paint</td>
                  <td className="p-4 bg-primary/5 border-l border-r border-primary/20 font-semibold text-emerald-800 font-mono">
                    0.2s — 0.4s (Global Edge Cached)
                  </td>
                  <td className="p-4 text-on-surface-variant font-mono">1.8s — 3.5s (Heavy script tags)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-primary">Design System Uniqueness</td>
                  <td className="p-4 bg-primary/5 border-l border-r border-primary/20 font-semibold text-primary">
                    100% Bespoke Tokens & Editorial Layouts
                  </td>
                  <td className="p-4 text-on-surface-variant">Pre-purchased templates and UI kit clones</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-primary">Accessibility & SEO</td>
                  <td className="p-4 bg-primary/5 border-l border-r border-primary/20 font-semibold text-emerald-800">
                    WCAG 2.1 AA Compliant & JSON-LD Rich Meta
                  </td>
                  <td className="p-4 text-on-surface-variant">Automated plugin overhead & broken headings</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-primary">Direct Communication</td>
                  <td className="p-4 bg-primary/5 border-l border-r border-primary/20 font-semibold text-primary">
                    Direct slack/calls with Lead Engineer & Designer
                  </td>
                  <td className="p-4 text-on-surface-variant">Relayed through junior account coordinators</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest">
              04 / QUESTIONS & ANSWERS
            </span>
            <h2 className="font-headline text-3xl font-bold text-primary">
              Frequently Clarified Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#e3e2df] rounded-xl bg-surface-bright overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-primary hover:text-black cursor-pointer"
                  >
                    <span className="text-base">{faq.q}</span>
                    <span className="material-symbols-outlined text-on-surface-variant transform transition-transform duration-200">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-on-surface-variant leading-relaxed border-t border-[#f5f4f0]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-20 bg-primary text-on-primary">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d8c5b0]">
            READY TO TRANSFORM YOUR DIGITAL PRESENCE?
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-surface">
            Let&apos;s build a digital flagship that reflects your true caliber.
          </h2>
          <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl mx-auto">
            Book an initial 30-minute scoping discussion or submit an inquiry with your project specifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-surface text-primary hover:bg-white font-bold rounded-lg transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Initiate Project Inquiry</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto px-8 py-4 border border-outline-variant hover:border-surface text-surface rounded-lg font-semibold transition-all cursor-pointer"
            >
              <span>View Case Archive</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
