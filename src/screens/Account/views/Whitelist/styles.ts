import { StyleSheet } from 'react-native';
import { resizeFinalFlex, resizeInitialFlex } from './functions';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: resizeInitialFlex(),
    justifyContent: 'flex-end'
  },
  addressContainer: {
    flex: 0.2,
    flexDirection: 'row',
    marginHorizontal: '10%'
  },
  addressSelected: {
    marginLeft: 17,
    color: '#C9C9C9'
  },
  buttonContainer: {
    flex: 0.3,
  },
  searchContainer: {
    marginHorizontal: '10%',
    justifyContent: 'flex-end'
  },
  listContainer: {
    flex: resizeFinalFlex()
  }
});

export default styles;
