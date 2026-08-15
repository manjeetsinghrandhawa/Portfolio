"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "DevFlow",
    desc: "Community-driven Q&A platform for developers with AI-powered assistance using Google Gemini",
    tech: ["Next.js 15", "ShadCN", "Clerk", "MongoDB", "Google Gemini"],
    github: "https://github.com/manjeetsinghrandhawa/devflow",
    live: "https://devflow-tau-olive.vercel.app/",
    image: "/assets/devoverflowimage.jpg",
    featured: true,
  },
  {
    title: "EduSpark",
    desc: "Full-stack online learning platform with Razorpay integration and real-time progress tracking",
    tech: ["MERN Stack", "MongoDB", "Razorpay", "Real-time Tracking"],
    github: "https://github.com/manjeetsinghrandhawa/eduspark-host",
    live: "https://eduspark-host.vercel.app/",
    image: "/assets/Screenshot (562).png",
    featured: false,
  },
  {
    title: "Media & Docs Manager",
    desc: "Secure full-stack file management system with JWT auth and cloud storage integration",
    tech: ["Next.js 15", "Node.js", "MongoDB", "JWT", "Cloud Storage"],
    github: "https://github.com/manjeetsinghrandhawa/media-docs-manager",
    live: "https://media-docs-frontend.vercel.app/",
    image: "/assets/Screenshot (561).png",
    featured: false,
  },
  {
    title: "E-commerce Web",
    desc: "Interactive, responsive e-commerce front-end with dynamic components and optimized UX",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "State Management"],
    github: "https://github.com/manjeetsinghrandhawa/E-commerce",
    live: null,
    image: "/assets/Screenshot (123).png",
    featured: false,
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl mx-auto">
            Some of my recent work — each built with care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="card-3d gradient-border rounded-2xl group"
            >
              <div className="bg-[var(--bg-card)] rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="h-52 relative project-image-overlay">
                  <Image
                    src={proj.image}
                    alt={`${proj.title} project preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Project Number */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-4xl font-bold text-white opacity-20">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {proj.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="featured-badge inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--accent-warm)] text-black text-xs font-bold uppercase tracking-wider">
                        ★ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed flex-grow">
                    {proj.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[var(--bg-dark)] text-[var(--text-secondary)] text-xs border border-[var(--border-subtle)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 items-center flex-wrap">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-white/30"
                    >
                      <FiGithub className="text-sm" /> Source
                    </a>
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-glow flex items-center gap-2 text-sm bg-[var(--primary)] text-slate-900 px-4 py-1.5 rounded-lg font-medium hover:scale-105 transition-transform"
                      >
                        <FiExternalLink className="text-sm" /> Live Demo
                      </a>
                    )}
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

export default ProjectSection;
