import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HomeView } from './views/HomeView';
import { WorkView } from './views/WorkView';
import { ServicesView } from './views/ServicesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { ARCHIVE_PROJECTS } from './data/projectsData';
import { ProjectCategory, ProjectItem } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [inquiryService, setInquiryService] = useState<string>('');
  const [inquiryProject, setInquiryProject] = useState<string>('');

  // Synchronize with URL hash for navigation & bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'work', 'services', 'about', 'contact'].includes(hash)) {
        setCurrentPath(hash);
      } else if (!hash) {
        setCurrentPath('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string, options?: { category?: ProjectCategory; project?: string; service?: string }) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (options?.category) {
      setSelectedCategory(options.category);
    }
    if (options?.project) {
      setInquiryProject(options.project);
    }
    if (options?.service) {
      setInquiryService(options.service);
    }
  };

  const handleOpenModal = (project: ProjectItem) => {
    setModalProject(project);
  };

  const handleOpenModalById = (projectId: string) => {
    const found = ARCHIVE_PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setModalProject(found);
    } else {
      // Default to first archive project
      setModalProject(ARCHIVE_PROJECTS[0]);
    }
  };

  const handleInquireFromModal = (projectName: string) => {
    setModalProject(null);
    navigateTo('contact', { project: projectName });
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-secondary/20 selection:text-primary">
      {/* Sticky Universal Header */}
      <Header currentPath={currentPath} onNavigate={(path) => navigateTo(path)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPath === 'home' && (
          <HomeView
            onNavigate={(path) => navigateTo(path)}
            onFilterWorkCategory={(cat) => navigateTo('work', { category: cat as ProjectCategory })}
            onSelectProjectById={handleOpenModalById}
          />
        )}

        {currentPath === 'work' && (
          <WorkView
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenCaseStudy={handleOpenModal}
            onNavigate={(path) => navigateTo(path)}
          />
        )}

        {currentPath === 'services' && (
          <ServicesView
            onNavigate={(path) => navigateTo(path)}
            onSelectServiceForInquiry={(service) => navigateTo('contact', { service })}
          />
        )}

        {currentPath === 'about' && (
          <AboutView onNavigate={(path) => navigateTo(path)} />
        )}

        {currentPath === 'contact' && (
          <ContactView
            initialServiceName={inquiryService}
            initialProjectName={inquiryProject}
            onNavigate={(path) => navigateTo(path)}
          />
        )}
      </main>

      {/* Deep-Dive Case Concept Modal */}
      <CaseStudyModal
        project={modalProject}
        onClose={() => setModalProject(null)}
        onInquire={handleInquireFromModal}
      />

      {/* Universal Footer */}
      <Footer
        onNavigate={(path) => navigateTo(path)}
        onFilterWork={(cat) => navigateTo('work', { category: cat as ProjectCategory })}
      />
    </div>
  );
}
