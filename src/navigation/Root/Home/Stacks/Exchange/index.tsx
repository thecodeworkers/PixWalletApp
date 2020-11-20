import React, { FC } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../../../../../components';
import { ExchangeMain, ExchangeSummary } from '../../../../../screens';
import { Theming } from '../../../../../types';

const Stack = createStackNavigator();

const ExchangeStack: FC<Theming> = ({ theme }) => (
  <View style={{ flex: 1, backgroundColor: theme.background }}>
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
  </View>
);

export default  ExchangeStack;
