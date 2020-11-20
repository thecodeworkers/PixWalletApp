import React, { FC, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Separator, Tabs, ListCurrency, SearchInput } from '../../components';
import { ReducerProps, GeneralProps } from './types';
import { connect } from 'react-redux';
import styles from './styles';

const CurrencyList: FC<GeneralProps> = ({ theming: { theme }, route }) => {
  const params = route?.params?.name;
  const { defaultActiveIcon } = theme;
  const [selectedTab, setSelectedTab] = useState(0);

  const fiatFunction = () => setSelectedTab(1);
  const cryptoFunction = () => setSelectedTab(0);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <View style={{width: '80%', marginTop: '7%'}}>
        <SearchInput theme={theme}/>
      </View>

      <View style={{width: '85%'}}>
        <Tabs selectedTab={selectedTab} crypto={cryptoFunction} fiat={fiatFunction} theme={theme} />
      </View>

      <View style={styles.separatorParent}>
        <Separator color={defaultActiveIcon} width={4}/>
      </View>

      <ScrollView style={{width: '100%'}}>
        <View style={styles.cardsParent}>
          <ListCurrency gradient={false} route={params}/>
        </View>
      </ScrollView>

    </View>
  );
}

const mapStateToProps = ({ theming, currency }: ReducerProps ): ReducerProps => ({ theming, currency })

export default connect(mapStateToProps)(CurrencyList);
