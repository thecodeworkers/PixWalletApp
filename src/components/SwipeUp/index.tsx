import React, { FC } from 'react';
import { View, Text, Platform } from 'react-native';
import { SwipeUpProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { generalShadow } from '../../assets/styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

 const SwipeUp: FC<SwipeUpProps> = ({ color, route, theme }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GestureRecognizer
        config={config}
        onSwipeUp={() => navigation.navigate(route)}
      >
        <View style={Platform.OS == 'ios' ? { ...generalShadow() } : {}}>
          <LinearGradient style={styles.swipeContainer} colors={theme.silverGradient}>
            <Icon name="angle-double-up" color={color} size={35} />
          </LinearGradient>
        </View>
      </GestureRecognizer>
      <Text style={[styles.swipeText, { color }]}>Swipe up</Text>
    </View>
  );
 }

export default SwipeUp;
