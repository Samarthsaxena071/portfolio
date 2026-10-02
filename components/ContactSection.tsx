/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Engineering Role Inquiry — Samarth Saxena")}`;

  return (
    <section id="contact" className="py-16 lg:py-20 bg-theme-page border-b border-theme-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-8"
        >
          <div className="text-xs font-mono text-sky-500 font-semibold mb-1">
            CONTACT & CONNECT
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-main tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-theme-secondary mt-1">
            Available for Senior Java, Microservices, and Distributed Systems roles.
          </p>
        </motion.div>

        {/* 4 Clean Contact Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          
          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="bg-theme-surface border border-theme-border rounded-xl p-4 flex items-center justify-between shadow-sm hover:border-theme-border-strong transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono text-theme-muted uppercase">Email</div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-semibold text-theme-main hover:text-sky-500 truncate block">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 text-theme-muted hover:text-sky-500 cursor-pointer ml-1"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </motion.div>

          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-theme-surface border border-theme-border rounded-xl p-4 flex items-center justify-between shadow-sm hover:border-theme-border-strong transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-theme-muted uppercase">Phone</div>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs font-semibold text-theme-main hover:text-emerald-500">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-1.5 text-theme-muted hover:text-emerald-500 cursor-pointer"
              title="Copy phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-theme-surface border border-theme-border rounded-xl p-4 flex items-center gap-3 shadow-sm hover:border-theme-border-strong transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-theme-muted uppercase">Location</div>
              <div className="text-xs font-semibold text-theme-main">{PERSONAL_INFO.location}</div>
            </div>
          </motion.div>

          {/* Direct CTA */}
          <motion.a
            href={mailtoLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-sky-600 hover:bg-sky-500 text-white rounded-xl p-4 flex items-center justify-center gap-2 shadow-sm font-semibold text-xs transition-all active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Direct Email</span>
          </motion.a>

        </div>

        {/* Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-theme-border text-xs text-theme-muted"
        >
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-sky-500 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-sky-500 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repositories</span>
            </a>
          </div>

          <span>Open to Remote, Hybrid & Relocation Opportunities</span>
        </motion.div>

      </div>
    </section>
  );
};
