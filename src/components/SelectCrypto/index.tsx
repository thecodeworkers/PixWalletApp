import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { InputProps } from './types';
import { i18n } from '../../utils';
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UsdCard, BtcCard, EthCard, DashCard} from '../../assets/image/svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SelectCryptoModal from '../SelectCryptoModal'
import { showComponent } from '../../store/actions' ;

const SelectCrypto: FC<InputProps> = ({ theming: { theme }, action, symbol }: any) => {
  
  const currentSymbol = symbol

  const openModal = () => {
    action.showComponent(true)
  }

  const selectedSymbol = (currentSymbol: any): any => {

    switch (currentSymbol) {
      case 'BTC':
        return ['orange', <BtcCard />]
      case 'ETH':
        return ['purple', <EthCard />]
      case 'DASH':
        return ['lightBlue', <DashCard />]
      case 'USD':
        return ['green', <UsdCard />]

      default:
        return []
    }
  }

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.currency}>
          {selectedSymbol(currentSymbol)[1]}
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.text, { color: theme.screenText }]}>Default Porfolio</Text>
            <Text style={[styles.amount, { color:  selectedSymbol(currentSymbol)[0]  }]}>1.234 USD</Text>
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
