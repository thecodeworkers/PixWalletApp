import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Detail } from './components';
import { i18n } from '../../utils';
import { Header } from '../../components';

const Stack = createStackNavigator();

const Portfolio = () => (
  <Stack.Navigator initialRouteName="main">
    <Stack.Screen
      name="main"
      component={Main}
      options={{
        title: i18n.t('activity'),
        // header: () => <Header colorRight={null} colorLeft={null} title='summary' route='main' />
      }}
    />
    <Stack.Screen
      name="detail"
      component={Detail}
      options={{
        title: i18n.t('transaction_details'),
        // header: () => <Header colorRight={null} colorLeft={null} title='summary' route='main' />
      }}
    />
  </Stack.Navigator>
)

export default Portfolio;
