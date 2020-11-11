import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',

    borderWidth: 2,
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
    // backgroundColor: 'green',
    flex: 0.30,
     justifyContent: 'center',
     alignItems: 'center',
    //  backgroundColor:'red'
  },

  boxSymbol: {
    width: '100%',
    height: 50,
    borderLeftWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //  alignSelf: 'center',
    // marginRight:5,
    // marginLeft:5,
    flexDirection: 'row',
    // backgroundColor: 'orange',
    paddingLeft: 6
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
