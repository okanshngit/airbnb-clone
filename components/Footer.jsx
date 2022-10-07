import React from 'react';

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 text-center gap-y-10 px-32 py-14 bg-gray-100 text-gray-400  '>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Accessibility</p>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Help Center</p>
        <p>Safety information</p>
      </div>
    </div>
  );
}

export default Footer;
