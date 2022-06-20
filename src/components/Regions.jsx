import React, { useEffect, useState } from 'react';
import { Card, Text, Grid, Container } from '@nextui-org/react';
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../images', false, /\.(jpg)$/));
const Regions = ({ settSearchValue }) => {
  const [Regiona, setRegion] = useState('');
  const listOfRegions = {
    0: 'Africa',
    1: 'Antartica',
    2: 'Asia',
    3: 'Europe',
    4: 'North America',
    5: 'Oceania',
    6: 'South America',
  };
  useEffect(() => {
    settSearchValue(Regiona);
  }, [Regiona]);

  return (
    <Grid.Container gap={1} justify="flex-start">
      {Object.values(listOfRegions).map((item, index) => (
        <Grid xs={12} sm={1.7} key={index}>
          <Card
            isPressable
            isHoverable
            variant="bordered"
            onPress={(value) => setRegion(item)}
          >
            <Card.Body>
              <Text>{item}</Text>
            </Card.Body>
            <Card.Image
              src={images[index]}
              objectFit="cover"
              width="100%"
              alt="Card image background"
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Regions;
