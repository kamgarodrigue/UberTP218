/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import OrderScreen from "../screens/OrderScreen";
import Signup from "../../components/Signup";
import Login from "../../components/Login";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} options={ {title: 'Login'} } />
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />
      <Stack.Screen name={"OrderPage"} component={OrderScreen} />
      <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }}/> 
     
    </Stack.Navigator>
  );
};

export default HomeNavigator;
