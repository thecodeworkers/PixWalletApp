import React, { FC } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../../../../../components';
import { ActivityMain, ActivityDetail } from '../../../../../screens';
import { Theming } from '../../../../../types';

const Stack = createStackNavigator();

const ActivityStack: FC<Theming> = ({ theme }) => (
  <View style={{ flex: 1, backgroundColor: theme.background }}>
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
  </View>
);

export default ActivityStack;
