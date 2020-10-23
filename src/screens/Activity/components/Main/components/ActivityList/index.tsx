import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theming } from 'src/types';
import { BtcCard } from '../../../../../../assets/image/svg';
import { Separator } from '../../../../../../components';

const ActivityList: FC<Theming> = ({ theme }) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }} onPress={() => navigation.navigate('detail')}>
        <View style={{ flex: 0.2, justifyContent: 'center' }}>
          <View style={{ width: 50, height: 50 }}>
            <BtcCard/>
          </View>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, color: theme.screenTitle }}>Retiraste  $8,978.99</Text>
          <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
          <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
        </View>
        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text></Text>
          <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
          <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginHorizontal: '5%' }}>
        <Separator color={theme.whirspersInactive} />
      </View>
    </>
  );
}

export default ActivityList;
