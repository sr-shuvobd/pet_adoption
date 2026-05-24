"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaPaw, FaUserPlus } from "react-icons/fa";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { PiSlideshowLight } from "react-icons/pi";

const NavBar = () => {
  const pathname = usePathname();
  const link = (
    <>
      <li>
        <Link
          href="/"
          className={`hover:text-[#D68B6E] hover:font-bold ${pathname === "/" && "text-[#D68B6E]"}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/allpets"
          className={`hover:text-[#D68B6E] hover:font-bold ${pathname === "/allpets" && "text-[#D68B6E]"}`}
        >
          All pets
        </Link>
      </li>
    </>
  );

  const [open, setOpen] = useState(false);

  const { data: session} = authClient.useSession();
  const user = session?.user;

  const handleLogout = async() =>  {
      await authClient.signOut();
  }

  return (
    <div className="navbar shadow-sm mt-1 text-white bg-[#064E3B] rounded-t-2xl px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {link}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaPaw className="text-4xl text-[#D68B6E]" />
          <Link href="/" className="font-bold text-2xl text-[#D68B6E]">
            PetAdopt
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end gap-3">
        {!user ? (
          <>
            <Link
              href="/login"
              className="px-5 py-2 flex items-center gap-2
                rounded-full
                border-2 border-[#D68B6E]
                text-[#D68B6E]
                font-semibold
                hover:bg-[#D68B6E]
                hover:text-white
                transition-all
                duration-300
                shadow-[0_0_15px_rgba(214,139,110,0.4)]
                hover:scale-105"
            >
              <IoIosLogIn />
              Login
            </Link>
            <Link
              href="/register"
              className="hidden md:flex px-5 py-2 flex items-center gap-2
                rounded-full
                border-2 border-[#D68B6E]
                text-[#D68B6E]
                font-semibold
                hover:bg-[#D68B6E]
                hover:text-white
                transition-all
                duration-300
                shadow-[0_0_15px_rgba(214,139,110,0.4)]
                hover:scale-105"
            >
              <FaUserPlus />
              Get started
            </Link>
          </>
        ) : (
          <>
            <div className="flex">
              <Image
                src={user.image || "/public/assets/heroimage.png"}
                alt="icon"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="
                      px-5 py-2
                      bg-[#064E3B]
                      text-white
                      rounded-lg
                    "
                >
                  <MdOutlineKeyboardDoubleArrowDown className="text-3xl" />
                </button>

                {open && (
                  <div
                    className="absolute right-0 top-12 w-44 flex flex-col gap-4 bg-black/50 backdrop-blur-lg border border-white/20 p-5 rounded-2xl shadow-2xl z-50"
                  >
                    <Link href="/dashboard" className=" text-white flex items-center gap-2">
                      <PiSlideshowLight /> Dashboard
                    </Link>

                    <button onClick={handleLogout}
                      className="text-white  flex items-center gap-2"
                    >
                      <IoIosLogOut />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
