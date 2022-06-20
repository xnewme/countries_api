import React, { useState } from 'react';
import { Row, Col, Input, Grid } from '@nextui-org/react';
import { Form } from 'react-bootstrap';
const CountriesSearch = ({ setSearchValue }) => {
  const [firstName, setFirstName] = useState('');
  const [hidden, setHidden] = useState(false);

  //sitoje vietoje apsirasyti funkcija
  const handleSubmit = (e) => {
    e.preventDefault();
    // setHidden((s) => !s);
    // console.log(event.target.value);
    // setSearchValue(movieTitle);
    // setMovieTitle('');
    // if (firstName === '') {
    //   alert('please enter movie title!');
    // } else {
    //   console.log('bandymas ' + firstName);
    //   setSearchValue(firstName);
    //   setFirstName('');
    // }
  };
  if (firstName !== '') {
    setSearchValue(firstName);
    // setFirstName('');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Grid.Container gap={5} justify="center">
        <Grid md={6}>
          {/* {!hidden ? ( */}
          <Input
            clearable
            labelPlaceholder="Search"
            name="title"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth="true"
          />
          {/* ) : null} */}
        </Grid>
      </Grid.Container>
    </Form>
  );
};

export default CountriesSearch;
