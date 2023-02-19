import React from 'react';

import Search from '../components/Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row justify-between mx-40'>
        <div className=' '>
          <h1 className='text-4xl lg:text-[38px] font-semibold leading-none'>Search properties to rent</h1>
        </div>
        <div className='text-xl lg:text-xl font-medium leading-none'>
          Search with search bar
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
