/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Dimensions } from "react-native";
import Geolocation from '@react-native-community/geolocation';


//import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import HomeMap from '../../../HomeMap/index';
const HomeScreen = (props) => {
  Geolocation.getCurrentPosition(info => console.log(info));
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      {/*  Covid Message*/}
      <CovidMessage />

      {/*  Bottom Comp*/}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
