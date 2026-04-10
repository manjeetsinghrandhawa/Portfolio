"use client";
import React, { useState } from "react";
import { FiGithub, FiMail, FiMapPin } from "react-icons/fi";

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
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                  <FiMail className="text-black" />
                </div>
                <span>manjeetsinghh052003@gmail.com</span>
              </a>
              <a
                href="https://github.com/manjeetsinghrandhawa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                  <FiGithub className="text-black" />
                </div>
                <span>github.com/manjeetsinghrandhawa</span>
              </a>
              <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                  <FiMapPin className="text-black" />
                </div>
                <span>Vadodara, India</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void handleSubmit();
            }}
            className="card-3d bg-[var(--bg-dark)] rounded-2xl p-8 glow-box space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors"
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
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors resize-none"
              required
            />
            <input
              type="file"
              name="attachment"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-transparent focus:border-[var(--primary)] outline-none transition-colors file:mr-4 file:rounded-md file:border-0 file:bg-[var(--primary)] file:px-3 file:py-1 file:text-black"
            />
            <p className="text-xs text-[var(--text-secondary)]">Optional attachment: PDF only, up to 5MB.</p>
            {statusMessage && (
              <p className={`text-sm ${isSuccess ? "text-emerald-400" : "text-red-400"}`}>{statusMessage}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-glow w-full bg-[var(--primary)] text-slate-900 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
