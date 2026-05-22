import PetCard from '@/components/PetCard';
import React from 'react';

const AllPets = () => {
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-[#D68B6E]'>All Pets</h1>
            <div className=''>
                <PetCard/>
            </div>
        </div>
    );
};

export default AllPets;