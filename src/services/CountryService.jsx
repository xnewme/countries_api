import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, listOfRegions } from './Data';
import { Card, Grid, Row, Text } from '@nextui-org/react';
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
  } else if (props.searchValue.length < 2 && props.regionValue !== '') {
    hmmm = `/region/${props.regionValue}`;
  } else if (props.searchValue !== '' && props.searchValue.length > 2) {
    hmmm = `/name/${props.searchValue}`;
  } else {
    hmmm = `/all/`;
  }

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
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };
  useEffect(() => {
    getCountries();
  }, [props]);

  // console.log(props.searchValue);
  return (
    <Grid.Container gap={1} justify="flex-start">
      <Row>
        <h1>Countries:</h1>
      </Row>
      {results.map((item, index) => (
        <Grid xs={4} sm={1.7} lg={2} key={index}>
          <Card
            isPressable
            isHoverable
            variant="bordered"
            onPress={() => setCountry(item.name.common)}
          >
            <Card.Body>
              <Text>{item.name.common}</Text>
            </Card.Body>
            <Card.Image
              autoResize="true"
              src={item.flags.png}
              objectFit="cover"
              height="150px"
              width="100%"
              alt={item.name.common}
            />
          </Card>
        </Grid>
      ))}
      <Country country={country} />
    </Grid.Container>
  );
};

export default CountryService;
