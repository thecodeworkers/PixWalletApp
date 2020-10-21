import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { DefaultProps } from '../../../../../../types';
import { connect } from 'react-redux';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const ActionButtons: FC<DefaultProps> = ({ theming: { theme }}) => {
  const navigation = useNavigation();

  const redirect = () => navigation.navigate('receive');

  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity activeOpacity={1} onPress={redirect}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={theme.cardGradient}
        style={styles.linearGradient}
        >
        <Icon name="trending-flat" color={theme.defaultActiveIcon} size={32} style={styles.leftArrow} />
      </LinearGradient>
      </TouchableOpacity>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={theme.cardGradient}
        style={styles.linearGradient}>
        <Icon name="compare-arrows" color={theme.defaultActiveIcon} size={32} />
      </LinearGradient>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={theme.cardGradient}
        style={styles.linearGradient}>
        <Icon name="trending-flat" color={theme.defaultActiveIcon} size={32} style={styles.rightArrow} />
      </LinearGradient>
    </View>
  )
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(ActionButtons);
