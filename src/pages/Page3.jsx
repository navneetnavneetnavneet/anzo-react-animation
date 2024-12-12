import React from "react";
import video from "../assets/video.mp4";

const Page3 = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <img
        className="absolute z-10 w-[65vw] h-[80vh] object-cover"
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1254,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
        alt=""
      />
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        className="z-20 w-[50vw] h-[70vh] object-cover"
        src={video}
      ></video>
      <div className="absolute top-[45%] z-0 w-3/5 h-[2px] bg-[#6A6A6A]"></div>
      <div className="absolute top-[60%] z-0 w-4/5 h-[2px] bg-[#6A6A6A]"></div>
      <div className="absolute top-[75%] z-0 w-full h-[2px] bg-[#6A6A6A]"></div>
    </div>
  );
};

export default Page3;
