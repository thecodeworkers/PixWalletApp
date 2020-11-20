import { StyleSheet } from 'react-native';
import { generalShadow } from '../../assets/styles/shadow';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  icon: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: '8%'
  },

  boldText: {
    // textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: '5%'
  },

  balancesParent: {
    alignSelf: 'center'
  },

  balanceUsd: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  },

  buttonsParent: {
    flexDirection: 'row',
    marginHorizontal: '11.5%',
    justifyContent: 'space-between',
    marginTop: '7%'
  },

  buttons: {
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: '2.5%',
    flexDirection: 'row',
    justifyContent: 'center',
    ...generalShadow()
  },

  filterCard: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10
  },

  filterParent: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  transactions: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  },

  line: {
    height: 3,
    width:'50%',
    marginTop: '1.5%'
  },

  iconButton: {
    width: 24,
    height: 24,
    marginRight: '5%'
  },

  cardActivity: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: '5%'
  },

  grayText: {
    fontSize: 11
  },

  listItem: {
    marginVertical: '5%',
    flexDirection: 'row',
    marginHorizontal: '5%'
  },

  rightText: {
    fontSize: 13
  },

  xLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '80%',
    marginTop: '4%'
  },

  labelText: {
    fontSize: 10,
    fontWeight: 'bold'
  },

  yRange: {
    position: 'relative',
    height: 200,
    width: '100%',
    marginTop: '5%'
  },

  axisText: {
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'right'
  },

  chartParent: {
    position: 'absolute',
    zIndex: 1, left: '5%',
    height: '100%',
    justifyContent: 'space-between',
    top: '5%'
  }

});

export default styles;
