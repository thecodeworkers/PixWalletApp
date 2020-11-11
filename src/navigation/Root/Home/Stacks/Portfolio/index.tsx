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
  WithdrawCryptoMain,
  WithdrawCryptoComplete,
  WithdrawCryptoSummary,
  WithdrawFiatMain,
  WithdrawFiatComplete,
  WithdrawFiatSummary,
  TransactionType,
  InternalTransactionMain,
  InternalTransactionSummary,
  CurrencyList
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

const withdrawCryptoScreen = {
  withdrawCryptoMain: {
    component: WithdrawCryptoMain,
    title:''
  },
  withdrawCryptoSummary: {
    component: WithdrawCryptoSummary,
    title:''
  },
  withdrawCryptoComplete: {
    component: WithdrawCryptoComplete,
    title:''
  },
}

const withdrawFiatScreen = {
  withdrawFiatMain: {
    component: WithdrawFiatMain,
    title:''
  },
  withdrawFiatSummary: {
    component: WithdrawFiatSummary,
    title:''
  },
  withdrawFiatComplete: {
    component: WithdrawFiatComplete,
    title:''
  },
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

const currencyListScreen = {
  currencyList: {
    component: CurrencyList,
    title: 'receive'
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
         ...withdrawCryptoScreen,
         ...withdrawFiatScreen,
        ...internalTransactionScreen,
        ...whitelistScreen,
        ...currencyListScreen
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
