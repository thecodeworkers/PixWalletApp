import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Summary } from './components';
import { HeaderNavigation } from '../../components';
import Receive from '../Receive';

const Stack = createStackNavigator();

const Portfolio = () => {
  return (
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
          title: 'portfolio'
        }}
      />
      <Stack.Screen
        name="summary"
        component={Summary}
        options={{
          title: 'summary'
        }}
      />
      <Stack.Screen
        name="receive"
        component={Receive}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Portfolio;
