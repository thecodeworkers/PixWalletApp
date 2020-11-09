import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PortfolioMain, PortfolioSummary } from './components';
import { HeaderNavigation } from '../../components';
import { WhitelistMain, WhitelistCreate } from '../Whitelist';
import Receive from '../Receive';
import Deposit from '../Deposit';
import WithdrawCrypto from '../WithdrawCrypto';
import WithdrawFiat from '../WithdrawFiat';
import InternalTransaction from '../InternalTransaction/components/Main';
import TransactionType from '../TransactionType';

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

const transactionTypeScreen = {
  transactionType: {
    component: TransactionType,
    title:'inernalTrasantion'
  }
}

const withdrawCryptoScreen = {
  withdrawCrypto: {
    component: WithdrawCrypto,
    title:'withdrawCrypto'
  }
}
const withdrawFiatScreen = {
  withdrawFiat: {
    component: WithdrawFiat,
    title:'withdrawFiat'
  }
}
const depositScreen = {
  deposit: {
    component: Deposit,
    title:'deposit'
  },
}

 const receiveScreen = {
  receive: {
    component: Receive,
    title:'receive'
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
          ...receiveScreen,
          ...transactionTypeScreen,
         ...depositScreen,
          ...withdrawCryptoScreen,
          ...withdrawFiatScreen,
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
