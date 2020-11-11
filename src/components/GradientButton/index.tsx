import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
import { GradientButtonProps } from './types';
import { useNavigation } from '@react-navigation/native';

const GradientButton: FC<GradientButtonProps> = ({ theme, text, route }: any) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={1} style={styles.touchable} onPress={() => navigation.navigate(route)}>
      <LinearGradient style={styles.gradientButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={theme.buttonGradient}
      >
        <Text  style={[styles.text, { color: theme.whiteSmoke }]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}


export default GradientButton;
