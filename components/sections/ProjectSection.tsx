"use client";

import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "DevFlow",
    desc: "Community-driven Q&A platform for developers with AI-powered assistance using Google Gemini",
    tech: ["Next.js 15", "ShadCN", "Clerk", "MongoDB", "Google Gemini"],
    github: "https://github.com/manjeetsinghrandhawa/devflow",
    live: "https://devflow-tau-olive.vercel.app/",
  },
  {
    title: "EduSpark",
    desc: "Full-stack online learning platform with Razorpay integration and real-time progress tracking",
    tech: ["MERN Stack", "MongoDB", "Razorpay", "Real-time Tracking"],
    github: "https://github.com/manjeetsinghrandhawa/eduspark-host",
    live: "https://eduspark-host.vercel.app/",
  },
  {
    title: "Media & Docs Manager",
    desc: "Secure full-stack file management system with JWT auth and cloud storage integration",
    tech: ["Next.js 15", "Node.js", "MongoDB", "JWT", "Cloud Storage"],
    github: "https://github.com/manjeetsinghrandhawa/media-docs-manager",
    live: null,
  },
  {
    title: "E-commerce Web",
    desc: "Interactive, responsive e-commerce front-end with dynamic components and optimized UX",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "State Management"],
    github: "https://github.com/manjeetsinghrandhawa/E-commerce",
    live: null,
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[var(--bg-card)] bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Some of my recent work
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="card-3d bg-[var(--bg-dark)] rounded-2xl overflow-hidden glow-box group"
            >
              <div className="h-48 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] opacity-80 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{proj.title.charAt(0)}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-[var(--primary)] bg-opacity-20 text-[var(--primary-glow)] text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 items-center flex-wrap">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    <FiGithub /> GitHub
                  </a>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-glow flex items-center gap-2 text-sm bg-[var(--primary)] text-slate-900 px-4 py-2 rounded-full hover:scale-105 transition-transform"
                    >
                      <FiExternalLink /> View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
