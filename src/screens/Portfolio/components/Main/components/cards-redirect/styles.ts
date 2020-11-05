import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../../../assets/styles/shadow';

const styles = StyleSheet.create({
  cardActions: {
    width: 42,
    height: 42,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    ...generalShadow(),
    // backgroundColor: 'blue'
  },

  main: {
    flex: 0.66,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  mainChild: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  rotateArrow: {
    color: 'white',
    transform: [{rotate: '-90deg'}]
  }
});

export default styles;
