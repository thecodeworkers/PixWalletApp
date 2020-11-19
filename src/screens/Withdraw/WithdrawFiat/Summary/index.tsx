import React, { FC, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { WithdrawFiatProps } from '../types';
import styles from './styles'
import { i18n } from '../../../../utils';
import { SwipeUp } from '../../../../components'
import { PixLogo } from '../../../../assets/image/svg'

const WithdrawFiatSummary: FC<WithdrawFiatProps> = ({ theming: { theme }, selectedCurrency }) => {

  const currency = selectedCurrency.currency
  const [extraHeight, setExtraHeight] = useState(200);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}
    onLayout={dimensions =>  { if(dimensions.nativeEvent.layout.height < 550) setExtraHeight(100) }}>

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

      <View style={ { height: extraHeight, justifyContent: 'flex-end' }}>
        <SwipeUp color={currency.color} route={'withdrawFiatComplete'} theme={theme} />
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ theming, selectedCurrency }: WithdrawFiatProps): WithdrawFiatProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(WithdrawFiatSummary);
