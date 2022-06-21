import React, { useEffect, useState } from 'react';
import { Card, Text, Grid, Row } from '@nextui-org/react';
import { listOfRegions } from '../services/Data';
import '../style/style.css';
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../images', false, /\.(jpg)$/));
const Regions = ({ settSearchValue }) => {
  const [Regiona, setRegion] = useState('');

  useEffect(() => {
    settSearchValue(Regiona);
  }, [Regiona]);

  return (
    <Grid.Container gap={1} justify="flex-start">
      <Row>
        <h1>Continents:</h1>
      </Row>
      {Object.values(listOfRegions).map((item, index) => (
        <Grid xs={4} sm={1.7} md={1.7} lg={1.7} key={index}>
          <Card
            isPressable
            isHoverable
            variant="bordered"
            onPress={() => setRegion(item)}
          >
            <Card.Body>
              <Text>{item}</Text>
            </Card.Body>
            <Card.Image
              className="regions"
              src={images[index]}
              objectFit="cover"
              width="100%"
              alt={item}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Regions;
