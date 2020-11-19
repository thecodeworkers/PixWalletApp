import React, { FC, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ActivityProps, StateProps } from './types';
import { ActivityFilter, ActivityList } from './components';
import { Separator, Tabs, DepositIcon, ExchangeIcon, WithdrawIcon } from '../../../components';
import { DashCard, BtcCard, EthCard } from '../../../assets/image/svg';
import { connect } from 'react-redux';
import styles from './styles';

const DATA = [
  {
    id: '1',
    title: 'Retiraste',
    TransactionIcon: WithdrawIcon,
    CurrencyCard: BtcCard,
    currencyColor: '#F7931A',
    symbol: 'BTC'
  },
  {
    id: '2',
    title: 'Depositaste',
    TransactionIcon: DepositIcon,
    CurrencyCard: DashCard,
    currencyColor: '#35A7D6',
    symbol: 'DASH'
  },
  {
    id: '3',
    title: 'Cambiaste',
    TransactionIcon: ExchangeIcon,
    CurrencyCard: EthCard,
    currencyColor: '#444457',
    symbol: 'ETH',
  },
  {
    id: '4',
    title: 'Depositaste',
    TransactionIcon: DepositIcon,
    CurrencyCard: DashCard,
    currencyColor: '#35A7D6',
    symbol: 'DASH'
  },
  {
    id: '5',
    title: 'Depositaste',
    TransactionIcon: DepositIcon,
    CurrencyCard: DashCard,
    currencyColor: '#35A7D6',
    symbol: 'DASH'
  },
  {
    id: '6',
    title: 'Depositaste',
    TransactionIcon: DepositIcon,
    CurrencyCard: DashCard,
    currencyColor: '#35A7D6',
    symbol: 'DASH'
  },
  {
    id: '7',
    title: 'Depositaste',
    TransactionIcon: DepositIcon,
    CurrencyCard: DashCard,
    currencyColor: '#35A7D6',
    symbol: 'DASH'
  },
  {
    id: '8',
    title: 'Depositaste',
    TransactionIcon: DepositIcon,
    CurrencyCard: DashCard,
    currencyColor: '#35A7D6',
    symbol: 'DASH'
  },
  {
    id: '9',
    title: 'Depositaste',
    TransactionIcon: DepositIcon,
    CurrencyCard: DashCard,
    currencyColor: '#35A7D6',
    symbol: 'DASH'
  },
  {
    id: '10',
    title: 'Depositaste',
    TransactionIcon: DepositIcon,
    CurrencyCard: DashCard,
    currencyColor: '#35A7D6',
    symbol: 'DASH'
  },
]

const Main: FC<ActivityProps> = ({ theming: { theme }}) => {
  const [filter, setFilter] = useState('all');

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.filter}>
        <ActivityFilter theme={theme} filterResult={tab => setFilter(tab)} />
      </View>
      <Separator width={4} color={theme.principalSeparator} />
      {
        filter == 'deposit' || filter == 'withdraw' ? (
          <View style={{ marginHorizontal: '5%' }}>
            <Tabs theme={theme} />
          </View>
        ) : null
      }
      <View style={styles.list}>
        <FlatList
          data={DATA}
          renderItem={props => <ActivityList theme={theme} {...props} />}
          ListHeaderComponent={() => (
            <View style={{ marginTop: '3%' }}></View>
          )}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: StateProps): StateProps => ({ theming })

export default connect(mapStateToProps)(Main);
