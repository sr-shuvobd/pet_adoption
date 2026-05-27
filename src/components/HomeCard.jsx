import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";

const HomeCard = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLICK_URL}/allpet`);
  const pets = await res.json();

  const requestRes = await fetch(`${process.env.NEXT_PUBLICK_URL}/adoptpet`);
  const requests = await requestRes.json();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
      {pets.slice(0, 6).map((pet) => {
        const { _id, imageUrl, petName, species, age, adoptionFee, userId } =
          pet;

        const isOwner = userId === user?.id;

        const isConfirmed = requests.find(
          (item) => item.id === _id && item.status === "confirm",
        );

        return (
          <div
            key={_id}
            className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
                group
              "
          >
            <div className="overflow-hidden relative">
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
                    transition-all
                    duration-500
                  "
              />

              <h1
                className={`
                    absolute
                    top-4
                    right-4
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                    border
                    border-white/20
                    backdrop-blur-sm

                    ${
                      isConfirmed
                        ? "bg-red-500/70 text-white"
                        : "bg-black/40 text-green-400"
                    }
                  `}
              >
                {isConfirmed ? "Adopted" : "Available"}
              </h1>
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
                <Link
                  href={`/details/${_id}`}
                  className={`
                      btn
                      rounded-full
                      flex-1
                      w-full
                      bg-[#064E3B]
                      text-white
                      hover:bg-[#0b6b50]
                      ${
                        isOwner || isConfirmed
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    `}
                >
                  <FaEye />
                  View Details
                </Link>

                <Link
                  href={`/adoptform/${_id}`}
                  className={`
                      flex-1
                      w-full
                      btn
                      rounded-full
                      border-2
                      border-[#D68B6E]
                      text-[#D68B6E]
                      bg-transparent
                      hover:bg-[#D68B6E]
                      hover:text-white

                      ${
                        isOwner || isConfirmed
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    `}
                >
                  {isOwner ? "Your Pet" : isConfirmed ? "Adopted" : "Adopt"}
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
