import { StyleSheet } from 'react-native';

const shadowOptions = (width: number, height: number, opacity: number, radius: number, color: string, elevation: number)=> {
  const options = {
    shadowColor: color,
    shadowOffset: {
      width,
      height,
    },
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation
  }

  return options;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer:{
    width: '100%',
    alignSelf:'center',
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
  selectContainer:{
    position:"absolute",
    right:30,
    top:-20
  },
  selectButton:{
    padding:8,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowOptions(0, 4, 0.30, 2.65, '#000', 8),
  },

});

export default styles;
