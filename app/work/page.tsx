"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import expenx from "../../public/expenx.png";
const Projects = [
  {
    projectImage: expenx,
    projectName: "expenx",
    projectDesc:
      "Track borrowed/lent money per person with history and analysis.",
  },
  // {
  //   projectImage: "/images/deb-ui.png",
  //   projectName: "deb-ui",
  //   projectDesc: "A modern UI component library with 30+ polished components.",
  // },
  // {
  //   projectImage: "/images/leaklockr.png",
  //   projectName: "leaklockr",
  //   projectDesc:
  //     "One-click API key scanner and expiry notifier for GitHub repos.",
  // },
];

function ProjectsPage() {
  return (
    <div className="pt-20 flex flex-col justify-start items-center dark:bg-[#1E1E1E] bg-white min-h-screen text-black dark:text-white">
      <h1 className="text-xl text-cyan-4 font-bold text-cyan-300 pt-10 pb-10  text-start max-w-5xl w-full pl-3 ">
        📍Works
      </h1>
      <div className="max-w-5xl pt-5 grid lg:grid-cols-2 grid-cols-1 p-5 sm:p-0 sm:pt-5 gap-8">
        {Projects.map((value, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            key={index}
            className="flex justify-center items-center w-full flex-col bg-cyn-100 border-can-400 borde p-2 rounded-sm shadow-lg"
          >
            <Image
              alt={`${value.projectName} image`}
              src={value.projectImage || "/images/placeholder.png"}
              width={200}
              height={120}
              className="rounded-xl object-cover mb-4"
            />
            <h2 className="font-bold text-cyan-400 text-center text-xl">
              {value.projectName}
            </h2>
            <h3 className="text-[16px] font-medium text-center">
              {value.projectDesc}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
