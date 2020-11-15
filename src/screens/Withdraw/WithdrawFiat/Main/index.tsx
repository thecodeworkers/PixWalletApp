import React, { FC } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { WithdrawFiatProps } from '../types';
import styles from './styles'
import { i18n } from '../../../../utils';
import { DiamondCurrencies, GradientButton, CurrencyInput, Announcement } from '../../../../components'
import { UsdCard } from '../../../../assets/image/svg'
import { BankIcon, ClockIcon } from '../../../../assets/image/svg/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const WithdrawFiatMain: FC<WithdrawFiatProps> = ({ theming: { theme }, selectedCurrency }) => {

  const currency = selectedCurrency.currency

  return (
    <ScrollView style={[styles.main, { backgroundColor: theme.background }]}>
      <View style={{ marginVertical: 10 }}>
        <DiamondCurrencies currency={currency.symbol} />
      </View>

      <View style={[styles.cardContainer, {}]}>
        <View style={[styles.card, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.currency}>
            <UsdCard />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.text, { color: theme.screenText }]}>Default Porfolio</Text>
            <Text style={[styles.amount, { color: currency.color }]}>1,234.00
            <Text style={[styles.amountCurrency, { color: currency.color }]}> {currency.symbol}</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.addressContainer}>
        <TouchableOpacity style={[styles.container, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.iconSection}>
            <View style={[{ backgroundColor: theme.iconCard, borderColor: theme.iconCardBorder }, styles.iconContainer]}>
              <View style={styles.iconArea}>
                <BankIcon />
              </View>
            </View>
          </View>
          <View style={styles.detailContainer}>
            <Text style={[{ color: theme.screenText }, styles.nameFont]}>Chase account</Text>
            <Text style={[{ color: theme.veryLightGrey }, styles.addressFont]}>1qwteydhfa132gswrdgsfqtt</Text>
          </View>
          <TouchableOpacity style={styles.selectContainer} activeOpacity={1}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={theme.cardGradient}
              style={styles.selectButton}
            >
              <Ionicons name="chevron-down-outline" color={theme.screenText} size={32} />
            </LinearGradient>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer} >
        <CurrencyInput theme={theme} symbol={currency.symbol} color={currency.color} />
      </View>

      <View style={styles.secondCardContainer}>
        <View style={styles.secondCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.feeCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('commission')}</Text>
            <Text style={[{ color: theme.screenText }]}>25$</Text>
          </View>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.dateCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('balance')}</Text>
            <Text style={[{ color: theme.screenText }]} >0.22</Text>
          </View>
        </View>
      </View>

      <View style={styles.announcemetenContainer}>
        <Announcement theme={theme} text={'fund_credited_wires'} icon={<ClockIcon />} />
      </View>

      <View style={styles.buttonContainer}>
        <GradientButton theme={theme} text={i18n.t('next')} route={'withdrawFiatSummary'} />
      </View>
    </ScrollView>
  );
}


const mapStateToProps = ({ theming, selectedCurrency }: WithdrawFiatProps): WithdrawFiatProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(WithdrawFiatMain);
