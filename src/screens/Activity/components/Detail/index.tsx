import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../types';
import styles from './styles';

const Detail: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.screenText }}>Activity Detail</Text>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Detail);
