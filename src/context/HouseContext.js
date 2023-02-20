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

  const handleClick = () => {
    setLoading(true)
    // create a function that checks if the string includes 'any'
    const isDefault = (str) => {
      return str.split(' ').includes('any')
    }
    
    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);

    // get second value of price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
        
        //if all values are selected
        if (
          house.country === country && 
          house.year === date && 
          house.type === property && 
          housePrice >= minPrice && 
          housePrice <= maxPrice
        ) {
          return house;
        }

        // if all values are default
        if (
          isDefault(country) && 
          isDefault(date) && 
          isDefault(property) && 
          isDefault(price)
        ) {
          return house;
        }

        // if country is not default
        if (
          !isDefault(country) && 
          isDefault(date) && 
          isDefault(property) && 
          isDefault(price)
        ) {
          return house.country === country;
        }

        // if date is not default
        if (
          isDefault(country) && 
          !isDefault(date) && 
          isDefault(property) && 
          isDefault(price)
        ) {
          return house.year === date;
        }

        // if property is not default
        if (
          isDefault(country) && 
          isDefault(date) && 
          !isDefault(property) && 
          isDefault(price)
        ) {
          return house.type === property;
        }

        // if price is not default
        if (
          isDefault(country) && 
          isDefault(date) && 
          isDefault(property) && 
          !isDefault(price)
        ) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house;
          };
        }

        // if country and date are not default
        if (
          !isDefault(country) && 
          !isDefault(date) && 
          isDefault(property) && 
          isDefault(price)
        ) {
          return house.country === country && house.year === date;
        }

        // if country and property are not default
        if (
          !isDefault(country) && 
          isDefault(date) && 
          !isDefault(property) && 
          isDefault(price)
        ) {
          return house.country === country && house.type === property;
        }

        // if country and price are not default
        if (
          !isDefault(country) && 
          isDefault(date) && 
          isDefault(property) && 
          !isDefault(price)
        ) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.country === country;
          };
        }

        // if date and property are not default
        if (
          isDefault(country) && 
          !isDefault(date) && 
          !isDefault(property) && 
          isDefault(price)
        ) {
          return house.year === date && house.type === property;
        }

        // if date and price are not default
        if (
          isDefault(country) && 
          !isDefault(date) && 
          isDefault(property) && 
          !isDefault(price)
        ) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.year === date;
          };
        }

        // if property and price are not default
        if (
          isDefault(country) && 
          isDefault(date) && 
          !isDefault(property) && 
          !isDefault(price)
        ) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.type === property;
          };
        }

        // if country, date and property are not default
        if (
          !isDefault(country) && 
          !isDefault(date) && 
          !isDefault(property) && 
          isDefault(price)
        ) {
          return house.country === country && house.year === date && house.type === property;
        }

        // if country, date and price are not default
        if (
          !isDefault(country) && 
          !isDefault(date) && 
          isDefault(property) && 
          !isDefault(price)
        ) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.country === country && house.year === date;
          };
        }

        // if country, property and price are not default
        if (
          !isDefault(country) && 
          isDefault(date) && 
          !isDefault(property) && 
          !isDefault(price)
        ) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.country === country && house.type === property;
          };
        }

        // if date, property and price are not default
        if (
          isDefault(country) && 
          !isDefault(date) && 
          !isDefault(property) && 
          !isDefault(price)
        ) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.year === date && house.type === property;
          };
        }

        // if country, date, property and price are not default
        if (
          !isDefault(country) && 
          !isDefault(date) && 
          !isDefault(property) && 
          !isDefault(price)
        ) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.country === country && house.year === date && house.type === property;
          };
        }


      });
    
      setTimeout(() => {
        return ( newHouses.length < 1 ? setHouses([]) : 
        setHouses(newHouses),
        setLoading(false)
        );
      }, 1000);
  };
  


  return (
    <HouseContext.Provider value={{
      houses,
      setHouses,
      country,
      setCountry,
      countries,
      setCountries,
      date,
      setDate,
      dates,
      setDates,
      price,
      setPrice,
      loading,
      setLoading,
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
