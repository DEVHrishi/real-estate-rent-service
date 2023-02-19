import React, { useState, useEffect, useContext } from 'react';

//import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import context
import { HouseContext } from '../context/HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  console.log(countries)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left border-r-2 '>
        <div>
          <div className='text-[13px] text-gray-600'>Location</div>
          <div className='text-[16px] font-medium leading-tight'>{country}</div>
        </div>
        {
            isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary' /> : <RiArrowDownSLine className='dropdown-icon-secondary' />
        }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              className='cursor-pointer hover:text-violet-700 transition'
              as='li' 
              key={index}
              >
                {country}
              </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
