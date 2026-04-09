"use client";

import React from "react";
import { FiAward } from "react-icons/fi";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    school: "Drs. Kiran and Pallavi Patel Global University",
    location: "Vadodara, India",
    period: "Oct 2021 – May 2025",
    grade: "CGPA – 8.8 / 10",
  },
  {
    degree: "Higher Secondary School",
    field: "Science Stream",
    school: "NetaJi Model School",
    location: "Vadodara, India",
    period: "Jun 2019 – May 2021",
    grade: "Score – 81%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Academic background and achievements
        </p>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="card-3d bg-[var(--bg-card)] rounded-2xl p-6 glow-box flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                <FiAward className="text-2xl text-white" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className="px-3 py-1 rounded-full bg-[var(--secondary)] bg-opacity-20 text-[var(--secondary)] text-sm">
                    {edu.grade}
                  </span>
                </div>
                <p className="text-[var(--primary-glow)]">{edu.field}</p>
                <p className="text-[var(--text-secondary)]">{edu.school}</p>
              </div>
              <div className="md:text-right">
                <p className="text-[var(--text-secondary)]">{edu.period}</p>
                <p className="text-[var(--text-secondary)] text-sm">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
