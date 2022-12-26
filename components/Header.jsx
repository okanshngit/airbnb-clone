import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
import { format } from 'date-fns';

function Header({ placeHolder }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestValue, setGuestValue] = useState(1);
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  //Functions
  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        guests: guestValue,
        start: format(new Date(startDate), 'dd/MM/yyyy'),
        end: format(new Date(endDate), 'dd/MM/yyyy'),
      },
    });
    setSearchInput('');
  };

  const handleSearchInput = (e) => {
    const searchValue =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

    setSearchInput(searchValue);
  };

  const handleGuestValue = (e) => {
    setGuestValue(e.target.value);
  };

  const handleSelect = (e) => {
    setStartDate(e.selection.startDate);
    setEndDate(e.selection.endDate);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <header
      ref={wrapperRef}
      className=' sticky top-0 z-10 grid grid-cols-3 shadow-md p-5  md:px-10 bg-white '
    >
      {/* Left Part */}
      <div
        className='relative flex place-items-center h-10 cursor-pointer '
        onClick={() => router.push('/')}
      >
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
          onClick={() => setVisible(true)}
          onChange={handleSearchInput}
          className='pl-3 grow bg-transparent outline-none'
          type='text'
          placeholder={placeHolder || 'Enter Search text'}
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

      {searchInput && visible && (
        <div className=' flex flex-col col-span-3 mx-auto mt-4'>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
          />
          <div className='flex items-center border-b pb-4 mb-4'>
            <p className='font-semibold flex-grow'>Number of Guests</p>
            <UserCircleIcon className='h-8 text-gray-600' />
            <input
              type='number'
              className='w-12 h-8  text-xl outline outline-1 outline-gray-400 rounded-sm pl-1 ml-2 text-red-400'
              min={1}
              max={99}
              value={guestValue}
              onChange={handleGuestValue}
            />
          </div>

          <div className='flex items-center justify-center'>
            <button
              className='grow text-xl text-gray-400'
              onClick={() => setSearchInput('')}
            >
              Cancel
            </button>
            <button
              className='grow text-xl text-red-400'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
