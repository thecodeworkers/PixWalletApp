import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WhitelistItemProps } from './types';
import { generalShadow } from '../../../../../assets/styles';
import { Separator } from '../../../../../components';
import { BankIcon } from '../../../../../assets/image/svg/icons';
import styles from './styles';

const WhitelistItem: FC<WhitelistItemProps> = ({ theme, index, item, onPress }) => {
  return (
    <>
      {
        index == 0 ? (
          <View style={styles.initialMargin}>
            <Separator color={theme.whirspersInactive} />
          </View>
        ) : null
      }
      <TouchableOpacity style={styles.container} onPress={() => onPress(index)}>
        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            backgroundColor: '#FCFCFC',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderColor: '#DEDEDE',
            borderWidth: 0.5,
            borderBottomColor: 'blue',
            borderLeftColor: 'blue',
            ...generalShadow()
          }}>
            <View style={{ width: 30, height: 30 }}>
              <BankIcon/>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <Text style={{ color: theme.screenText, fontSize: 13, marginBottom: 2 }}>{item.name}</Text>
          <Text style={{ color: theme.veryLightGrey, fontSize: 14 }}>{item.address}</Text>
        </View>
      </TouchableOpacity>
      <Separator color={theme.whirspersInactive} />
    </>
  );
}

export default WhitelistItem;
