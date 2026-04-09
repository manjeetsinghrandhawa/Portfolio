"use client";

import React from "react";
import { FiChevronDown } from "react-icons/fi";

const HeroSection = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

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
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${((i * 17) % 10) + 5}px`,
              height: `${((i * 19) % 10) + 5}px`,
              left: `${(i * 13) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${(i % 5) * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div
        className="text-center z-10 max-w-4xl"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 0.1}deg) rotateY(${mousePos.x * 0.1}deg)`,
        }}
      >
        <p className="text-[var(--secondary)] text-base md:text-lg mb-4 tracking-[0.3em]">
          HELLO, I&apos;M
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
          Manjeet Singh
        </h1>
        <p className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-8">
          Full Stack Developer
        </p>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable web applications with modern technologies. Passionate about clean code and exceptional user experiences.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
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
            className="border border-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:bg-opacity-20 transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <FiChevronDown className="text-3xl text-[var(--text-secondary)]" />
      </div>
    </section>
  );
};

export default HeroSection;
