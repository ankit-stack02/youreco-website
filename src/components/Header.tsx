import React, { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: 'home' },
    { label: 'Work', path: 'work' },
    { label: 'Services', path: 'services' },
    { label: 'About', path: 'about' },
    { label: 'Contact', path: 'contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-[#faf9f5]/95 backdrop-blur-xl border-b border-[#e3e2df]">
      <div className="h-20 w-full px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-gutter">
        {/* Brand Logo */}
        <div 
          onClick={() => handleLinkClick('home')} 
          className="flex items-center gap-space-sm cursor-pointer select-none group"
        >
          
<img
  src="/youReco%20Studio%20Minimalist%20Logo.png"
  alt="youReco Studio Logo"
  className="h-8 w-auto object-contain"
/>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-space-lg">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                className={`py-1 text-label-ui font-label-ui transition-colors cursor-pointer ${
                  isActive
                    ? "text-primary font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-secondary-container"
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Area */}
        <div className="flex items-center gap-space-md">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-ui text-label-ui tracking-tight transition-all duration-200 hover:bg-secondary-container hover:text-on-secondary-container shadow-[0_1px_8px_rgba(0,0,0,0.04)] cursor-pointer group"
          >
            <span>Start a Project</span>
            <span className="font-label-ui text-label-ui font-bold transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </button>

          {/* User Icon */}
          <div 
            title="Studio Practice Member" 
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-default"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e3e2df] bg-[#faf9f5] px-margin py-4 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-surface-container text-primary'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
