"use client";
import React from "react";
import { motion } from "framer-motion";
function LeakLockr() {
  return (
    <div className="max-w-5xl w-full flex flex-col sm:flex-row justify-between p-5">
      <div className=""></div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="sm:w-1/2
       sm:text-end
       flex flex-col justify-center
       sm:items-end
       items-center
       gap-4
       min-h-88
       "
      >
        <h1 className="text-xl">LeakLockr — One-click API Key Scanner</h1>
        <p className="text-[14px]">
          Secure your code with LeakLockr — a fast GitHub API key scanner and
          expiry notifier that detects leaked secrets and alerts you before it’s
          too late.
        </p>
        <button className="p-2 pl-3 pr-3 w-fit bg-cyan-400 shadow-md shadow-cyan-500 text-black font-medium rounded-lg">
          Scan Your Repo
        </button>
      </motion.div>
    </div>
  );
}

export default LeakLockr;
