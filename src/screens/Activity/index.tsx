import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from './components';
import { i18n } from '../../utils';

const Stack = createStackNavigator();

const Portfolio = () => (
  <Stack.Navigator initialRouteName="main">
    <Stack.Screen
      name="main"
      component={Main}
      options={{
        title: i18n.t('activity')
      }}
    />
  </Stack.Navigator>
)

export default Portfolio;
