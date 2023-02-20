import React from 'react';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price, name } = house;
  return (
    <div className='bg-white shadow-1 p-4 rounded-lg rounded-tl-[90px] w-full max-w-[350px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={ image } alt=' '/>
      <div>
        <div><span className='text-lg font-semibold text-violet-800'>${price}</span><span className='text-sm text-gray-500'>/month</span></div>
      </div>

      <div className='flex justify-between items-center mt-2'>
        <div className='text-xl font-semibold'>{name}</div>
        <div className='text-sm bg-violet-500 p-1.5 rounded-md text-white'>{type}</div>
      </div>
      
      <div className='flex my-2 justify-between'>
        <div className='text-[12px] text-gray-500 '>{address}</div>
        <div className='text-[12px] text-gray-500'>{country}</div>
      </div>
      

      <div className='flex justify-between py-2 border-t-2'>
        <div className='flex items-center text-gray-600 gap-1 text-sm'>
          <div className='text-violet-500'><BiBed /></div>
          <div>{bedrooms} <span>Beds</span></div>
        </div>

        <div className='flex items-center text-gray-600 gap-1 text-sm'>
          <div className='text-violet-500'><BiBath /></div>
          <div>{bathrooms} <span>Bathrooms</span></div>
        </div>

        <div className='flex items-center text-gray-600 gap-1 text-sm'>
          <div className='text-violet-500'><BiArea /></div>
          <div>{surface}</div>
        </div>
      </div>
      

    </div>
  );
};

export default House;
