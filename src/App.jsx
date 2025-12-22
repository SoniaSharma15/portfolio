import React, { lazy, Suspense } from "react";
import { LuLoaderPinwheel } from "react-icons/lu";

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
      <Suspense fallback={<div className="text-center my-2"><LuLoaderPinwheel/></div>}>
        <ProgressBar />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2"></div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2"> </div>}>
        <HeroicSection />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2"> </div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2"></div>}>
        <RecentProjects />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2"></div>}>
        <Certificates />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2"> </div>}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<div className="text-center my-2"> </div>}>
        <ContactSection />
      </Suspense>
    </>
  );
}

export default App;