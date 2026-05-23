"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const AddPet = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const petData = {
      ...data,
      userId: user.id,
      userEmail: user.email,
    };

    await fetch("http://localhost:5000/allpet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(petData),
    });
    toast.success("Pet added successfully!");
    router.push("/dashboard/my_listings");
  };

  return (
    <div className="flex items-center justify-center py-10">
      <Form
        className="
          w-full max-w-3xl
          grid grid-cols-1 md:grid-cols-2
          gap-5
          bg-white
          p-8
          rounded-2xl
          shadow-lg
        "
        onSubmit={onSubmit}
      >
        {/* Title */}
        <div className="md:col-span-2 text-center mb-4">
          <h1 className="text-4xl font-bold text-[#D68B6E]">Add New Pet</h1>

          <p className="text-gray-500 mt-2">
            Fill in the pet information below
          </p>
        </div>

        {/* Pet Name */}
        <TextField isRequired name="petName" type="text">
          <Label>Pet Name</Label>
          <Input placeholder="e.g. Buddy" />
          <FieldError />
        </TextField>

        {/* Species */}
        <TextField isRequired name="species" type="text">
          <Label>Species</Label>
          <Input placeholder="Dog / Cat / Bird" />
          <FieldError />
        </TextField>

        {/* Breed */}
        <TextField isRequired name="breed" type="text">
          <Label>Breed</Label>
          <Input placeholder="Golden Retriever" />
          <FieldError />
        </TextField>

        {/* Age */}
        <TextField isRequired name="age" type="number">
          <Label>Age</Label>
          <Input placeholder="2" />
          <FieldError />
        </TextField>

        {/* Gender */}
        <TextField isRequired name="gender" type="text">
          <Label>Gender</Label>
          <Input placeholder="Male / Female" />
          <FieldError />
        </TextField>

        {/* Image URL */}
        <TextField isRequired name="imageUrl" type="text">
          <Label>Image URL</Label>
          <Input placeholder="https://example.com/pet.jpg" />
          <FieldError />
        </TextField>

        {/* Health Status */}
        <TextField isRequired name="healthStatus" type="text">
          <Label>Health Status</Label>
          <Input placeholder="Healthy" />
          <FieldError />
        </TextField>

        {/* Vaccination */}
        <TextField isRequired name="vaccinationStatus" type="text">
          <Label>Vaccination Status</Label>
          <Input placeholder="Vaccinated" />
          <FieldError />
        </TextField>

        {/* Location */}
        <TextField isRequired name="location" type="text">
          <Label>Location</Label>
          <Input placeholder="Dhaka" />
          <FieldError />
        </TextField>

        {/* Adoption Fee */}
        <TextField isRequired name="adoptionFee" type="number">
          <Label>Adoption Fee</Label>
          <Input placeholder="500" />
          <FieldError />
        </TextField>

        {/* Description */}
        <div className="md:col-span-2">
          <TextArea
            name="description"
            label="Description"
            placeholder="Write something about the pet..."
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <Button
            variant="outline"
            type="submit"
            className="
              px-8 py-3
              flex items-center gap-2
              rounded-full
              border-2 border-[#D68B6E]
              text-[#D68B6E]
              font-semibold
              hover:bg-[#D68B6E]
              hover:text-white
              transition-all duration-300
              shadow-[0_0_15px_rgba(214,139,110,0.4)]
              hover:scale-105
            "
          >
            <Check />
            Add Pet
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddPet;
