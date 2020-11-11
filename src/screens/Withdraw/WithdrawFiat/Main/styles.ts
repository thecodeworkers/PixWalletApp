import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../assets/styles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  cardContainer:{
    width:'90%',
    alignSelf:'center',
marginVertical:10,
    flex:0.13
  },
  container: {
    height:75,
    alignSelf:'center',
    flexDirection: 'row',
    width:'90%',
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
    marginVertical:20,
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
  currency:{
    width:60,
    height:60,
    flex:0.20
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
  iconSection: {
    flex: 0.20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    borderBottomColor: 'blue',
    borderLeftColor: 'blue',
    ...generalShadow(),

  },
  iconArea: {
    width: 30,
    height: 30
  },
  detailContainer: {
    flex: 0.8,
    justifyContent: 'center'
  },
  nameFont: {
    fontSize: 13,
    marginBottom: 2
  },
  addressFont: {
    fontSize: 14
  },
  selectContainer:{
    position:"absolute",
    right:30,
    top:-20,

  },
  selectButton:{
    padding:8,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    ...generalShadow(),
    width:50
  },
  secondCard: {
    height: 70,
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:20,
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

});

export default styles;
