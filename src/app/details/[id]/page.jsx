
import React from 'react';

const DetailsPage = async({params}) => {
  const {id} = await params;

    const res = await fetch(`http://localhost:5000/allpet/${id}`);
    const pet = await res.json();
    const { _id, imageUrl, petName, species, age, adoptionFee,healthStatus,vaccinationStatus,location,description, breed,gender} = pet;
    return (
        <div className="container mx-auto py-14 px-5">

  <div
    className="
      bg-white
      rounded-[35px]
      shadow-2xl
      overflow-hidden
      grid grid-cols-1 lg:grid-cols-2
    "
  >

    {/* Image Section */}
    <div className="relative group overflow-hidden">

      <img
        src={imageUrl}
        alt={petName}
        className="
          w-full
          h-full
          object-cover
          lg:h-[800px]
          group-hover:scale-110
          transition-all duration-700
        "
      />

      {/* Overlay */}
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
    <div className="p-8 lg:p-12 flex flex-col justify-center">

      {/* Top Badge */}
      <div className="flex gap-3 mb-6 flex-wrap">

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
          mt-6
          text-lg
        "
      >
        {description}
      </p>

      {/* Info Cards */}
      <div
        className="
          grid grid-cols-2
          gap-5
          mt-10
        "
      >

        <div className="bg-[#f8f8f8] p-5 rounded-2xl">
          <h3 className="text-gray-500 text-sm">
            Adoption Fee
          </h3>

          <p className="text-2xl font-bold text-[#064E3B] mt-2">
            ${adoptionFee}
          </p>
        </div>

        <div className="bg-[#f8f8f8] p-5 rounded-2xl">
          <h3 className="text-gray-500 text-sm">
            Location
          </h3>

          <p className="text-2xl font-bold text-[#064E3B] mt-2">
            {location}
          </p>
        </div>

        <div className="bg-[#f8f8f8] p-5 rounded-2xl">
          <h3 className="text-gray-500 text-sm">
            Health Status
          </h3>

          <p className="text-xl font-bold text-[#064E3B] mt-2">
            {healthStatus}
          </p>
        </div>

        <div className="bg-[#f8f8f8] p-5 rounded-2xl">
          <h3 className="text-gray-500 text-sm">
            Vaccination
          </h3>

          <p className="text-xl font-bold text-[#064E3B] mt-2">
            {vaccinationStatus}
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-5 mt-12 flex-wrap">

        <button
          className="
            px-10 py-4
            rounded-full
            bg-[#064E3B]
            text-white
            font-bold
            text-lg
            hover:bg-[#0c6d52]
            hover:scale-105
            transition-all duration-300
            shadow-lg
          "
        >
          Adopt Now
        </button>

        <button
          className="
            px-10 py-4
            rounded-full
            border-2 border-[#D68B6E]
            text-[#D68B6E]
            font-bold
            text-lg
            hover:bg-[#D68B6E]
            hover:text-white
            hover:scale-105
            transition-all duration-300
          "
        >
          Contact Owner
        </button>

      </div>

    </div>

  </div>

</div>
    );
};

export default DetailsPage;

