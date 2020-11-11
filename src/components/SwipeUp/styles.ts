import { StyleSheet } from 'react-native';
import { generalShadow } from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  swipeContainer: {
    width: 45,
    height: 45,
    backgroundColor: 'gray',
    borderRadius: 5,
    ...generalShadow()
  },
  swipeText: {
    fontSize: 15,
    marginTop: 11
  }
});

export default styles;
