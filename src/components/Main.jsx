import React, { useEffect, useState } from 'react';
import CountriesSearch from './CountriesSearch';

import CountryService from '../services/CountryService';
import Country from './Country';
import Regions from './Regions';
const Main = () => {
  const [searchValue, setSearch] = useState('');
  const [regionValue, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const setSearchValue = (val) => {
    setSearch('');
    setSearch(val);
  };
  const settSearchValue = (val) => {
    setRegion(val);
  };

  const setCountryValue = (val) => {
    setCountry(val);
  };
  // const setRegionValue = (val) => {
  //   setSearch(val);
  // };
  // useEffect(() => {
  //   console.log(searchValue);
  // }, [searchValue]);
  return (
    <div>
      <CountriesSearch setSearchValue={setSearchValue} />
      <Regions settSearchValue={settSearchValue} />
      <CountryService
        setCountryValue={setCountryValue}
        searchValue={searchValue}
        regionValue={regionValue}
      />
    </div>
  );
};

export default Main;
