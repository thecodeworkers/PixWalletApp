import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { WithdrawCryptoProps } from '../types';
import styles from './styles'
import { i18n } from '../../../../utils'
import { SwipeUp } from '../../../../components';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import { PixLogo } from '../../../../assets/image/svg'
import { ScrollView } from 'react-native-gesture-handler';

const WithdrawCryptoSummary: FC<WithdrawCryptoProps> = ({ theming: { theme }, selectedCurrency }) => {

  const currency = selectedCurrency.currency
  const [extraHeight, setExtraHeight] = useState(150);

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
            <Text style={[{ color: theme.screenText }]}>{i18n.t('sending')}</Text>
            <Text style={[{ color: currency.color }]}>0.2300000 {currency.symbol}</Text>
            <Text style={[{ color: theme.screenText }]}>12$</Text>
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
            <Text style={[{ color: theme.screenText }]}>{i18n.t('balance')}</Text>
            <Text style={[{ color: theme.screenText }]} >0.22</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('sending_to')}</Text>
            <Text style={[{ color: theme.screenText }]}>ejrk4bbnk3l44klbk5lbl435nl3nkl</Text>
          </View>
        </View>
      </View>

      <View style={styles.twoFactorContainer}>
        <TouchableOpacity style={styles.selectContainer} activeOpacity={1}>
          <FaIcons name="lock" color={theme.screenText} size={28} />
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

      <View style={{ height: extraHeight, justifyContent: 'flex-end' }}>
        <SwipeUp color={currency.color} route={'withdrawCryptoComplete'} />
      </View>
    </ScrollView>
  );
}


const mapStateToProps = ({ theming, selectedCurrency }: WithdrawCryptoProps): WithdrawCryptoProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(WithdrawCryptoSummary);
