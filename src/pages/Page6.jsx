import React from "react";
import moon from "../assets/moon.mp4";

const Page6 = () => {
  return (
    <div className="w-full h-screen px-4 py-4">
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          src={moon}
          className="w-full h-full object-cover"
        ></video>
        <h1 className="text-[35vw] text-white absolute bottom-10 left-20 z-10 font-[anzo1] uppercase leading-[28vw]">
          About
        </h1>
      </div>
    </div>
  );
};

export default Page6;
