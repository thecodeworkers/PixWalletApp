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
    flex: 1,
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
  clipBoardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 6,
    margin: 10,
    width: '50%',
    alignSelf: 'center',
  },
  clipBoardInput: {
    fontSize: 16,
    height: 55,
    textAlign: 'center'
  },
  clipBoardIcon: {
    padding: 10,
    margin: 5,
  },
  selectContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 30
  },
  selectButton: {
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  twoFactorContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    ...margin,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: '8%',
  }

});

export default styles;
