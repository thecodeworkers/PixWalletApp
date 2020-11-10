import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '../../../screens';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="onboarding">
    <Stack.Screen name="onboarding" component={Onboarding} />
  </Stack.Navigator>
);
