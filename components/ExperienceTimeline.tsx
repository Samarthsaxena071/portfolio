/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check } from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-20 bg-theme-page-alt border-b border-theme-border">
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
            WORK EXPERIENCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-main tracking-tight">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-theme-secondary mt-1">
            3 years delivering scalable microservices across product and enterprise settings.
          </p>
        </motion.div>

        {/* Experience List with Staggered Entrance */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-theme-surface border border-theme-border rounded-xl p-5 sm:p-6 shadow-sm hover:border-theme-border-strong transition-all"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-theme-border">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-display font-bold text-theme-main">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                      — {exp.company}
                    </span>
                  </div>
                  <div className="text-xs text-theme-muted font-mono mt-0.5">
                    {exp.location}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-theme-muted bg-theme-subtle px-2.5 py-1 rounded border border-theme-border shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullets */}
              <div className="py-4 space-y-2">
                {exp.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-theme-secondary leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t border-theme-border flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-theme-muted">
                <span className="font-semibold text-theme-secondary text-[11px] uppercase tracking-wider">Stack:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tech} className="text-theme-secondary">
                    {tech}{tIdx < exp.technologies.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
