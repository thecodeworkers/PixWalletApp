import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  portfolioCard: {
    width: '65%', 
    position: 'absolute', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '65%', 
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: 10

  }
});;

export default styles;