import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { WithdrawFiatProps } from '../types';
import styles from './styles'
import { i18n } from '../../../../utils';
import { SwipeUp } from '../../../../components'
import { PixLogo } from '../../../../assets/image/svg'

const WithdrawFiatSummary: FC<WithdrawFiatProps> = ({ theming: { theme }, selectedCurrency }) => {

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
            <Text style={[styles.text, { color: theme.screenText }]}>{i18n.t('sending')}</Text>
            <Text style={[styles.textBig, { color: currency.color }]}>$1,234.00</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.secondCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.feeCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('commission')}</Text>
            <Text style={[{ color: theme.screenText }]}>25$</Text>
          </View>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.dateCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('total')}</Text>
            <Text style={[{ color: theme.screenText }]} >0.23</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>Sending to</Text>
            <Text style={[{ color: theme.veryLightGrey }]}>ejrk4bbnk3l44klbk5lbl435nl3nkl</Text>
          </View>
        </View>
      </View>

      <View style={[styles.buttonContainer, {flex:1, justifyContent:'flex-end'}]}>
        <SwipeUp color={currency.color} route={'withdrawFiatComplete'} />
      </View>

    </View>
  );
}


const mapStateToProps = ({ theming, selectedCurrency }: WithdrawFiatProps): WithdrawFiatProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(WithdrawFiatSummary);
