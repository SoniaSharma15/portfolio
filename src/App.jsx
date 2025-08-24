import React, { useEffect, useLayoutEffect } from 'react'
import Header from './components/Header'
import HeroicSection from './components/HeroicSection'
import AboutSection from './components/AboutSection'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import ContactSection from './components/ContactSection'
import ProgressBar from './components/ProgressBar'
import RecentProjects from './components/RecentProjects'
import { TechStack } from './components/TechStack'
import { Certificates } from './components/Certificates'
function App() {
  // useEffect(()=>{
  //   //register scrollTrigger plugin
  //   gsap.registerPlugin(ScrollTrigger)
  //   //refresh ScrollTrigger when the page is fully loaded
  //   ScrollTrigger.refresh()
  //   //clean up scrollTrigger on component unmount
  //   return ScrollTrigger.getAll().forEach((trigger)=> trigger.kill())
  // },[])
  useLayoutEffect(() => {
  //register scrollTrigger plugin

  gsap.registerPlugin(ScrollTrigger);

  // Refresh AFTER animations are set up
  ScrollTrigger.refresh();

  // Proper cleanup on unmount
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <>
    <ProgressBar/>
    <Header/>
    <HeroicSection/>
    <AboutSection/>
    <RecentProjects/>
    <Certificates/>
    <TechStack/>
    <ContactSection/>
    </>
  )
}

export default App