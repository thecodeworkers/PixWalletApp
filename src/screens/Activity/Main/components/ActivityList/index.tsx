import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ActivityListProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { Separator } from '../../../../../components';
import styles from './styles';

const ActivityList: FC<ActivityListProps> = ({ theme, item }) => {
  const navigation = useNavigation();

  const {
    TransactionIcon,
    CurrencyCard,
    title,
    currencyColor,
    symbol
  } = item;

  return (
    <>
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('detail')}>
        <View style={styles.firstSection}>
          <View style={styles.iconContainer}>
            <CurrencyCard/>
          </View>
        </View>
        <View style={styles.secondSection}>
          <Text style={styles.normalFont(13, theme.screenTitle)}>{title}  $8,978.99</Text>
          <Text style={styles.normalFont(11, '#B7B7B7')}>from Andrea  *********9898</Text>
          <Text style={styles.normalFont(11, '#B7B7B7')}>May,12 2020</Text>
        </View>
        <View style={styles.iconSection}>
          <TransactionIcon color={theme.defaultActiveIcon} size={25}/>
        </View>
        <View style={styles.thirdSection}>
          <Text></Text>
          <Text style={styles.weightFont(13, '900', '#C9C9C9')}>-$8,978.99</Text>
          <Text style={styles.weightFont(13, '900', currencyColor)}>9.1 {symbol}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <Separator color={theme.whirspersInactive} />
      </View>
    </>
  );
}

export default ActivityList;
