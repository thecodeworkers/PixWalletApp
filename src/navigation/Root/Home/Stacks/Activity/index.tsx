import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../../../../../components';
import { ActivityMain, ActivityDetail } from '../../../../../screens';

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
      component={ActivityMain}
      options={{
        title: 'activity'
      }}
    />
    <Stack.Screen
      name="detail"
      component={ActivityDetail}
      options={{
        title: 'transaction_details'
      }}
    />
  </Stack.Navigator>
);
