"use client";
import Link from "next/link";
import IntroCard from "@/components/IntroCard";
import { ModelViewer } from "@/components/Model-3d";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center items-center bg-white  text-black dark:bg-[#1E1E1E] dark:text-white">
      <div className="max-w-5xl w-full min-h-screen flex flex-col justify-evenly items-center">
        <div className="sm:flex-row flex flex-col w-full p-4  justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sm:text-start text-center pt-20 w-full flex justify-between flex-col sm:items-start items-center"
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
            <div className="flex pt-6 pb-6 gap-8 justify-center items-center  ">
              <Link href="https://x.com/its_developr">
                <Image src="/twitter.svg" alt="x" width={40} height={40} />
              </Link>
              <Link href="https://www.linkedin.com/in/debashishtest/">
                <Image
                  src="/linked.svg"
                  alt="LinkedIn"
                  width={44}
                  height={44}
                />
              </Link>
              <Link href="https://github.com/Debashish-C">
                <Image src="/github.svg" alt="x" width={44} height={44} />
              </Link>
              <Link href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sahudeba03@gmail.com&tf=1">
                <Image src="/gmail.svg" alt="x" width={44} height={44} />
              </Link>
            </div>
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.1 }}
              className="p-2 m-2 pl-6 pr-6 font-serif shadow-lg shadow-cyan-500 text-black dark:text-white border-2 border-cyan-500 rounded-md"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <div className="hidden sm:flex">
            <ModelViewer />
          </div>
        </div>
        <div className="w-full p-4 flex flex-col gap-4"></div>
        <div className="w-full flex flex-col gap-4 justify-end pt-5">
          <IntroCard />
        </div>
      </div>
      {/* <div className="w-full text-start pl-5 max-w-5xl">
        <h1 className="text-cyan-400 text-2xl">Features</h1>
        <DebUi />
        <LeakLockr />
      </div> */}
    </div>
  );
}
