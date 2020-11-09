import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../../assets/styles';

const styles = StyleSheet.create({
  initialMargin: {
    marginTop: '10%'
  },
  container: {
    height: 50,
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '4%'
  },
  iconSection: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: '#FCFCFC',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#DEDEDE',
    borderWidth: 0.5,
    borderBottomColor: 'blue',
    borderLeftColor: 'blue',
    ...generalShadow()
  },
  iconArea: {
    width: 30,
    height: 30
  },
  detailContainer: {
    flex: 0.7,
    justifyContent: 'center'
  },
  nameFont: {
    fontSize: 13,
    marginBottom: 2
  },
  addressFont: {
    fontSize: 14
  }
});

export default styles;
