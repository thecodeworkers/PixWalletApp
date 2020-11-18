import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ListProps } from './types';
import { Separator } from '../../../../components';
import { BankIcon } from '../../../../assets/image/svg/icons';
import styles from './styles';

const ListItem: FC<ListProps> = ({ theme, index, item, onPress }: any) => {
  return (
    <>
      {/* {
        index == 0 && showTopLine ? (
          <Separator color={theme.whirspersInactive} />
        ) : null
      } */}
      <TouchableOpacity style={styles.container} onPress={() => onPress(index)}>
        <View style={styles.iconSection}>
            {item.icon}
        </View>
        <View style={styles.detailContainer}>
          <Text style={[{ color: theme.screenText }, styles.nameFont]}>{item.name}</Text>
          <Text style={[{ color: theme.veryLightGrey }, styles.addressFont]}>{item.symbol}</Text>
        </View>
      </TouchableOpacity>
      <Separator color={theme.whirspersInactive} />
    </>
  );
}

export default ListItem;
