import React, { useState, useEffect } from 'react';
import { InquiryFormData } from '../types';

interface ContactViewProps {
  initialServiceName?: string;
  initialProjectName?: string;
  onNavigate: (path: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialServiceName,
  initialProjectName,
  onNavigate
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    businessName: '',
    websiteType: initialServiceName || 'Website Design & Development',
    budgetBracket: '$10k – $25k',
    projectDetails: initialProjectName ? `Inquiring about project similar to: ${initialProjectName}` : ''
  });

  const [selectedTimeline, setSelectedTimeline] = useState<string>('2–3 Months (Standard)');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionCode, setSubmissionCode] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (initialServiceName) {
      setFormData((prev) => ({ ...prev, websiteType: initialServiceName }));
    }
  }, [initialServiceName]);

  const serviceOptions = [
    'Website Design & System',
    'Full Website Development',
    'Business / Practice Portal',
    'Landing Page Sprint',
    'E-commerce Flagship',
    'Platform Redesign & Audit'
  ];

  const budgetOptions = [
    '<$10,000 (Focused Sprint)',
    '$10k – $25k (Full Flagship)',
    '$25k – $50k (Platform & CMS)',
    '$50k+ (Enterprise System)'
  ];

  const timelineOptions = [
    '1 Month (Accelerated)',
    '2–3 Months (Standard)',
    '4+ Months (Strategic)',
    'Flexible / Planning Phase'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.businessName.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Business Name).');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid business email address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = 'YR-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionCode(generatedCode);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmissionCode('');
    setFormData({
      fullName: '',
      email: '',
      businessName: '',
      websiteType: 'Website Design & Development',
      budgetBracket: '$10k – $25k',
      projectDetails: ''
    });
  };

  return (
    <div className="pt-24 pb-20 bg-surface text-on-surface">
      {/* Announcement Strip */}
      <section className="border-b border-[#e3e2df] bg-[#f5f4f0] py-3 px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>DIRECT INTAKE DESK · 24-HOUR PRINCIPAL RESPONSE GUARANTEE</span>
          </div>
          <div className="text-xs font-mono">
            <span>studio@youreco.design</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-margin md:px-margin-tablet lg:px-margin-desktop py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {submitted ? (
            /* Successful Submission Confirmation Screen */
            <div className="max-w-3xl mx-auto bg-surface-bright border border-primary/30 rounded-2xl p-8 md:p-12 shadow-xl space-y-8 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-2.5 py-1 bg-surface-container rounded border border-outline-variant font-bold text-primary">
                    INQUIRY REF: {submissionCode}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 uppercase">
                    Received &amp; Logged
                  </span>
                </div>
                <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                  Thank you, {formData.fullName}. Your brief is in good hands.
                </h1>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  Our principal directors have received your project overview for <strong>{formData.businessName}</strong>. We review every brief personally and will reply to <strong>{formData.email}</strong> within 24 business hours with initial architectural insights and scheduling options.
                </p>
              </div>

              {/* Inquiry Summary Review Box */}
              <div className="bg-surface-container-low rounded-xl p-6 border border-[#e3e2df] space-y-4">
                <div className="font-label-caps text-label-caps uppercase text-secondary font-bold">
                  Summary of Logged Specifications
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-on-surface-variant block">Practice / Discipline:</span>
                    <span className="font-semibold text-primary">{formData.websiteType}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block">Budget Range:</span>
                    <span className="font-semibold text-primary">{formData.budgetBracket}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block">Target Timeline:</span>
                    <span className="font-semibold text-primary">{selectedTimeline}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block">Contact Email:</span>
                    <span className="font-semibold text-primary">{formData.email}</span>
                  </div>
                </div>

                {formData.projectDetails && (
                  <div className="pt-2 border-t border-[#e3e2df]">
                    <span className="text-on-surface-variant text-xs block mb-1">Project Notes:</span>
                    <p className="text-xs text-on-surface italic line-clamp-3">
                      &ldquo;{formData.projectDetails}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#e3e2df]">
                <button
                  type="button"
                  onClick={() => onNavigate('work')}
                  className="w-full sm:w-auto px-6 py-3 bg-primary text-on-primary hover:bg-black rounded-lg font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Explore Portfolio Archive</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 border border-[#e3e2df] hover:border-primary text-primary rounded-lg font-semibold text-sm transition-all cursor-pointer"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form & Studio Sidebar */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Context & Office coordinates */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-label-caps text-label-caps font-semibold uppercase text-secondary tracking-widest border border-outline-variant">
                    <span>Direct Consultation</span>
                  </div>
                  <h1 className="font-headline text-headline font-bold text-primary tracking-tight leading-[1.08]">
                    Tell us what you&apos;re building.
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    We take on a limited number of client engagements each quarter to preserve principal focus. Share your timeline, budget, and ambitions below.
                  </p>
                </div>

                {/* Direct Studio Details Card */}
                <div className="bg-surface-bright rounded-2xl p-6 md:p-8 border border-[#e3e2df] space-y-6 shadow-xs">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-secondary font-bold block mb-1">
                      Direct Studio Desk
                    </span>
                    <a
                      href="mailto:studio@youreco.design"
                      className="font-headline text-lg font-bold text-primary hover:underline"
                    >
                      studio@youreco.design
                    </a>
                  </div>

                  <div className="border-t border-[#e3e2df] pt-4">
                    <span className="font-label-caps text-label-caps uppercase text-secondary font-bold block mb-1">
                      Tokyo Headquarters
                    </span>
                    <p className="text-sm text-on-surface leading-relaxed">
                      5-7-2 Minami-Aoyama, Minato-ku<br />
                      Tokyo 107-0062, Japan
                    </p>
                  </div>

                  <div className="border-t border-[#e3e2df] pt-4">
                    <span className="font-label-caps text-label-caps uppercase text-secondary font-bold block mb-1">
                      Operating Schedule
                    </span>
                    <p className="text-sm text-on-surface leading-relaxed">
                      Monday through Friday<br />
                      09:00 — 18:00 JST (GMT+9)
                    </p>
                  </div>

                  <div className="border-t border-[#e3e2df] pt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-base">verified</span>
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      <span className="font-bold text-primary block">SLA Commitment:</span>
                      Every submission receives a personal response within 24 business hours.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface-bright rounded-2xl p-8 md:p-10 border border-[#e3e2df] shadow-sm space-y-8"
                >
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">error</span>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Section 1: Basic Information */}
                  <div className="space-y-6">
                    <div className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider pb-2 border-b border-[#e3e2df]">
                      01 / CONTACT IDENTITY
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-primary block">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. Julian Mercer"
                          className="w-full px-4 py-3 rounded-lg border border-[#e3e2df] bg-surface-container-low text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-primary block">
                          Direct Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. julian@kalloshealth.com"
                          className="w-full px-4 py-3 rounded-lg border border-[#e3e2df] bg-surface-container-low text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-primary block">
                        Business / Brand / Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Kallos Integrative Health / Mercer Partners"
                        className="w-full px-4 py-3 rounded-lg border border-[#e3e2df] bg-surface-container-low text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Section 2: Service Discipline Selector */}
                  <div className="space-y-4">
                    <div className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider pb-2 border-b border-[#e3e2df]">
                      02 / PRACTICE DISCIPLINE
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((opt) => {
                        const isChecked = formData.websiteType === opt;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, websiteType: opt })}
                            className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? 'bg-primary text-on-primary border-primary shadow-xs'
                                : 'bg-surface-container-low text-on-surface border-[#e3e2df] hover:border-outline'
                            }`}
                          >
                            <span>{opt}</span>
                            {isChecked && (
                              <span className="material-symbols-outlined text-sm">check</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 3: Budget Range */}
                  <div className="space-y-4">
                    <div className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider pb-2 border-b border-[#e3e2df]">
                      03 / ESTIMATED INVESTMENT BRACKET
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgetOptions.map((bracket) => {
                        const isChecked = formData.budgetBracket === bracket;
                        return (
                          <button
                            type="button"
                            key={bracket}
                            onClick={() => setFormData({ ...formData, budgetBracket: bracket })}
                            className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? 'bg-primary text-on-primary border-primary shadow-xs'
                                : 'bg-surface-container-low text-on-surface border-[#e3e2df] hover:border-outline'
                            }`}
                          >
                            <span>{bracket}</span>
                            {isChecked && (
                              <span className="material-symbols-outlined text-sm">check</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 4: Target Timeline */}
                  <div className="space-y-4">
                    <div className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider pb-2 border-b border-[#e3e2df]">
                      04 / TARGET TIMELINE
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelineOptions.map((time) => {
                        const isSelected = selectedTimeline === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setSelectedTimeline(time)}
                            className={`p-3 rounded-lg border text-center text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-surface-container text-primary border-primary font-bold shadow-xs'
                                : 'bg-surface-container-low text-on-surface-variant border-[#e3e2df] hover:border-outline'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 5: Project Details */}
                  <div className="space-y-3">
                    <div className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider pb-2 border-b border-[#e3e2df]">
                      05 / PROJECT DETAILS &amp; AMBITIONS
                    </div>

                    <textarea
                      rows={5}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us about your brand positioning, core objectives, current website pain points, and any specific references that inspire you..."
                      className="w-full px-4 py-3 rounded-lg border border-[#e3e2df] bg-surface-container-low text-on-surface text-sm focus:outline-none focus:border-primary transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-4 border-t border-[#e3e2df]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-primary text-on-primary hover:bg-black rounded-xl font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmitting Project Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </>
                      )}
                    </button>
                    <div className="text-center text-xs text-on-surface-variant mt-3">
                      Confidentiality guaranteed. All inquiries signed under standard mutual NDA upon request.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
