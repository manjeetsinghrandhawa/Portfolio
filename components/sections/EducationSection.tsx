"use client";

import React from "react";
import { FiAward, FiBookOpen } from "react-icons/fi";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    school: "Drs. Kiran and Pallavi Patel Global University",
    location: "Vadodara, India",
    period: "Oct 2021 – May 2025",
    grade: "CGPA – 8.8 / 10",
    icon: FiAward,
    color: "var(--primary)",
  },
  {
    degree: "Higher Secondary School",
    field: "Science Stream",
    school: "NetaJi Model School",
    location: "Vadodara, India",
    period: "Jun 2019 – May 2021",
    grade: "Score – 79.8%",
    icon: FiBookOpen,
    color: "var(--secondary)",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-16">
          {/* Timeline Line */}
          <div className="timeline-line" style={{ opacity: 0.2 }} />

          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <div key={idx} className="relative mb-8 last:mb-0">
                {/* Timeline Dot */}
                <div
                  className="timeline-dot"
                  style={{
                    top: "24px",
                    borderColor: edu.color,
                  }}
                />

                {/* Education Card */}
                <div className="gradient-border rounded-2xl">
                  <div className="bg-[var(--bg-card)] rounded-2xl p-6 md:p-8 relative overflow-hidden">
                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                      }}
                    />

                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${edu.color}33, ${edu.color}11)`,
                          border: `1px solid ${edu.color}44`,
                        }}
                      >
                        <Icon className="text-2xl" style={{ color: edu.color }} />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <span
                            className="px-3 py-1 rounded-full text-xs font-bold"
                            style={{
                              background: `${edu.color}22`,
                              color: edu.color,
                              border: `1px solid ${edu.color}44`,
                            }}
                          >
                            {edu.grade}
                          </span>
                        </div>
                        <p className="text-[var(--primary-glow)] font-medium">
                          {edu.field}
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm mt-1">
                          {edu.school}
                        </p>
                      </div>

                      {/* Date/Location */}
                      <div className="md:text-right flex-shrink-0">
                        <p className="text-sm font-semibold text-[var(--text-secondary)]">
                          {edu.period}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)] opacity-70">
                          {edu.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
