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
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdoptForm = ({ pet }) => {
  const { _id, petName, species } = pet;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [request, setrequest] = useState(false);

  useEffect(() => {
    const fetchRequest = async () => {
      const res = await fetch(`http://localhost:5000/adoptpet/user/${user.id}`);

      const data = await res.json();

      const isExist = data.find((item) => item.id === _id);

      if (isExist) {
        setrequest(true);
      }
    };

    if (user?.id) {
      fetchRequest();
    }
  }, [user, _id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const allData = {
      ...data,
      userId: user.id,
      id: _id,
      status: "pending",
      request: new Date().toLocaleDateString(),
    };

    await fetch("http://localhost:5000/adoptpet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    });
    toast.success("Add Successfuly");
    setrequest(true);
  };

  return (
    <div>
      {request ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
            <h1 className="text-3xl font-bold text-[#D68B6E] mb-3">
              Your Request Is Processing
            </h1>

            <p className="text-gray-500">Please wait for owner confirmation.</p>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default AdoptForm;
