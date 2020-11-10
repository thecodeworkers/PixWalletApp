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
  addressContainer: { flex: 0.2, flexDirection: 'row', marginHorizontal: '10%' },
  addressSelected: { marginLeft: 17, color: '#C9C9C9' },
  buttonContainer: { flex: 0.3, flexDirection: 'row', marginHorizontal: '6%' },
  plusButton: { flex: 0.25, justifyContent: 'center', alignItems: 'center' },
  textButtonContainer: { flex: 0.7, justifyContent: 'center' },
  textButton: {
    fontSize: 13
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
