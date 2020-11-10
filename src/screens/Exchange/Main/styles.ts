import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../assets/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  currencyCardContainer: {
    borderRadius: 5,
    marginVertical: 25,
    marginHorizontal: '8%',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    ...generalShadow()
  },
  currencyCardIconContainer: {
    marginTop: 7,
    width: 72,
    height: 72,
    marginHorizontal: '2%'
  },
  currencyCardText: {
    fontSize: 13
  },
  currencyCardAmount: {
    fontSize: 25
  },
  textCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: '8%',
    height: 70,
    ...generalShadow()
  },
  textCardRightContainer: {
    marginRight: '6%',
    alignItems: 'flex-end'
  },
  textCardTitleContainer: {
    fontSize: 15
  },
  textShortCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: '8%',
    height: 55,
    ...generalShadow()
  },
  amountSeparations: {
    marginTop: '6%'
  },
  topMargin: {
    marginTop: '10%'
  },
  leftMargin: {
    marginLeft: '6%'
  }
});

export default styles;
