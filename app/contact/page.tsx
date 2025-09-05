"use client";
import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";

// Fonts
const playfair = Playfair_Display({
  weight: ["700", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

function Contact() {
  return (
    <div
      className={`min-h-screen w-full p-8 md:p-16 bg-gradient-to-b from-white via-purple-50 to-pink-50 ${poppins.className}`}
    >
      {/* Heading */}
      <h1
        className={`text-5xl sm:text-6xl md:text-7xl font-extrabold text-purple-600 mb-12 ${playfair.className}`}
      >
        Contact Me
      </h1>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Optional Social Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-gray-800 hover:text-purple-600 transition-colors duration-300 text-2xl"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-800 hover:text-purple-600 transition-colors duration-300 text-2xl"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-800 hover:text-purple-600 transition-colors duration-300 text-2xl"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
