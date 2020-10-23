import React, { FC, memo} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DefaultProps } from '../../types';
import { TabsProps } from './types';
import styles from './styles';
import { connect } from 'react-redux';

const Tabs: FC<TabsProps> = ({ theming: { theme }, selectedTab = 0, crypto = null, fiat = null }: any) => {

  const { background, defaultActiveIcon, veryLightGrey, whirspersInactive } = theme;

  return (
    <View style={styles.tabParent}>
      <TouchableOpacity
        style={[styles.childTab, selectedTab === 0 ? { backgroundColor: defaultActiveIcon } : { backgroundColor: whirspersInactive }]}
        onPress={() => crypto()}
      >
        <Text style={selectedTab === 0 ? { color: background } : { color: veryLightGrey }}>Crypto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.childTab, selectedTab === 1 ? { backgroundColor: defaultActiveIcon } : { backgroundColor: whirspersInactive }]}
        onPress={() => fiat()}
      >
        <Text style={selectedTab === 1 ? { color: background } : { color: veryLightGrey }}>Fiat</Text>
      </TouchableOpacity>
    </View>
  )
};

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(memo(Tabs));
