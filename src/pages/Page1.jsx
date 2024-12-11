import React, { useRef, useState } from "react";
import Header from "../components/Header";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const tiltRef = useRef(null);

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  const mouseMoving = (e) => {
    setXValue(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );
    setYValue(
      -(
        (e.clientY -
          tiltRef.current.getBoundingClientRect().y -
          tiltRef.current.getBoundingClientRect().height / 2) /
        5
      )
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yValue}deg) rotateY(${xValue}deg)`,
        duration: 5,
        ease: "back.out(1.7)",
      });
    },
    [xValue, yValue]
  );

  return (
    <div className="w-full h-screen px-4 py-4 text-white">
      <div
        onMouseMove={mouseMoving}
        className="w-full h-full px-20 py-16 bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2978,h_1410,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-cover rounded-3xl"
      >
        <img
          className="absolute h-20 -mt-5"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
          alt=""
        />
        <Header />
        <TiltText tiltRef={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
