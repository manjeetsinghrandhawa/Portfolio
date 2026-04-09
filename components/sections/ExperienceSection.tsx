"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const experience = {
  title: "Full Stack Developer Trainee",
  company: "QuantumIT Innovation",
  location: "Remote, India",
  period: "November 2025 – April 2026",
  highlights: [
    "Designed and developed complete backend architecture for Admin, Guard, and User roles using Node.js, Express.js, PostgreSQL, and JWT authentication",
    "Built and optimized REST APIs, managed relational data using PostgreSQL with pgAdmin 4",
    "Owned and managed Admin Panel frontend using Next.js, React.js, Tailwind CSS, and ShadCN",
    "Implemented cron jobs for automated scheduling and background tasks",
    "Deployed and maintained services on AWS and Render",
    "Used Postman for API testing, debugging, and validation",
    "Improved application performance, scalability, and maintainability",
  ],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-[var(--bg-card)] bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Professional journey and achievements
        </p>
        <div className="card-3d bg-[var(--bg-dark)] rounded-2xl p-8 glow-box relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />
          <div className="pl-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-4 py-1 rounded-full bg-[var(--primary)] bg-opacity-20 text-[var(--primary-glow)] text-sm">
                {experience.period}
              </span>
              <span className="text-[var(--text-secondary)]">{experience.location}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
            <p className="text-[var(--secondary)] text-lg mb-6">{experience.company}</p>
            <ul className="space-y-3">
              {experience.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <FiCheckCircle className="text-[var(--secondary)] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
