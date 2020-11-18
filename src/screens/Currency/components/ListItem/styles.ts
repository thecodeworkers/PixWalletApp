import { StyleSheet } from 'react-native';
import { generalShadow } from '../../../../assets/styles';

const styles = StyleSheet.create({
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
  iconArea: {
    width: 30,
    height: 30
  },
  detailContainer: {
    flex: 0.7,
    justifyContent: 'center'
  },
  nameFont: {
    fontSize: 14,
    marginBottom: 2
  },
  addressFont: {
    fontSize: 14
  }
});

export default styles;
