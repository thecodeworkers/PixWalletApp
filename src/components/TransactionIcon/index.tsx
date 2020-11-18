import React, { FC } from 'react';
import { TransactionProps } from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export const DepositIcon: FC<TransactionProps> = ({ color, size }) => (
  <Icon name="trending-flat" color={color} size={size} style={styles.leftArrow} />
);

export const WithdrawIcon: FC<TransactionProps> = ({ color, size }) => (
  <Icon name="trending-flat" color={color} size={size} style={styles.rightArrow} />
);

export const ExchangeIcon: FC<TransactionProps> = ({ color, size }) => (
  <Icon name="compare-arrows" color={color} size={size} />
);
