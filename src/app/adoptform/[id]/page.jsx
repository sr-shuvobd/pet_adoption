import AdoptForm from '@/components/AdoptForm';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from 'react';

const Adopt = async ({params}) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(`${process.env.NEXT_PUBLICK_URL}/allpet/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const pet = await res.json();
    return (
        <div className='h-screen flex justify-center items-center bg-[#FFF1EB]'>
            <div className='bg-white p-10 rounded-2xl'>
                <AdoptForm pet={pet}/>
            </div>
            
        </div>
    );
};

export default Adopt;