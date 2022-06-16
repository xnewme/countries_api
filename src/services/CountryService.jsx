import React from 'react';
import axios from 'axios';
const API_URL = `https://restcountries.com/v3.1`;

const CountryService = () => {
  const getCountries = () => {
    return axios.get(API_URL + /all/, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return <div>CountryService</div>;
};

export default CountryService;
