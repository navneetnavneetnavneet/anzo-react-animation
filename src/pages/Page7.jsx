import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import React, { useRef } from "react";

const Page7 = () => {
  const designImageRef = useRef(null);
  const deploymentImageRef = useRef(null);
  const brandingImageRef = useRef(null);

  gsap.registerPlugin(ScrollToPlugin);

  useGSAP(function () {
    gsap.to(designImageRef.current, {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(deploymentImageRef.current, {
      rotateY: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(brandingImageRef.current, {
      y: -5,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "linear",
    });
    gsap.to(".arrow", {
      scale: 1,
      rotate: -135,
      duration: 5,
      ease: "linear",
      scrollTrigger: {
        trigger: "#page7",
        markers: true,
        start: "top -50%",
        end: "top 0%",
        scrub: 1,
      },
    });
  });

  return (
    <div id="page7" className="w-full px-4 py-4 text-white">
      <div className="relative w-full h-full rounded-3xl px-20 py-16 bg-[#060606]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[20vw] font-[anzo1] opacity-70 uppercase leading-[16vw]">
              How
            </h1>
            <h1 className="text-[20vw] font-[anzo1] uppercase leading-[16vw]">
              Can
            </h1>
          </div>
          <div>
            <h1 className="text-[20vw] font-[anzo1] uppercase leading-[16vw]">
              I Help
            </h1>
            <h1 className="text-[20vw] font-[anzo1] uppercase leading-[16vw]">
              You
            </h1>
          </div>
        </div>
        <div className="flex items-start justify-between mt-20">
          <div className="one w-[30%] flex flex-col gap-10">
            <h3 className="text-[1.4vw] font-[anzo4] leading-[1.6vw] mb-5">
              <span className="opacity-50">
                I am a self-taught web and brand designer with a passion for
                creating unique and timeless
              </span>
              masterpieces for ambitious professionals, entrepreneurs, artists,
              and boutique businesses Lorem ipsum dolor sit.
            </h3>
            <div className="flex items-end gap-5">
              <img
                ref={designImageRef}
                className="h-16 object-cover"
                src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_85,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png"
                alt=""
              />
              <h1 className="text-[4vw] font-[anzo1] leading-[3.5vw]">
                DESIGN <span className="text-[1.6vw] font-[anzo4]">01</span>
              </h1>
            </div>
          </div>
          <div className="two w-[30%] flex flex-col gap-10">
            <h3 className="text-[1.4vw] font-[anzo4] leading-[1.6vw]">
              <span className="opacity-50">
                With a background in strategic marketing and acknowledged
                expertise in web development,
              </span>
              I aim to minimize my client's resources spent on macro and
              micro-management, marketing research, and hiring a whole team of a
              larger agency.
            </h3>
            <div className="flex items-end gap-5">
              <img
                ref={deploymentImageRef}
                className="h-16 object-cover"
                src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png"
                alt=""
              />
              <h1 className="text-[4vw] font-[anzo1] leading-[3.5vw]">
                Deployement{" "}
                <span className="text-[1.6vw] font-[anzo4]">02</span>
              </h1>
            </div>
          </div>
          <div className="three  w-[30%] flex flex-col gap-10">
            <h3 className="text-[1.4vw] font-[anzo4] leading-[1.6vw]">
              My mission is to drive exceptional growth for my clients by
              increasing their brand appearance,
              <span className="opacity-50">
                defining their identity, and engaging customers through
                captivating black-and-white aesthetics with a modern, luxurious,
                and minimalistic touch.
              </span>
            </h3>
            <div className="flex items-end gap-5">
              <img
                ref={brandingImageRef}
                className="h-16 object-cover"
                src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png"
                alt=""
              />
              <h1 className="text-[4vw] font-[anzo1] leading-[3.5vw]">
                Branding <span className="text-[1.6vw] font-[anzo4]">03</span>
              </h1>
            </div>
          </div>
        </div>
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[110vh] object-cover"
          src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_avif,quality_auto/triangle%203.png"
          alt=""
        />
        <div className="arrow absolute left-[30%] top-[70%] w-12 h-12 scale-50 rounded-full flex items-center justify-center bg-white">
          <i className="ri-arrow-right-up-line text-black text-2xl"></i>
        </div>
        <div className="mt-20 flex items-center justify-between">
          <div>
            <h1 className="text-[1.5vw] font-[anzo3] leading-[1.5vw] text-[#7B7B7B]">
              GOT A PROJECT?
            </h1>
            <h1 className="text-[1.5vw] font-[anzo3] leading-[1.5vw] text-[#7B7B7B] mt-1">
              THEN PLEASE{" "}
              <span className="font-[anzo4] text-white leading-[1.5vw]">
                CONTACT ME
              </span>
            </h1>
          </div>
          <div className="arrow w-12 h-12 scale-75 rounded-full flex items-center justify-center bg-white">
            <i className="ri-arrow-right-up-line text-black text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
