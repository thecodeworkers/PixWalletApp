import { Dimensions } from 'react-native';

const { height: viewportHeight } = Dimensions.get('window');

export const resizeInitialFlex = () => {
  const flex = viewportHeight < 570 ? 0.34
              : viewportHeight < 670 ? 0.3
              : viewportHeight < 810 ? 0.28
              : 0.23

  return flex;
}

export const resizeFinalFlex = () => {
  const flex = viewportHeight < 570 ? 0.66
              : viewportHeight < 670 ? 0.7
              : viewportHeight < 810 ? 0.72
              : 0.77

  return flex;
}
