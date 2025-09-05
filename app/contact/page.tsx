"use client";
import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import Link from "next/link";

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
      className={`min-h-screen w-full flex flex-col dark:bg-[#1E1E1E] justify-center items-center ${poppins.className}`}
    >
      <h1
        className={`text-2xl text-cyan-300 text-center p-4 ${playfair.className}`}
      >
        Contact Me
      </h1>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto border-cyan-400 border backdrop-blur-md p-8 rounded-2xl shadow-lg">
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

          <Link
            href="/"
            type="submit"
            className="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-200 to-cyan-300 text-black text-center  font-bold rounded-xl hover:from-cyan-500 hover:to-cyan-200 transition-all duration-300 shadow-lg"
          >
            Send Message
          </Link>
        </form>
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/Debashish-C"
            target="_blank"
            className="text-gray-800 dark:text-gray-400 hover:text-purple-600 transition-colors duration-300 text-xl"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/debashishtest"
            target="_blank"
            className="text-gray-800 dark:text-gray-400 hover:text-purple-600 transition-colors duration-300 text-xl"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sahudeba03@gmail.com"
            className="text-gray-800 dark:text-gray-400 hover:text-purple-600 transition-colors duration-300 text-xl"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
