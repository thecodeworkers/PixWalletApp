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
    borderRadius: 7,
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
  },

  tabParent: {
    flexDirection: 'row',
    marginTop: '5%',
    width: '85%',
    justifyContent: 'space-between'
  },

  childTab: {
    backgroundColor: 'gray',
    width: '47%',
    borderRadius: 4,
    paddingVertical: '2%',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default styles;
