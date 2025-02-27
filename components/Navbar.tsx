"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <header className="relative w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          Manjeet<span className="text-blue-400">.</span>
        </h1>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8">
          {[
            { id: "HeroSection", label: "Home" },
            { id: "AboutSection", label: "About" },
            { id: "ProjectSection", label: "Projects" },
            { id: "SkillSection", label: "Skills" },
            { id: "ContactSection", label: "Contact" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-gray-300 hover:text-blue-400 transition duration-300 text-lg ${
                activeSection === id ? "text-blue-500 underline" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Fixed) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900/90 z-50 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          <FaTimes />
        </button>
        <nav className="flex flex-col space-y-6 text-center">
          {[
            { id: "HeroSection", label: "Home" },
            { id: "AboutSection", label: "About" },
            { id: "ProjectSection", label: "Projects" },
            { id: "SkillSection", label: "Skills" },
            { id: "ContactSection", label: "Contact" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white text-2xl hover:text-blue-400 transition"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
