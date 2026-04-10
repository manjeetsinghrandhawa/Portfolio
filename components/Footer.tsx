"use client";
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-2xl font-bold gradient-text">MS</span>
        <p className="text-[var(--text-secondary)] text-sm">
          © 2026 Manjeet Singh. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/manjeetsinghrandhawa"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--bg-card)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-slate-900 transition-all"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href="mailto:manjeetsinghh052003@gmail.com"
            className="w-10 h-10 rounded-full bg-[var(--bg-card)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-slate-900 transition-all"
          >
            <FiMail className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/manjeet-singh-randhawa-a10614279/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--bg-card)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-slate-900 transition-all"
          >
            <FiLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
