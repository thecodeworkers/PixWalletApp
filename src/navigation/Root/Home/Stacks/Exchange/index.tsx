import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../../../../../components';
import { ExchangeMain, ExchangeSummary } from '../../../../../screens';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="main"
    screenOptions={{
      header: props => <HeaderNavigation {...props} />
    }}
  >
    <Stack.Screen
      name="main"
      component={ExchangeMain}
      options={{
        title: 'exchange'
      }}
    />
    <Stack.Screen
      name="summary"
      component={ExchangeSummary}
      options={{
        title: 'exchange'
      }}
    />
  </Stack.Navigator>
);
