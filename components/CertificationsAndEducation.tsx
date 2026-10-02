/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, LEADERSHIP_AND_HONORS } from '../data/resumeData';

export const CertificationsAndEducation: React.FC = () => {
  return (
    <section id="education" className="py-16 lg:py-20 bg-theme-page-alt border-b border-theme-border">
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
            CREDENTIALS & BACKGROUND
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-main tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-xs sm:text-sm text-theme-secondary mt-1">
            Formal cloud credentials, computer science degree, and leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* AWS Certification */}
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="bg-theme-surface border border-theme-border rounded-xl p-5 shadow-sm hover:border-theme-border-strong hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-theme-border">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                  Verified Credential
                </span>
                <h3 className="text-sm font-bold text-theme-main font-display">
                  {CERTIFICATIONS[0].name}
                </h3>
              </div>
            </div>

            <div className="pt-3 space-y-2">
              <div className="text-xs text-theme-muted font-mono">
                {CERTIFICATIONS[0].issuer} · {CERTIFICATIONS[0].period}
              </div>
              <p className="text-xs text-theme-secondary leading-relaxed">
                Developing, deploying, and maintaining applications using Lambda, API Gateway, S3, DynamoDB, IAM, CloudWatch, and KMS.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="bg-theme-surface border border-theme-border rounded-xl p-5 shadow-sm hover:border-theme-border-strong hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-theme-border">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 font-semibold uppercase">
                  {EDUCATION.score}
                </span>
                <h3 className="text-sm font-bold text-theme-main font-display">
                  {EDUCATION.degree}
                </h3>
              </div>
            </div>

            <div className="pt-3 space-y-2">
              <div className="text-xs text-theme-muted font-mono">
                {EDUCATION.institution}, {EDUCATION.location} ({EDUCATION.period})
              </div>
              <div className="text-[11px] font-mono text-theme-secondary">
                <span className="text-theme-muted font-semibold">Coursework:</span> {EDUCATION.coursework.join(' · ')}
              </div>
            </div>
          </motion.div>

          {/* Leadership & Activities */}
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
            className="bg-theme-surface border border-theme-border rounded-xl p-5 shadow-sm hover:border-theme-border-strong hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-theme-border">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-theme-muted font-semibold uppercase">
                  Extracurricular
                </span>
                <h3 className="text-sm font-bold text-theme-main font-display">
                  Leadership & Impact
                </h3>
              </div>
            </div>

            <div className="pt-3 space-y-2.5">
              {LEADERSHIP_AND_HONORS.map((item, idx) => (
                <div key={idx} className="text-xs">
                  <div className="font-semibold text-theme-main">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-theme-secondary mt-0.5 leading-snug">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
