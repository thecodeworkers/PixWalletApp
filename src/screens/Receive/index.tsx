import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReceiveCrypto, ReceiveFiat } from './components';

const Stack = createStackNavigator();

const Receive = () => (
  <Stack.Navigator headerMode="none" initialRouteName='receive-fiat'>
    <Stack.Screen name="receive-crypto" component={ReceiveCrypto} />
    <Stack.Screen name="receive-fiat" component={ReceiveFiat} />
  </Stack.Navigator>
)

export default Receive;
