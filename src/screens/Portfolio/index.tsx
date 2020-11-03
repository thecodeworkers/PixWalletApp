import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PortfolioMain, PortfolioSummary } from './components';
import { HeaderNavigation } from '../../components';
import { WhitelistMain, WhitelistCreate } from '../Whitelist';
import ReceiveFiat from '../Fiat/ReceiveFiat';
import ReceiveCrypto from '../Crypto/ReceiveCrypto';
import SendFiat from '../../screens/Fiat/SendFiat';
import SendCrypto from '../../screens/Crypto/SendCrypto';
import InternalTransaction from '../InternalTransaction/components/Main';

const Stack = createStackNavigator();

const defaultScreen = {
  main: {
    component: PortfolioMain,
    title: 'portfolio'
  },
  summary: {
    component: PortfolioSummary,
    title: 'summary'
  }
}

const cryptoScreen = {
  sendCrypto: {
    component: SendCrypto
  },
  receiveCrypto: {
    component: ReceiveCrypto
  }
}

const fiatScreen = {
  sendFiat: {
    component: SendFiat
  },
  receiveFiat: {
    component: ReceiveFiat
  }
}

const internalTransactionScreen = {
  internalTransaction: {
    component: InternalTransaction
  }
}

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
      {
        Object.entries({
          ...defaultScreen,
          ...cryptoScreen,
          ...fiatScreen,
          ...internalTransactionScreen,
          ...whitelistScreen,
        }).map(([name, { component, title }]: Array<any>, index) => (
          <Stack.Screen
            key={index}
            name={name}
            component={component}
            options={{
              title
            }}
          />
        ))
      }
    </Stack.Navigator>
  )
}

export default Portfolio;
