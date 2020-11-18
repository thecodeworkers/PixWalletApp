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
  CurrencyList,
  CurrencyActivity
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
    options: ({ route }: any) => ({ title: route?.params?.name })
  }
}

const withdrawCryptoScreen = {
  withdrawCryptoMain: {
    component: WithdrawCryptoMain,
    options: {
      title: 'withdraw'
    }
  },
  withdrawCryptoSummary: {
    component: WithdrawCryptoSummary,
    options: {
      title: 'withdraw'
    }
  },
  withdrawCryptoComplete: {
    component: WithdrawCryptoComplete,
    options: {
      title: 'withdraw'
    }
  },
}

const withdrawFiatScreen = {
  withdrawFiatMain: {
    component: WithdrawFiatMain,
    options: {
      title: 'withdraw'
    }
  },
  withdrawFiatSummary: {
    component: WithdrawFiatSummary,
    options: {
      title: 'withdraw'
    }
  },
  withdrawFiatComplete: {
    component: WithdrawFiatComplete,
    options: {
      title: 'withdraw'
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

const CurrencyActivityScreen = {
  currencyActivity: {
    component: CurrencyActivity,
    options: ({route}: any) => ({ title: route?.params?.name })
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
        ...currencyListScreen,
        ...CurrencyActivityScreen
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
