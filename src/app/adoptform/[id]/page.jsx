import AdoptForm from '@/components/AdoptForm';
import React from 'react';

const Adopt = async ({params}) => {
    const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLICK_URL}/allpet/${id}`);
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