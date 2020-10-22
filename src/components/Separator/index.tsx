import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

const Separator: FC<any> = ({ color = 'black', width = StyleSheet.hairlineWidth }) => (
  <View
    style={{
      borderBottomColor: color,
      borderBottomWidth: width
    }}
  />
);

export default Separator;
