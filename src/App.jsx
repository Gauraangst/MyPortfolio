import React from 'react'
import { useEffect } from 'react';
import LandingPage from './layouts/LandingPage'
import AOS from "aos"
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div>
      <LandingPage />
      
    </div>
  )
}

export default App