import React, { useState } from 'react';
import Image from 'next/image';
import AirbnbLogo from '../public/airbnb-logo.png';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';
import { DateRangePicker } from 'react-date-range';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [inputValue, setInputValue] = useState(1);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (e) => {
    setStartDate(e.selection.startDate);
    setEndDate(e.selection.endDate);
  };
  return (
    <header className=' sticky top-0 z-10 grid grid-cols-3 shadow-md p-5  md:px-10 bg-white '>
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-4'>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
          />
          <div className='flex items-center border-b'>
            <p className='font-semibold flex-grow'>Number of Guests</p>
            <UserCircleIcon className='h-8' />
            <input
              type='number'
              className='w-12 h-8  text-xl outline outline-1 rounded-sm pl-1 ml-2'
              min={1}
              max={99}
              value={inputValue}
              onChange={handleInputValue}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
