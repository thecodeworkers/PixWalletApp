import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 2.5,
    borderColor: 'blue',
    paddingVertical: '3%',
    paddingHorizontal: 18,
    width: '100%',
    borderRadius: 7,
    textAlign: 'right',
    color: '#000'
  },

  inputParent: {
    width: '100%',
    position: 'relative'
  },

  icon: {
    position: 'absolute',
    top: '20%',
    left: '3%'
  },
});

export default styles;
