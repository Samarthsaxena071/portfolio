/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../data/resumeData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-16 lg:py-20 bg-theme-page border-b border-theme-border">
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
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-main tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xs sm:text-sm text-theme-secondary mt-1">
            Core technologies, microservice frameworks, and distributed cloud tools.
          </p>
        </motion.div>

        {/* 6 Grid Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-theme-surface border border-theme-border rounded-xl p-5 shadow-sm hover:border-theme-border-strong hover:shadow-md transition-all"
            >
              <h3 className="text-sm font-display font-bold text-theme-main pb-2 border-b border-theme-border flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 font-normal">
                  {group.items.length} items
                </span>
              </h3>

              <div className="pt-3 space-y-2.5">
                {group.items.map((skill) => (
                  <div key={skill.name} className="text-xs">
                    <div className="flex items-center justify-between font-semibold text-theme-main">
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono text-theme-muted font-normal">
                        {skill.level}
                      </span>
                    </div>
                    <div className="text-[11px] text-theme-muted font-mono mt-0.5">
                      {skill.tags.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
