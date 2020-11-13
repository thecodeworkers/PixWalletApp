import React, { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { WithdrawFiatProps } from '../types';
import { i18n } from '../../../../utils';
import styles from './styles';
import { GradientButton } from '../../../../components';
import { PixLogo } from '../../../../assets/image/svg';

const WithdrawFiatComplete: FC<WithdrawFiatProps> = ({ theming: { theme }, selectedCurrency }) => {

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
            <Text style={[{ color: theme.screenText }]}>USD {i18n.t('sent')}</Text>
            <Text style={[{ color: currency.color, fontSize: 24 }]}>$1,234.00</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.firstCard}>
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


const mapStateToProps = ({ theming, selectedCurrency }: WithdrawFiatProps): WithdrawFiatProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(WithdrawFiatComplete);
