import React, { FC } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { WithdrawFiatProps } from '../types';
import styles from './styles'
import { DiamondCurrencies, GradientButton, CurrencyInput, Announcement} from '../../../../components'
import { UsdCard} from '../../../../assets/image/svg'
import { BankIcon, ClockIcon } from '../../../../assets/image/svg/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const WithdrawFiatMain: FC<WithdrawFiatProps> = ({ theming: { theme }, selectedCurrency }) => {

  const currency = selectedCurrency.currency

  return (
     <View style={[styles.main, { backgroundColor: theme.background }]}>
        <View style={{flex:0.25}}>
       <DiamondCurrencies currency={currency.symbol} />
       </View>

     <View style={[styles.cardContainer, {}]}>
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

      <View style={{flex:0.10,   alignSelf:'center', marginVertical:10,}}>
      <TouchableOpacity style={[styles.container, { backgroundColor: theme.defaultCard }]}>
        <View style={styles.iconSection}>
          <View style={[{ backgroundColor: theme.iconCard, borderColor: theme.iconCardBorder }, styles.iconContainer]}>
            <View style={styles.iconArea}>
              <BankIcon/>
            </View>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={[{ color: theme.screenText }, styles.nameFont]}>hola</Text>
          <Text style={[{ color: theme.veryLightGrey }, styles.addressFont]}>hollaa</Text>
        </View>
        <TouchableOpacity   style={styles.selectContainer} activeOpacity={1}>
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

      <View style={{alignSelf:'center', flex:0.20, marginVertical:10,}}>
      <CurrencyInput theme={theme} symbol={currency.symbol} color={currency.color} />
      </View>

      <View style={{ flex: 0.10, marginVertical:10,}}>
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

      <View style={{flex:0.10, marginBottom:10}}>
     <Announcement theme={theme} text={'hola'} icon={<ClockIcon />} />
      </View>

      <View style={{flex:0.25, justifyContent:"flex-end", marginBottom:10}}>
      <GradientButton theme={theme} text= {'Next'} route={'withdrawFiatSummary'}  />
      </View>
     </View>
  );
}


const mapStateToProps = ({ theming, selectedCurrency}: WithdrawFiatProps): WithdrawFiatProps => ({ theming,selectedCurrency})

export default connect(mapStateToProps)(WithdrawFiatMain);
