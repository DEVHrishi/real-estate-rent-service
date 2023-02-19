import React, { useState, useEffect, useContext } from 'react';

//import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import context
import { HouseContext } from '../context/HouseContext';

const DateDropdown = () => {
  const { date, setDate, dates } = useContext(HouseContext);
  console.log(dates)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left border-r-2 '>
        <div>
          <div className='text-[13px] text-gray-600'>When</div>
          <div className='text-[16px] font-medium leading-tight'>{date}</div>
        </div>
        {
            isOpen ? <RiArrowUpSLine className='dropdown-icon-secondary' /> : <RiArrowDownSLine className='dropdown-icon-secondary' />
        }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {dates.map((date, index) => {
          return (
            <Menu.Item
              onClick={() => setDate(date)}
              className='cursor-pointer hover:text-violet-700 transition'
              as='li' 
              key={index}
              >
                {date}
              </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default DateDropdown;

