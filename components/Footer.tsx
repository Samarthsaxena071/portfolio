/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-theme-subtle border-t border-theme-border py-12 text-theme-muted text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-bold text-theme-main text-sm tracking-tight">
            SAMARTH SAXENA
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-theme-border-strong">·</span>
          <span className="text-theme-secondary">Java Full Stack Developer & Distributed Systems Engineer</span>
          <span aria-hidden="true" className="hidden sm:inline text-theme-border-strong">·</span>
          <span>Indore, India</span>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-sky-500 transition-colors cursor-pointer bg-transparent border-none text-theme-muted"
          >
            Resume PDF
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-sky-500 transition-colors cursor-pointer bg-transparent border-none text-theme-muted"
          >
            Contact
          </button>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-theme-surface border border-theme-border hover:border-theme-border-strong text-theme-secondary hover:text-theme-main rounded-lg transition-colors cursor-pointer ml-2 shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
