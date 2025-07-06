"use client";

import DebUi from "@/components/Deb-ui";
import IntroCard from "@/components/IntroCard";
import LeakLockr from "@/components/LeakLockr";
import { ModelViewer } from "@/components/Model-3d";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1E1E1E] text-white">
      <div className="max-w-5xl w-full min-h-screen flex flex-col justify-evenly items-center">
        <div className="sm:flex-row flex flex-col w-full p-4  justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-start pt-20 w-full flex justify-between flex-col sm:items-start items-center"
          >
            <h5 className="pl-2 m-5 pr-2 text-start rounded-4xl p-1 bg-slate-200 w-fit text-[12px] text-black">
              full stack developer and problem solver
            </h5>
            <h1 className="text-5xl p-2 font-bold">
              Hey, It{"'"}s Debashish 👋
            </h1>
            <h4 className="p-2 pb-4">
              I build full-stack web & mobile apps that solve real-world
              problems.
            </h4>
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.1 }}
              className="p-2 m-2 pl-4 pr-4 font-serif shadow-lg shadow-cyan-500 text-white border-2 border-cyan-500 rounded-md"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <div className="hidden sm:flex">
            <ModelViewer />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-end pt-5">
          <IntroCard />
        </div>
      </div>
      <div className="w-full text-start pl-5 max-w-5xl">
        <h1 className="text-cyan-400 text-2xl">Features</h1>
        <DebUi />
        <LeakLockr />
      </div>
    </div>
  );
}
