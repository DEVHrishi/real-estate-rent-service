import React, { useState, useEffect, createContext} from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState('Select Location')
  const [countries, setCountries] = useState([])

  const [date, setDate] = useState('Select Move-in Date')
  const [dates, setDates] = useState([])

  const [price, setPrice] = useState('Select Price range')
  const [loading, setLoading] = useState(false)

  const [property, setProperty] = useState('Select Property Type')
  const [properties, setProperties] = useState([])

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country
    });

    //remove duplicates
    const uniqueCountries = [...new Set(allCountries)]

    //set properties state
    setCountries(uniqueCountries)
    
  }, [])

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove duplicates
    const uniqueProperties = [...new Set(allProperties)]

    //set properties state
    setProperties(uniqueProperties)
    
  }, [])

  // return all dates
  useEffect(() => {
    const allDates = houses.map((house) => {
      return house.year;
    });

    //remove duplicates
    const uniqueDates = [...new Set(allDates)]

    //set Dates state
    setDates(uniqueDates)
    
  }, [])

  const handleClick = ( ) => {
    console.log('clicked')
  }


  return (
    <HouseContext.Provider value={{
      houses,
      country,
      setCountry,
      countries,
      setCountries,
      date,
      setDate,
      dates,
      setDates,
      price,
      loading,
      property,
      setProperty,
      properties,
      setProperties,
      handleClick,
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
