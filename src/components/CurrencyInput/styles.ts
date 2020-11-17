import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    width: '100%'
  },
  input: {
    padding: 12,
    flex: 0.70,
    fontSize: 26,
    textAlign: 'right',
  },
  maxButton: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    flex: 0.30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxSymbol: {
    width: '100%',
    height: 50,
    borderLeftWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 6
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
