"use client";

import React from "react";
import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiBriefcase, FiCode, FiCpu } from "react-icons/fi";

const highlights = [
  { icon: FiBriefcase, value: "1+ Year", label: "Professional Experience" },
  { icon: FiCode, value: "10+", label: "Projects Delivered" },
  { icon: FiCpu, value: "15+", label: "Technologies Mastered" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl mx-auto">
            A passionate developer crafting performant digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Card */}
          <div className="card-3d gradient-border p-1 rounded-2xl">
            <div className="bg-[var(--bg-card)] rounded-2xl p-6">
              <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-[2px]">
                <div className="w-full h-full rounded-xl bg-[var(--bg-card)] relative overflow-hidden">
                  <Image
                    src="/assets/manjeetphotoedited1.png"
                    alt="Manjeet Singh"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>

              {/* Current Role Badge */}
              <div className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Currently at Absolute Web Pvt Ltd</p>
                  <p className="text-xs text-[var(--text-secondary)]">Full Stack Developer · Jun 2026 – Present</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack Developer &amp; <span className="gradient-text">Problem Solver</span>
            </h3>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              I&apos;m a B.Tech Computer Science graduate from Drs. Kiran and Pallavi Patel Global University with a strong foundation in full-stack development. Currently working at <span className="text-[var(--primary)] font-medium">Absolute Web Pvt Ltd</span>, building Cambrean — a production-grade tax and client-onboarding platform for a US-based client.
            </p>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              I specialize in <span className="text-[var(--secondary)]">Next.js, React, Node.js</span>, and cloud technologies. From architecting scalable backends to crafting pixel-perfect frontends, I deliver applications that are both performant and user-friendly.
            </p>

            {/* Highlight Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="stat-card bg-[var(--bg-card)] rounded-xl p-4 text-center glow-box">
                    <Icon className="text-[var(--primary)] text-xl mx-auto mb-2" />
                    <p className="text-xl font-bold gradient-text">{item.value}</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{item.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Action Links */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/manjeetsinghrandhawa"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/manjeet-singh-randhawa-a10614279/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:manjeetsinghh052003@gmail.com"
                className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]"
              >
                <FiMail className="text-xl" />
              </a>
              <a
                href="/assets/ManjeetSingh%20-%20Resume.pdf"
                download
                className="btn-glow inline-flex items-center gap-2 bg-[var(--primary)] text-slate-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <FiDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
