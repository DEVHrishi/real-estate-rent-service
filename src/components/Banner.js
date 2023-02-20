import React, { useState } from 'react';

import Search from '../components/Search'

import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='h-full max-h-[640] mb-8 xl:mb-14'>
      <div onClick={() => setIsOpen(!isOpen)} className='flex flex-col lg:flex-row justify-between items-center mx-20'>
        <div className='mb-5 lg:mb-0 '>
          <h1 className='text-4xl lg:text-[30px] font-semibold leading-none'>Search properties to rent</h1>
        </div>
        <div className='flex justify-between items-center gap-4 text-sm py-2 px-3 bg-white rounded-lg'>
          <div>Search with search bar</div>
          {
            isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary' /> : <RiArrowDownSLine className='dropdown-icon-secondary' />
          }
        </div>
        
      </div>
      <Search />
    </section>
  );
};

export default Banner;
