import React, { FC, useEffect} from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Exchange, Send, Receive} from '../../../../../assets/image/svg';
import { selectCurrency } from '../../../../../store/actions';
import { bindActionCreators } from 'redux';
import { RedirectProps, ReducerProps} from './types';
import { connect } from 'react-redux';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const CardsRedirect: FC<RedirectProps> = ({ theming: { theme }, data, action = null, reset}) => {

  const navigation = useNavigation();

  const redirect = (route: string, transactionType: string = '') => {
    navigation.navigate(route);

    const currency = {
      symbol: data.symbol,
      type: data.type,
      color: data.color,
      transactionType: transactionType
    };

    action.selectCurrency(currency);
    reset();
  }

  return (
    <View style={styles.main}>
      <View style={styles.mainChild}>
        <TouchableOpacity onPress={() => redirect(data.type != 'FIAT' ? 'withdrawCrypto' : 'transactionType', 'withdraw')}>
          <View style={[styles.cardActions, {borderColor: data.color, backgroundColor: theme.defaultCard}]}>
           <View style={{ width: 24 }}>
              <Send colorOne={data.gradients[0]} colorTwo={data.gradients[2]}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => redirect(data.type != 'FIAT' ? 'receive' : 'transactionType', 'deposit')} >
          <View style={[styles.cardActions, {borderColor: data.color, backgroundColor: theme.defaultCard}]}>
           <View style={{ width: 24 }}>
              <Receive colorOne={data.gradients[0]} colorTwo={data.gradients[2]} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => redirect('exchange')}>
          <View style={[styles.cardActions, {borderColor: data.color, backgroundColor: theme.defaultCard}]}>
            <View style={{ width: 24 }}>
              <Exchange colorOne={data.gradients[0]} colorTwo={data.gradients[2]} />
            </View>
          </View>
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
