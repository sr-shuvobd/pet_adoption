"use client";

import Link from "next/link";
import React from "react";
import { FaPaw } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#064E3B]
        px-5
        container
        mx-auto
      "
    >

      <div
        className="
          text-center
          bg-white
          p-10
          rounded-3xl
          shadow-2xl
          max-w-xl
        "
      >

  
        <div className="flex justify-center mb-5">
          <FaPaw className="text-7xl text-[#D68B6E]" />
        </div>

      
        <h1 className="text-7xl font-extrabold text-[#064E3B]">
          404
        </h1>

     
        <h2 className="text-3xl font-bold mt-4 text-[#D68B6E]">
          Oops! Page Not Found
        </h2>

        
        <p className="text-gray-500 mt-4 leading-7">
          The page you are looking for does not exist
          or may have been moved.
        </p>

     
        <Link
          href="/"
          className="
            inline-block
            mt-8
            px-8 py-3
            rounded-full
            bg-[#D68B6E]
            text-white
            font-semibold
            hover:bg-[#c97858]
            hover:scale-105
            transition-all duration-300
            shadow-lg
          "
        >
          Back To Home
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;