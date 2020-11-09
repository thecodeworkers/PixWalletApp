import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../../../../../components';
import {
  PortfolioMain,
  PortfolioSummary,
  WhitelistMain,
  WhitelistCreate,
  Receive,
  Deposit,
  WithdrawCrypto,
  WithdrawFiat,
  TransactionType,
  InternalTransactionMain,
  InternalTransactionSummary
} from '../../../../../screens';

const Stack = createStackNavigator();

const defaultScreen = {
  portfolio: {
    component: PortfolioMain,
    title: 'portfolio'
  },
  portfolioSummary: {
    component: PortfolioSummary,
    title: 'summary'
  }
}

const transactionTypeScreen = {
  transactionType: {
    component: TransactionType,
    title:''
  }
}

const withdrawScreen = {
  withdrawCrypto: {
    component: WithdrawCrypto,
    title:'withdrawCrypto'
  },
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
    component: InternalTransactionMain,
    title: ''
  },
  internalTransactionSummary: {
    component: InternalTransactionSummary,
    title: ''
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

export default () => (
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
        ...withdrawScreen,
        ...internalTransactionScreen,
        ...whitelistScreen
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
);
