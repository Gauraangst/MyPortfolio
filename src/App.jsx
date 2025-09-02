import React from 'react'
import { useEffect } from 'react';
import LandingPage from './layouts/LandingPage'
import AOS from "aos"
import "aos/dist/aos.css";
import CursorFollower from "./components/CursorFollower/CursorFollower";
import Education from './components/Education/Education';
import Experience from './components/MyProjects/Experience';
import ContactSection from './components/ContactSection/ContactSection';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div>
      <CursorFollower/>
      <LandingPage />
      <Education/>
      <Experience/>
      <ContactSection/>
      
    </div>
  )
}

export default App