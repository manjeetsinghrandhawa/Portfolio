"use client";

import React from "react";
import { FiCheckCircle, FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Absolute Web Pvt Ltd",
    location: "Vadodara, India",
    period: "Jun 2026 – Present",
    type: "Full-time",
    isCurrent: true,
    description:
      "Working in a 3-person full-stack team building Cambrean, a tax and client-onboarding platform for a US-based client.",
    highlights: [
      "Designed and implemented backend logic for a sales tax calculation engine covering 7+ distinct tax rules, including state tax and county tax evaluation",
      "Worked across 70+ of 117 database tables, building and maintaining schema logic and queries supporting tax, onboarding, and client data structures",
      "Built and maintained 35+ REST API endpoints supporting onboarding workflows for individual clients, business clients, and employees",
      "Improved API responsiveness by implementing pagination, sorting, and filtering; improved frontend performance with lazy loading",
      "Engineered a document upload system using physical disk storage, cutting document upload processing time by 60%",
      "Contributed to key system design decisions and participated directly in client meetings with the US-based stakeholder",
    ],
    tech: ["Next.js", "MySQL", "Node.js", "REST APIs"],
    metrics: [
      { value: "115+", label: "DB Tables" },
      { value: "35+", label: "API Endpoints" },
      { value: "60%", label: "Faster Uploads" },
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company: "QuantumIT Innovation",
    location: "Remote, India",
    period: "Nov 2025 – Apr 2026",
    type: "Trainee",
    isCurrent: false,
    description:
      "Solo-architected the entire backend and admin panel for a security management system.",
    highlights: [
      "Designed and developed the complete scalable backend architecture for Admin, Guard, and User roles using Node.js, Express.js, PostgreSQL, and JWT-based authentication",
      "Built and optimized REST APIs with secure role-based access control (RBAC), reducing API response time by 30% through query optimization",
      "Owned the Admin Panel frontend using Next.js and React.js, improving page load performance by 25–35% and cutting initial load time by ~1.2s",
      "Implemented and fine-tuned cron jobs for automated scheduling, reducing API response time by 40% and improving system reliability",
      "Used Postman to test and validate 25+ API endpoints; refactored the codebase to reduce production bugs by ~20%",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Next.js", "JWT", "AWS"],
    metrics: [
      { value: "30%", label: "Faster APIs" },
      { value: "25-35%", label: "Better Load" },
      { value: "~20%", label: "Fewer Bugs" },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-[var(--primary)] opacity-[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] rounded-full bg-[var(--secondary)] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl mx-auto">
            Professional journey — from trainee to full-stack developer
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-16">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div
                className={`timeline-dot ${exp.isCurrent ? "active" : ""}`}
                style={{ top: "28px" }}
              />

              {/* Experience Card */}
              <div className="gradient-border rounded-2xl">
                <div className="bg-[var(--bg-card)] rounded-2xl p-6 md:p-8 relative overflow-hidden">
                  {/* Top gradient line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                      background: exp.isCurrent
                        ? "linear-gradient(90deg, var(--primary), var(--secondary))"
                        : "linear-gradient(90deg, var(--accent), var(--secondary))",
                    }}
                  />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)] text-black text-xs font-bold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                            Current
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--secondary)] text-lg font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[var(--primary)]">
                        {exp.period}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] mb-5 text-sm leading-relaxed border-l-2 border-[var(--border-subtle)] pl-4">
                    {exp.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {exp.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-[var(--bg-dark)] rounded-xl p-3 text-center border border-[var(--border-subtle)]"
                      >
                        <p className="text-lg md:text-xl font-bold gradient-text">
                          {metric.value}
                        </p>
                        <p className="text-[10px] md:text-xs text-[var(--text-secondary)] mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[var(--text-secondary)] text-sm"
                      >
                        <FiCheckCircle className="text-[var(--primary)] mt-0.5 flex-shrink-0 text-sm" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="skill-tag px-3 py-1 rounded-full bg-[var(--bg-dark)] text-[var(--text-secondary)] text-xs border border-[var(--border-subtle)] transition-all cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
