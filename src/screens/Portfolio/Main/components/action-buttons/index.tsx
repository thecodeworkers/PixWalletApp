import React, { FC, memo } from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { generalShadow } from '../../../../../assets/styles';
import { DepositIcon, WithdrawIcon, ExchangeIcon } from '../../../../../components';
import { Theming } from '../../../../../types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const buttons = [
  {
    ButtonIcon: DepositIcon,
    route: 'deposit'
  },
  {
    ButtonIcon: ExchangeIcon,
    route: 'exchange'
  },
  {
    ButtonIcon: WithdrawIcon,
    route: 'withdraw'
  }
];

const ActionButtons: FC<Theming> = ({ theme }) => {
  const navigation = useNavigation();

  const redirect = (name: string) => {
    name != 'exchange'
    ? navigation.navigate('currencyList', { name })
    : navigation.navigate('exchange')
  }

  return (
    <View style={styles.actionButtons}>
      {
        buttons.map(({ ButtonIcon, route }, index: number) => (
          <TouchableOpacity activeOpacity={1} onPress={() => redirect(route)}>
            <View key={index} style={Platform.OS == 'ios' ? { ...generalShadow() } : {}}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={theme.cardGradient}
                style={styles.linearGradient}
              >
                <ButtonIcon color={theme.defaultActiveIcon} size={32} />
              </LinearGradient>
            </View>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default memo(ActionButtons);
