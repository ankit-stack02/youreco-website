import React, { useEffect } from 'react';
import { ProjectItem } from '../types';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-surface-bright text-on-surface rounded-2xl shadow-2xl overflow-y-auto flex flex-col border border-surface-variant"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md px-6 py-4 border-b border-surface-variant flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold">
              {project.caseNumber}
            </span>
            <span className="text-outline-variant">/</span>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              {project.categoryBadge}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest flex items-center justify-center text-primary transition-colors cursor-pointer"
            aria-label="Close Case Modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Hero Image Showcase */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="font-headline-sm text-secondary font-medium">
                {project.subtitle}
              </p>
            )}
            <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Browser Mockup Window */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-surface-variant bg-surface-container-lowest">
            <div className="h-10 bg-surface-container px-4 flex items-center justify-between border-b border-surface-variant">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
              </div>
              <div className="px-4 py-0.5 rounded bg-surface text-on-surface-variant font-label-caps text-label-caps tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[12px]">lock</span>
                {project.domainUrl}
              </div>
              <div className="w-6" />
            </div>

            <div className="relative h-72 md:h-96 w-full overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed mb-1">
                  {project.bannerTag}
                </span>
                <p className="font-headline-sm text-headline-sm font-semibold max-w-lg">
                  {project.bannerTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Architectural Deep Dive */}
          {project.deepDive && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-surface-container-low rounded-xl space-y-2">
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary font-bold">
                  The Strategic Challenge
                </span>
                <p className="font-body-sm text-on-surface leading-relaxed">
                  {project.deepDive.challenge}
                </p>
              </div>

              <div className="p-5 bg-surface-container-low rounded-xl space-y-2">
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary font-bold">
                  The Studio Solution
                </span>
                <p className="font-body-sm text-on-surface leading-relaxed">
                  {project.deepDive.solution}
                </p>
              </div>
            </div>
          )}

          {/* Deliverables & Specs Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            <div className="md:col-span-7 space-y-3">
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

              {project.deepDive && (
                <div className="pt-2">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant block mb-2">
                    Engineered Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.deepDive.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded bg-surface-container-high text-xs font-mono text-on-surface-variant">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-5 space-y-4">
              {project.colorHarmony && (
                <div className="bg-surface-container-low p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs font-label-caps text-on-surface-variant">
                    <span>{project.colorHarmony.label}</span>
                    <span>{project.colorHarmony.names}</span>
                  </div>
                  <div className="flex h-4 w-full rounded overflow-hidden">
                    {project.colorHarmony.colors.map((c, i) => (
                      <div
                        key={i}
                        className="flex-1"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.specialMetric && (
                <div className="bg-surface-container-low p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      {project.specialMetric.label}
                    </p>
                    <p className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                      {project.specialMetric.value}
                    </p>
                  </div>
                  {project.specialMetric.badge && (
                    <span className="font-label-caps text-label-caps px-2.5 py-1 bg-secondary-container text-on-secondary-container font-bold rounded">
                      {project.specialMetric.badge}
                    </span>
                  )}
                  {project.specialMetric.icon && (
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        {project.specialMetric.icon}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-surface-variant flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-label-caps text-on-surface-variant uppercase">
              <span>{project.bottomLeftLabel}</span>
              <span className="text-secondary font-bold">{project.bottomRightValue}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-surface-container text-on-surface font-label-ui text-label-ui hover:bg-surface-container-highest transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onInquire(project.title)}
                className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-ui text-label-ui font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Commission Similar Concept</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
