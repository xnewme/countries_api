import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import Country from './Country';

const Main = () => {
  const [searchValue, setSearch] = useState('');
  const [films, SetFilms] = useState('');
  const setSearchValue = (val) => {
    setSearch(val);
  };
  const getFilms = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    SetFilms(responseJson);
    console.log(responseJson);
  };

  useEffect(() => {
    getFilms(searchValue);
  }, [searchValue]);

  return (
    <div>
      <Countries setSearchValue={setSearchValue} />
      <Country />
    </div>
  );
};

export default Main;
