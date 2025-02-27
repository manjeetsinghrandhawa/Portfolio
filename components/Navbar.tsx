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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-gray-800 p-6 rounded-lg shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4">
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
                  className="text-white text-lg hover:text-blue-400"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
