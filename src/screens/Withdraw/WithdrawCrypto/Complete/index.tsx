import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { WithdrawCryptoProps } from '../types';
import { i18n } from '../../../../utils'
import styles from './styles'
import { GradientButton } from '../../../../components'
import { PixLogo } from '../../../../assets/image/svg'

const WithdrawCryptoComplete: FC<WithdrawCryptoProps> = ({ theming: { theme }, selectedCurrency }) => {

  const currency = selectedCurrency.currency

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.logoContainer}>
        <View style={{ width: 100, alignSelf: 'center' }}>
          <PixLogo color={currency.color} />
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('sent')}</Text>
            <Text style={[{ color: currency.color, fontSize: 32 }]}>0.2300 {currency.symbol}</Text>
            <Text style={[{ color: theme.screenText, fontSize: 22 }]}>12$</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.secondCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('sent_to')}</Text>
            <Text style={[{ color: currency.color }]}>ejrk4bbnk3l44klbk5lbl435nl3nkl</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <GradientButton theme={theme} text={i18n.t('continue')} route={'portfolio'} />
      </View>

    </View>


  );
}


const mapStateToProps = ({ theming, selectedCurrency }: WithdrawCryptoProps): WithdrawCryptoProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(WithdrawCryptoComplete);
