import { DeletePet } from "@/components/DeletePet";
import Empty from "@/components/Empty";
import Requset from "@/components/Requset";

import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";

const MyListings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLICK_URL}/allpet/user/${user.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const pets = await res.json();

  const fetchData = await fetch(`${process.env.NEXT_PUBLICK_URL}/adoptpet`);

  const data = await fetchData.json();

  const myPetIds = pets.map((pet) => pet._id.toString());

  const myRequests = data.filter((item) => myPetIds.includes(item.id));

  const pendingPets = myRequests.filter((pet) => pet.status === "pending");

  const confirmPets = myRequests.filter((pet) => pet.status === "confirm");

  const cancelPets = myRequests.filter((pet) => pet.status === "cancel");

  return (
    <div>
      <h1 className="text-3xl text-[#D68B6E] m-5">My Listings Pet</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-[#D68B6E]">
          <h1 className="text-gray-500 text-lg font-medium">Total Requests</h1>

          <p className="text-4xl font-bold text-[#064E3B] mt-3">
            {myRequests.length}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500">
          <h1 className="text-gray-500 text-lg font-medium">Pending</h1>

          <p className="text-4xl font-bold text-yellow-500 mt-3">
            {pendingPets.length}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-500">
          <h1 className="text-gray-500 text-lg font-medium">Confirm</h1>

          <p className="text-4xl font-bold text-green-500 mt-3">
            {confirmPets.length}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-red-500">
          <h1 className="text-gray-500 text-lg font-medium">Cancel</h1>

          <p className="text-4xl font-bold text-red-500 mt-3">
            {cancelPets.length}
          </p>
        </div>
      </div>

      {pets.length === 0 ? (
        <Empty />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
          {pets.map((pet) => {
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
                      transition-all
                      duration-300
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
                          transition-all
                          duration-500
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

                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <Link
                      className="btn btn-outline text-[#D68B6E]"
                      href={`/details/${_id}`}
                    >
                      <FaEye />
                      View
                    </Link>

                    <Link
                      className="btn btn-outline text-[#D68B6E]"
                      href={`/dashboard/edit/${_id}`}
                    >
                      <FaEdit />
                      Edit
                    </Link>

                    <Requset id={_id} />

                    <DeletePet id={_id} petName={petName} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyListings;
