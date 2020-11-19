import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../assets/styles';

const commonStyles: any = {
  borderRadius: 5,
  marginHorizontal: '8%',
  flexDirection: 'row',
  alignItems: 'center'
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  currencyCardContainer: {
    ...commonStyles,
    marginVertical: 25,
    height: 72,
    ...generalShadow()
  },
  currencyCardIconContainer: {
    width: 50,
    height: 50,
    marginHorizontal: '3%',
  },
  currencyCardText: {
    fontSize: 13
  },
  currencyCardAmount: {
    fontSize: 25
  },
  textCardContainer: {
    ...commonStyles,
    justifyContent: 'space-between',
    marginVertical: 10,
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
    ...commonStyles,
    justifyContent: 'space-between',
    marginVertical: 10,
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
