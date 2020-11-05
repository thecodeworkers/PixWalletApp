import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Separator } from '../../../../../components';
import { BankIcon } from '../../../../../assets/image/svg/icons';
import { generalShadow } from '../../../../../assets/styles';
import { WhitelistItemProps } from './types';
// import styles from './styles';

const WhitelistItem: FC<WhitelistItemProps> = ({ theme, index }) => {

  return (
    <>
      {
        index == 0 ? (
          <View style={{ marginTop: '10%' }}>
            <Separator color={theme.whirspersInactive} />
          </View>
        ) : null
      }
      <TouchableOpacity style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }} onPress={() => console.log(index)}>
        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', ...generalShadow() }}>
            <View style={{ width: 30, height: 30 }}>
              <BankIcon/>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <Text style={{ color: theme.screenText, fontSize: 13, marginBottom: 2 }}>Gabriel</Text>
          <Text style={{ color: theme.veryLightGrey, fontSize: 14 }}>1qwteydhfa132gswrdgsfqtt...</Text>
        </View>
      </TouchableOpacity>
      <Separator color={theme.whirspersInactive} />
    </>
  );
}

export default WhitelistItem;
