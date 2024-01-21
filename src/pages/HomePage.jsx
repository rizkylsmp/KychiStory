import React from "react";
import Maskot from "../assets/images/haku.png";
import Logo from "../assets/logo/WM.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className=" bg-[#37404a] flex md:flex-row flex-col text-white h-screen">
      {/* GAMBAR */}
      <img
        src={Maskot}
        alt=""
        className="object-contain transform scale-x-[-1] md:h-[60vh] lg:h-[90vh]"
      />
      {/* ISI */}
      <div className="flex flex-col gap-5  md:m-5">
        {/* LOGO */}
        <img src={Logo} alt="" className="w-[30vh] md:w-[50vh] md:h-fit h-0" />
        {/* MENU */}
        <Link
          to="/novel"
          className="flex justify-center hover:bg-[#000000] p-2 md:rounded-2xl bg-[#0c131be7]"
        >
          Light Novel
        </Link>
        <Link
          to="/anime"
          className="flex justify-center hover:bg-[#000000] p-2 md:rounded-2xl bg-[#0c131be7]"
        >
          Anime
        </Link>
        {/* COPYRIGHT */}
      </div>
      <div className="absolute bottom-5 right-10 font-bold">Ⓒ Kychi Story</div>
    </div>
  );
};

export default HomePage;
