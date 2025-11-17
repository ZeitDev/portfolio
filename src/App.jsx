import React, { useState, useEffect } from "react";
import "./assets/css/index.css";
import Support from "./pages/Support/Support";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import LegalNotice from "./pages/Hidden/LegalNotice";
import PrivacyPolicy from "./pages/Hidden/PrivacyPolicy";
import AcsEula from "./pages/Hidden/AcsEula";
import { useLocation } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position on route change
  }, [location]);

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Support />
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>`
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legalnotice" element={<LegalNotice />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/acs_eula" element={<AcsEula />} />
        </Routes>
      )}
    </>
  );
}
