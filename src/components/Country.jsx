import React, { useEffect, useState } from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import axios from 'axios';
import { API_URL } from '../services/Data';
const Country = (props) => {
  const [visible, setVisible] = useState(false);
  const [country, setCountry] = useState('');
  // if (props.country !== undefined) {
  //   setCountry(props.country);
  // }
  if (props.country !== undefined && props.country !== country) {
    setCountry(props.country);

    setVisible(true);
  }
  const [results, setResults] = useState([]);
  const getCountry = () => {
    return axios
      .get(API_URL + /name/ + country, {
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
    getCountry();
  }, [props]);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  console.log(visible);
  return (
    <div>
      {results.map((item, index) => (
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              {item.name.common}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text id="modal-title" size={18}>
              Capital city: {item.capital}
            </Text>
            <Text id="modal-title" size={18}>
              Population: {item.population} people
            </Text>
            <Text id="modal-title" size={18}>
              Continent: {item.region}
            </Text>
            <Text id="modal-title" size={18}>
              Area: {item.area}
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </div>
  );
};

export default Country;
