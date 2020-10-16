import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Summary from '../screens/Summary';

const MainNavigation = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )

};

export default MainNavigation;