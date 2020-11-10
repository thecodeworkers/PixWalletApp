import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../../assets/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red',
  },
  cardContainer:{
    width:'90%',
    alignSelf:'center',
    marginVertical:20,
    flex:0.25
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

});

export default styles;
