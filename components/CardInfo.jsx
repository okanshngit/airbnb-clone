import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

function CardInfo({ searchData }) {
  const { description, location, img, price, star, title, total, long, lat } =
    searchData;
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transtion duration-200 ease-out  first:border-t'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          className='rounded-2xl'
          src={img}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between '>
          <p>{location}</p>
          <HeartIcon className='h-7 w-7 cursor-pointer' />
        </div>

        <h4 className='text-xl '>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

        <div className='flex justify-between items-end pt-5 '>
          <p className='flex items-center '>
            <StarIcon className='h-5 w-5  text-red-400 cursor-pointer' />
            {star}
          </p>

          <div>
            <p className='text-lg font-semibold pb-2 lg:text-xl'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
