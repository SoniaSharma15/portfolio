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
      <Suspense fallback={<div className="text-center my-2">Loading ProgressBar...</div>}>
        <ProgressBar />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2">Loading Header...</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2">Loading Hero Section...</div>}>
        <HeroicSection />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2">Loading About Section...</div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2">Loading Projects...</div>}>
        <RecentProjects />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2">Loading Certificates...</div>}>
        <Certificates />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2">Loading Tech Stack...</div>}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2">Loading Contact Section...</div>}>
        <ContactSection />
      </Suspense>
    </>
  );
}

export default App;