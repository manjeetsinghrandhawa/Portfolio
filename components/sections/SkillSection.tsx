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
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: FiLayers,
    skills: ["Next.js 14 & 15", "React.js", "Node.js", "Express.js", "Redux Toolkit", "ShadCN", "Clerk", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: FiCloud,
    skills: ["Vercel", "Render", "AWS", "GitHub", "Docker", "CI/CD", "Linux", "NPM", "Yarn"],
  },
  {
    title: "Security & Testing",
    icon: FiShield,
    skills: ["JWT", "OAuth", "Bcrypt", "Postman", "Jest"],
  },
  {
    title: "Soft Skills",
    icon: FiUsers,
    skills: ["Team Collaboration", "Agile Development", "Problem-Solving", "On-time Delivery"],
  },
];

const SkillSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="card-3d bg-[var(--bg-card)] rounded-2xl p-6 glow-box">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                    <Icon className="text-black" />
                  </div>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[var(--bg-dark)] text-white text-sm hover:text-[var(--primary)] hover:border-[var(--primary)] border border-transparent transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
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
