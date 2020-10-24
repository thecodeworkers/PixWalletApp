import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theming } from 'src/types';
import { BtcCard } from '../../../../../../assets/image/svg';
import { Separator } from '../../../../../../components';
import styles from './styles';

const ActivityList: FC<Theming> = ({ theme }) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('detail')}>
        <View style={styles.firstSection}>
          <View style={styles.iconContainer}>
            <BtcCard/>
          </View>
        </View>
        <View style={styles.secondSection}>
          <Text style={styles.normalFont(14, theme.screenTitle)}>Retiraste  $8,978.99</Text>
          <Text style={styles.normalFont(11, '#B7B7B7')}>from Andrea  *********9898</Text>
          <Text style={styles.normalFont(11, '#B7B7B7')}>May,12 2020</Text>
        </View>
        <View style={styles.thirdSection}>
          <Text></Text>
          <Text style={styles.weightFont(13, '900', '#C9C9C9')}>-$8,978.99</Text>
          <Text style={styles.weightFont(13, '900', '#F7931A')}>9.1 BTC</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <Separator color={theme.whirspersInactive} />
      </View>
    </>
  );
}

export default ActivityList;
