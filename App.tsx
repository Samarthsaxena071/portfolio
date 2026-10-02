/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { CertificationsAndEducation } from './components/CertificationsAndEducation';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-theme-page text-theme-main selection:bg-sky-500/25 selection:text-theme-main font-sans antialiased transition-colors duration-200 relative">
      
      {/* Top Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(56,189,248,0.6)]" 
        style={{ scaleX }} 
      />

      {/* Navigation Header */}
      <Navbar 
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={() => scrollTo('contact')}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onExploreArchitecture={() => scrollTo('architecture')}
          onExploreProjects={() => scrollTo('projects')}
          onOpenContact={() => scrollTo('contact')}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Interactive Distributed Systems Architecture Explorer */}
        <ArchitectureExplorer />

        {/* Featured Projects & Key Systems (Bento Grid + Case Studies) */}
        <ProjectShowcase />

        {/* Career Experience & Enterprise Track Record */}
        <ExperienceTimeline />

        {/* Technical Skills & Competency Matrix */}
        <SkillsMatrix />

        {/* Certifications, Academic CS Education & Leadership */}
        <CertificationsAndEducation />

        {/* Direct Contact & Quick-Compose Channels */}
        <ContactSection />
      </main>

      {/* Clean Site Footer */}
      <Footer 
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={() => scrollTo('contact')}
      />

      {/* Full ATS Resume Modal & Print Engine */}
      <ResumeModal 
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
