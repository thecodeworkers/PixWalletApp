import React, { FC } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { InputProps } from './types';
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UsdCard, BtcCard, EthCard, DashCard} from '../../assets/image/svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SelectCryptoModal from '../SelectCryptoModal'
import { showComponent } from '../../store/actions' ;

const SelectCrypto: FC<InputProps> = ({ theming: { theme }, action, symbol, color }: any) => {

  const currentSymbol = symbol

  const openModal = () => {
    action.showComponent(true)
  }

  const selectedSymbol = (currentSymbol: any): any => {

    switch (currentSymbol) {
      case 'BTC':
        return <BtcCard />
      case 'ETH':
        return <EthCard />
      case 'DASH':
        return <DashCard />
      case 'USD':
        return <UsdCard />

      default:
        return []
    }
  }

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.currency}>
          {selectedSymbol(currentSymbol)}
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.text, { color: theme.screenText }]}>Default Porfolio</Text>
            <Text style={[styles.amount, { color:  color }]}>1.234 USD</Text>
          </View>
          <TouchableOpacity onPress={openModal}  style={styles.selectContainer} activeOpacity={1}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={theme.cardGradient}
              style={styles.selectButton}
            >
              <Ionicons name="chevron-down-outline" color={theme.screenText} size={32} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
    <SelectCryptoModal />

      </View>

    </>
  );
}

const mapStateToProps = ({ theming }: InputProps | any): InputProps | any => ({ theming })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    showComponent
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCrypto);
