import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '90%',

    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    padding: '5%',
    flex: 0.70,
    fontSize: 26,
    textAlign: 'right',
  },

  maxButton: {
    flexDirection: 'row',
    flex: 0.30,
    justifyContent: 'center',
    alignItems: 'center',
    padding:5
  },

  boxSymbol: {
    width: 30,
    height: 55,
    borderLeftWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
