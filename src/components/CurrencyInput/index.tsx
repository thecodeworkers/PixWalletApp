import React, { FC } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { InputProps } from './types';
import styles from './styles'
import { BtcSymbol, DashSymbol, EthSymbol, UsdSymbol } from '../../assets/image/svg'


const CurrencyInput: FC<InputProps> = ({theme, symbol }: any) => {

  const currentSymbol = symbol

  const selectedSymbol = (currentSymbol: any): any => {

    switch (currentSymbol) {
      case 'BTC':
        return ['orange', <BtcSymbol />]
      case 'ETH':
        return ['purple', <EthSymbol />]
      case 'DASH':
        return ['lightBlue', <DashSymbol />]
      case 'USD':
        return ['green', <UsdSymbol />]

      default:
        return []
    }
  }

  return (
    <View style={[styles.inputContainer, { borderColor: theme.inputBorder, backgroundColor: theme.defaultCard}]}>
      <TextInput keyboardType={'numeric'} placeholder={'0'} placeholderTextColor={selectedSymbol(currentSymbol)[0]} style={[styles.input, { color: selectedSymbol(currentSymbol)[0]}]} />
   
      <TouchableOpacity style={[styles.maxButton, { borderColor: theme.inputBorder, backgroundColor:theme.defaultCard }]}>
        <View style={[styles.boxSymbol, { borderColor: theme.veryLightGrey }]}>

          <View style={{ width: 40, height: 30 }}>
            {selectedSymbol(currentSymbol)[1]}
          </View>

          <View style={{ width: '50%' }}>
            <Text style={[styles.text, { color: theme.pinkSwan }]}>Max</Text>
          </View>

        </View>

      </TouchableOpacity>
    </View>
  );
}

export default CurrencyInput;
