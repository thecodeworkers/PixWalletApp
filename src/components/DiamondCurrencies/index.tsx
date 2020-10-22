import React from 'react';
import { View} from 'react-native';
import styles from './styles'
import { BtcDiamond, EthDiamond, DashDiamond, UsdDiamond } from '../../assets/image/svg/currencies-diamonds'

const DiamondCurrencies = ({ currency }:any) => {

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


export default DiamondCurrencies;