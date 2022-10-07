import React from 'react';
import Image from 'next/image';

function MediumCard({ img, title }) {
  return (
    <div className='mb-5 hover:scale-105 transition duration-150 rounded-xl '>
      <div className='relative h-80 w-80   '>
        <Image
          className='rounded-xl cursor-pointer  '
          src={img}
          layout='fill'
        />
      </div>
      <h2 className='font-semibold text-lg'>{title}</h2>
    </div>
  );
}

export default MediumCard;
