"use client";
import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";

type ContactFormData = {
  name: string;
  email: string;
  gender: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    gender: "",
    subject: "",
    message: "",
  });

  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setAttachment(null);
      return;
    }

    if (file.type !== "application/pdf") {
      setStatusMessage("Only PDF attachments are allowed.");
      setIsSuccess(false);
      e.target.value = "";
      setAttachment(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setStatusMessage("File size must be 5MB or less.");
      setIsSuccess(false);
      e.target.value = "";
      setAttachment(null);
      return;
    }

    setAttachment(file);
    setStatusMessage("");
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("gender", formData.gender);
      payload.append("subject", formData.subject);
      payload.append("message", formData.message);

      if (attachment) {
        payload.append("attachment", attachment);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setIsSuccess(true);
      setStatusMessage(result.message || "Message sent successfully.");
      setFormData({ name: "", email: "", gender: "", subject: "", message: "" });
      setAttachment(null);
      const fileInput = document.querySelector<HTMLInputElement>('input[name="attachment"]');
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong while sending your message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "manjeetsinghh052003@gmail.com",
      href: "mailto:manjeetsinghh052003@gmail.com",
      color: "var(--primary)",
    },
    {
      icon: FiGithub,
      label: "github.com/manjeetsinghrandhawa",
      href: "https://github.com/manjeetsinghrandhawa",
      color: "var(--secondary)",
      external: true,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/manjeet-singh-randhawa-a10614279/",
      color: "var(--accent)",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="gradient-border rounded-2xl">
            <div className="bg-[var(--bg-card)] rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-8">
                Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-white transition-all group p-3 rounded-xl hover:bg-[var(--bg-dark)]"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
                      >
                        <Icon style={{ color: item.color }} />
                      </div>
                      <span className="text-sm">{item.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-warm)] bg-opacity-20 border border-[var(--accent-warm)] border-opacity-30 flex items-center justify-center">
                  <FiMapPin className="text-[var(--accent-warm)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-primary)]">Vadodara, India</p>
                  <p className="text-xs text-[var(--text-secondary)]">Open to remote opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void handleSubmit();
            }}
            className="gradient-border rounded-2xl"
          >
            <div className="bg-[var(--bg-card)] rounded-2xl p-8 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] focus:border-[var(--primary)] outline-none transition-colors text-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] focus:border-[var(--primary)] outline-none transition-colors text-sm"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] focus:border-[var(--primary)] outline-none transition-colors text-sm"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] focus:border-[var(--primary)] outline-none transition-colors text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] focus:border-[var(--primary)] outline-none transition-colors resize-none text-sm"
                required
              />
              <input
                type="file"
                name="attachment"
                accept="application/pdf"
                onChange={handleFileChange}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] focus:border-[var(--primary)] outline-none transition-colors text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[var(--primary)] file:px-3 file:py-1 file:text-black file:text-xs file:font-medium"
              />
              <p className="text-xs text-[var(--text-secondary)]">
                Optional attachment: PDF only, up to 5MB.
              </p>

              {statusMessage && (
                <div
                  className={`text-sm px-4 py-3 rounded-xl ${
                    isSuccess
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full bg-[var(--primary)] text-slate-900 py-3 rounded-xl font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend className="text-sm" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
