/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Check, Code, Server, ArrowRight } from 'lucide-react';

interface Tier {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  stack: string[];
  highlights: string[];
  snippet: {
    title: string;
    code: string;
  };
}

const TIERS: Tier[] = [
  {
    id: "edge",
    name: "01. Edge & API Gateway",
    subtitle: "Cloud routing & request throttling",
    badge: "AWS Certified",
    stack: ["AWS CloudFront", "Amazon API Gateway", "Route 53", "AWS IAM", "KMS"],
    highlights: [
      "Low-latency TLS edge termination with managed certificates",
      "Token bucket rate limiting and managed DDoS protection",
      "VPC Link reverse routing to internal microservice clusters"
    ],
    snippet: {
      title: "apigateway-route.json",
      code: `{\n  "path": "/api/v1/spectrum/**",\n  "httpMethod": "ANY",\n  "type": "http_proxy",\n  "connectionType": "VPC_LINK",\n  "uri": "http://internal-nlb.vpc/services/spectrum"\n}`
    }
  },
  {
    id: "security",
    name: "02. Spring Security & JWT",
    subtitle: "Stateless zero-trust authentication",
    badge: "Zero-Trust RBAC",
    stack: ["Spring Cloud Gateway", "Spring Security 6", "JWT / OAuth2", "Eureka"],
    highlights: [
      "Stateless RS256 JWT claim and authority validation (<2ms)",
      "Strict role-based access control across Customer, Provider, and Admin roles",
      "Dynamic service registration and client-side load balancing via Eureka"
    ],
    snippet: {
      title: "SecurityConfig.java",
      code: `@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http, JwtAuthFilter jwtFilter) throws Exception {\n    return http.csrf(AbstractHttpConfigurer::disable)\n        .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n        .authorizeHttpRequests(auth -> auth\n            .requestMatchers("/api/v1/auth/**").permitAll()\n            .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")\n            .anyRequest().authenticated())\n        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)\n        .build();\n}`
    }
  },
  {
    id: "microservices",
    name: "03. Domain Microservices",
    subtitle: "Spring Boot 3 & Domain-Driven Design",
    badge: "500+ Concurrent Users",
    stack: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Spring AI", "Hibernate"],
    highlights: [
      "Modular bounded contexts for Lab Grading, Booking, and Workflow engines",
      "Spring AI integration for gemstone grading reducing lab processing by 40%",
      "Declarative @Transactional boundaries with idempotent execution"
    ],
    snippet: {
      title: "DiamondGradingService.java",
      code: `@Service\n@Transactional\npublic class DiamondGradingService {\n    public GradingResult gradeStone(String stoneId, InspectionInput input) {\n        Gemstone stone = repo.findByIdForUpdate(stoneId)\n            .orElseThrow(() -> new EntityNotFoundException(stoneId));\n        GradingResult result = aiClient.analyzeGemstone(input);\n        stone.applyGrading(result.clarity(), result.color(), result.cutGrade());\n        return result;\n    }\n}`
    }
  },
  {
    id: "messaging",
    name: "04. Kafka & Database Tuning",
    subtitle: "Asynchronous streams & query tuning",
    badge: "-40% DB Latency",
    stack: ["Apache Kafka", "RabbitMQ", "MySQL 8.0", "PostgreSQL", "Docker", "Jenkins"],
    highlights: [
      "Partitioned Kafka topics for telemetry and RabbitMQ for transactional jobs",
      "Dead-letter queues (DLQ), idempotency keys, and retry policies",
      "MySQL composite indexing and query tuning cutting latency by 40%"
    ],
    snippet: {
      title: "indexing-and-consumer.sql",
      code: `-- Composite Index for Spatial & Time-Window Scheduling\nCREATE INDEX idx_bookings_provider_schedule \nON service_bookings (provider_id, booking_status, scheduled_time DESC);\n\n-- Covering Index for Diamond Batch Inquiries\nCREATE INDEX idx_diamond_batch \nON diamond_inventory (batch_id, certification_status);`
    }
  }
];

export const ArchitectureExplorer: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState<string>("microservices");
  const [copied, setCopied] = useState(false);

  const activeTier = TIERS.find(t => t.id === activeTierId) || TIERS[2];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTier.snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-16 lg:py-20 bg-theme-page-alt border-b border-theme-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-8"
        >
          <div className="text-xs font-mono text-sky-500 font-semibold mb-1">
            ARCHITECTURE & SYSTEM DESIGN
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-theme-main tracking-tight">
            Distributed Systems Architecture
          </h2>
          <p className="text-xs sm:text-sm text-theme-secondary mt-1">
            End-to-end microservice topology across AWS, Spring Boot 3, Kafka, and tuned relational databases.
          </p>
        </motion.div>

        {/* 4-Step Ribbon Selector with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6"
        >
          {TIERS.map((tier) => {
            const isSelected = tier.id === activeTier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-theme-surface border-sky-500 shadow-sm'
                    : 'bg-theme-surface/70 border-theme-border hover:bg-theme-surface hover:border-theme-border-strong'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className={isSelected ? 'text-sky-500 font-semibold' : 'text-theme-muted'}>
                    {tier.name.split('.')[0]}
                  </span>
                  <span className="text-[10px] text-theme-muted bg-theme-subtle px-1.5 py-0.5 rounded border border-theme-border">
                    {tier.badge}
                  </span>
                </div>
                <div className="text-xs font-semibold text-theme-main truncate">
                  {tier.name.split('. ')[1]}
                </div>
                <div className="text-[11px] text-theme-muted truncate mt-0.5">
                  {tier.subtitle}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Concise Detail Card with Smooth Pop-In */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-theme-surface border border-theme-border rounded-xl overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Specs */}
            <div className="lg:col-span-6 p-5 sm:p-6 space-y-4 border-b lg:border-b-0 lg:border-r border-theme-border">
              <div>
                <div className="text-xs font-mono text-sky-500 font-medium">
                  {activeTier.badge}
                </div>
                <h3 className="text-lg font-display font-bold text-theme-main">
                  {activeTier.name}
                </h3>
                <p className="text-xs text-theme-secondary mt-0.5">
                  {activeTier.subtitle}
                </p>
              </div>

              {/* Stack */}
              <div>
                <div className="text-[11px] font-mono text-theme-muted uppercase tracking-wider mb-1.5 font-semibold">
                  Technologies
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                  {activeTier.stack.map((item) => (
                    <span 
                      key={item} 
                      className="px-2 py-0.5 bg-theme-subtle text-theme-secondary border border-theme-border rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono text-theme-muted uppercase tracking-wider font-semibold">
                  Engineering Principles
                </div>
                <ul className="space-y-1.5">
                  {activeTier.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-theme-secondary leading-normal">
                      <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Code Block */}
            <div className="lg:col-span-6 bg-[#070a12] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    {activeTier.snippet.title}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-sky-400 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Code className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="py-3 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[220px]">
                  <pre>
                    <code>{activeTier.snippet.code}</code>
                  </pre>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Production Pattern</span>
                <span>Java 17 / Spring Boot 3</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
