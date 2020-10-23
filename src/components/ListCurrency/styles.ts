import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardGrayText: {
    backgroundColor: 'red'
  },

  cardGradient: {
    width: '100%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: "#000",
    marginBottom: '4%',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.65,
    elevation: 4,
  },

  cardLefSide: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  cardLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardCenter: {
    flex: 0.43,
    alignItems: 'flex-end'
  },

  cardRight: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});

export default styles;
