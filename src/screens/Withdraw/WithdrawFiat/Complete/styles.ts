import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../assets/styles'

const margin = {
  marginHorizontal: '8%',
  marginVertical: 20
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginHorizontal: '8%',
    marginVertical: 30
  },
  cardContainer:{
  ...margin
  },
  buttonContainer:{
    ...margin,
    flex:1,
    justifyContent:'flex-end',

  },
  firstCard: {
    height: 74,
    flexDirection: 'row',
  },
  sendingCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },

});

export default styles;
