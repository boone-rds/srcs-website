import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ScrollToHash from './components/ScrollToHash/ScrollToHash';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute/ScrollToTopOnRoute';
import ContactModalProvider from './components/ContactModal/ContactModalProvider';
import Home from './pages/Home/Home';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import DigDeeperPage from './pages/DigDeeper/DigDeeper';

type PageMetadata = {
  title: string;
  description: string;
};

const SITE_URL = 'https://soilright.com';

const HOME_METADATA: PageMetadata = {
  title:
    'Soil-Right Consulting Services | Better Decisions Start Below the Surface',
  description:
    'Soil-Right combines decades of agronomic experience with modern field data to help growers make better decisions about soil, fertility, and field performance.',
};

const PAGE_METADATA: Record<string, PageMetadata> = {
  '/': HOME_METADATA,
  '/what-we-do': {
    title: 'What We Do | Soil-Right Consulting Services',
    description:
      'Explore Soil-Right consulting across soil and fertility, plant performance, farm efficiency, data and decisions, and education and stewardship.',
  },
  '/dig-deeper': {
    title: 'Dig Deeper | Soil-Right Consulting Services',
    description:
      'Explore Soil-Right insights, educational resources, and decision-support tools designed to help people understand their land and make better decisions.',
  },
  '/meet-the-team': {
    title: 'Meet the Team | Soil-Right Consulting Services',
    description:
      'Meet the Soil-Right team combining decades of agronomic experience, field operations, and data-informed decision support.',
  },
};

function upsertMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = PAGE_METADATA[pathname] ?? HOME_METADATA;
    const canonicalUrl = new URL(pathname, SITE_URL).toString();

    document.title = metadata.title;

    upsertMetaTag('name', 'description', metadata.description);
    upsertMetaTag('property', 'og:title', metadata.title);
    upsertMetaTag('property', 'og:description', metadata.description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('name', 'twitter:title', metadata.title);
    upsertMetaTag('name', 'twitter:description', metadata.description);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ContactModalProvider>
      <RouteMetadata />
      <ScrollToHash />
      <ScrollToTopOnRoute />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/dig-deeper" element={<DigDeeperPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <BackToTop />
    </ContactModalProvider>
  );
}

export default App;
