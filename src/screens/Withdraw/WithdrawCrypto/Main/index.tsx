import React, { FC } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { DiamondCurrencies, GradientButton, CurrencyInput, SelectCrypto } from '../../../../components'
import { WithdrawCryptoProps } from '../types';
import { connect } from 'react-redux';
import { i18n } from '../../../../utils'
import LinearGradient from 'react-native-linear-gradient';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import styles from './styles'

const WithdrawCryptoMain: FC<WithdrawCryptoProps> = ({ theming: { theme }, selectedCurrency, navigation }) => {

  const currency = selectedCurrency.currency

  return (

    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ marginVertical: 30 }}>
        <DiamondCurrencies currency={currency.symbol} />
      </View>

      <View style={styles.selectCurrencyContainer}>
        <SelectCrypto theme={theme} color={currency.color} symbol={currency.symbol} navigation={navigation}/>
      </View>

      <View style={styles.inputContainer}>
        <CurrencyInput color={currency.color} theme={theme} symbol={currency.symbol}  />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.secondCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.feeCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('commission')}</Text>
            <Text style={[{ color: theme.screenText }]}>25$</Text>
          </View>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.dateCard]}>
            <Text style={[{ color: theme.screenText }]}>{i18n.t('total')}</Text>
            <Text style={[{ color: theme.screenText }]} >0.22</Text>
          </View>
        </View>
      </View>

      <View style={styles.listContainer}>

        <TouchableOpacity style={styles.selectContainer} activeOpacity={1} onPress={() => navigation.navigate('whitelist')}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={theme.cardGradient}
            style={styles.selectButton}
          >
            <Icons name="list" color={theme.screenText} size={28} />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.clipBoardContainer, { borderColor: theme.inputPasteBorder }]}>
          <TextInput
            style={styles.clipBoardInput}
            placeholder={'Tap to paste address'}
            placeholderTextColor={theme.veryLightGrey}
            underlineColorAndroid="transparent"
            editable={false}
          />
          <FaIcons name="clone" solid={true} style={[styles.clipBoardIcon, { color: theme.summerSky }]} size={30} />
        </TouchableOpacity>

      </View>

      <View style={styles.buttonConainer}>
        <GradientButton theme={theme} text={i18n.t('next')} route={'withdrawCryptoSummary'} />
      </View>
    </ScrollView>
  );
}


const mapStateToProps = ({ theming, selectedCurrency }: WithdrawCryptoProps): WithdrawCryptoProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(WithdrawCryptoMain);
