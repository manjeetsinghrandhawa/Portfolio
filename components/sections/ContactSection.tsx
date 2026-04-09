"use client";
import React, { useState } from "react";
import { FiGithub, FiMail, FiMapPin } from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[var(--bg-card)] bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Let&apos;s work together on your next project
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="card-3d bg-[var(--bg-dark)] rounded-2xl p-8 glow-box">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:manjeetsinghh052003@gmail.com"
                className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] bg-opacity-20 flex items-center justify-center">
                  <FiMail className="text-[var(--secondary)]" />
                </div>
                <span>manjeetsinghh052003@gmail.com</span>
              </a>
              <a
                href="https://github.com/manjeetsinghrandhawa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] bg-opacity-20 flex items-center justify-center">
                  <FiGithub className="text-[var(--secondary)]" />
                </div>
                <span>github.com/manjeetsinghrandhawa</span>
              </a>
              <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] bg-opacity-20 flex items-center justify-center">
                  <FiMapPin className="text-[var(--secondary)]" />
                </div>
                <span>Vadodara, India</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="card-3d bg-[var(--bg-dark)] rounded-2xl p-8 glow-box space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors resize-none"
              required
            />
            <button
              type="submit"
              className="btn-glow w-full bg-[var(--primary)] text-slate-900 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
