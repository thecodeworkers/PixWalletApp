import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main:{
    flexDirection: 'row',
    borderRadius: 6,
    width:'70%',
    alignSelf: 'center',
    padding:10
  },
  infoContainer:{
    flex:0.25, 
    justifyContent:"center",
     alignItems:'center'
  },
  infoIcon:{
    width:30 , height:30,
  },
  infoText:{
    fontSize: 14, 
    paddingTop:10,
    paddingBottom:10
  }

});

export default styles;
