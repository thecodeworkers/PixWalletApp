import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../assets/styles'

const margin = {
  marginHorizontal: '8%',
  marginVertical: 10
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
  cardContainer: {
    ...margin
  },

  firstCard: {
    height: 74,
    flexDirection: 'row',
  },
  sendingCard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  secondCard: {
    height: 74,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  feeCard: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  dateCard: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4),
    borderRadius: 5,
  },
  text: {
    fontSize: 14
  },
  textBig: {
    fontSize: 18
  },
  buttonContainer: {
    ...margin,
  }

});

export default styles;
