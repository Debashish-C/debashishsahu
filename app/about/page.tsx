"use client";
import { motion } from "framer-motion";
import { TechStack, techStack } from "@/data/tech";
import React from "react";

type Category = keyof TechStack;

function page() {
  return (
    <div className="flex justify-center items-center flex-col pt-20 bg-[#1E1E1E]">
      <div className="max-w-5xl p-2 min-h-screen w-full flex justify-start items-center flex-col">
        <div className="flex flex-col md:flex-row h-full pt-5 pb-5 justify-between items-center">
          <div className="md:w-1/2 w-full p-5 flex flex-col justify-start">
            <h1 className="text-2xl text-cyan-400 pb-10 pt-10">✨ About Me</h1>
            <h3 className="text-white">
              Hi, I{"'"}m{" "}
              <span className="font-semibold text-cyan-400">
                Debashish Sahu
              </span>
              , a passionate full-stack developer pursuing MCA from NIT Bhopal.
              I love turning ideas into scalable, real-world products — whether
              it{"'"}s building a mobile app, crafting beautiful UIs, or
              designing robust backend systems.
              <br />
              <br /> Over the years, I{"'"}ve built several projects using
              React, Next.js, React Native, TypeScript, Node.js, PostgreSQL, and
              more. I{"'"}m currently diving deeper into building developer
              tools, UI libraries, and{" "}
              <span className="text-cyan-300">Micro-SaaS</span> products.
              <br />
              <br /> I believe in learning by building, and I enjoy sharing that
              journey through content and open-source contributions.
            </h3>
          </div>
          <div className="">
            {/* <Image src="/profile.jpeg" alt="Profile" width={300} height={300} /> */}
          </div>
        </div>

        <div className="pt-5 w-full">
          <h1 className="text-xl text-[22px] text-cyan-400 pb-3 pt-5 font-bold">
            🛠 Tech Stack
          </h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 p-5 md:grid-cols-4 gap-6">
            {(Object.entries(techStack) as [Category, readonly string[]][]).map(
              ([category, items]) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.1 }}
                  key={category}
                  className="border-2 hover:shadow-md border-cyan-200 p-4 rounded-md shadow-sm shadow-cyan-500"
                >
                  <h2 className="text-[18px] font-semibold capitalize text-cyan-300 mb-2">
                    {category}
                  </h2>
                  <ul className="space-y-1 text-sm text-white">
                    {items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </div>

        <div className="pt-5 w-full">
          <h1 className="text-xl text-cyan-200 pb-10 pt-10">
            🚀 What I{"'"}m Working On
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="w-full h-60 text-center">
              <div className="w-full h-40"></div>
              <h2 className="text-cyan-400 font-semibold text-[18px]">
                deb-ui
              </h2>
              <p className="text-[15px]">
                A reusable UI component library for developers
              </p>
            </div>
            <div className="w-full h-60 text-center">
              <div className="w-full h-40"></div>
              <h2 className="text-cyan-400 font-semibold text-[18px]">
                LeakLockr
              </h2>
              <p className="text-[15px]">
                One-click API key scanner and expiry notifier
              </p>
            </div>
            <div className="w-full h-60 text-center">
              <div className="w-full h-40"></div>
              <h2 className="text-cyan-400 font-semibold text-[18px]">
                dot dev
              </h2>
              <p className="text-[15px]">
                Sharing 100+ videos on dev tips, and journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
