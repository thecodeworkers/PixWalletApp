
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portfolio from '../../index';
import { Summary } from '../../../index';

const Stack = createStackNavigator();

export const PortfolioNavigation = (main: any) => {

  return (
    <>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="main" component={main} />
      <Stack.Screen name="summary" component={Summary} />
    </Stack.Navigator>
    </>
  )

};
