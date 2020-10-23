import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DefaultProps } from '../../../../types';
import { Separator, Tabs, ListCurrency} from '../../../../components';
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
    console.log('Fiat');
    setSelectedTab(1);
  };

  const cryptoFunction = () => {
    console.log('Crypto');
    setSelectedTab(0);
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <View style={styles.inputParent}>
        <TextInput
          style={[styles.input, { borderColor: defaultActiveIcon }]}
          placeholder='Search'
          placeholderTextColor={veryLightGrey}
        />
        <Icon
          name='search'
          color={veryLightGrey}
          size={26}
          style={styles.icon}
        />
      </View>

      <View style={{width: '85%'}}>
        <Tabs selectedTab={selectedTab} crypto={cryptoFunction} fiat={fiatFunction}/>
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
