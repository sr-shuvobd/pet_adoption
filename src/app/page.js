import Hero from "@/components/Hero";
import HomeCard from "@/components/HomeCard";
import Link from "next/link";
import { FaArrowRight, FaPaw } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="text-center p-6 space-y-3">
        <p className="bg-red-500 p-1 text-white rounded-full btn">
          <FaPaw /> Featured Pets
        </p>
        <h1 className="text-3xl text-[#D68B6E]">Pets Available for Adoption</h1>
        <p className="text-gray-500">
          These adorable pets are waiting for a loving home. Adopt today and
          make a lifelong friend.
        </p>
      </div>
      <HomeCard />
      <div className="m-2 flex justify-center">
        <Link
          className="px-4 m-3 w-fit flex items-center gap-2
                      rounded-2xl
                      border-2
                      border-[#D68B6E]
                      text-[#D68B6E]
                      bg-transparent
                      hover:bg-[#D68B6E]
                      hover:text-white"
          href="/allpets"
        >
          View All Pets<FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
