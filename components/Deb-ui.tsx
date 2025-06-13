"use clint";
import React from "react";
import { motion } from "framer-motion";
function DebUi() {
  return (
    <div className="max-w-5xl w-full flex flex-col sm:flex-row justify-between">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="sm:w-1/2 
       sm:text-start text-center
       flex flex-col justify-center
       sm:items-start items-center
       gap-4
       min-h-88
       "
      >
        <h1 className="text-xl">deb-ui — Custom React Component Library</h1>
        <p className="text-[14px]">
          Reusable, accessible UI components built with React, TypeScript &
          Tailwind CSS — made to speed up modern frontend development.
        </p>
        <button className="p-2 pl-3 pr-3 w-fit bg-cyan-400 shadow-md shadow-cyan-500 text-black font-medium rounded-lg">
          Docs
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      ></motion.div>
    </div>
  );
}

export default DebUi;
