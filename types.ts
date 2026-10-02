/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Microservices' | 'Event-Driven' | 'Cloud & Systems';
  period: string;
  role: string;
  clientOrOrg?: string;
  summary: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  architectureDetails: string[];
  responsibilities: string[];
  diagramType: 'spectrum' | 'endeavour' | 'serviceBooking';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  summary: string;
  bullets: string[];
  keyMetrics: { label: string; value: string }[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    experience: string;
    tags: string[];
  }[];
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  status: string;
  credentialScope: string[];
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  coursework: string[];
}

export interface LeadershipItem {
  title: string;
  organization: string;
  highlight: string;
  description: string;
}
