import React, { useState, useEffect, useContext } from 'react';

//import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import context
import { HouseContext } from '../context/HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  console.log(properties)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left border-r-2 '>
        <div>
          <div className='text-[13px] text-gray-600'>Property Type</div>
          <div className='text-[16px] font-medium leading-tight'>{property}</div>
        </div>
        {
            isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary' /> : <RiArrowDownSLine className='dropdown-icon-secondary' />
        }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className='cursor-pointer hover:text-violet-700 transition'
              as='li' 
              key={index}
              >
                {property}
              </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;

