import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

const validPaths = ['home', 'work', 'services', 'about', 'contact'];

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathFromUrl = location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  const currentPath = pathFromUrl || 'home';

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [inquiryService, setInquiryService] = useState('');
  const [inquiryProject, setInquiryProject] = useState('');

  useEffect(() => {
    const legacyHash = window.location.hash.replace('#', '').toLowerCase();

    if (validPaths.includes(legacyHash)) {
      navigate(legacyHash === 'home' ? '/' : `/${legacyHash}`, { replace: true });
    } else if (!validPaths.includes(currentPath)) {
      navigate('/', { replace: true });
    }
  }, [currentPath, navigate]);

  useEffect(() => {
    const seo: Record<string, { title: string; description: string }> = {
      home: {
        title: 'YouReco | Website Development Services',
        description: 'YouReco builds professional, responsive websites for businesses and individuals to showcase their brand and grow online.'
      },
      work: {
        title: 'Our Work | YouReco Website Projects',
        description: 'Explore website projects and digital experiences created by YouReco for businesses and individuals.'
      },
      services: {
        title: 'Website Design & Development Services | YouReco',
        description: 'Discover YouReco website design and development services for businesses, professionals and individuals.'
      },
      about: {
        title: 'About YouReco | Website Development Studio',
        description: 'Learn about YouReco and our approach to creating professional websites for businesses and individuals.'
      },
      contact: {
        title: 'Contact YouReco | Start Your Website Project',
        description: 'Contact YouReco to discuss your website requirements, project goals and custom website development.'
      }
    };

    const page = seo[currentPath] ?? seo.home;
    const url = `https://youreco.online${currentPath === 'home' ? '/' : `/${currentPath}`}`;

    document.title = page.title;

    const setMeta = (selector: string, attribute: string, value: string, create: () => HTMLElement) => {
      let element = document.head.querySelector<HTMLElement>(selector);
      if (!element) {
        element = create();
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', page.description, () => {
      const el = document.createElement('meta');
      el.name = 'description';
      return el;
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    setMeta('meta[property="og:title"]', 'content', page.title, () => {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:title');
      return el;
    });

    setMeta('meta[property="og:description"]', 'content', page.description, () => {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:description');
      return el;
    });

    setMeta('meta[property="og:url"]', 'content', url, () => {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:url');
      return el;
    });
  }, [currentPath]);
  const navigateTo = (
    path: string,
    options?: { category?: ProjectCategory; project?: string; service?: string }
  ) => {
    if (options?.category) setSelectedCategory(options.category);
    if (options?.project) setInquiryProject(options.project);
    if (options?.service) setInquiryService(options.service);

    navigate(path === 'home' ? '/' : `/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (project: ProjectItem) => {
    setModalProject(project);
  };

  const handleOpenModalById = (projectId: string) => {
    const found = ARCHIVE_PROJECTS.find((p) => p.id === projectId);
    setModalProject(found ?? ARCHIVE_PROJECTS[0] ?? null);
  };

  const handleInquireFromModal = (projectName: string) => {
    setModalProject(null);
    navigateTo('contact', { project: projectName });
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-secondary/20 selection:text-primary">
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      <main className="flex-1">
        {currentPath === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onFilterWorkCategory={(cat) => navigateTo('work', { category: cat as ProjectCategory })}
            onSelectProjectById={handleOpenModalById}
          />
        )}

        {currentPath === 'work' && (
          <WorkView
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenCaseStudy={handleOpenModal}
            onNavigate={navigateTo}
          />
        )}

        {currentPath === 'services' && (
          <ServicesView
            onNavigate={navigateTo}
            onSelectServiceForInquiry={(service) => navigateTo('contact', { service })}
          />
        )}

        {currentPath === 'about' && <AboutView onNavigate={navigateTo} />}

        {currentPath === 'contact' && (
          <ContactView
            initialServiceName={inquiryService}
            initialProjectName={inquiryProject}
            onNavigate={navigateTo}
          />
        )}
      </main>

      <CaseStudyModal
        project={modalProject}
        onClose={() => setModalProject(null)}
        onInquire={handleInquireFromModal}
      />

      <Footer
        onNavigate={navigateTo}
        onFilterWork={(cat) => navigateTo('work', { category: cat as ProjectCategory })}
      />
    </div>
  );
}

