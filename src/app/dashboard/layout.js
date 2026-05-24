"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaClipboardList, FaHome, FaPaw, FaPlus } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="min-h-screen md:flex bg-gray-100">
      <div className=" md:w-64 bg-[#064E3B] text-white p-5">
        <div className="flex items-center gap-2 mb-10">
          <FaPaw className="text-3xl text-[#F5DCD1]" />

          <h2 className="text-2xl font-bold text-[#F5DCD1]">PetAdopt</h2>
        </div>
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className={`
                flex items-center gap-3
                hover:text-[#D68B6E]
                transition-all duration-300 
                ${
                  pathname === "/dashboard"
                    && "bg-[#D68B6E] text-white p-2 rounded hover:text-black"
                }
              `}
            >
              <FaClipboardList />
              My Requests
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/add_pet"
              className={`
                flex items-center gap-3
                hover:text-[#D68B6E]
                transition-all duration-300
                ${
                  pathname === "/dashboard/add_pet"
                    && "bg-[#D68B6E] text-white p-2 rounded hover:text-black"
                }
              `}
            >
              <FaPlus />
              Add Pet
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/my_listings"
              className={`
                flex items-center gap-3
                hover:text-[#D68B6E]
                transition-all duration-300
                ${
                  pathname === "/dashboard/my_listings"
                    && "bg-[#D68B6E] text-white p-2 rounded hover:text-black"
                }
              `}
            >
              <FaPaw />
              My Listings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
