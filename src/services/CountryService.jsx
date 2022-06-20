import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, listOfRegions } from './Data';
import { Card, Grid, Text } from '@nextui-org/react';
import Country from '../components/Country';

const CountryService = (props) => {
  console.log(props);
  const [results, setResults] = useState([]);
  const [country, setCountry] = useState();
  let hmmm = '';
  if (
    props.searchValue !== '' &&
    Object.values(listOfRegions).find(
      (element) => element === props.searchValue
    )
  ) {
    hmmm = `/region/${props.searchValue}`;
  } else if (props.searchValue == '' && props.regionValue != '') {
    hmmm = `/region/${props.regionValue}`;
  } else if (props.searchValue !== '') {
    hmmm = `/name/${props.searchValue}`;
  } else {
    hmmm = `/all/`;
  }
  console.log(hmmm);
  // let hmmm =
  //   props.searchValue !== ''
  //     ? Object.values(listOfRegions).find(
  //         (element) => element === props.searchValue
  //       )
  //       ? `/region/${props.searchValue}`
  //         ? props.searchValue == '' && props.regionValue != ''
  //         : `/region/${props.regionValue}`
  //       : `/name/${props.searchValue}`
  //     : `/all/`;
  const getCountries = () => {
    return axios
      .get(API_URL + hmmm, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((data) => {
        setResults(data.data ?? []);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };
  useEffect(() => {
    getCountries();
  }, [props]);
  // if (country !== '') {
  //   console.log('test' + country);
  //   setCountryValue(country);
  // }
  console.log(props.searchValue);
  return (
    <Grid.Container gap={1} justify="flex-start">
      {results.map((item, index) => (
        <Grid xs={12} sm={1.7} key={index}>
          <Card
            isPressable
            isHoverable
            variant="bordered"
            onPress={(value) => setCountry(item.name.common)}
          >
            <Card.Body>
              <Text>{item.name.common}</Text>
            </Card.Body>
            <Card.Image
              src={item.flags.png}
              objectFit="cover"
              height="70%"
              width="100%"
              alt="Card image background"
            />
          </Card>
        </Grid>
      ))}
      <Country country={country} />
    </Grid.Container>
  );
};

export default CountryService;
