import React from "react";

const TiltText = ({ tiltRef }) => {
  return (
    <div ref={tiltRef} id="page1-in" className="w-fit relative mt-40">
      <h1 className="text-[4vw] font-[anzo2] leading-[3.5vw]">
        I AM <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-[8vw] font-[anzo2] leading-[7vw]">DESIGNER</h1>
      <h1 className="text-[4vw] font-[anzo2] leading-[3.5vw]">TO HIRE</h1>
    </div>
  );
};

export default TiltText;
