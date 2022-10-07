import React from 'react';
import Image from 'next/image';
import AirbnbLogo from '../public/airbnb-logo.png';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className=' sticky top-0 z-10 grid grid-cols-3 shadow-md p-5  md:px-10 bg-white'>
      {/* Left Part */}
      <div className='relative flex place-items-center h-10 cursor-pointer  '>
        <Image
          src={AirbnbLogo}
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle Part */}
      <div className='inline-flex justify-between border-2 rounded-full  '>
        <input
          className='pl-3 grow bg-transparent outline-none'
          type='text'
          placeholder='Enter Search text'
        />
        <MagnifyingGlassIcon className='hidden tablet:inline-flex bg-red-500 text-white h-6 w-6 rounded-full p-0.5 m-3 cursor-pointer ' />
      </div>

      {/* Right Part */}
      <div className='flex items-center justify-end p-2 space-x-3 text-gray-600'>
        <p className='hidden tablet:inline cursor-pointer'>Become a Host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />

        <div className='flex space-x-2 border-2 p-1 rounded-full  '>
          <UserCircleIcon className='h-6 cursor-pointer' />
          <Bars3Icon className='h-6 cursor-pointer' />
        </div>
      </div>
    </header>
  );
}

export default Header;
