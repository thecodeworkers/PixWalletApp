import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { DefaultProps } from '../../../types';
import { connect } from 'react-redux';
import styles from './styles';

const Summary: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <View style={[{ backgroundColor: theme.background }, styles.container]}>
      <View style={styles.currencyContainer}>

      </View>
      <View style={styles.processContainer}>

      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Summary);
