import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main:{
    flexDirection: 'row',
    borderRadius: 6,
    width:'70%',
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    height:60
  },
  infoContainer:{
    flex:0.25,
    justifyContent:"center",
     alignItems:'center',
  },
  infoIcon:{
    width:20 , height:20,
  },
  infoText:{
    fontSize: 12,
  }

});

export default styles;
