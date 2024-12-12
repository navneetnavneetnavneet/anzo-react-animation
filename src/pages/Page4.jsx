import React from "react";

const Page4 = () => {
  return (
    <div className="w-full h-screen px-4 py-4 text-white">
      <div className="w-full h-full flex items-center justify-between px-20 py-16 bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_2234,h_1058,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)] bg-cover rounded-3xl">
        <div>
          <h1 className="text-[20vw] font-[anzo1] opacity-70 uppercase leading-[16vw]">
            What
          </h1>
          <h1 className="text-[20vw] font-[anzo1] uppercase leading-[16vw]">
            I Do
          </h1>
          <h1 className="text-[1.5vw] font-[anzo4]  leading-[1.5vw]  mt-10">
            I DESIGN AND DEVELOP
          </h1>
          <h1 className="text-[1.5vw] font-[anzo3] leading-[1.5vw] text-[#7B7B7B]">
            MODERN, IMPACTFUL AND LUXURIOUS
          </h1>
          <h3 className="text-[1.3vw] font-[anzo4]">
            websites that seamlessly bridge your goals with needs of your
            clients.
          </h3>
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className=""
          src="/src/assets/moonRotate.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Page4;
