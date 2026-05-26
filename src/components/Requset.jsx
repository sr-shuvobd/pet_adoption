"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { useEffect, useState } from "react";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Requset = ({ id }) => {
  const [pets, setPets] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch(`http://localhost:5000/adoptpet/request/${id}`);

      const data = await res.json();

      setPets(data);
    };

    fetchData();
  }, [id]);

  // CONFIRM REQUEST
  const handleConfirm = async () => {
    const updateData = {
      status: "confirm",
    };

    await fetch(`http://localhost:5000/adoptpet/request/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    toast.success("Request Confirm Successfully!");
    window.location.reload();
  };

  // CANCEL REQUEST
  const handleCansel = async () => {
    const updateData = {
      status: "cancel",
    };

    await fetch(`http://localhost:5000/adoptpet/request/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    toast.success("Request Cancel Successfully!");
    window.location.reload();
  };

  return (
    <div>
      <Modal>
        <Button className="w-full border border-[#D68B6E] text-[#D68B6E] bg-transparent hover:bg-[#D68B6E] hover:text-white rounded-md py-5">
          <IoGitPullRequestSharp />
          Requests
        </Button>

        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <Rocket className="size-5" />
                </Modal.Icon>

                <Modal.Heading>Adoption Requests</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                {pets.filter((pet) => pet.status === "pending").length === 0 ? (
                  <div className="text-center py-5">
                    <h1 className="text-xl font-semibold text-red-500">
                      No Request Right Now
                    </h1>
                  </div>
                ) : (
                  pets
                    .filter((pet) => pet.status === "pending")
                    .map((pet) => (
                      <div
                        key={pet._id}
                        className="border rounded-xl p-4 space-y-3"
                      >
                        <p>
                          <span className="font-semibold">User Email:</span>{" "}
                          {pet.useremail}
                        </p>

                        <p>
                          <span className="font-semibold">Message:</span>{" "}
                          {pet.message}
                        </p>

                        <p>
                          <span className="font-semibold">Pickup Date:</span>{" "}
                          {pet.date}
                        </p>

                        <p>
                          <span className="font-semibold">Status:</span>{" "}
                          {pet.status}
                        </p>

                        <div className="flex w-full gap-2">
                          <Button
                            onClick={handleConfirm}
                            className="w-full border border-[#D68B6E] text-[#D68B6E] bg-transparent hover:bg-[#D68B6E] hover:text-white"
                            slot="close"
                          >
                            Confirm
                          </Button>

                          <Button
                            onClick={handleCansel}
                            className="w-full border border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white"
                            slot="close"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ))
                )}
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default Requset;
