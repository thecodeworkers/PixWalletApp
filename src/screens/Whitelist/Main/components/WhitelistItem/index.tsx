import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WhitelistItemProps } from './types';
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
        <View style={styles.iconSection}>
          <View style={[{ backgroundColor: theme.iconCard, borderColor: theme.iconCardBorder }, styles.iconContainer]}>
            <View style={styles.iconArea}>
              <BankIcon/>
            </View>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={[{ color: theme.screenText }, styles.nameFont]}>{item.name}</Text>
          <Text style={[{ color: theme.veryLightGrey }, styles.addressFont]}>{item.address}</Text>
        </View>
      </TouchableOpacity>
      <Separator color={theme.whirspersInactive} />
    </>
  );
}

export default WhitelistItem;
