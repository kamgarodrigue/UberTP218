/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { View, Dimensions, Text } from "react-native";
import OrderMap from "../../components/OrderMap";
import { useRoute } from '@react-navigation/native';
import { onOrderUpdated, onCarUpdated } from './subscriptions';

const OrderScreen = (props) => {
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);

  const route = useRoute();
  console.log(route.params.id);

  

 

  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <OrderMap car={car} />
      </View>
      <View>
        <Text>Order status: {order?.status}</Text>
      </View>
    </View>
  );
};

export default OrderScreen;
