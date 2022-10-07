import React from 'react';
import Image from 'next/image';

function SmallCard({ img, location, distance }) {
  return (
    <div className='flex m-2 items-center mt-5 space-x-4 cursor-pointer hover:bg-slate-200 rounded-xl hover:scale-105 transition duration-150'>
      <div className='relative h-16 w-16'>
        <Image
          className='rounded-lg'
          src={img}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
