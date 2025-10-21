"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";
import { ModelViewer } from "@/components/Model-3d";
import IntroCard from "@/components/IntroCard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#f7f9fc] via-[#e9f2ff] to-[#dff6ff] text-gray-900 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#020617] dark:text-gray-100 transition-colors duration-700">
      <div className="lg:max-w-7xl pt-32 w-full flex flex-col justify-center items-center px-6 sm:px-12 py-20">
        <div className="flex flex-col-reverse sm:flex-row w-full items-center justify-between gap-10">
          {/* === Left Section (Text) === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col w-full sm:w-1/2 space-y-5 text-center sm:text-left"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-xs sm:text-sm px-4 py-1 rounded-full w-fit mx-auto sm:mx-0 shadow-md">
              Full Stack Developer & Problem Solver
            </span>

            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-blue-700 dark:from-white dark:to-cyan-400">
              Hey, I’m Debashish 👋
            </h1>

            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              I craft web & mobile apps that make an impact.
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-lg">
              Passionate about building scalable full-stack solutions, blending
              design with performance — and solving real-world problems with
              code.
            </p>

            {/* === Social Links === */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center sm:justify-start gap-6 pt-6"
            >
              {[
                {
                  href: "https://x.com/its_developr",
                  icon: "/twitter.svg",
                  alt: "X",
                },
                {
                  href: "https://www.linkedin.com/in/debashishtest/",
                  icon: "/linked.svg",
                  alt: "LinkedIn",
                },
                {
                  href: "https://github.com/Debashish-C",
                  icon: "/github.svg",
                  alt: "GitHub",
                },
                {
                  href: "mailto:sahudeba03@gmail.com",
                  icon: "/gmail.svg",
                  alt: "Email",
                },
              ].map(({ href, icon, alt }) => (
                <motion.a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-2 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 hover:shadow-lg"
                >
                  <Image src={icon} alt={alt} width={38} height={38} />
                </motion.a>
              ))}
            </motion.div>

            {/* === Contact Button === */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="inline-block mt-6 px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-cyan-400/40 transition-all duration-200"
              >
                Let’s Connect
              </Link>
            </motion.div>
          </motion.div>

          {/* === Right Section (3D Model) === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full  sm:flex hidden justify-center items-center"
          >
            <ModelViewer />
          </motion.div>
        </div>

        {/* === Intro Section === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full mt-20"
        >
          <IntroCard />
        </motion.div>
      </div>
    </div>
  );
}
