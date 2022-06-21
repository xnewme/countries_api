import React, { useState } from 'react';
import CountriesSearch from './CountriesSearch';
import CountryService from '../services/CountryService';
import Regions from './Regions';

const Main = () => {
  const [searchValue, setSearch] = useState('');
  const [regionValue, setRegion] = useState('');

  const setSearchValue = (val) => {
    setSearch('');
    setSearch(val);
  };
  const settSearchValue = (val) => {
    setRegion(val);
  };

  return (
    <div>
      <CountriesSearch setSearchValue={setSearchValue} />
      {searchValue.length < 2 ? (
        <Regions settSearchValue={settSearchValue} />
      ) : (
        ''
      )}
      <CountryService searchValue={searchValue} regionValue={regionValue} />
    </div>
  );
};

export default Main;
