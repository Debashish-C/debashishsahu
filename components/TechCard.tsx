import React from "react";

export default function TechCard() {
  return (
    <div className="w-full border-1 text-white rounded-lg p-4 text-center border-cyan-400">
      <h1 className="font-semibold border-b border-cyan-400 w-fit">Frontend</h1>
      <div className="flex flex-wrap gap-4 p-2">
        <h3 className="">React</h3>
        <h3>Nextjs</h3>
        <h3>Tailwind Css</h3>
      </div>
    </div>
  );
}
