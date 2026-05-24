import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";

const HomeCard = async () => {
  const res = await fetch("http://localhost:5000/allpet");

  const pets = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
      {pets.slice(0, 6).map((pet) => {
        const { _id, imageUrl, petName, species, age, adoptionFee } = pet;

        return (
          <div
            key={_id}
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-2xl
              transition-all duration-300
              hover:-translate-y-2
              group
            "
          >
            <div className="overflow-hidden">
              <Image
                src={imageUrl || "/assets/heroimage.png"}
                alt={petName}
                width={500}
                height={500}
                className="
                  w-full
                  h-64
                  object-cover
                  group-hover:scale-110
                  transition-all duration-500
                "
              />
            </div>
            <div className="p-5">
              <h1 className="text-2xl font-bold text-[#064E3B] mb-2">
                {petName}
              </h1>

              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">Species:</span> {species}
                </p>

                <p>
                  <span className="font-semibold">Age:</span> {age} Years
                </p>

                <p>
                  <span className="font-semibold">Adoption Fee:</span> $
                  {adoptionFee}
                </p>
              </div>

              <div className="flex gap-3 mt-5">
                <Link href={`/details/${_id}`} className="flex-1">
                  <Button
                    className="
                      w-full
                      bg-[#064E3B]
                      text-white
                      hover:bg-[#0b6b50]
                    "
                  >
                    {" "}
                    <FaEye />
                    View Details
                  </Button>
                </Link>

                <Link href="/" className="flex-1">
                  <Button
                    className="
                      w-full
                      border-2
                      border-[#D68B6E]
                      text-[#D68B6E]
                      bg-transparent
                      hover:bg-[#D68B6E]
                      hover:text-white
                    "
                  >
                    Adopt
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCard;
