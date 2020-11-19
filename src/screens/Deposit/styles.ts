import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '84%',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 30,
  },
  cardBody: {
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'column',
    marginVertical: 30,
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    width: '100%'
  },
  textRight: {
    textAlign: 'right',
    fontSize: 14,
  },
  textLeft: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
  },
  commisionContainer: {
    width: '85%',
    flexDirection: 'row',
  },
  commisionTextContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  commisionBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  icon: {
    paddingTop: 10,
    paddingBottom: 10
  },
  announcementContainer:{
    marginTop: 6,
    marginBottom: 6,
    marginHorizontal:'16%'
  },
  lastAnnouncement:{
    marginTop: 6,
    marginBottom: 20,
    marginHorizontal:'16%'
  }


});

export default styles;
