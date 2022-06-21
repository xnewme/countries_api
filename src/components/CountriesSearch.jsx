import React, { useState } from 'react';
import { Input, Grid } from '@nextui-org/react';
import { Form } from 'react-bootstrap';
const CountriesSearch = ({ setSearchValue }) => {
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  if (firstName !== '') {
    setSearchValue(firstName);
  }
  function myFunction(event) {
    setFirstName(event.target.value);
    if (event.target.value === '') {
      setSearchValue('');
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Grid.Container gap={5} justify="center">
        <Grid md={6} sm={6}>
          <Input
            clearable
            labelPlaceholder="Search"
            name="title"
            value={firstName}
            onChange={(e) => myFunction(e)}
            fullWidth="true"
          />
        </Grid>
      </Grid.Container>
    </Form>
  );
};

export default CountriesSearch;
