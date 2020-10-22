import React, { FC } from 'react';
import { View, Text} from 'react-native';
import { DefaultProps } from '../../types';
import styles from './styles'
import { connect } from 'react-redux';
import { BtcDiamond, EthDiamond, DashDiamond, UsdDiamond } from '../../assets/image/svg/currencies-diamonds'
import {CurrencyProps} from './types'

const DiamondCurrencies: FC<CurrencyProps> = ({ theming: { theme }, currency }:any) => {

  const currentCurrency = currency

  const selectedCurrency = (currentCurrency:any) => {

    switch (currentCurrency){
      case 'BTC':
      return <BtcDiamond />

      case 'ETH':
      return <EthDiamond />

      case 'DASH':
      return <DashDiamond />

      case 'USD':
      return <UsdDiamond />
    }
  }

  return (
    <>
   <View style={styles.diamondConatiner}>
       {
        <View style={{width:200, height:180}}>{selectedCurrency(currentCurrency)}</View>
       }
   </View>
    </>

  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(DiamondCurrencies);