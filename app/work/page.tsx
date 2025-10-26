"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import expenx from "../../public/expenx.png";

const Projects = [
  {
    projectImage: expenx,
    projectName: "Expenx",
    projectDesc:
      "Track borrowed/lent money per person with history and analysis.",
  },
  // Add more projects here if needed
];

function ProjectsPage() {
  return (
    <div className="pt-24 flex flex-col justify-start items-center dark:bg-[#121212] bg-gray-50 min-h-screen text-black dark:text-white px-4">
      <div className="max-w-5xl w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transform transition-all hover:-translate-y-2 hover:scale-105"
          >
            <div className="w-full h-48 relative mb-6 rounded-xl overflow-hidden">
              <Image
                src={project.projectImage || "/images/placeholder.png"}
                alt={`${project.projectName} image`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {project.projectName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {project.projectDesc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
