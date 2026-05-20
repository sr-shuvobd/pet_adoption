import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[500px] bg-cover flex flex-col justify-center"
      style={{
        backgroundImage: "url('/assets/heroimage.png')",
      }}
    >
      <div className="p-5 md:p-60 space-y-5">
        <h1 className="text-3xl font-bold text-[#D68B6E]">
          FIND YOUR <br /> NEW BEST FRIEND. <br /> ADOPT, DON’T SHOP.
        </h1>
        <p className="text-white">
          Hundreds of lovable pets are waiting for a forever home. <br /> Give them a
          second chance and start your journey today!
        </p>
        <Link href="/allpets" className="px-5 py-2 w-fit flex items-center gap-2
                rounded-full
                border-2 border-[#D68B6E]
                text-
                font-semibold
                hover:bg-[#D68B6E]
                hover:text-white
                transition-all
                duration-300
                shadow-[0_0_15px_rgba(214,139,110,0.4)]
                hover:scale-105">ADOPT NOW</Link>
      </div>
    </div>
  );
};

export default Hero;
