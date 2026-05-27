import Cancle from "@/components/Cancle";
import Empty from "@/components/Empty";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const Deshboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLICK_URL}/adoptpet/user/${user.id}`);

  const pets = await res.json();

  const pendingPets = pets.filter((pet) => pet.status === "pending");

  const confirmPets = pets.filter((pet) => pet.status === "confirm");

  const cancelPets = pets.filter((pet) => pet.status === "cancel");

  return (
    <div>
      <h1 className="text-3xl font-bold m-5 text-[#D68B6E]">
        Adoption Requests
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-[#D68B6E]">
          <h1 className="text-gray-500 text-lg font-medium">Total Requests</h1>

          <p className="text-4xl font-bold text-[#064E3B] mt-3">
            {pets.length}
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
        <table className="w-full">
          <thead>
            <tr className="bg-[#064E3B] text-white">
              <th className="p-4 text-left">Pet Name</th>

              <th className="p-4 text-left">Request Date</th>

              <th className="p-4 text-left">Pickup Date</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pets.map((pet) => (
              <tr key={pet._id} className="border-b">
                <td className="p-4">{pet.petname}</td>

                <td className="p-4">{pet.request}</td>

                <td className="p-4">{pet.date}</td>

                <td className="p-4 capitalize">{pet.status}</td>

                <td className="p-4">
                  {pet.status === "pending" ? (
                    <Cancle id={pet._id} />
                  ) : (
                    <Link
                      href={`/details/${pet.id}`}
                      className="btn bg-[#064E3B] text-white hover:bg-[#0b6b50]"
                    >
                      View
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Deshboard;
