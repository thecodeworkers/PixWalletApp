import { StyleSheet } from 'react-native';


const shadowOptions = (width: number, height: number, opacity: number, radius: number, color: string, elevation: number) => {
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
opacity:0.95,

  },

  modalView: {
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
 
  },
  card: {
   
    padding: 20,
    flexDirection: 'row',
   
  },
  currency: {
    width: 60,
    height: 60,
    flex: 0.20
  },
  textContainer: {
    flex: 0.70,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  text: {
    fontSize: 16
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  selectContainer: {
    position: 'absolute',
    right: 50,
    top: 190,
    zIndex:999
  },
  selectButton: {
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowOptions(0, 4, 0.30, 2.65, '#000', 8),
    
  },

});


export default styles;