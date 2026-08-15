"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (!el) return { id: item, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item, top: Math.abs(rect.top - 100) };
      });
      const closest = sections.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MS
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`nav-link text-sm font-medium transition-colors ${
                activeSection === item
                  ? "active text-[var(--primary-glow)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--primary-glow)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[var(--text-secondary)] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden nav-blur mt-2 mx-4 rounded-xl p-4 flex flex-col gap-1 border border-[var(--border-subtle)]">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === item
                  ? "text-[var(--primary-glow)] bg-[var(--bg-card)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--primary-glow)] hover:bg-[var(--bg-card)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
