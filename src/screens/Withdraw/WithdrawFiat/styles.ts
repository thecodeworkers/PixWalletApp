import { StyleSheet } from 'react-native';

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

});

export default styles;
