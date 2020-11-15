import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../../../../../components';
import {
  PortfolioMain,
  PortfolioSummary,
  BankAccount,
  Whitelist,
  AccountCreate,
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
    options: {
      title: 'portfolio'
    }
  },
  portfolioSummary: {
    component: PortfolioSummary,
    options: {
      title: 'summary'
    }
  }
}

const transactionTypeScreen = {
  transactionType: {
    component: TransactionType,
    options: {
      title: 'withdraw'
    }
  }
}

const withdrawCryptoScreen = {
  withdrawCryptoMain: {
    component: WithdrawCryptoMain,
    options: {
      title: ''
    }
  },
  withdrawCryptoSummary: {
    component: WithdrawCryptoSummary,
    options: {
      title: ''
    }
  },
  withdrawCryptoComplete: {
    component: WithdrawCryptoComplete,
    options: {
      title: ''
    }
  },
}

const withdrawFiatScreen = {
  withdrawFiatMain: {
    component: WithdrawFiatMain,
    options: {
      title: ''
    }
  },
  withdrawFiatSummary: {
    component: WithdrawFiatSummary,
    options: {
      title: ''
    }
  },
  withdrawFiatComplete: {
    component: WithdrawFiatComplete,
    options: {
      title: ''
    }
  },
}

const depositScreen = {
  deposit: {
    component: Deposit,
    options: {
      title: 'deposit'
    }
  },
}

 const receiveScreen = {
  receive: {
    component: Receive,
    options: {
      title: 'receive'
    }
  }
}

const internalTransactionScreen = {
  internalTransaction: {
    component: InternalTransactionMain,
    options: {
      title: ''
    }
  },
  internalTransactionSummary: {
    component: InternalTransactionSummary,
    options: {
      title: ''
    }
  }
}

const accountScreen = {
  bankAccount: {
    component: BankAccount,
    options: {
      title: 'deposit'
    }
  },
  whitelist: {
    component: Whitelist,
    options: {
      title: 'whitelist'
    }
  },
  createAccount: {
    component: AccountCreate,
    options: {
      title: 'new_account'
    }
  }
}

const currencyListScreen = {
  currencyList: {
    component: CurrencyList,
    options: ({ route }: any) => ({ title: route?.params?.name })
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
        ...accountScreen,
        ...currencyListScreen
      }).map(([name, { component, options }]: Array<any>, index) => (
        <Stack.Screen
          key={index}
          name={name}
          component={component}
          options={options}
        />
      ))
    }
  </Stack.Navigator>
);
