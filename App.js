/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
// App.js
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import DestinationSearch from './src/screens/DestinationSearch/index';
import SearchResults from './src/screens/SearchResults';
import RootNavigator from './src/navigation/Root'

const Stack = createStackNavigator();
navigator.geolocation = require('@react-native-community/geolocation');

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null},
         {headerShown: false} 
       }
      />
      <Stack.Screen 
       name="DestinationSearch" 
       component={DestinationSearch} 
       options={
         { title: 'DestinationSearch' },
         {headerLeft: null},
         {headerShown: false} 
       }
      />
      <Stack.Screen 
       name=" SearchResults" 
       component={SearchResults} 
       options={
         { title: ' SearchResults' },
         {headerLeft: null},
         {headerShown: false} 
       }
      />
     
    </Stack.Navigator>
  );
}

export default function App() {
  
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Camera Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])
  return (
   
      < RootNavigator  />
    
  );
}
