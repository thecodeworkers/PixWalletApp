import React, { FC, useEffect} from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Exchange, Send, Receive} from '../../../../../../assets/image/svg';
import { selectCurrency } from '../../../../../../store/actions';
import { bindActionCreators } from 'redux';
import { RedirectProps, ReducerProps} from './types';
import { connect } from 'react-redux';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const CardsRedirect: FC<RedirectProps> = ({ theming: { theme }, data, action = null, reset}) => {

  const navigation = useNavigation();

  const redirect = (route: string) => {
    navigation.navigate(route);

    const currency = {
      symbol: data.symbol,
      type: data.type,
      color: data.color
    };

    action.selectCurrency(currency);
    reset();
  }

  return (
    <View style={styles.main}>
      <View style={styles.mainChild}>

        <TouchableOpacity onPress={() => redirect(data.type != 'FIAT' ? 'sendCrypto' : 'sendFiat' )}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.7, 0.7]}
            colors={data.gradients.reverse()}
            style={styles.cardActions}
            useAngle={true}>
           <View style={{ width: 24 }}>
              <Send />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => redirect(data.type != 'FIAT' ? 'receiveCrypto' : 'receiveFiat' )} >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.7, 0.7]}
            colors={data.gradients.reverse()}
            style={styles.cardActions}
            useAngle={true}
          >
           <View style={{ width: 24 }}>
              <Receive />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => redirect('exchange')}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.7, 0.7]}
            colors={data.gradients.reverse()}
            style={styles.cardActions}
            useAngle={true}>

            <View style={{ width: 24 }}>
              <Exchange />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = ({ theming, selectedCurrency }: ReducerProps): ReducerProps => ({ theming, selectedCurrency })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    selectCurrency
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsRedirect);
