import React, { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const screenWidth = window.innerWidth;

const Slider = () => {
  const imgBanner = [
    "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/241106/f494253b498842c095c836937cbc5391/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/6.png?token-time=1707004800&token-hash=71PtBVj1b0jHb_hsc1G26Jxg9ZIBBmx4YJwyestgv-U%3D",
    "https://miro.medium.com/v2/resize:fit:1080/1*OR3ZIhFk-44yG7mwbri9sQ.jpeg",
    "https://i.pinimg.com/736x/1a/55/19/1a5519d8682e582b297a377c4bd00374.jpg",
  ];

  const elementRef = useRef();

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
        weight="duotone"
        className="hidden md:block text-white text-[30px] absolute
        mx-5 mt-[150px] cursor-pointer p-2 bg-[#65717c77] rounded-full"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <CaretRight
        size={36}
        color="#f1f8fe"
        weight="duotone"
        className="hidden md:block text-white text-[30px] absolute
        mx-5 mt-[150px] cursor-pointer right-0 p-2 bg-[#65717c77] rounded-full"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4
    scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {imgBanner?.map((src, index) => (
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
