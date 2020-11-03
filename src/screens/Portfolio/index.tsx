import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PortfolioMain, PortfolioSummary, CurrencyList, CurrencyActivity } from './components';
import { HeaderNavigation } from '../../components';
import ReceiveFiat from '../Fiat/ReceiveFiat';
import ReceiveCrypto from '../Crypto/ReceiveCrypto';
import SendFiat from '../../screens/Fiat/SendFiat';
import SendCrypto from '../../screens/Crypto/SendCrypto';
import InternalTransaction from '../InternalTransaction/components/Main';
import { WhitelistMain, WhitelistCreate } from '../Whitelist';

const Stack = createStackNavigator();

const whitelistScreen = {
  whitelist: {
    component: WhitelistMain,
    title: 'whitelist'
  },
  createWhitelist: {
    component: WhitelistCreate,
    title: 'new_account'
  }
}

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
        component={PortfolioMain}
        options={{
          title: 'portfolio'
        }}
      />
      <Stack.Screen
        name="summary"
        component={PortfolioSummary}
        options={{
          title: 'summary'
        }}
      />
      <Stack.Screen
        name="currencyList"
        component={CurrencyList}
        options={{
          title: 'deposit'
        }}
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
      {

      }
    </Stack.Navigator>
  )
}

export default Portfolio;
