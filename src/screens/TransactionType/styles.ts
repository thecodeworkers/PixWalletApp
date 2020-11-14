import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: '90%',
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
    paddingTop: 2.5,
    paddingBottom: 2.5
  },
  cardHeaderIconContainer: {
    flex: 0.20,
    justifyContent: "center",
    alignItems: 'center',
  },
  cardHeaderText: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
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
    paddingBottom: 10
  }

});

export default styles;
