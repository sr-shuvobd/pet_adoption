import PetCard from "@/components/PetCard";
import React from "react";

const AllPets = async () => {
  const res = await fetch("http://localhost:5000/allpet", {
    cache: "no-store",
  });

  const pets = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#D68B6E] mb-7">All Pets</h1>

      <PetCard pets={pets} />
    </div>
  );
};

export default AllPets;
