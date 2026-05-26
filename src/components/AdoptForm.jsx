"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";

const AdoptForm = ({ pet }) => {
  const {
    _id,
    petName,
    species,
  } = pet;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const allData = {
      ...data,
      userId: user.id,
      id: _id,
      status: "pending",
      request:new Date().toLocaleDateString(),
    }
    console.log(data)

     await fetch("http://localhost:5000/adoptpet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    });
  }

  return (
    <div>
      <Form onSubmit={onSubmit} className="space-y-2">
        <h1 className="text-3xl mb-5 font-bold text-[#D68B6E]">
          Request to adopt {species}
        </h1>
        <TextField
          defaultValue={petName}
          isRequired
          isReadOnly
          name="petname"
          type="text"
        >
          <Label>Pet Name</Label>
          <Input />
          <FieldError />
        </TextField>
        <TextField
          defaultValue={user?.name}
          isRequired
          isReadOnly
          name="username"
          type="text"
        >
          <Label>Your Name</Label>
          <Input />
          <FieldError />
        </TextField>
        <TextField
          defaultValue={user?.email}
          isRequired
          isReadOnly
          name="useremail"
          type="text"
        >
          <Label>Your Email</Label>
          <Input />
          <FieldError />
        </TextField>

        <TextField isRequired name="date" type="date">
          <Label>Preferred Pickup Date</Label>
          <Input />
          <FieldError />
        </TextField>

        <TextField name="message">
          <Label>Message to Owner</Label>
          <TextArea
            placeholder="Write a short message to the pet owner..."
            minRows={6}
          />
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-5 text-center">
          <Button
            variant="outline"
            type="submit"
            className=" btn px-5 py-2 flex items-center gap-2 mt-5
                rounded
                border-2 border-[#D68B6E]
                text-[#D68B6E]
                font-semibold
                hover:bg-[#D68B6E]
                hover:text-white
                transition-all
                duration-300
                shadow-[0_0_15px_rgba(214,139,110,0.4)]
                hover:scale-105"
          >
            <Check />
            Adopt Request
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AdoptForm;
