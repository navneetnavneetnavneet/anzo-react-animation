import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page5 = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotateTextPage5", {
      transform: "rotateX(-110deg)",
      duration: 3,
      opacity: 0,
      stagger: .5,
      scrollTrigger: {
        trigger: "#page5 .rotateTextPage5",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top -300%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="page5" className="w-full text-center px-20 py-8">
      <div className="rotateTextPage5 mt-20">
        <h1 className="text-[35vw] font-[anzo1] uppercase leading-[28vw]">
          Helping
        </h1>
      </div>
      <div className="rotateTextPage5">
        <h1 className="text-[35vw] font-[anzo1] uppercase leading-[28vw]">
          My
        </h1>
      </div>
      <div className="rotateTextPage5">
        <h1 className="text-[35vw] font-[anzo1] uppercase leading-[28vw]">
          Clients
        </h1>
      </div>
      <div className="rotateTextPage5">
        <h1 className="text-[35vw] font-[anzo1] uppercase leading-[28vw]">
          to achive
        </h1>
      </div>
      <div className="rotateTextPage5">
        <h1 className="text-[35vw] font-[anzo1] uppercase leading-[28vw]">
          There
        </h1>
      </div>
      <div className="rotateTextPage5">
        <h1 className="text-[35vw] font-[anzo1] uppercase leading-[28vw]">
          Dreams!
        </h1>
      </div>
    </div>
  );
};

export default Page5;
