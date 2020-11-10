import React, { FC } from 'react';
import { View } from 'react-native';
import { PlusIcon } from '../../../../../assets/image/svg/icons';
import { Theming } from '../../../../../types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export const GradientPlusIos: FC<Theming> = ({ theme }) => (
  <View style={styles.iosContainer}>
    <LinearGradient style={styles.iosGradient} colors={theme.silverGradient}>
      <View style={styles.plusContainer}>
        <PlusIcon/>
      </View>
    </LinearGradient>
  </View>
);

export const GradientPlusAndroid: FC<Theming> = ({ theme }) => (
  <LinearGradient style={styles.androidContainer} colors={theme.silverGradient}>
    <View style={styles.plusContainer}>
      <PlusIcon/>
    </View>
  </LinearGradient>
);
