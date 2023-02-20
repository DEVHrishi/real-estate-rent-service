import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-5 mb-10 border-b bg-white'>
      <div className="flex justify-between items-center px-10">
        
        <div className='flex items-center gap-5 lg:gap-10'>
          <Link to='/'><img src={logo} alt="" /></Link>
          <Link className='text-semibold hover:text-violet-900 hover:bg-gray-200 px-4 py-3 rounded-lg transition' to='/'>Rent</Link>
          <Link className='text-semibold hover:text-violet-900 hover:bg-gray-200 px-4 py-3 rounded-lg transition' to='/'>Buy</Link>
          <Link className='text-semibold hover:text-violet-900 hover:bg-gray-200 px-4 py-3 rounded-lg transition' to='/'>Sell</Link>
          <Link className='text-semibold hover:text-violet-900 hover:bg-gray-200 px-4 py-3 rounded-lg transition' to='/'>Manage Property</Link>
          <Link className='text-semibold hover:text-violet-900 hover:bg-gray-200 px-4 py-3 rounded-lg transition' to='/'>Resources</Link>
        </div>

        <div className='flex items-center gap-6'>
          <Link className='text-violet-900 border-2 hover:bg-violet-500 hover:border-violet-500 px-4 py-3 rounded-lg transition' to='/'>Log in</Link>

          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/'>Sign up</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
