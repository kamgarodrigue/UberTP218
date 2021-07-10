/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

 import cars from '../src/assets/data/cars';

const HomeMap = (props) => {

  /*useEffect(() => {
    const fetchCars = async () => {
      try {

      } catch (e) {
        console.error(e);
      }
    };

    fetchCars();
  }, [])*/

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../src/assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../src/assets/images/top-UberX.png');
    }
    return require('../src/assets/images/top-UberX.png');
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude:3.866667,
        longitude: 11.516667,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
