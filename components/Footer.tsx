"use client";
import React, { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="py-10 px-6 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-6xl mx-auto">
        {/* Top gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold gradient-text">MS</span>
            <p className="text-[var(--text-secondary)] text-sm">
              © 2026 Manjeet Singh. All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <p className="text-[var(--text-secondary)] text-sm text-center hidden md:block">
            Built with <span className="text-[var(--primary)]">Next.js</span>,{" "}
            <span className="text-[var(--secondary)]">TypeScript</span> &{" "}
            <span className="text-[var(--accent)]">passion</span>
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/manjeetsinghrandhawa"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all hover:shadow-[0_0_15px_rgba(74,222,128,0.15)]"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href="mailto:manjeetsinghh052003@gmail.com"
              className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <FiMail className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/manjeet-singh-randhawa-a10614279/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:shadow-[0_0_15px_rgba(167,139,250,0.15)]"
            >
              <FiLinkedin className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`back-to-top fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all z-40 ${
          showTop ? "visible" : ""
        }`}
      >
        <FiArrowUp className="text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
