import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    borderRadius: 6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 70
  },
  infoContainer: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: 'center',
  },
  infoIcon: {
    width: 24, height: 24,
  },
  infoText: {
    fontSize: 12,
    paddingTop: 2.5,
    paddingBottom: 2.5,
  }

});

export default styles;
