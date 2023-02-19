import React, { useState, useEffect, useContext } from 'react';

//import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import context
import { HouseContext } from '../context/HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      values: '100000 - 130000',
    },
    {
      values: '130000 - 160000',
    },
    {
      values: '160000 - 190000',
    },
    {
      values: '190000 - 220000',
    },
    {
      values: '10000 - 30000',
    },
    {
      values: '30000 - 40000',
    }
    
  ]

  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left border-r-2 '>
        <div>
          <div className='text-[13px] text-gray-600'>Price</div>
          <div className='text-[16px] font-medium leading-tight'>{price}</div>
        </div>
        {
            isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary' /> : <RiArrowDownSLine className='dropdown-icon-secondary' />
        }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.values)}
              className='cursor-pointer hover:text-violet-700 transition'
              as='li' 
              key={index}
              >
                {price.values}
              </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;

