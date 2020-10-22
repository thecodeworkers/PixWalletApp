import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  input: {
    borderWidth: 2.5,
    borderColor: 'blue',
    paddingVertical: '3%',
    paddingHorizontal: 15,
    width: '100%',
    borderRadius: 6,
    textAlign: 'right',
    color: '#000'
  },

  inputParent: {
    width: '80%',
    marginTop: '8%',
    position: 'relative'
  },

  icon: {
    position: 'absolute',
    top: '20%',
    left: '3%'
  }

});

export default styles;
