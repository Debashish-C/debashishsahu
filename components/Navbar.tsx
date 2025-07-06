"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="sm:flex  flex-col pt-4 z-50 w-full backdrop-blur-[10px] shadow-sm fixed top-0 left-0 pb-3 justify-center items-center">
      <ul className="text-[15px] hidden   text-white max-w-5xl sm:flex justify-between items-center gap-16 p-2 pl-4 pr-2 rounded-[50px] w-full">
        <div className="">
          <Link
            href="/"
            className="hover:border-cya-400 border-b-2 font-semibold border-transparent hover:text-cyan-400 transition delay-75"
          >
            Debashish Sahu
          </Link>
        </div>
        <div className="flex gap-16">
          <Link
            href="/work"
            className="hover:border-cyan-400 border-b-2 border-transparent transition delay-75"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="hover:border-cyan-400 border-b-2 border-transparent transition delay-75"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:border-cyan-400 border-b-2 border-transparent transition delay-75"
          >
            Blog
          </Link>
        </div>
        <div className="">
          <li className="hover:text-cyan-400 hover:border-cyan-400 shadow-sm shadow-white text-white border-1 border-white p-2 pl-4 pr-4 rounded-md transition delay-75">
            Resume
          </li>
        </div>
      </ul>
      <div className="sm:hidden w-full pl-4  text-white pr-4 p-2 flex justify-between items-center ">
        <Link
          href="/"
          onClick={() => setActive(false)}
          className="text-[16px] hover:text-cyan-400 font-medium font-serif"
        >
          Debashish Sahu
        </Link>
        <button onClick={() => setActive((p) => !p)} className="">
          <span className="font-bold dark:text-white">Menu</span>
        </button>
      </div>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold text-[18px] text-white  flex gap-6 pt-10 font-sans  pb-10 flex-col justify-around items-center"
        >
          <Link
            href="/work"
            className="hover:text-cyan-400 hover:underline"
            onClick={() => setActive((p) => !p)}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="hover:text-cyan-400 hover:underline"
            onClick={() => setActive((p) => !p)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-cyan-400 hover:underline"
            onClick={() => setActive((p) => !p)}
          >
            Blog
          </Link>
          <Link
            href=""
            className="hover:text-cyan-400 hover:underline"
            onClick={() => setActive((p) => !p)}
          >
            Resume
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
