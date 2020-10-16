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

  portfolioCard: {
    width: '65%', 
    position: 'absolute', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '65%', 
    ...shadowOptions(0, 4, 0.30, 4.65, '#000', 12),
    borderRadius: 10,
    zIndex: 999
  },

  chartParent: {
    width: 230, 
    height: 230, 
    justifyContent: 'center', 
    alignItems: 'center', 
    alignSelf: 'center'
  },

  linearGradient: {
    width: '22%',
    paddingVertical: '3%',
    borderRadius: 10,
    backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowOptions(0, 4, 0.30, 2.65, '#000', 8),
  },

  estimatedText: {
    fontSize: 11,
    fontWeight: 'bold'
  },

  fundsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '2%'
  },

  //ACTION BUTTONS 

  contentParent: {
    marginRight: '5%',
    marginLeft: '5%',
    marginBottom: '5%'
  },

  //CURRENCY CARDS

  cardGrayText: {
    backgroundColor: 'red'
  },

  cardGradient: {
    width: '100%',
    paddingVertical: '5%', 
    paddingHorizontal: '5%',
    flexDirection: 'row', 
    borderRadius: 10, 
    shadowColor: "#000",
    marginBottom: '4%',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.65,
    elevation: 4,
  },
});;

export default styles;