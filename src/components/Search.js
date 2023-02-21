import React, { useContext } from 'react';

import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import DateDropdown from './DateDropdown'

import { HouseContext } from '../context/HouseContext'

const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className='mx-40 my-5 py-4 px-4 flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative bg-white rounded-lg'>
      <CountryDropdown />
      <DateDropdown />
      <PriceRangeDropdown />
      <PropertyDropdown />
      <button onClick={() => handleClick()} className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[150px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>Search</button>
    </div>
  );
};

export default Search;
