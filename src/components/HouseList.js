import React, { useContext } from 'react';

import { HouseContext } from '../context/HouseContext';

import { ImSpinner2 } from 'react-icons/im';

// import components
import House from './House';

import { Link } from 'react-router-dom';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  // if loading is true, show spinner
  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-4xl text-violet-700 mt-20' />
    );
  }

  if (houses.length < 1) {
    return <div className='text-center text-3xl text-gray-400 mt-48'>
      Sorry, nothing found
    </div>
  }

  return (
    <section className='mb-20'>
      <div className='mx-20'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>

    </section>
  );
};

export default HouseList;
