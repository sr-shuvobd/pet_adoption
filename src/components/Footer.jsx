import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaPaw,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#064E3B] text-white mt-10 container mx-auto rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaPaw className="text-3xl text-[#D68B6E]" />
            <h2 className="text-2xl font-bold">PetAdopt</h2>
          </div>

          <p className="text-sm text-gray-200 leading-6">
            Find your perfect furry friend and give them a loving home.
            Adopt pets easily and safely with our platform.
          </p>
        </div>

     
        <div>
          <h3 className="footer-title text-white mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:text-[#D68B6E] duration-300">
              Home
            </Link>

            <Link
              href="/all-pets"
              className="hover:text-[#D68B6E] duration-300"
            >
              All Pets
            </Link>

            <Link
              href="/dashboard/add-pet"
              className="hover:text-[#D68B6E] duration-300"
            >
              Add Pet
            </Link>

            <Link
              href="/dashboard/my-requests"
              className="hover:text-[#D68B6E] duration-300"
            >
              My Requests
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title text-white mb-4">
            Contact
          </h3>

          <div className="space-y-2 text-gray-200 text-sm">
            <p>Email: support@petadopt.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>

  
        <div>
          <h3 className="footer-title text-white mb-4">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="bg-white text-[#064E3B] p-3 rounded-full hover:scale-110 duration-300"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="/"
              className="bg-white text-[#064E3B] p-3 rounded-full hover:scale-110 duration-300"
            >
              <FaYoutube />
            </Link>

            <Link
              href="/"
              className="bg-white text-[#064E3B] p-3 rounded-full hover:scale-110 duration-300"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

     
      <div className="border-t border-green-800 py-4 text-center text-sm text-gray-300">
        © 2026 PetAdopt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;