"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-[#0D0D0D]/70 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-cyan-400 transition-colors"
        >
          Debashish Sahu
        </Link>

        {/* Desktop Links */}
        <ul className="hidden sm:flex items-center gap-10 text-[15px] font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <Link
          href="https://drive.google.com/file/d/1qG7OoKk6rZ_0zLh_ybDQzbirGpKBioBn/view?usp=share_link"
          target="_blank"
          className="hidden sm:inline-flex items-center justify-center border border-cyan-400 text-cyan-400 dark:border-white dark:text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 shadow-sm"
        >
          Resume
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Image
            src={isOpen ? "/close.svg" : "/hamicon.svg"}
            alt="menu"
            width={28}
            height={28}
            className="dark:invert"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white dark:bg-[#0D0D0D] border-t border-gray-200 dark:border-gray-800 px-6 py-6 flex flex-col gap-6 text-lg font-medium"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://drive.google.com/file/d/1qG7OoKk6rZ_0zLh_ybDQzbirGpKBioBn/view?usp=share_link"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-white transition-all"
            >
              Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
