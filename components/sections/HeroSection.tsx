"use client";

import React from "react";
import { FiChevronDown, FiGithub, FiLinkedin } from "react-icons/fi";

const roles = [
  "Full Stack Developer",
  "Backend Architect",
  "UI Engineer",
  "Problem Solver",
];

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
];

const HeroSection = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${((i * 17) % 8) + 3}px`,
              height: `${((i * 19) % 8) + 3}px`,
              left: `${(i * 13) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${(i % 7) * 1.2}s`,
              animationDuration: `${8 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Code Decorations */}
      <div className="code-decoration absolute top-24 left-8 hidden lg:block">
        {`const developer = {\n  name: "Manjeet",\n  passion: "building",\n  stack: "fullstack"\n};`}
      </div>
      <div className="code-decoration absolute bottom-24 right-8 hidden lg:block">
        {`// shipping production code\n// one commit at a time\ngit push origin main`}
      </div>

      {/* Main Content */}
      <div
        className="text-center z-10 max-w-4xl fade-in-up"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 0.08}deg) rotateY(${mousePos.x * 0.08}deg)`,
        }}
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-6 fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          <span className="text-sm text-[var(--text-secondary)]">
            Available for opportunities
          </span>
        </div>

        <p className="text-[var(--secondary)] text-sm md:text-base mb-4 tracking-[0.35em] uppercase fade-in-up fade-in-up-delay-1">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 gradient-text leading-tight fade-in-up fade-in-up-delay-2">
          Manjeet Singh
        </h1>

        {/* Typing Effect */}
        <div className="h-10 md:h-12 flex items-center justify-center mb-6 fade-in-up fade-in-up-delay-3">
          <span className="text-2xl md:text-3xl text-[var(--text-secondary)]">
            {displayText}
          </span>
          <span className="typing-cursor text-2xl md:text-3xl" />
        </div>

        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg fade-in-up fade-in-up-delay-4">
          Building scalable, production-grade web applications with modern technologies.
          Passionate about clean architecture, performance optimization, and exceptional user experiences.
        </p>

        {/* Stats Row */}
        <div className="flex justify-center gap-8 md:gap-12 mb-10 fade-in-up fade-in-up-delay-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-8 fade-in-up fade-in-up-delay-5">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-glow bg-[var(--primary)] text-slate-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline border border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:text-white transition-all"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center fade-in-up fade-in-up-delay-5">
          <a
            href="https://github.com/manjeetsinghrandhawa"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/manjeet-singh-randhawa-a10614279/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
          >
            <FiLinkedin className="text-lg" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator flex flex-col items-center gap-2">
        <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">Scroll</span>
        <FiChevronDown className="text-2xl text-[var(--text-secondary)]" />
      </div>
    </section>
  );
};

export default HeroSection;
