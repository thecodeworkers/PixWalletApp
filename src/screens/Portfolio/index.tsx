import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Summary } from './components';
import Receive from '../Receive';

const Stack = createStackNavigator();

const Portfolio = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="main" component={Main} />
    <Stack.Screen name="summary" component={Summary} />
    <Stack.Screen name="receive" component={Receive} />
  </Stack.Navigator>
)

export default Portfolio;
