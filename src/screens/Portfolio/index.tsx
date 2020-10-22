import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Summary, CurrencyList, CurrencyActivity } from './components';
import { HeaderNavigation } from '../../components';
import ReceiveFiat from '../Fiat/ReceiveFiat';
import ReceiveCrypto from '../Crypto/ReceiveCrypto';
import SendFiat from '../../screens/Fiat/SendFiat';
import SendCrypto from '../../screens/Crypto/ReceiveCrypto';
import InternalTransaction from '../InternalTransaction';

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
      {/* <Stack.Screen
        name="receive"
        component={Receive}
      /> */}
      <Stack.Screen
        name="currencyList"
        component={CurrencyList}
      />
      <Stack.Screen
        name="currencyActivity"
        component={CurrencyActivity}
      />
      <Stack.Screen
        name="receiveFiat"
        component={ReceiveFiat}
      />
      <Stack.Screen
        name="receiveCrypto"
        component={ReceiveCrypto}
      />
      <Stack.Screen
        name="sendFiat"
        component={SendFiat}
      />
      <Stack.Screen
        name="sendCrypto"
        component={SendCrypto}
      />
      <Stack.Screen
        name="internalTransaction"
        component={InternalTransaction}
      />
    </Stack.Navigator>
  )
}

export default Portfolio;
