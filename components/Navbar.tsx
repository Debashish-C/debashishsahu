import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="flex pt-4 z-50 w-full backdrop-blur-[10px] shadow-sm fixed top-0 left-0 pb-3 justify-center items-center">
      <ul className="text-[15px]  text-white max-w-5xl flex justify-between items-center gap-16 p-2 pl-4 pr-2 rounded-[50px] w-full">
        <div className="">
          <Link
            href="/"
            className="hover:border-white border-b-2 font-semibold border-black transition delay-75"
          >
            Debashish Sahu
          </Link>
        </div>
        <div className="flex gap-16">
          <Link
            href="/work"
            className="hover:border-white border-b-2 border-black transition delay-75"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="hover:border-white border-b-2 border-black transition delay-75"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:border-white border-b-2 border-black transition delay-75"
          >
            Blog
          </Link>
        </div>
        <div className="">
          <li className="hover:bg-slate-500 shadow-sm shadow-white text-white border-1 border-white p-2 pl-4 pr-4 rounded-md transition delay-75">
            Resume
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
