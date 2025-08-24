import React, { lazy, Suspense } from "react";

const Header = lazy(() => import('./components/Header'));
const HeroicSection = lazy(() => import('./components/HeroicSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const ProgressBar = lazy(() => import('./components/ProgressBar'));
const RecentProjects = lazy(() => import('./components/RecentProjects'));
const TechStack = lazy(() => import('./components/TechStack'));
const Certificates = lazy(() => import('./components/Certificates'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading ProgressBar...</div>}>
        <ProgressBar />
      </Suspense>

      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroicSection />
      </Suspense>

      <Suspense fallback={<div>Loading About Section...</div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div>Loading Projects...</div>}>
        <RecentProjects />
      </Suspense>

      <Suspense fallback={<div>Loading Certificates...</div>}>
        <Certificates />
      </Suspense>

      <Suspense fallback={<div>Loading Tech Stack...</div>}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<div>Loading Contact Section...</div>}>
        <ContactSection />
      </Suspense>
    </>
  );
}

export default App;