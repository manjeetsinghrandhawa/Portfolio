/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_7c4ivkm", // Your EmailJS service ID
        "template_fp6ycrx", // Your EmailJS template ID
        {
          to_name: "Manjeet", // Set your name here or dynamically fetch it
          user_name: formData.username, // Matches {{user_name}}
          name: formData.username, // Matches {{name}}
          email: formData.email, // Can be included if needed
          message: formData.message, // Matches {{message}}
        },
        "BWWcfjPeLy8C_uJD7" // Your EmailJS public key
      );

      setSuccess(true);
      setFormData({ username: "", gender: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
    }

    setLoading(false);
  };

  return (
    <div className=" lg:w-[700px] w-screen-5 mt-20 md:w-[700px] sm:w-[400px] md:mt-20 sm:mt-20 mx-auto bg-gray-900  rounded-xl shadow-lg border border-blue-500 text-white">
      <h2 className="text-3xl mt-10 font-bold text-center text-blue-400 mb-6 lg:mt-5 md:mt-5 sm:mt-5">
        Contact Me
      </h2>
      {success && (
        <p className="text-green-400 text-center">Message Sent Successfully!</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 p-5 ">
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full justify-center items-center p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Mail to Button */}
      <div className="flex flex-col items-center justify-center p-6 ">
        <p className="text-blue-400 items-center ">or</p>
        <a
          href="mailto:manjeetsinghh052003@gmail.com?subject=Contact%20Query"
          className="flex items-center justify-center mt-5 w-[95%] gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition duration-300"
        >
          <FaEnvelope className="text-blue-400 " />
          <span className="items-center ">manjeetsinghh052003@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
