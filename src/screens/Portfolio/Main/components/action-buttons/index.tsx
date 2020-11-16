import React, { FC, memo } from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { Theming } from '../../../../../types';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import { generalShadow } from '../../../../../assets/styles';

const ActionButtons: FC<Theming> = ({ theme }) => {
  const navigation = useNavigation();

  const redirect = (name: string) => {
    name != 'exchange'
    ? navigation.navigate('currencyList', { name })
    : navigation.navigate('exchange')
  }

  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity activeOpacity={1} onPress={() => redirect('deposit')}>
        <View style={Platform.OS == 'ios' ? { ...generalShadow() } : {}}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={theme.cardGradient}
            style={styles.linearGradient}
          >
            <Icon name="trending-flat" color={theme.defaultActiveIcon} size={32} style={styles.leftArrow} />
          </LinearGradient>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} onPress={() => redirect('exchange')}>
        <View style={Platform.OS == 'ios' ? { ...generalShadow() } : {}}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={theme.cardGradient}
            style={styles.linearGradient}>
            <Icon name="compare-arrows" color={theme.defaultActiveIcon} size={32} />
          </LinearGradient>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} onPress={() => redirect('withdraw')}>
        <View style={Platform.OS == 'ios' ? { ...generalShadow() } : {}}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={theme.cardGradient}
            style={styles.linearGradient}>
            <Icon name="trending-flat" color={theme.defaultActiveIcon} size={32} style={styles.rightArrow} />
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default memo(ActionButtons);
