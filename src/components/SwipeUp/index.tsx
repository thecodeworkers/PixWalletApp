import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { SwipeUpProps } from './types';
import { useNavigation } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import styles from './styles';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

 const SwipeUp: FC<SwipeUpProps> = ({ color, route }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GestureRecognizer
        style={styles.swipeContainer}
        config={config}
        onSwipeUp={() => navigation.navigate(route)}
      >

      </GestureRecognizer>
      <Text style={[styles.swipeText, { color }]}>Swipe up</Text>
    </View>
  );
 }

export default SwipeUp;
