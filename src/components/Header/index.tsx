import React, { FC } from 'react';
import { View, Text, Platform } from 'react-native';
import { i18n } from '../../utils';
import { HeaderProps } from './type';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const platform = Platform.OS;

const Header: FC<HeaderProps> = ({ theme, navigation, hasRightIcon, hasLeftIcon, title}) => {
  return (
    <View style={hasRightIcon || hasLeftIcon ? styles.header : styles.noIcons}>
      {
        hasLeftIcon
          ? <Icon name="arrow-back-outline" style={platform == 'ios' ? styles.ios : null } onPress={() => navigation.goBack()} color={theme.defaultActiveIcon} size={30}></Icon>
          : <View style={styles.emptyBlock} />
      }
      <Text style={[styles.title, { color: theme.screenText }]}>{i18n.t(title)}</Text>
      {
        hasRightIcon
          ? <Icon name="help-circle" size={32} color={hasRightIcon}></Icon>
          : <View style={styles.emptyBlock} />
      }
    </View>
  );
}

export default Header;
