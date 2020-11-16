import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: '84%',
    alignSelf: 'center'
  },
  card: {
    marginVertical: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 10,

  },
  cardHeaderIconContainer: {
    flex: 0.20,
    justifyContent: "center",
    alignItems: 'center',
  },
  cardHeaderText: {
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 8,
    fontWeight: 'bold'
  },
  cardBody: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '85%'
  },
  cardBodyText: {
    fontSize: 14,

  },
  cardFooter: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '85%'
  },
  cardFooterText: {
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 18
  },
  cardFooterBoldText: {
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight:'bold'
  }

});

export default styles;
