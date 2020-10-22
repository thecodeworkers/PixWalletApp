import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Detail } from './components';
import { HeaderNavigation } from '../../components';

const Stack = createStackNavigator();

const Activity = () => (
  <Stack.Navigator
    initialRouteName="main"
    screenOptions={{
      header: props => <HeaderNavigation {...props} />
    }}
  >
    <Stack.Screen
      name="main"
      component={Main}
      options={{
        title: 'activity'
      }}
    />
    <Stack.Screen
      name="detail"
      component={Detail}
      options={{
        title: 'transaction_details'
      }}
    />
  </Stack.Navigator>
)

export default Activity;
