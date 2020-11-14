import { StyleSheet } from 'react-native';

const margin = {
  marginHorizontal: '8%',
  marginVertical: 20
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diamondContainer: {
    marginHorizontal: '8%',
    marginVertical: 10
  },
  qrContainer: {
    alignSelf: 'center',
    borderRadius: 10,
    ...margin
  },
  shareContainer: {
    ...margin
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
    marginTop: 10,
    width: '100%',
    alignSelf: 'center',
    padding: 6
  },
  clipBoardInput: {
    fontSize: 14,
    height: 60,
    width: '80%',
  },
  clipBoardIcon: {
    padding: 10,
    margin: 5,
  },
  textContainer: {
    ...margin
  }

});

export default styles;
