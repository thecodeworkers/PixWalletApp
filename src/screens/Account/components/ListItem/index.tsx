import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ListItemProps } from './types';
import { Separator } from '../../../../components';
import { BankIcon } from '../../../../assets/image/svg/icons';
import styles from './styles';

const ListItem: FC<ListItemProps> = ({ theme, index, item, showTopLine = true, onPress }) => {
  return (
    <>
      {
        index == 0 && showTopLine ? (
          <Separator color={theme.whirspersInactive} />
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

export default ListItem;
