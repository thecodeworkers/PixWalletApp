
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Bank, Main } from './components';
import { HeaderNavigation } from '../../../components';

const Stack = createStackNavigator();

const ReceiveFiat= () => (
  <Stack.Navigator
    initialRouteName="main"
    screenOptions={{
      header: props => <HeaderNavigation {...props} />
    }}
  >
    <Stack.Screen name="bank" component={Bank} />
    <Stack.Screen name="main" component={Main} />
  </Stack.Navigator>
)

export default ReceiveFiat;
