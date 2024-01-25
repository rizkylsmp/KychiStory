import React from "react";
import Top from "../components/komik/TopKomik";
import Banner from "../components/ads/Banner";

const KomikPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center md:m-5 m-5 gap-5">
        <div className="h-[90px] w-[720px] bg-slate-600 object-contain">
          <Banner />
        </div>
        <div className="h-[90px] w-[720px] bg-slate-600 object-contain">
          <Banner />
        </div>
      </div>
      <Top />
    </div>
  );
};

export default KomikPage;
