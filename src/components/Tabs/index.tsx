import React, { FC, memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabsProps } from './types';
import styles from './styles';

const Tabs: FC<TabsProps> = ({ theme, selectedTab = 0, crypto, fiat }) => {

  const { currencyTypeTabsBackgroundTitle, currencyTypeTabsBackground, currencyTypeTabsTitle, whirspersInactive } = theme;

  return (
    <View style={styles.tabParent}>
      <TouchableOpacity
        style={[styles.childTab, selectedTab === 0 ? { backgroundColor: currencyTypeTabsBackground } : { backgroundColor: whirspersInactive }]}
        onPress={crypto}
      >
        <Text style={selectedTab === 0 ? { color: currencyTypeTabsBackgroundTitle } : { color: currencyTypeTabsTitle }}>Crypto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.childTab, selectedTab === 1 ? { backgroundColor: currencyTypeTabsBackground } : { backgroundColor: whirspersInactive }]}
        onPress={fiat}
      >
        <Text style={selectedTab === 1 ? { color: currencyTypeTabsBackgroundTitle } : { color: currencyTypeTabsTitle }}>Fiat</Text>
      </TouchableOpacity>
    </View>
  )
};

export default memo(Tabs);
