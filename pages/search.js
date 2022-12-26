import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import CardInfo from '../components/CardInfo';

function Search({ searchData }) {
  const router = useRouter();
  const { location, guests, start, end } = router.query;

  return (
    <div>
      <Header placeHolder={location} />
      <div className='grid grid-cols-3 mx-20 h-screen'>
        <div className=' col-span-2 '>
          <div>
            Dates: {start} - {end}
          </div>
          <div>Guests: {guests} </div>
          <div>Location: {location} </div>
          <div className='mt-4'>
            {searchData.map((item) => (
              <CardInfo searchData={item} />
            ))}
          </div>
        </div>
        <div className='bg-red-500 col-span-1'>Map</div>
      </div>
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const res = await fetch('https://www.jsonkeeper.com/b/5NPS');
  const searchData = await res.json();

  return {
    props: {
      searchData,
    },
  };
}
