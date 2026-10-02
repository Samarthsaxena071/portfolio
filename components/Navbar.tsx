/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Menu, X, FileText, Mail, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Overview', id: 'overview' },
    { label: 'Architecture', id: 'architecture' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-theme-header backdrop-blur-md border-b border-theme-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#overview" 
          onClick={(e) => { e.preventDefault(); scrollTo('overview'); }}
          className="group flex items-center gap-2.5 text-theme-main hover:text-sky-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 group-hover:scale-125 transition-transform" />
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-theme-main">
            SAMARTH SAXENA
          </span>
        </a>

        {/* Zone 2: 4-6 nav links, 1-2 word labels, single-line */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-theme-secondary">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-sky-500 transition-colors cursor-pointer py-1 border-b-2 border-transparent hover:border-sky-500 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions + theme toggle button */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-theme-secondary hover:text-theme-main bg-theme-surface hover:bg-theme-surface-elevated border border-theme-border rounded-lg transition-colors cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-sky-600 hover:-rotate-12 transition-transform" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-theme-main bg-theme-surface hover:bg-theme-surface-elevated border border-theme-border rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <FileText className="w-3.5 h-3.5 text-sky-500" />
            <span>View Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-md shadow-sky-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-theme-secondary hover:text-theme-main bg-theme-surface border border-theme-border rounded-lg transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-sky-600" />
            )}
          </button>
          
          <button
            onClick={onOpenResume}
            className="p-2 text-theme-secondary hover:text-theme-main bg-theme-surface border border-theme-border rounded-lg"
            title="View Resume"
          >
            <FileText className="w-4 h-4 text-sky-500" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-theme-secondary hover:text-theme-main bg-theme-surface border border-theme-border focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-theme-surface border-b border-theme-border px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2 text-base font-medium text-theme-main hover:text-sky-500 border-b border-theme-border/60 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-theme-border py-2 text-sm text-theme-secondary">
            <span>Color Theme</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-theme-subtle border border-theme-border rounded-lg"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-sky-600" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-theme-main bg-theme-surface-elevated border border-theme-border rounded-lg"
            >
              <FileText className="w-4 h-4 text-sky-500" />
              <span>Full Resume & PDF</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-sky-600 rounded-lg shadow"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Contact Samarth</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
