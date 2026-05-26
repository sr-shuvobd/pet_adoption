"use client";

import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="p-7 bg-[#FFF1EB]">
      <div
        className="
          w-full
          bg-white
          p-6
          rounded-2xl
          shadow-md
          flex flex-col md:flex-row
          gap-5
          items-center
          justify-between
          mb-8
        "
      >
        <h2 className="text-2xl font-bold text-[#064E3B]">Search & Filter</h2>

        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by pet name..."
            className="
              w-full
              px-4
              py-3
              border
              rounded-xl
              focus:outline-none
              focus:border-[#D68B6E]
            "
          />
        </div>

        <div className="w-full md:w-1/4">
          <select
            className="
              w-full
              px-4
              py-3
              border
              rounded-xl
              focus:outline-none
              focus:border-[#D68B6E]
            "
          >
            <option value="">All Species</option>

            <option value="dog">Dog</option>

            <option value="cat">Cat</option>

            <option value="bird">Bird</option>
          </select>
        </div>

        <div className="w-full md:w-1/4">
          <select
            className="
              w-full
              px-4
              py-3
              border
              rounded-xl
              focus:outline-none
              focus:border-[#D68B6E]
            "
          >
            <option value="">Sort By</option>

            <option value="low">Low Price</option>

            <option value="high">High Price</option>
          </select>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
