"use client";
import React from "react";
import {
  FiCloud,
  FiCode,
  FiDatabase,
  FiLayers,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Languages",
    icon: FiCode,
    color: "var(--primary)",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: FiLayers,
    color: "var(--secondary)",
    skills: ["Next.js 14 & 15+", "React.js", "Node.js", "Express.js", "Redux Toolkit", "ShadCN", "Clerk", "Tailwind CSS"],
  },
  {
    title: "Databases & Caching",
    icon: FiDatabase,
    color: "var(--accent)",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "phpMyAdmin 5"],
  },
  {
    title: "DevOps & Cloud",
    icon: FiCloud,
    color: "var(--accent-warm)",
    skills: ["Vercel", "Render", "AWS", "GitHub", "Docker", "CI/CD", "VS Code", "Linux", "NPM", "Yarn"],
  },
  {
    title: "Security & Testing",
    icon: FiShield,
    color: "var(--primary)",
    skills: ["JWT", "OAuth", "RBAC", "Bcrypt", "Postman", "Jest"],
  },
  {
    title: "Soft Skills",
    icon: FiUsers,
    color: "var(--secondary)",
    skills: ["Team Collaboration", "Agile Development", "Problem-Solving", "On-time Delivery", "Client Communication"],
  },
];

const SkillSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="card-3d gradient-border rounded-2xl"
              >
                <div className="bg-[var(--bg-card)] rounded-2xl p-6 h-full relative overflow-hidden">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                    }}
                  />

                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: cat.color }}
                    >
                      <Icon className="text-black text-lg" />
                    </div>
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="skill-tag px-3 py-1.5 rounded-full bg-[var(--bg-dark)] text-[var(--text-secondary)] text-sm border border-[var(--border-subtle)] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
