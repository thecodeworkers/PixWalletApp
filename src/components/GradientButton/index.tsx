import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
import { connect } from 'react-redux';
import { DefaultProps } from '../../types';
import { useNavigation } from '@react-navigation/native';

const GradientButton: FC<DefaultProps> = ({ theming: { theme }, text, route }: any) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={1} style={styles.touchable} onPress={() => navigation.navigate(route)}>
      <LinearGradient   style={styles.gradientButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={theme.buttonGradient}
      >
        <Text  style={[styles.text, { color: theme.whiteSmoke }]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const mapStateToProps = ({ theming }: DefaultProps | any): DefaultProps | any => ({ theming })


export default connect(mapStateToProps)(GradientButton);
