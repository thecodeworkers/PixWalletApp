import React, { FC } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { WithdrawCryptoProps } from '../types';
import styles from './styles'
import { GradientButton } from '../../../../components';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import { PixLogo } from '../../../../assets/image/svg'


const WithdrawCryptoSummary: FC<WithdrawCryptoProps> = ({ theming: { theme }, selectedCurrency }) => {

  const currency = selectedCurrency.currency

  return (

    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: 0.25 }}>
        <View style={{ width: 100, alignSelf: 'center' }}>
          <PixLogo color={currency.color} />
        </View>
      </View>

      <View style={{ flex: 0.20 }}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>Sending</Text>
            <Text style={[{ color: currency.color }]}>0.2300000 {currency.symbol}</Text>
            <Text style={[{ color: theme.screenText }]}>12$</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.20 }}>
        <View style={styles.secondCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.feeCard]}>
            <Text style={[{ color: theme.screenText }]}>Comisión</Text>
            <Text style={[{ color: theme.screenText }]}>25$</Text>
          </View>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.dateCard]}>
            <Text style={[{ color: theme.screenText }]}>Balance</Text>
            <Text style={[{ color: theme.screenText }]} >0.22</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.20 }}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>Sending to</Text>
            <Text style={[{ color: theme.screenText }]}>ejrk4bbnk3l44klbk5lbl435nl3nkl</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.20, justifyContent: 'center', width: '90%', flexDirection: 'row', alignSelf: 'center' }}>
        <TouchableOpacity style={styles.selectContainer} activeOpacity={1}>
          <FaIcons name="lock" color={theme.screenText} size={32} />
        </TouchableOpacity>

        <View style={[styles.clipBoardContainer, { borderColor: theme.twoFactBorder, backgroundColor: theme.twoFactBackground }]}>
          <TextInput
            style={styles.clipBoardInput}
            placeholder={'0 0 0 0'}
            placeholderTextColor={theme.veryLightGrey}
            underlineColorAndroid="transparent"
          />
        </View>

      </View>

      <View style={{ flex: 0.25, justifyContent: "flex-end", marginBottom: 10 }}>
        <GradientButton {...{ theming: { theme }, text: 'Next', route:'withdrawCryptoComplete' }} />
      </View>
    </View>
  );
}


const mapStateToProps = ({ theming, selectedCurrency }: WithdrawCryptoProps): WithdrawCryptoProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(WithdrawCryptoSummary);
