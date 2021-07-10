/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Dimensions, Alert} from 'react-native';
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

import { useRoute, useNavigation } from '@react-navigation/native';

const SearchResults = (props) => {
  const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const {originPlace, destinationPlace} = route.params

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    // submit to server
    try {
     

      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        oreiginLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId:'',
        carId: "1",
        status: "NEW",
      } 
      navigation.navigate('OrderPage', { id: "" });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
