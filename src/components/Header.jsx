import React from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-end ">
      <button className="px-8 py-2 bg-black border-4 border-white hover:bg-[#7B7B7B] text-white font-medium rounded-full">
        Hire Me
      </button>
      <i className="ri-menu-line text-3xl ml-3"></i>
    </div>
  );
};

export default Header;
