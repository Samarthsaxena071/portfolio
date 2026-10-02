/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Experience, Project, SkillGroup, Certification, Education, LeadershipItem } from '../types';

export const PERSONAL_INFO = {
  name: "Samarth Saxena",
  role: "Java Full Stack Developer",
  specialization: "Distributed Systems & Microservices | AWS Cloud",
  location: "Indore, India",
  phone: "+91 8319806166",
  email: "samarthsaxena312@gmail.com",
  linkedin: "https://linkedin.com/in/samarth-saxena-845a55200",
  linkedinDisplay: "linkedin.com/in/samarth-saxena-845a55200",
  github: "https://github.com/Samarthsaxena071",
  githubDisplay: "github.com/Samarthsaxena071",
  summary: "Java Full Stack Developer with 3 years of experience building scalable, cloud-native microservices on Java 17, Spring Boot 3, and AWS, serving 500+ concurrent users at 99.9% uptime. Proven track record cutting database latency by 40% and deployment time by 35% through CI/CD automation and query optimization."
};

export const CORE_METRICS = [
  { value: "3 Yrs", label: "Experience", description: "Java & Microservices" },
  { value: "500+", label: "Concurrent Users", description: "At 99.9% uptime" },
  { value: "40%", label: "Latency Cut", description: "MySQL & Postgres tuning" },
  { value: "35%", label: "Faster Deployments", description: "Jenkins CI/CD automation" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "divergent",
    role: "Senior Java Developer",
    company: "Divergent Software Labs",
    location: "Indore, India",
    period: "May 2026 – Present",
    isCurrent: true,
    type: "Full-Time",
    summary: "Leading backend microservices architecture for an on-demand service-booking platform.",
    bullets: [
      "Architected and shipped an on-demand service-booking platform on Java, Spring Boot 3, and MySQL powering customer, provider, and admin workflows.",
      "Designed RESTful APIs for onboarding, booking, scheduling, and payments using domain-driven design.",
      "Cut average API response time by 40% through MySQL query optimization and composite indexing.",
      "Implemented role-based authentication and authorization (RBAC) with Spring Security."
    ],
    keyMetrics: [
      { label: "Query Speed", value: "-40% Latency" },
      { label: "Security", value: "Spring Security RBAC" }
    ],
    technologies: ["Java 17", "Spring Boot 3", "MySQL", "Spring Security", "REST APIs", "Docker"]
  },
  {
    id: "tcs",
    role: "Java Developer",
    company: "Tata Consultancy Services",
    location: "Indore, India",
    period: "Nov 2023 – Mar 2026",
    isCurrent: false,
    type: "Full-Time",
    summary: "Engineered enterprise microservices and secure service-to-service communication.",
    bullets: [
      "Built and maintained enterprise-grade microservices on Java 8/11/17, Spring Boot, Spring Cloud, and Hibernate.",
      "Designed secure RESTful APIs with JWT and OAuth 2.0 for zero-trust service-to-service communication.",
      "Reduced query latency by up to 40% by optimizing MySQL and PostgreSQL indexing and data access patterns.",
      "Increased fault tolerance via API Gateway and Service Discovery; achieved 85%+ code coverage with JUnit 5 & Mockito, cutting production bugs by ~30%."
    ],
    keyMetrics: [
      { label: "Code Coverage", value: "85%+ Test Suite" },
      { label: "Bug Reduction", value: "~30% Drop" }
    ],
    technologies: ["Java 17", "Spring Boot", "Spring Cloud", "Hibernate", "JWT / OAuth2", "PostgreSQL", "JUnit 5", "Mockito"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "spectrum",
    title: "Spectrum — Diamond Laboratory Management",
    subtitle: "Modular Microservices with AI Gemstone Inspection",
    category: "Microservices",
    period: "Nov 2023 – Present",
    role: "Backend Architect",
    summary: "Enterprise diamond laboratory operations platform serving 500+ concurrent users and 1,000+ daily transactions at 99.9% uptime.",
    metrics: [
      { label: "Concurrent Users", value: "500+" },
      { label: "Daily Txns", value: "1,000+" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Processing Speed", value: "+40%" }
    ],
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "Spring AI", "Hibernate", "Docker", "Jenkins", "AWS"],
    architectureDetails: [
      "Built modular microservices with Spring Boot and Spring Data JPA decoupling lab boundaries.",
      "Integrated Spring AI for computer-vision gemstone grading, reducing manual inspection time by 40%.",
      "Automated Maven and Jenkins CI/CD pipelines, cutting deployment cycle by 35%."
    ],
    responsibilities: [
      "Designed relational schemas and JPA entity lifecycles to handle diamond batch tracking and certification.",
      "Implemented role-based workflows for lab technicians, gemologists, and certification approvers."
    ],
    diagramType: "spectrum"
  },
  {
    id: "endeavour",
    title: "Endeavour — Workflow Automation Platform",
    subtitle: "Event-Driven Asynchronous Messaging with Kafka & RabbitMQ",
    category: "Event-Driven",
    period: "Jan 2024 – Present",
    role: "Distributed Systems Engineer",
    summary: "Asynchronous business workflow automation platform coordinating decoupled services with reliable messaging.",
    metrics: [
      { label: "Messaging", value: "Kafka + RabbitMQ" },
      { label: "CI/CD Speedup", value: "-35% Time" },
      { label: "Reliability", value: "Zero Loss SLA" },
      { label: "Packaging", value: "Dockerized" }
    ],
    stack: ["Java 17", "Spring Boot", "Spring Cloud", "Apache Kafka", "RabbitMQ", "Docker", "Jenkins"],
    architectureDetails: [
      "Engineered asynchronous publish-subscribe pipelines with Kafka for event streaming and RabbitMQ for transactional job routing.",
      "Implemented dead-letter queues (DLQ), idempotency keys, and exponential backoff retry policies.",
      "Dockerized microservice components with Jenkins continuous integration pipelines."
    ],
    responsibilities: [
      "Configured topic partitioning, consumer group rebalancing, and JSON/Avro serialization.",
      "Tuned JVM thread pools and connection parameters for high-throughput messaging."
    ],
    diagramType: "endeavour"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages & Core",
    description: "Core OOP fundamentals and concurrency.",
    items: [
      { name: "Java (8, 11, 17, 21)", level: "Expert", experience: "3+ Yrs", tags: ["Streams", "Virtual Threads", "Concurrency"] },
      { name: "SQL", level: "Advanced", experience: "3 Yrs", tags: ["Query Tuning", "Indexing", "Transactions"] },
      { name: "Python", level: "Proficient", experience: "2 Yrs", tags: ["Automation", "Scripting"] }
    ]
  },
  {
    category: "Backend & Microservices",
    description: "Enterprise Java framework expertise.",
    items: [
      { name: "Spring Boot 3 & MVC", level: "Expert", experience: "3 Yrs", tags: ["REST APIs", "Actuator", "Profiles"] },
      { name: "Spring Cloud", level: "Advanced", experience: "2.5 Yrs", tags: ["API Gateway", "Eureka Discovery"] },
      { name: "Spring Security", level: "Advanced", experience: "2.5 Yrs", tags: ["JWT", "OAuth 2.0", "RBAC"] },
      { name: "Spring Data JPA & Hibernate", level: "Expert", experience: "3 Yrs", tags: ["Entity Lifecycle", "QueryDSL"] },
      { name: "Spring AI", level: "Proficient", experience: "1 Yr", tags: ["AI Inspection", "Model Integration"] }
    ]
  },
  {
    category: "Distributed Systems & Messaging",
    description: "High-throughput asynchronous event transport.",
    items: [
      { name: "Apache Kafka", level: "Advanced", experience: "2 Yrs", tags: ["Partitions", "Consumer Groups", "Pub/Sub"] },
      { name: "RabbitMQ", level: "Advanced", experience: "2 Yrs", tags: ["Exchanges", "Queues", "DLQ"] },
      { name: "Event-Driven Architecture", level: "Advanced", experience: "2.5 Yrs", tags: ["Asynchronous Choreography"] }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Containerization and AWS cloud infrastructure.",
    items: [
      { name: "AWS Cloud Infrastructure", level: "Certified", experience: "2+ Yrs", tags: ["Lambda", "API Gateway", "S3", "DynamoDB", "IAM", "CloudWatch", "CloudFront", "KMS"] },
      { name: "Docker & Containerization", level: "Advanced", experience: "2.5 Yrs", tags: ["Multi-Stage Builds", "Docker Compose"] },
      { name: "Kubernetes", level: "Intermediate", experience: "1.5 Yrs", tags: ["Pods", "Deployments", "Services"] },
      { name: "Jenkins CI/CD & Maven", level: "Advanced", experience: "2.5 Yrs", tags: ["Pipeline-as-Code", "Automation"] }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational data modeling and query optimization.",
    items: [
      { name: "MySQL 8.0", level: "Expert", experience: "3 Yrs", tags: ["InnoDB", "Indexing", "Query Profiling"] },
      { name: "PostgreSQL", level: "Advanced", experience: "2 Yrs", tags: ["ACID", "JSONB", "Connection Pooling"] },
      { name: "MongoDB & SQLite", level: "Proficient", experience: "2 Yrs", tags: ["Document Modeling", "Embedded DB"] }
    ]
  },
  {
    category: "Testing & Practices",
    description: "High-coverage test automation and agile delivery.",
    items: [
      { name: "JUnit 5 & Mockito", level: "Expert", experience: "3 Yrs", tags: ["85%+ Code Coverage", "Unit & Integration"] },
      { name: "System Design & Architecture", level: "Advanced", experience: "2.5 Yrs", tags: ["High Availability", "Microservices"] },
      { name: "Git, GitHub & Agile/Scrum", level: "Expert", experience: "3 Yrs", tags: ["CI/CD", "Sprint Planning", "Code Reviews"] }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    period: "Feb 2026 – Feb 2029",
    status: "Active & Verified",
    credentialScope: [
      "AWS Lambda & Serverless Compute",
      "Amazon API Gateway & Microservice Routing",
      "Amazon S3 & DynamoDB Data Modeling",
      "AWS IAM & Zero-Trust Security Policies",
      "Amazon CloudWatch & Observability",
      "CloudFront CDN & KMS Encryption"
    ],
    icon: "aws"
  }
];

export const EDUCATION: Education = {
  degree: "Bachelor of Technology in Computer Science",
  institution: "Medicaps University",
  location: "Indore, MP, India",
  period: "Aug 2019 – Sep 2023",
  score: "CGPA: 8.65 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "DBMS",
    "OOP",
    "Software Engineering",
    "Operating Systems",
    "Computer Networks",
    "Multithreading",
    "System Design"
  ]
};

export const LEADERSHIP_AND_HONORS: LeadershipItem[] = [
  {
    title: "Technical Mentorship",
    organization: "Internal Engineering Team",
    highlight: "Mentored 3 Junior Developers",
    description: "Conducted internal sessions on Spring Boot best practices, clean-code standards, and JUnit 5/Mockito test automation."
  },
  {
    title: "Engineering Impact Recognition",
    organization: "Delivery & Impact Awards",
    highlight: "40% DB Optimization",
    description: "Recognized for consistent on-time delivery, cutting database latency by 40% and defect rates by ~30%."
  },
  {
    title: "Google DeepMind AI Kaggle",
    organization: "Competitive Tech",
    highlight: "Participant & Volunteer",
    description: "Participated in the Google DeepMind AI challenge on Kaggle; active volunteer with TCS Maitree cultural initiatives."
  }
];
