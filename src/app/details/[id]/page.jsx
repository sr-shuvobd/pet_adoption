import AdoptForm from "@/components/AdoptForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  console.log(token)

  const res = await fetch(`${process.env.NEXT_PUBLICK_URL}/allpet/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const pet = await res.json();
  const {
    _id,
    imageUrl,
    petName,
    species,
    age,
    adoptionFee,
    healthStatus,
    vaccinationStatus,
    location,
    description,
    breed,
    gender,
  } = pet;
  return (
    <div className="py-14 px-5 grid grid-cols-1 md:grid-cols-2 gap-15 bg-[#D68B6E]">
      <div className="bg-gray-200 rounded-2xl p-5 shadow">
        {/* Image Section */}
        <div className="relative group overflow-hidden rounded-2xl">
          <Image
            src={imageUrl}
            alt={petName}
            width={500}
            height={500}
            className="
                w-full
                h-full
                object-cover
                lg:h-[400px]
                rounded-2xl
                group-hover:scale-110
                transition-all duration-700
              "
          />

          <div
            className="
          absolute inset-0
          bg-gradient-to-t
          from-black/70
          to-transparent
        "
          ></div>

          {/* Pet Name On Image */}
          <div className="absolute bottom-10 left-10">
            <h1
              className="
            text-5xl
            font-extrabold
            text-white
            drop-shadow-lg
          "
            >
              {petName}
            </h1>

            <p className="text-[#F5DCD1] text-xl mt-2">
              {species} • {breed}
            </p>
          </div>
        </div>
        {/* Details Section */}
        <div className="p-8 lg:p-6 flex flex-col justify-center">
          {/* Top Badge */}

          <div className="flex gap-3 mb-2 flex-wrap justify-between">
            <div className="flex gap-3 items-center">
              <span
                className="
                    px-5 py-2
                    rounded-full
                    bg-[#064E3B]
                    text-white
                    text-sm
                    font-semibold
                  "
              >
                {gender}
              </span>

              <span
                className="
                    px-5 py-2
                    rounded-full
                    bg-[#D68B6E]
                    text-white
                    text-sm
                    font-semibold
                  "
              >
                {age} Years Old
              </span>
            </div>
            <span className="flex flex-col text-center">
              <p className="text-gray-500">Adoption Fee</p>
              <h1 className="text-2xl text-[#D68B6E]">${adoptionFee}</h1>
            </span>
          </div>

          {/* Title */}
          <h2
            className="
          text-4xl
          font-extrabold
          text-[#064E3B]
          leading-tight
        "
          >
            Meet {petName}
          </h2>

          {/* Description */}
          <p
            className="
                text-gray-600
                leading-8
                text-lg
              "
          >
            {description}
          </p>

          {/* card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="but p-3 bg-[#064E3B] text-white rounded">
              <p className="text-sm text-gray-300 mb-2">Health Status</p>
              <h1 className="flex gap-2 items-center"><MdHealthAndSafety />{healthStatus}</h1>
              
            </div>

            <div className="but p-3 bg-[#064E3B] text-white rounded">
              <p className="text-sm text-gray-300 mb-2">Vaccirination Status</p>
              <h1 className="flex gap-2 items-center"><TbVaccine />{vaccinationStatus}</h1>
            </div>

             <div className="but p-3 bg-[#064E3B] text-white rounded">
              <p className="text-sm text-gray-300 mb-2">Location</p>
              <h1 className="flex gap-2 items-center"><CiLocationOn />{location}</h1>
            </div>

            <div className="but p-3 bg-[#064E3B] text-white rounded">
              <p className="text-sm text-gray-300 mb-2">Adoption Fee</p>
              <h1 className="flex gap-2 items-center"><FaDollarSign />{adoptionFee}</h1>
            </div>

          </div>
        </div>
      </div>

      {/* Form Section  */}
      <div className="shadow bg-gray-200 rounded-2xl p-10">
        <AdoptForm pet={pet} />
      </div>
    </div>
  );
};

export default DetailsPage;
