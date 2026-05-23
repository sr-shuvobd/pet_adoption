"use client";

import {AlertDialog, Button} from "@heroui/react";
import { refresh } from "next/cache";
import { MdDelete } from "react-icons/md";

export function DeletePet({id,petName}) {
   
    const handleDelete = async() => {
    await fetch(`http://localhost:5000/allpet/${id}`, {
    method: "DELETE",
  });
  window.location.reload();
  }

  return (
    <AlertDialog>
      <Button variant="danger" className="btn text-2xl btn-outline text-red-500"><MdDelete /></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{petName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Pet
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}