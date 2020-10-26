import React, { FC, memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabsProps } from './types';
import styles from './styles';

const Tabs: FC<TabsProps> = ({ theme, selectedTab = 0, crypto, fiat }: any) => {

  const { background, defaultActiveIcon, veryLightGrey, whirspersInactive } = theme;

  return (
    <View style={styles.tabParent}>
      <TouchableOpacity
        style={[styles.childTab, selectedTab === 0 ? { backgroundColor: defaultActiveIcon } : { backgroundColor: whirspersInactive }]}
        onPress={crypto}
      >
        <Text style={selectedTab === 0 ? { color: background } : { color: veryLightGrey }}>Crypto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.childTab, selectedTab === 1 ? { backgroundColor: defaultActiveIcon } : { backgroundColor: whirspersInactive }]}
        onPress={fiat}
      >
        <Text style={selectedTab === 1 ? { color: background } : { color: veryLightGrey }}>Fiat</Text>
      </TouchableOpacity>
    </View>
  )
};

export default memo(Tabs);
