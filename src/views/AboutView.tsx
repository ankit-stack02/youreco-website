import React, { useState, useEffect } from 'react';

interface AboutViewProps {
  onNavigate: (path: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [tokyoTime, setTokyoTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTokyoTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const studioPrinciples = [
    {
      num: '01',
      title: 'Anti-Template Discipline',
      tagline: 'No pre-purchased themes. No assembly line clones.',
      body: 'Every business possesses a distinct personality and competitive posture. We compose bespoke visual systems, layout rhythms, and semantic components from scratch for each client rather than shoehorning content into pre-existing theme templates.'
    },
    {
      num: '02',
      title: 'Performance as an Aesthetic',
      tagline: 'True luxury on the contemporary web is effortless velocity.',
      body: 'A beautiful website that takes four seconds to load is an architectural failure. We obsess over sub-second response times, zero layout shifts, optimized asset delivery, and pristine 98+ Lighthouse scores across all network tiers.'
    },
    {
      num: '03',
      title: 'Direct Principal Access',
      tagline: 'Zero intermediary account managers. Pure craft collaboration.',
      body: 'We deliberately operate as a tight, independent studio. When you engage youReco, your strategic partner, creative director, and lead engineer are the exact same people presenting the work and deploying your code.'
    },
    {
      num: '04',
      title: 'Enduring Typographic Dignity',
      tagline: 'Editorial hierarchy that outlives fleeting seasonal gimmicks.',
      body: 'Trends expire in months; clear typography, deliberate micro-copy, and generous architectural negative space endure for years. We design websites that feel as commanding and confident five years after launch as on day one.'
    }
  ];

  const colophonItems = [
    { label: 'Studio Base', value: 'Minami-Aoyama, Tokyo, Japan' },
    { label: 'Timezone', value: 'JST (UTC +09:00)' },
    { label: 'Active Status', value: 'Accepting select Q3/Q4 inquiries' },
    { label: 'Primary Typography', value: 'Manrope & Inter Geometric Sans' },
    { label: 'Frontend Stack', value: 'TypeScript, Tailwind CSS, Modern React' },
    { label: 'Infrastructure', value: 'Global Edge Anycast CDN' },
    { label: 'Accessibility', value: 'WCAG 2.1 AA Compliant Standards' },
    { label: 'Carbon Footprint', value: '< 0.12g CO2 per page view' }
  ];

  return (
    <div className="pt-24 pb-20 bg-surface text-on-surface">
      {/* Live Studio Status Bar */}
      <section className="border-b border-[#e3e2df] bg-[#f5f4f0] py-3 px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant font-medium">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-primary font-semibold">TOKYO STUDIO: {tokyoTime || '09:42:18 JST'}</span>
            <span className="text-outline-variant">/</span>
            <span>OPEN FOR BUSINESS</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>LAT: 35.6628° N</span>
            <span>LON: 139.7188° E</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-label-caps text-label-caps font-semibold uppercase text-secondary tracking-widest border border-outline-variant">
            <span>About The Practice</span>
          </div>

          <h1 className="font-headline text-headline font-bold text-primary max-w-4xl tracking-tight leading-[1.08]">
            Small studio energy. Enterprise-grade execution.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            youReco is an independent digital practice founded on a straightforward premise: modern businesses deserve digital flagships built with the same precision, taste, and permanence as their physical spaces.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#e3e2df]">
            <div>
              <div className="font-headline-sm text-3xl font-bold text-primary font-mono">2021</div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">Founded in Tokyo</div>
            </div>
            <div>
              <div className="font-headline-sm text-3xl font-bold text-primary font-mono">42+</div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">Flagships Launched</div>
            </div>
            <div>
              <div className="font-headline-sm text-3xl font-bold text-primary font-mono">9</div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">Countries Represented</div>
            </div>
            <div>
              <div className="font-headline-sm text-3xl font-bold text-primary font-mono">0</div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">Generic Templates Used</div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Ethos & Narrative */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest">
              OUR BELIEF
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Craft without compromise in an era of automated sameness.
            </h2>
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant space-y-3">
              <p className="font-body text-sm text-on-surface-variant italic">
                &ldquo;The web has become homogenous. Most sites look like clones of the same five corporate templates. We exist to restore point-of-view, craft, and distinct character to our clients&rsquo; digital front doors.&rdquo;
              </p>
              <div className="text-xs font-bold text-primary">
                — youReco Studio Creative Directorate
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-on-surface font-body text-base leading-relaxed">
            <p>
              We deliberately keep our roster constrained. By taking on only two to three client partnerships concurrently, we ensure that every design system, typography scale, micro-interaction, and performance budget receives relentless attention to detail.
            </p>
            <p className="text-on-surface-variant">
              Our background merges Japanese minimalism, architectural spatial rhythm, and rigorous modern web engineering. We serve founders, medical professionals, boutique hospitality operators, and legal counsel who understand that their website is their most important institutional asset.
            </p>
            <p className="text-on-surface-variant">
              When someone visits your flagship, they should immediately feel the gravity, care, and quality that defines your organization. That sensation cannot be pre-packaged in a $50 template — it must be engineered.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('work')}
                className="px-6 py-3 bg-primary text-on-primary hover:bg-black rounded-lg font-semibold text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Explore Our Work</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 border border-[#e3e2df] hover:border-primary rounded-lg font-semibold text-sm text-primary transition-all cursor-pointer"
              >
                <span>Initiate A Dialogue</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Principles */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df] bg-[#f7f6f2]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
              The four foundational pillars of our practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioPrinciples.map((principle) => (
              <div
                key={principle.num}
                className="bg-surface-bright p-8 rounded-2xl border border-[#e3e2df] shadow-xs space-y-4 hover:border-outline transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-secondary">
                    {principle.num}
                  </span>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Studio Tenet
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-primary">
                  {principle.title}
                </h3>
                <div className="text-xs font-semibold text-secondary tracking-wide">
                  {principle.tagline}
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Colophon & Technical Rigor */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-16 md:py-24 border-b border-[#e3e2df]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">
                PRACTICE SPECIFICATIONS
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
                The Studio Colophon
              </h2>
            </div>
            <p className="text-on-surface-variant text-sm max-w-md">
              Complete transparency in tools, ethics, energy impact, and digital craftsmanship standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colophonItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-bright p-5 rounded-xl border border-[#e3e2df] flex flex-col justify-between"
              >
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant text-xs">
                  {item.label}
                </span>
                <span className="font-headline text-sm md:text-base font-bold text-primary mt-2">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-20 bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-surface">
            Ready to build something with lasting consequence?
          </h2>
          <p className="font-body-lg text-body-lg text-outline-variant max-w-xl mx-auto">
            We are actively reviewing scopes for the upcoming calendar quarters.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-surface text-primary hover:bg-white font-bold rounded-lg transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Get in Touch with the Studio</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
