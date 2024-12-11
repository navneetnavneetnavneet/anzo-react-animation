import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Page1Bottom = () => {
  const imageOne = useRef(null);
  const imageTwo = useRef(null);

  useGSAP(function () {
    gsap.to(imageOne.current, {
      rotate: "360deg",
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
    gsap.to(imageTwo.current, {
      rotate: "360deg",
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  });

  return (
    <div className="absolute left-0 bottom-0 flex items-end justify-between w-full px-24 py-16">
      <div>
        <h1 className="text-[1.5vw] font-[anzo4]  leading-[1.5vw]">
          BRAND DESIGN | WEBSITE DESIGN
        </h1>
        <h1 className="text-[1.5vw] font-[anzo3] leading-[1.5vw] text-[#7B7B7B]">
          BESPOKE FREELANCE
        </h1>
      </div>
      <div className="">
        <img
          ref={imageOne}
          className="h-20 object-cover mb-5"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
          alt=""
        />
        <img
          ref={imageTwo}
          className="h-20 object-cover"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
