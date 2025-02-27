"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiClerk,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { icon: <FaReact className="text-blue-400 text-6xl" /> },
  { icon: <FaNodeJs className="text-green-500 text-6xl" /> },
  { icon: <SiMongodb className="text-green-400 text-6xl" /> },
  { icon: <SiExpress className="text-gray-300 text-6xl" /> },
  { icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { icon: <FaJs className="text-yellow-500 text-6xl" /> },
  { icon: <FaGitAlt className="text-red-500 text-6xl" /> },
  { icon: <FaGithub className="text-white text-6xl" /> },
  { icon: <FaJava className="text-red-500 text-6xl" /> },
  { icon: <FaPython className="text-blue-400 text-6xl" /> },
  { icon: <FaAws className="text-orange-400 text-6xl" /> },
  { icon: <SiClerk className="text-purple-400 text-6xl" /> },
  { icon: <SiShadcnui className="text-gray-400 text-6xl" /> },
  { icon: <SiTypescript className="text-blue-600 text-6xl" /> },
];

const SkillSlider = () => {
  return (
    <div className="bg-black h-[275px] w-screen mt-20 rounded-2xl shadow-lg border-2 border-orange-500 lg:w-[1400px] md:w-[700px] sm:w-[400px] mx-auto lg:mt-20 md:mt-20 sm:mt-20  ">
      <h2 className="text-4xl font-serif text-orange-500 text-center pb-8">
        My Skills
      </h2>

      {/* Slider Container */}
      <div className="overflow-hidden">
        {/* Row 1 (Left to Right) */}
        <div className="flex whitespace-nowrap animate-scroll">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="mx-10 flex-shrink-0">
              {skill.icon}
            </div>
          ))}
        </div>

        {/* Row 2 (Right to Left) */}
        <div className="flex whitespace-nowrap animate-scroll-reverse mt-10">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="mx-10 flex-shrink-0">
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSlider;
