import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
 marginBottom:10,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardBody: {
    width: '85%',
    alignSelf: 'center',
    marginVertical:20,
    flexDirection:'row',
  },
  textLeftContainer:{
    width:'50%'
  },
  textLeft:{
    fontWeight:'bold',
    marginVertical:10,
    fontSize:14,
  },
  textRightContainer:{
    width:'50%',
    alignItems:'flex-end',
  },
  textRight:{
    marginVertical:10,
    fontSize:14,
  },
  commisionContainer:{
    borderTopWidth:1,
    width:'100%',
  },
  commisionTextContainer:{
    width:'85%',
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'

  },
  icon:{
    paddingTop:10,
    paddingBottom:10
  }
});

export default styles;
