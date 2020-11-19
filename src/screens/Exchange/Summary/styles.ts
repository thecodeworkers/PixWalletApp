import { StyleSheet, Dimensions } from 'react-native';

const { height: viewportHeight } = Dimensions.get('window');


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
    width: 70,
    height: 70,
    flex: 0.25
  },
  gradientLine: {
    height: 10,
    flex: 0.5,
    // marginBottom: '1%'
  },
  processContainer: {
    flex: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  leftCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 7,
    position: 'absolute',
    left: '20%',
    bottom: viewportHeight < 810 ? '42%' : '43.6%',
    zIndex: 999
  },
  rightCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 5,
    position: 'absolute',
    right: '20%',
    bottom: viewportHeight < 810 ? '42%' : '43.6%',
    zIndex: 999,
    backgroundColor: '#FFFFFF'
   }
});

export default styles;
