import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabParent: {
    flexDirection: 'row',
    marginTop: '8%',
    width: '100%',
    justifyContent: 'space-between'
  },

  childTab: {
    backgroundColor: 'gray',
    width: '47%',
    borderRadius: 4,
    paddingVertical: '2.6%',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default styles;
