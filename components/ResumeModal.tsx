/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_GROUPS, EDUCATION, CERTIFICATIONS, LEADERSHIP_AND_HONORS } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.role} | ${PERSONAL_INFO.specialization}
${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

TECHNICAL SKILLS
${SKILL_GROUPS.map(g => `● ${g.category}: ${g.items.map(i => i.name).join(', ')}`).join('\n')}

WORK EXPERIENCE
${EXPERIENCES.map(e => `
${e.role} — ${e.company} (${e.period})
${e.bullets.map(b => `● ${b}`).join('\n')}
`).join('\n')}

KEY PROJECTS
${PROJECTS.map(p => `
${p.title} (${p.period})
${p.architectureDetails.map(d => `● ${d}`).join('\n')}
● Stack: ${p.stack.join(', ')}
`).join('\n')}

EDUCATION
${EDUCATION.degree} — ${EDUCATION.institution}, ${EDUCATION.location} (${EDUCATION.period})
● ${EDUCATION.score}. Coursework: ${EDUCATION.coursework.join(', ')}

CERTIFICATIONS
● ${CERTIFICATIONS[0].name} — ${CERTIFICATIONS[0].issuer} (${CERTIFICATIONS[0].period})

LEADERSHIP & EXTRACURRICULAR
${LEADERSHIP_AND_HONORS.map(l => `● ${l.title}: ${l.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white text-slate-900 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm text-white">
              Samarth Saxena — Official Resume
            </span>
            <span className="text-[10px] font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
              ATS-Standard
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-800 leading-relaxed font-sans text-xs selection:bg-sky-100">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 font-display">
              SAMARTH SAXENA
            </h1>
            <div className="text-xs font-semibold text-sky-700 mt-0.5">
              Java Full Stack Developer | Distributed Systems & Microservices | AWS Cloud
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] text-slate-600 mt-1.5 font-mono">
              <span>{PERSONAL_INFO.location}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-700">LinkedIn</a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-sky-700">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 font-mono">
              Technical Skills
            </h2>
            <ul className="text-xs space-y-0.5 text-slate-700">
              <li><strong>Languages & Core:</strong> Java 8/11/17/21, SQL, Python</li>
              <li><strong>Backend & Microservices:</strong> Spring Boot 3, Spring Cloud, Spring Security, Spring Data JPA, Hibernate, Spring AI, RESTful APIs, Domain-Driven Design</li>
              <li><strong>Distributed Systems:</strong> Apache Kafka, RabbitMQ, Event-Driven Architecture, API Gateway, Service Discovery</li>
              <li><strong>Cloud & DevOps:</strong> AWS (Lambda, API Gateway, S3, DynamoDB, IAM, CloudWatch, KMS), Docker, Kubernetes, Jenkins CI/CD, Maven</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, SQLite</li>
              <li><strong>Practices & Testing:</strong> JUnit 5, Mockito, System Design, Agile/Scrum, Git/GitHub</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="space-y-2.5">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 font-mono">
              Work Experience
            </h2>
            
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-0.5">
                <div className="flex items-baseline justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-950">{exp.role}</span>
                    <span className="text-slate-600"> — {exp.company}</span>
                  </div>
                  <span className="font-mono text-slate-600 text-[11px]">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs space-y-0.5 text-slate-700 pl-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="leading-snug">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-2.5">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 font-mono">
              Key Projects
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-0.5">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-slate-950">{proj.title}</span>
                  <span className="font-mono text-slate-600 text-[11px]">{proj.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs space-y-0.5 text-slate-700 pl-1">
                  {proj.architectureDetails.map((d, i) => (
                    <li key={i} className="leading-snug">{d}</li>
                  ))}
                  <li><strong>Stack:</strong> {proj.stack.join(', ')}</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-1">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 font-mono">
              Education
            </h2>
            <div className="flex items-baseline justify-between text-xs">
              <div>
                <span className="font-bold text-slate-950">{EDUCATION.degree}</span>
                <span className="text-slate-600"> — {EDUCATION.institution}, {EDUCATION.location}</span>
              </div>
              <span className="font-mono text-slate-600 text-[11px]">{EDUCATION.period}</span>
            </div>
            <p className="text-xs text-slate-700">
              ● <strong>{EDUCATION.score}</strong>. Coursework: {EDUCATION.coursework.join(', ')}.
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-1">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 font-mono">
              Certifications
            </h2>
            <div className="text-xs text-slate-700">
              ● <strong>{CERTIFICATIONS[0].name}</strong> — {CERTIFICATIONS[0].issuer} ({CERTIFICATIONS[0].period}): Lambda, API Gateway, S3, DynamoDB, IAM, CloudWatch, KMS.
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-1">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 font-mono">
              Leadership & Extracurricular
            </h2>
            <ul className="list-disc list-inside text-xs space-y-0.5 text-slate-700 pl-1">
              {LEADERSHIP_AND_HONORS.map((l, i) => (
                <li key={i}><strong>{l.title}:</strong> {l.description}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-5 py-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>Available for Senior Backend & Microservices roles</span>
          <button
            onClick={onClose}
            className="px-3 py-1 font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
