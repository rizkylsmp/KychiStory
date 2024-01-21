import React, { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import axios from "axios";

const screenWidth = window.innerWidth;

const Slider = () => {
  const imgBanner = [
    "https://i.pinimg.com/736x/2f/4b/f9/2f4bf9af7c4f1b29072c4180267394aa.jpg",
    "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/241106/f494253b498842c095c836937cbc5391/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/6.png?token-time=1707004800&token-hash=71PtBVj1b0jHb_hsc1G26Jxg9ZIBBmx4YJwyestgv-U%3D",
    "https://www.mangacourier.com/static/07e647f44fbf06139ace794a3b8de560/Trash-of-the-Counts-Family-Review.jpg",
  ];

  const [topAnime, setTopAnime] = useState([]);
  const elementRef = useRef();

  const getTopAnime = async () => {
    const topAnime = await axios.get(
      `${process.env.REACT_APP_BASEURL}/top/anime`
    );
    setTopAnime(topAnime.data.data);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div>
      <CaretLeft
        size={36}
        color="#f1f8fe"
        weight="bold"
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <CaretRight
        size={36}
        color="#f1f8fe"
        weight="bold"
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4
    scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {imgBanner.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="min-w-full  md:h-[350px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
