import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Complete, Main, Summary} from './components';
import { HeaderNavigation } from '../../../components';

const Stack = createStackNavigator();

const WithdrawCrypto = () => (
  <Stack.Navigator
    initialRouteName="main"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="complete" component={Complete} />
    <Stack.Screen name="main" component={Main} />
    <Stack.Screen name="summary" component={Summary} />
  </Stack.Navigator>
)

export default WithdrawCrypto;
