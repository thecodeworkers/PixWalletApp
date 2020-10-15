import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardActions: {
    width: 42,
    height: 42,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  main: {
    flex: 0.66, 
    flexDirection: 'row', 
    justifyContent: 'flex-end' 
  },

  mainChild: {
    width: '85%', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center' 
  }
});

export default styles;