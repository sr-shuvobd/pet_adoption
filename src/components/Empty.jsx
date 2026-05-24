import React from "react";

const Empty = () => {
  return (
    <div
      className="
            flex flex-col items-center justify-center
            min-h-[60vh]
            text-center
            rounded-3xl
            bg-gradient-to-br from-[#FFF1EB] to-[#FFE4D6]
            shadow-xl
            border border-[#f3d3c6]
            p-10
        "
    >
      <div
        className="
            w-28 h-28
            rounded-full
            bg-[#D68B6E]/20
            flex items-center justify-center
            mb-6
            shadow-inner
            "
      >
        <span className="text-6xl">📂</span>
      </div>

      <h1 className=" text-2xl md:text-5xl font-extrabold text-[#D68B6E]">
        No Data Available Right Now
      </h1>

      <p className="text-gray-600 mt-5 text-lg max-w-xl leading-relaxed">
        There is currently no information to display. Please check back later or
        add new content to see it appear here.
      </p>
    </div>
  );
};

export default Empty;
