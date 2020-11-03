import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Separator } from '../../../../../components';
// import styles from './styles';

const WhitelistItem: FC<any> = () => {
  return (
    <>
      <TouchableOpacity style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
        <View style={{ flex: 0.25 }}>

        </View>
        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <Text>Gabriel</Text>
          <Text>1qwteydhfa132gswrdgsfqtt...</Text>
        </View>
      </TouchableOpacity>
      <Separator/>
    </>
  );
}

export default WhitelistItem;
