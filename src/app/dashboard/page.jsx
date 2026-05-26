
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

  const res = await fetch(`http://localhost:5000/adoptpet/user/${user.id}`);
  const pets = await res.json();

  

  return (
    <div>
      <h1 className="text-3xl font-bold m-5 text-[#D68B6E]">
        Adoption Requests
      </h1>
      {pets.length === 0 ? (
        <Empty />
      ) : (
        <table className="w-full ">
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
                  {pet.status=="pending"?(<Cancle id={pet._id}/>) : (<Link href={`/details/${pet.id}`} className="btn bg-[#064E3B] text-white hover:bg-[#0b6b50]">View</Link>)}
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
