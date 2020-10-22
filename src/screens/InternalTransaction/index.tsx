
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Complete, Main, Summary} from './components';
import { HeaderNavigation } from '../../components';

const Stack = createStackNavigator();

const ReceiveFiat= () => (
  <Stack.Navigator
    initialRouteName="main"
    screenOptions={{
      header: props => <HeaderNavigation {...props} />
    }}
  >
    <Stack.Screen name="complete" component={Complete} />
    <Stack.Screen name="main" component={Main} />
    <Stack.Screen name="main" component={Summary} />
  </Stack.Navigator>
)

export default ReceiveFiat;
