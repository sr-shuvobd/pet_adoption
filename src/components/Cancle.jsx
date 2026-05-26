'use client'
import React from 'react';
import { toast } from 'react-toastify';

const Cancle = ({id}) => {
    const handleDelete = async() => {
        await fetch(`http://localhost:5000/adoptpet/${id}`, {
        method: "DELETE",
      });
      toast.success("Cancle Successfuly")
      window.location.reload();
      }

    return (
        <div>
            <button onClick={handleDelete} className='text-red-600 bg-red-100 p-2 rounded-full'>Cancle</button>
        </div>
    );
};

export default Cancle;