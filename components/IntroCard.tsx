"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function IntroCard() {
  return (
    <div className=" w-full flex-col max-w-5xl gap-4   text-center items-start p-4 pt-8 rounded-lg sm:flex-row flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-around w-full gap-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.1 }}
          className="w-full backdrop-blur-[25px] p-2 shadow-sm hover:shadow-md rounded-md shadow-cyan-300"
        >
          <Link href="https://leetcode.com/u/Ayato_lC/">
            <h1 className="text-[20px] font-medium">Leetcode</h1>
            <h3 className="text-xl text-cyan-400 p-4 font-semibold">1446+ </h3>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.1 }}
          className="w-full backdrop-blur-[25px] p-2 shadow-sm hover:shadow-md rounded-md  text-black dark:text-white shadow-cyan-300"
        >
          <Link href="https://codeforces.com/profile/debashish01">
            <h1 className="text-[20px] font-medium">Codeforces</h1>
            <h3 className="text-xl text-cyan-400 p-4 font-semibold"> 670+</h3>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.1 }}
          className="w-full backdrop-blur-[25px] p-2 shadow-sm hover:shadow-md rounded-md dark:text-white text-black shadow-cyan-300"
        >
          <Link href="https://www.codechef.com/users/deba_321">
            <h1 className="text-[20px] font-medium">CodeChef</h1>
            <h3 className="text-xl text-cyan-400 p-4 font-semibold">1🌟</h3>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IntroCard;
