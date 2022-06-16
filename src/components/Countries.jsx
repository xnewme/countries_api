import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
const Countries = ({ setSearchValue }) => {
  const [movieTitle, setMovieTitle] = useState('');
  //sitoje vietoje apsirasyti funkcija
  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieTitle === '') {
      alert('please enter movie title!');
    } else {
      setSearchValue(movieTitle);
      setMovieTitle('');
    }
  };
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search"
              name="title"
              value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Countries;
