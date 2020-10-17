import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diamondConatiner: {
    alignSelf: 'center',
    height:'18%'
  },
  qrContainer: {
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  shareButton: {
    borderRadius: 6,
    width: 170,
    alignSelf: 'center',
    height: 45,
    flexDirection: "row"

  },
  shareTextContainer: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '100%',

  },
  shareText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 0.60,

    textAlign: 'right'
  },
  shareIcon: {
    paddingLeft: 10,
    alignSelf: 'center',
    flex: 0.30,
    textAlign: 'right'
  },

  copyText: {
    alignSelf: 'center',
  },
  clipBoardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 6,
    margin: 10,
    width: '90%',
    alignSelf: 'center',
  },
  clipBoardInput: {
    fontSize: 14,
    height: 60,
    width: '80%',
  },
  clipBoardIcon: {
    padding: 10,
    margin: 5,
  }
 
});

export default styles;
