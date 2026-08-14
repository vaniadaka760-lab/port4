/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Snapshot } from "./components/Snapshot";
import { Leadership } from "./components/Leadership";
import { Skills } from "./components/Skills";
import { Training } from "./components/Training";
import { Initiatives } from "./components/Initiatives";
import { Vision } from "./components/Vision";
import { Recognitions } from "./components/Recognitions";
import { Experience } from "./components/Experience";
import { Timeline } from "./components/Timeline";
import { Endorsements } from "./components/Endorsements";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const targetId = hash.replace("#", "");
    if (targetId && targetId !== "home") {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80; // Alignment offsetting for fixed header
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "auto"
          });
        }
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary selection:bg-brand-accent/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Snapshot />
        <Leadership />
        <Skills />
        <Training />
        <Initiatives />
        <Vision />
        <Recognitions />
        <Experience />
        <Timeline />
        <Endorsements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
