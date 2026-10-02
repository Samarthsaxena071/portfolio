/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { PROJECTS } from '../data/resumeData';

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-16 lg:py-20 bg-theme-page border-b border-theme-border">
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
            KEY PROJECTS & SYSTEMS
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-main tracking-tight">
            Featured Systems
          </h2>
          <p className="text-xs sm:text-sm text-theme-secondary mt-1">
            Production microservices platforms built with Java 17, Spring Boot, Kafka, and AWS.
          </p>
        </motion.div>

        {/* 2-Column Project Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-theme-surface border border-theme-border rounded-xl p-6 flex flex-col justify-between shadow-sm hover:border-theme-border-strong hover:shadow-md transition-all group"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-theme-muted font-mono mb-2">
                  <span className="text-sky-600 dark:text-sky-400 font-medium">{project.category}</span>
                  <span>{project.period}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-theme-main group-hover:text-sky-500 transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-theme-secondary font-medium mt-0.5 mb-3">
                  {project.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-2 bg-theme-subtle border border-theme-border rounded text-center">
                      <div className="text-xs sm:text-sm font-bold font-mono text-theme-main tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-theme-muted truncate mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Architecture Bullets */}
                <ul className="space-y-1.5 mb-5">
                  {project.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-theme-secondary leading-normal">
                      <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Footer */}
              <div className="pt-3 border-t border-theme-border">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-theme-muted">
                  <span className="font-semibold text-theme-secondary">Stack:</span>
                  {project.stack.map((tech, i) => (
                    <span key={tech} className="text-theme-secondary">
                      {tech}{i < project.stack.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
