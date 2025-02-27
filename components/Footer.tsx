"use client";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scrolling function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 mt-16 sm:mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/manjeetsinghrandhawa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/manjeet-singh-randhawa-a10614279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a
            href="https://x.com/Manjeetsinghh5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="mailto:manjeetsinghh052003@gmail.com" target="_blank">
            <FaEnvelope className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
        </div>

        {/* Navigation Links with Smooth Scrolling */}
        <nav className="flex space-x-6 text-gray-400 text-sm mb-4">
          <button
            onClick={() => scrollToSection("HeroSection")}
            className="hover:text-white"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("AboutSection")}
            className="hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("ProjectSection")}
            className="hover:text-white"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("SkillSection")}
            className="hover:text-white"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("ContactSection")}
            className="hover:text-white"
          >
            Contact
          </button>
        </nav>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-bold">Manjeet</span>. All rights
          reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-500 p-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
      >
        <FaArrowUp className="text-white" />
      </button>

      <p className="text-blue-500 flex flex-row-reverse pr-14 ">
        manjeetsinghh052003@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
