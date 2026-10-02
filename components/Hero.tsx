/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Layers, 
  Github, 
  Linkedin, 
  Mail, 
  FileText,
  Server,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, CORE_METRICS } from '../data/resumeData';

interface HeroProps {
  onExploreArchitecture: () => void;
  onExploreProjects: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreArchitecture,
  onExploreProjects,
  onOpenContact,
  onOpenResume
}) => {
  const [activeTab, setActiveTab] = useState<'backend' | 'events' | 'cloud'>('backend');

  const topologies = {
    backend: {
      title: "Spring Boot 3 & REST Services",
      metrics: "500+ Concurrent Users · Sub-50ms P95",
      points: [
        "Domain-Driven Design (DDD) & clean bounded contexts",
        "Spring Security with stateless JWT & OAuth2 RBAC",
        "Spring Data JPA & Hibernate with query optimization"
      ]
    },
    events: {
      title: "Event-Driven Asynchronous Fabric",
      metrics: "1,000+ Daily Event Txns · Zero Loss SLA",
      points: [
        "Apache Kafka partitioned topics for telemetry & audits",
        "RabbitMQ message exchanges for transactional jobs",
        "Dead-letter queues (DLQ) & idempotent retry policies"
      ]
    },
    cloud: {
      title: "AWS Cloud & Container Runtime",
      metrics: "99.9% Uptime · -35% Deploy Time",
      points: [
        "AWS Lambda, API Gateway, S3, DynamoDB, IAM, KMS",
        "Docker multi-stage builds & containerized microservices",
        "Automated Maven & Jenkins CI/CD pipelines"
      ]
    }
  };

  const current = topologies[activeTab];

  return (
    <section id="overview" className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-theme-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Precise Positioning with Smooth Stagger */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            
            {/* Trust Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-sky-500">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Roles
              </span>
              <span aria-hidden="true" className="text-theme-border-strong">·</span>
              <span className="text-theme-secondary font-medium">AWS Certified Developer</span>
              <span aria-hidden="true" className="text-theme-border-strong">·</span>
              <span className="text-theme-muted">Indore, India</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-theme-main tracking-tight leading-tight">
                Samarth Saxena
              </h1>
              <p className="text-base sm:text-lg font-semibold text-sky-600 dark:text-sky-400 font-display">
                Java Full Stack Developer | Distributed Systems & Microservices | AWS Cloud
              </p>
              <p className="text-sm sm:text-base text-theme-secondary leading-relaxed pt-1">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExploreProjects}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-all shadow-md shadow-sky-500/20 cursor-pointer active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-theme-main bg-theme-surface hover:bg-theme-surface-elevated border border-theme-border rounded-lg transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-sky-500" />
                <span>Resume PDF</span>
              </button>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-theme-secondary hover:text-theme-main hover:bg-theme-surface rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-5 pt-1 text-xs text-theme-muted">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-500 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/Samarthsaxena071</span>
              </a>
              <span className="text-theme-border">|</span>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-500 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* 4 Precise Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="pt-3 border-t border-theme-border grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {CORE_METRICS.map((metric) => (
                <div key={metric.label} className="p-2.5 bg-theme-surface border border-theme-border rounded-lg shadow-sm hover:border-sky-500/40 transition-colors">
                  <div className="text-lg sm:text-xl font-bold font-mono text-theme-main tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-theme-muted mt-0.5 leading-snug">
                    {metric.description}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Precise Stack Snapshot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-theme-surface border border-theme-border rounded-xl overflow-hidden shadow-md">
              
              {/* Header */}
              <div className="px-4 py-2.5 bg-theme-subtle border-b border-theme-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-theme-muted ml-2">architecture-overview</span>
                </div>
                <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  99.9% Uptime
                </span>
              </div>

              {/* Precise Segmented Selector */}
              <div className="p-2 bg-theme-surface border-b border-theme-border flex gap-1">
                {(['backend', 'events', 'cloud'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === tab
                        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold border border-sky-500/30'
                        : 'text-theme-muted hover:text-theme-main'
                    }`}
                  >
                    {tab === 'backend' && 'Microservices'}
                    {tab === 'events' && 'Kafka & Events'}
                    {tab === 'cloud' && 'AWS & CI/CD'}
                  </button>
                ))}
              </div>

              {/* Card Body with Animated Presence */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-theme-main font-display">
                    {current.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-600 dark:text-sky-400 mt-0.5">
                    {current.metrics}
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {current.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-theme-secondary leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onExploreArchitecture}
                  className="w-full py-2 text-xs font-semibold text-theme-main bg-theme-surface-elevated hover:bg-theme-subtle border border-theme-border rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-[0.99]"
                >
                  <Server className="w-3.5 h-3.5 text-sky-500" />
                  <span>Explore System Architecture</span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
