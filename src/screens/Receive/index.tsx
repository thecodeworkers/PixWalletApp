import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReceiveCrypto, ReceiveFiat } from './components';
import { HeaderNavigation } from '../../components';

const Stack = createStackNavigator();

const Receive = ({ theme }: any) => (
  <Stack.Navigator
    initialRouteName="receive-fiat"
    screenOptions={{
      header: props => <HeaderNavigation {...props} theme={theme} />
    }}
  >
    <Stack.Screen name="receive-crypto" component={ReceiveCrypto} />
    <Stack.Screen name="receive-fiat" component={ReceiveFiat} />
  </Stack.Navigator>
)

export default Receive;
