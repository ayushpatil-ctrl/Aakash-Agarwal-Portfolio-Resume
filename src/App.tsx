import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import MUNVitaeSection from './components/MUNVitaeSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import QuickFinderModal from './components/QuickFinderModal';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';

import {
  profileData,
  educationData,
  experienceData,
  munData,
  skillsData,
  themes,
} from './data/portfolioData';
import { ThemeMode } from './types';

export default function App() {
  const currentTheme: ThemeMode = 'burgundy';

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const theme = themes[currentTheme];

  // Global keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    // Clear legacy theme overrides so the site always loads the Orbit theme
    localStorage.setItem('portfolio_theme_v2', 'burgundy');
    document.documentElement.classList.remove('dark');

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      id="portfolio-app-root"
      className={`min-h-screen transition-colors duration-200 ${theme.bg} ${theme.textPrimary}`}
    >
      {/* Scroll Progress & Floating Action Bar */}
      <ScrollProgressIndicator
        currentTheme={currentTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Sticky Top Navigation */}
      <Navbar
        currentTheme={currentTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="portfolio-main-content">
        {/* Hero Section */}
        <Hero
          profile={profileData}
          currentTheme={currentTheme}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Narrative About & Trajectory */}
        <AboutSection
          profile={profileData}
          currentTheme={currentTheme}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Education & Academic Honors */}
        <EducationSection
          education={educationData}
          currentTheme={currentTheme}
        />

        {/* Experience & University Fellowships */}
        <ExperienceSection
          experiences={experienceData}
          currentTheme={currentTheme}
        />

        {/* Model UN, Secretariat & Leadership Vitae */}
        <MUNVitaeSection
          munItems={munData}
          currentTheme={currentTheme}
        />

        {/* Key Skills & Practical Matrix */}
        <SkillsSection
          skillGroups={skillsData}
          currentTheme={currentTheme}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profileData}
        currentTheme={currentTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Spotlight Search Modal */}
      <QuickFinderModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        currentTheme={currentTheme}
        experiences={experienceData}
        munItems={munData}
        skillGroups={skillsData}
        education={educationData}
        profile={profileData}
      />

      {/* Full Resume Modal (Printable & Copyable) */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        currentTheme={currentTheme}
        profile={profileData}
        education={educationData}
        experiences={experienceData}
        munItems={munData}
      />
    </div>
  );
}
