import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../assets/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer:{
    // width:'90%',
    alignSelf:'center',
    marginVertical:20,
    flex:0.25,
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
    secondCard: {
    height: '80%',
    marginHorizontal: '8%',
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
    borderRadius:5,
  },
  currency:{
    width: 60,
    height: 60,
    flex: 0.20
  },
  textContainer:{
    flex:0.70,
    flexDirection:'column',
    justifyContent:'space-between',
    marginLeft:10
  },
  text:{
    fontSize:16
  },
  amount:{
    fontSize:24,
    fontWeight:'bold'
  },

  clipBoardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 6,
    margin: 10,
    width: '85%',
    alignSelf: 'flex-end',
  },
  clipBoardInput: {
    fontSize: 16,
    height: 60,
    width: '80%',
    textAlign:'center'
  },
  clipBoardIcon: {
    padding: 10,
    margin: 5,
  },
  selectContainer:{
    justifyContent:'center',
    alignContent:'center',
  },

  selectButton:{
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;
