"use client";

import React from "react";
import Image from "next/image";
import { FiDownload, FiGithub, FiMail } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          A passionate developer crafting digital experiences
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="card-3d bg-[var(--bg-card)] rounded-2xl p-8 glow-box">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-1">
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
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer &amp; Problem Solver
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              I&apos;m a B.Tech Computer Science graduate from Drs. Kiran and Pallavi Patel Global University with a strong foundation in full-stack development.
              With hands-on experience at QuantumIT Innovation, I&apos;ve developed scalable backend architectures and modern frontend interfaces.
            </p>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              I specialize in Next.js, React, Node.js, and cloud technologies, building applications that are both performant and user-friendly.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/manjeetsinghrandhawa"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-slate-900 transition-all"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="mailto:manjeetsinghh052003@gmail.com"
                className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-slate-900 transition-all"
              >
                <FiMail className="text-xl" />
              </a>
              <a
                href="/assets/ManjeetSingh%20-%20CV.pdf"
                download
                className="btn-glow inline-flex items-center gap-2 bg-[var(--primary)] text-slate-900 px-5 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
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
