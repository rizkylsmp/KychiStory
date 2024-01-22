import React from "react";

const Header = ({ title }) => {
  return (
    <div className="pt-5 pl-[65px]">
      <div className="flex text-[15px] md:text-2xl font-bold text-white">
        <div className="bg-[#a1c2e7d4] w-1 h-[20px] md:h-[23px] mr-1.5 self-center"></div>
        {title}
      </div>
    </div>
  );
};

export default Header;
