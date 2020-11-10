import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../../assets/styles';

const commonStyles: any = {
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center'
};

const commonSizeBox = {
  width: 45,
  height: 45,
}

const styles = StyleSheet.create({
  iosContainer: {
    ...commonSizeBox,
    ...generalShadow()
  },
  androidContainer: {
    ...commonStyles,
    ...commonSizeBox,
    ...generalShadow()
  },
  iosGradient: {
    width: '100%',
    height: '100%',
    ...commonStyles
  },
  plusContainer: {
    width: 25,
    height: 25
  }
});

export default styles;
