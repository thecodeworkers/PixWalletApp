import React, { FC } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../../../../../components';
import { Theming } from '../../../../../types';
import {
  PortfolioMain,
  PortfolioSummary,
  BankAccount,
  Whitelist,
  AccountCreate,
  DepositCrypto,
  DepositFiat,
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
  CurrencyActivity,
  Currency
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

const depositCryptoScreen = {
  receive: {
    component: DepositCrypto,
    options: {
      title: 'receive'
    }
  }
}

const depositFiatScreen = {
  deposit: {
    component: DepositFiat,
    options: {
      title: 'deposit'
    }
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
    options: ({ route }: any) => ({ title: route?.params?.name })
  }
}

const CurrencyScreen = {
  currency: {
    component: Currency,
    options: {
      title: 'currencies'
    }
  }
}

const PortfolioStack: FC<Theming> = ({ theme }) => (
  <View style={{ flex: 1, backgroundColor: theme.background }}>
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        header: props => <HeaderNavigation {...props} />
      }}
    >
      {
        Object.entries({
          ...defaultScreen,
          ...transactionTypeScreen,
          ...depositCryptoScreen,
          ...depositFiatScreen,
          ...withdrawCryptoScreen,
          ...withdrawFiatScreen,
          ...internalTransactionScreen,
          ...accountScreen,
          ...currencyListScreen,
          ...CurrencyActivityScreen,
          ...CurrencyScreen
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
  </View>
);

export default PortfolioStack;
