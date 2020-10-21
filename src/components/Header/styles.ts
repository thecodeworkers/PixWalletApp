import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '90%',
    alignSelf:'center',
    justifyContent: 'space-between',
    paddingVertical: 1,
    alignItems: 'center',
    marginTop: '5%',
  },

  noIcons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    paddingVertical: 1
  },

  title: {
    fontWeight:'bold',
    fontSize:16
  },

  arrow: {
    paddingTop: -20
  },

  ios: {
    position: 'relative',
    top: -3
  },


});

export default styles;
