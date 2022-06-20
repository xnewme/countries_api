import { Card, Grid, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import CountryService from '../services/CountryService';
import Country from './Country';
const CountriesList = (props) => {
  let results = '';
  const [country, setCountry] = useState();
  return (
    // <div>
    //   <CountryService list={props} />
    //   {/* {(results = <CountryService list={props} />)} */}
    //   {console.log(props)}
    //   <Grid.Container gap={1} justify="flex-start">
    //     {results.map((item, index) => (
    //       <Grid xs={12} sm={1.7} key={index}>
    //         <Card
    //           isPressable
    //           isHoverable
    //           variant="bordered"
    //           onPress={(value) => setCountry(item.name.common)}
    //         >
    //           <Card.Body>
    //             <Text>{item.name.common}</Text>
    //           </Card.Body>
    //           <Card.Image
    //             src={item.flags.png}
    //             objectFit="cover"
    //             height="70%"
    //             width="100%"
    //             alt="Card image background"
    //           />
    //         </Card>
    //       </Grid>
    //     ))}
    //     {country !== '' ? <Country country={country} /> : ''}
    //     {/* {country !== '' ? setCountry('') : ''} */}
    //   </Grid.Container>{' '}

    // </div>
    <div>
      <CountryService
        searchValue={props.searchValue}
        regionValue={props.regionValue}
      />
    </div>
  );
};

export default CountriesList;
