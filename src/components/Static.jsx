import Image from "next/image";
import React from "react";

const Static = () => {
  return (
    <div className="space-y-2">

      <section className="py-20">
        <div
          className="
                bg-gradient-to-r
                from-[#FFF1EB]
                to-[#FFE4D6]
                rounded-3xl
                p-10
                grid grid-cols-1 lg:grid-cols-2
                gap-10
                items-center
                "
        >
          <div>
            <h1 className="text-5xl font-bold text-[#D68B6E] leading-tight">
              Why Adopt Pets?
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Adopting a pet gives homeless animals a second chance at life. You
              not only gain a loyal companion but also help reduce animal
              homelessness and support a kinder community.
            </p>

            <button
              className="
                    mt-8
                    px-8 py-3
                    rounded-full
                    bg-[#064E3B]
                    text-white
                    font-semibold
                    hover:bg-[#0b6b50]
                    transition-all duration-300
                  "
            >
              Learn More
            </button>
          </div>

          <div className="flex justify-center">

            <Image src="/assets/image2.webp" alt="image" width={500} height={500} className="rounded-3xl shadow-2xl w-full max-w-md h-[400px] object-cover"/>
          </div>
        </div>
      </section>

      {/* .... */}

      <section className="py-20 bg-[#FFF8F5] rounded-3xl">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#D68B6E]">Success Stories</h1>

          <p className="text-gray-500 mt-4 text-lg">
            Heartwarming stories from happy adopters and their new furry
            friends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}

          <div
            className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
              "
          >
            <Image src="/assets/cat.jpg" alt="image" width={500} height={400} className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#064E3B]">
                Bella Found a Home
              </h2>

              <p className="text-gray-500 mt-3">
                Bella was rescued and adopted by a loving family. She now enjoys
                a happy and safe life.
              </p>
            </div>
          </div>

          {/* Card 2 */}

          <div
            className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
              "
          >
            <Image src="/assets/image1.webp" alt="image" width={500} height={400} className="w-full h-64 object-cover"/>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#064E3B]">
                Max’s New Journey
              </h2>

              <p className="text-gray-500 mt-3">
                Max finally found his forever home and became the best friend of
                a little boy.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition-all duration-300
            "
          >
            <Image src="/assets/image3.jpeg" alt="image" width={500} height={400} className="w-full h-64 object-cover"/>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#064E3B]">
                Luna’s Happy Ending
              </h2>

              <p className="text-gray-500 mt-3">
                Luna was once abandoned, but now she lives happily with caring
                owners.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* .... */}
      <section className="py-20">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#D68B6E]">Pet Care Tips</h1>

          <p className="text-gray-500 mt-4 text-lg">
            Helpful tips to keep your pets healthy, active, and happy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tip 1 */}
          <div
            className="
        bg-white
        p-8
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
      "
          >
            <div className="text-5xl mb-5">🍖</div>

            <h2 className="text-2xl font-bold text-[#064E3B]">
              Healthy Nutrition
            </h2>

            <p className="text-gray-500 mt-4">
              Provide balanced meals and clean water daily to maintain your
              pet’s health.
            </p>
          </div>

          {/* Tip 2 */}
          <div
            className="
        bg-white
        p-8
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
      "
          >
            <div className="text-5xl mb-5">🏃</div>

            <h2 className="text-2xl font-bold text-[#064E3B]">
              Daily Exercise
            </h2>

            <p className="text-gray-500 mt-4">
              Regular walks and playtime help pets stay active, healthy, and
              stress-free.
            </p>
          </div>

          {/* Tip 3 */}
          <div
            className="
        bg-white
        p-8
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
      "
          >
            <div className="text-5xl mb-5">🩺</div>

            <h2 className="text-2xl font-bold text-[#064E3B]">
              Regular Checkups
            </h2>

            <p className="text-gray-500 mt-4">
              Visit the veterinarian regularly for vaccinations and health
              monitoring.
            </p>
          </div>
        </div>
      </section>
      {/* .... */}
      <section className="py-20 bg-[#FFF8F5] rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#D68B6E]">
              How the Adoption Process Works
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              We made adopting a pet simple and rewarding. Follow these easy
              steps to find your perfect companion.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           
            <div
              className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all duration-300
                  text-center
                  relative
                "
            >
              <div
                className="
                    w-16 h-16
                    mx-auto
                    rounded-full
                    bg-blue-100
                    flex items-center justify-center
                    text-3xl
                    mb-6
                  "
              >
                🔍
              </div>

              <h2 className="text-2xl font-bold text-[#8B7CF8] mb-3">
                Browse Available Pets
              </h2>

              <p className="text-gray-500 leading-relaxed">
                Search through our database of lovable pets waiting for their
                forever homes.
              </p>
            </div>

         
            <div
              className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all duration-300
                  text-center
                "
            >
              <div
                className="
                    w-16 h-16
                    mx-auto
                    rounded-full
                    bg-purple-100
                    flex items-center justify-center
                    text-3xl
                    mb-6
                  "
              >
                📄
              </div>

              <h2 className="text-2xl font-bold text-[#8B7CF8] mb-3">
                Submit Application
              </h2>

              <p className="text-gray-500 leading-relaxed">
                Fill out our adoption form and tell us about your home and
                lifestyle.
              </p>
            </div>

            <div
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
                text-center
                "
            >
              <div
                className="
                      w-16 h-16
                      mx-auto
                      rounded-full
                      bg-orange-100
                      flex items-center justify-center
                      text-3xl
                      mb-6
                    "
              >
                🏠
              </div>

              <h2 className="text-2xl font-bold text-[#8B7CF8] mb-3">
                Meet Your Match
              </h2>

              <p className="text-gray-500 leading-relaxed">
                Visit our shelter to meet your potential new family member in
                person.
              </p>
            </div>

      
            <div
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
                text-center
              "
            >
              <div
                className="
                  w-16 h-16
                  mx-auto
                  rounded-full
                  bg-lime-100
                  flex items-center justify-center
                  text-3xl
                  mb-6
                "
              >
                👍
              </div>

              <h2 className="text-2xl font-bold text-[#8B7CF8] mb-3">
                Welcome Home
              </h2>

              <p className="text-gray-500 leading-relaxed">
                Complete the adoption process and bring your new best friend
                home!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ....... */}
      <section className="py-20 bg-[#FFF8F5] rounded-3xl">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#D68B6E]">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Find answers to common questions about pet adoption.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
    
          <div
            className="
              bg-white
              rounded-2xl
              shadow-md
              p-6
            "
          >
            <h2 className="text-2xl font-bold text-[#064E3B]">
              🐾 How do I adopt a pet?
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Browse available pets, submit an adoption request, and wait for
              approval from the pet owner or shelter.
            </p>
          </div>

         
          <div
            className="
              bg-white
              rounded-2xl
              shadow-md
              p-6
            "
          >
            <h2 className="text-2xl font-bold text-[#064E3B]">
              💉 Are pets vaccinated?
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Most pets are vaccinated and health checked before adoption. You
              can view vaccination details on each pet profile.
            </p>
          </div>

  
          <div
            className="
              bg-white
              rounded-2xl
              shadow-md
              p-6
            "
          >
            <h2 className="text-2xl font-bold text-[#064E3B]">
              🏠 Can I return a pet after adoption?
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              We encourage responsible adoption, but in special cases, return
              policies may apply depending on the owner or shelter.
            </p>
          </div>

          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
          "
          >
            <h2 className="text-2xl font-bold text-[#064E3B]">
              📅 How long does approval take?
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Adoption approvals usually take between 1 to 3 days, depending on
              the pet owner’s response.
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Static;
