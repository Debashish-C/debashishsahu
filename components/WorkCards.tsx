import React from "react";
import Image from "next/image";
function WorkCards() {
  return (
    <div className="text-white flex flex-col justify-center items-center   backdrop-blur-[10px]  rounded-lg text-center p-4">
      <Image
        src="./globe.svg"
        height={100}
        width={200}
        alt="Project Image"
      ></Image>
      <h2 className="text-[20px] font-medium">LeakLockr</h2>
      <h3>Description And A sort Description About The Project</h3>
    </div>
  );
}

export default WorkCards;
