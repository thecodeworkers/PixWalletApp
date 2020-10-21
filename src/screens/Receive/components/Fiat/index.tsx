import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Bank } from './components';

const Stack = createStackNavigator();

const ReceiveFiat= () => (
  <Stack.Navigator headerMode="none" initialRouteName='main'>
    <Stack.Screen name="main" component={Main} />
    <Stack.Screen name="bank" component={Bank} />
  </Stack.Navigator>
)

export default ReceiveFiat;
