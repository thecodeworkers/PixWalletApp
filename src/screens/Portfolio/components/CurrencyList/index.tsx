import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Separator, Tabs, ListCurrency, SearchInput } from '../../../../components';
import { ReducerProps, GeneralProps } from './types';
import { connect } from 'react-redux';
import styles from './styles';

const CurrencyList: FC<GeneralProps> = ({ theming: { theme }, navigation, currency }) => {

  const { background, defaultActiveIcon, veryLightGrey } = theme;
  const [selectedTab, setSelectedTab] = useState(0);

  const selectTab = (selected: number) => {
    setSelectedTab(selected);
  };

  const fiatFunction = () => {
    setSelectedTab(1);
  };

  const cryptoFunction = () => {
    setSelectedTab(0);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <View style={{width: '80%'}}>
        <SearchInput theme={theme}/>
      </View>

      <View style={{width: '85%'}}>
        <Tabs selectedTab={selectedTab} crypto={cryptoFunction} fiat={fiatFunction} theme={theme} />
      </View>

      <View style={styles.separatorParent}>
        <Separator color={defaultActiveIcon} width={4}/>
      </View>

      <View style={styles.cardsParent}>
        <ListCurrency gradient={false}/>
      </View>

    </View>
  );
}

const mapStateToProps = ({ theming, currency }: ReducerProps ): ReducerProps => ({ theming, currency })

export default connect(mapStateToProps)(CurrencyList);
