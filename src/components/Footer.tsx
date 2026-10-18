import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onFilterWork?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterWork }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePracticeAreaClick = (category: string) => {
    onNavigate('work');
    if (onFilterWork) {
      onFilterWork(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#000000] text-[#ffffff] pt-space-xl pb-space-lg border-t border-[#1a1b21]">
      <div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Editorial Stance */}
        <div className="pb-space-xl border-b border-[#83838b]/30">
          <p className="font-label-caps text-label-caps uppercase tracking-widest text-[#83838b] mb-space-sm">
            Editorial Stance
          </p>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl text-[#ffffff] font-bold tracking-tight">
            Good businesses deserve better websites.
          </h2>
        </div>

        {/* 4 Columns Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop py-space-xl border-b border-[#83838b]/30">
          {/* Col 1: Studio Details */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-space-md">
            <div className="space-y-space-sm">
              <div 
                onClick={() => handleNav('home')} 
                className="flex items-center gap-2 cursor-pointer group"
              >
                
<img
  src="/youReco%20Studio%20Minimalist%20Logo.png"
  alt="youReco Studio Logo"
  className="h-8 w-auto object-contain"
/>

               
              </div>
              <p className="font-body-sm text-body-sm text-[#83838b] max-w-sm">
                Independent Digital Practice engineering bespoke digital flagships, systems, and brand platforms for ambitious teams worldwide.
              </p>
            </div>
            <div className="pt-space-md">
              <a
                className="inline-block font-label-ui text-label-ui text-[#ffffff] border-b border-[#ffffff] pb-0.5 hover:text-[#e0e0ff] hover:border-[#e0e0ff] transition-colors"
                href="mailto:hello@youreco.studio"
              >
                hello@youreco.studio
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-space-sm">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-[#83838b]">
              Navigation
            </p>
            <ul className="space-y-space-xs font-body-sm text-body-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('work')}
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors text-left"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="lg:col-span-3 space-y-space-sm">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-[#83838b]">
              Practice Areas
            </p>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-[#ffffff]">
              <li>
                <button
                  type="button"
                  onClick={() => handlePracticeAreaClick('healthcare')}
                  className="hover:text-[#e0e0ff] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Healthcare</span>
                  <span className="text-xs text-[#83838b]">↗</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePracticeAreaClick('hospitality')}
                  className="hover:text-[#e0e0ff] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Hospitality</span>
                  <span className="text-xs text-[#83838b]">↗</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePracticeAreaClick('legal')}
                  className="hover:text-[#e0e0ff] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Legal &amp; Advisory</span>
                  <span className="text-xs text-[#83838b]">↗</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePracticeAreaClick('realestate')}
                  className="hover:text-[#e0e0ff] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Real Estate</span>
                  <span className="text-xs text-[#83838b]">↗</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePracticeAreaClick('retail')}
                  className="hover:text-[#e0e0ff] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Retail &amp; Commerce</span>
                  <span className="text-xs text-[#83838b]">↗</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Network */}
          <div className="lg:col-span-3 space-y-space-sm">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-[#83838b]">
              Network
            </p>
            <ul className="space-y-space-xs font-body-sm text-body-sm">
              <li>
                <a
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors inline-flex items-center gap-1"
                  href="https://read.cv"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>ReadCV</span>
                  <span className="text-xs opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors inline-flex items-center gap-1"
                  href="https://are.na"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Are.na</span>
                  <span className="text-xs opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors inline-flex items-center gap-1"
                  href="https://x.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>X / Twitter</span>
                  <span className="text-xs opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors inline-flex items-center gap-1"
                  href="https://instagram.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Instagram</span>
                  <span className="text-xs opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  className="text-[#ffffff] hover:text-[#e0e0ff] transition-colors inline-flex items-center gap-1"
                  href="https://github.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>GitHub</span>
                  <span className="text-xs opacity-70">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon & Status Bar */}
        <div className="pt-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm font-body-sm text-body-sm text-[#83838b]">
          <div>
            youReco Studio © 2025. Independent Digital Practice. All rights reserved.
          </div>
          <div className="flex items-center gap-space-md font-label-caps text-label-caps tracking-widest uppercase">
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
              Available Q2 2025
            </span>
            <span className="text-outline">/</span>
            <span>Tokyo · Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
