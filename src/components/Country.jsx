import React, { useEffect, useState } from 'react';
import { Modal, Button, Text, Image } from '@nextui-org/react';
import axios from 'axios';
import { API_URL } from '../services/Data';
const Country = (props) => {
  const [visible, setVisible] = useState(false);
  const [country, setCountry] = useState('');

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
    getCountry();
  }, [props]);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  console.log(visible);
  return (
    <div>
      {results.map((item) => (
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              {item.name.official}{' '}
              <Image
                src={item.flags.png}
                width={140}
                height={140}
                alt={item.flag}
              />
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text id="modal-title" size={18}>
              Capital city: {item.capital}
            </Text>
            <Text id="modal-title" size={18}>
              Population:{' '}
              {item.population > 1000000
                ? (item.population / 1000000).toLocaleString() + ' mln.'
                : item.population.toLocaleString()}
            </Text>
            <Text id="modal-title" size={18}>
              Continent: {item.region}
            </Text>
            <Text id="modal-title" size={18}>
              Area:{' '}
              {item.area > 1000
                ? item.area / 1000 + ' km\u00B2'
                : item.area + ' m\u00B2'}
            </Text>
            <Text id="modal-title" size={18}>
              {item.currencies !== undefined
                ? 'Currencies: ' +
                  Object.values(item.currencies).map((item2) => item2.name)
                : ''}
            </Text>
            <Text id="modal-title" size={18}>
              {item.languages !== undefined
                ? 'Languages: ' +
                  Object.values(item.languages).map((item2) => item2 + '\n')
                : ''}
            </Text>
            <Text id="modal-title" size={18}>
              {item.borders !== undefined
                ? 'Borders: ' +
                  Object.values(item.borders).map((item2) => item2)
                : ''}
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
