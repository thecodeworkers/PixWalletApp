import { Animated, Easing} from 'react-native';

export const actionObject = (type: string, payload: any = null) => {
  return { type, payload }
}

export const animationProps = (value: number, duration: number, name: any, delay: number = 0) => {
  const animation = Animated.timing(
    name,
    {
      delay,
      toValue: value,
      duration,
      easing: Easing.linear,
      useNativeDriver: true
    }
  )

  return animation;
};
