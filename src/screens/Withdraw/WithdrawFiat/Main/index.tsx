import React, { FC } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { WithdrawFiatProps } from '../types';
import styles from './styles'
import { DiamondCurrencies, GradientButton, CurrencyInput} from '../../../../components'
import { UsdCard } from '../../../../assets/image/svg'

const WithdrawFiatMain: FC<WithdrawFiatProps> = ({ theming: { theme }, selectedCurrency }) => {

  const currency = selectedCurrency.currency

  return (
     <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={{flex:0.25}}>
       <DiamondCurrencies currency={currency.symbol} />
       </View>

     <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.currency}>
            <UsdCard />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.text, { color: theme.screenText }]}>Default Porfolio</Text>
            <Text style={[styles.amount, { color: currency.color }]}>1.234 USD</Text>
          </View>
        </View>
      </View>

      <View style={{alignSelf:'center', flex:0.25}}>
      <CurrencyInput theme={theme} symbol={currency.symbol} color={currency.color} />
      </View>

      <View style={{flex:0.25, justifyContent:"flex-end", marginBottom:10}}>
      <GradientButton {...{theming: {theme},text: 'Next'}}  />
      </View>
     </View>
  );
}


const mapStateToProps = ({ theming, selectedCurrency}: WithdrawFiatProps): WithdrawFiatProps => ({ theming,selectedCurrency})

export default connect(mapStateToProps)(WithdrawFiatMain);
