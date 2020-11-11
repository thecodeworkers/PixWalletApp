import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  currencyContainer: {
    flex: 0.4,
    justifyContent: 'space-between',
    marginHorizontal: '8%'
  },
  currencyCard: {
    width: 85,
    height: 85,
    flex: 0.25,
    // backgroundColor: 'green'
  },
  gradientLine: {
    height: 10,
    flex: 0.5,
    marginBottom: '2%'
  },
  processContainer: {
    flex: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default styles;
