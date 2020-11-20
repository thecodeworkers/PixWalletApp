import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../assets/styles'

const margin = {
  marginVertical: 20,
  marginHorizontal: '8%'
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    ...margin
  },
  selectCurrencyContainer: {
    ...margin
  },
  inputContainer: {
    alignSelf: 'center',
    ...margin
  },
  secondCard: {
    height: 74,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  clipBoardInput: {
    fontSize: 16,
    height: 60,
    width: '80%',
    textAlign: 'center'
  },
  clipBoardIcon: {
    padding: 10,
    margin: 5,
  },
  selectContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  selectButton: {
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: '14%',
    marginVertical: 20
  },
  buttonConainer: {
    ...margin,
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default styles;
