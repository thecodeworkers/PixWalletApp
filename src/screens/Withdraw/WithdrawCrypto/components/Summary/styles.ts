import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../../assets/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red',
  },
  card: {
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent:"flex-start",
    padding:10,
    flexDirection:'row'
  },
firstCard:{
  height: 89,
    marginHorizontal: '5%',
    flexDirection: 'row',
},
sendingCard: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:5,
  ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
},
    secondCard: {
    height: 89,
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  feeCard: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4)
  },
  dateCard: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    ...generalShadow('#000', 0, 2, 0.23, 2.62, 4),
    borderRadius:5,
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
    height: 60,

    textAlign:'center'
  },
  clipBoardIcon: {
    padding: 10,
    margin: 5,
  },
  selectContainer:{
    justifyContent:'center',
    alignContent:'center',
    marginHorizontal:30
  },
  selectButton:{
    padding:8,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default styles;
