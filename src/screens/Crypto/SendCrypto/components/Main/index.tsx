import React, { FC } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../../types';
import styles from './styles'
import { DiamondCurrencies, GradientButton, InputCurrency, SelectCrypto} from '../../../../../components'
import { } from '../../../../../assets/image/svg'

const Main: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    
     <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={{flex:0.20}}>
       <DiamondCurrencies currency={'BTC'} />
       </View>
     
       <View style={{flex:0.20}}>
    <SelectCrypto  {...{theming: {theme}}} symbol={'BTC'} />
    </View>

      <View style={{alignSelf:'center', flex:0.20}}>
      <InputCurrency {...{theming: {theme}}} symbol={'BTC'} />
      </View>

      <View style={{flex:0.20}}>
      <View style={styles.secondCard}>
        <View style={[{ backgroundColor: theme.defaultCard }, styles.feeCard]}>
          <Text  style={[{ color: theme.screenText }]}>Comisión</Text>
          <Text style={[{ color: theme.screenText }]}>25$</Text>
        </View>
        <View style={[{ backgroundColor: theme.defaultCard }, styles.dateCard]}>
          <Text style={[{ color: theme.screenText }]}>Total</Text>
          <Text style={[{ color: theme.screenText }]} >0.22</Text>
        </View>
    </View>

      </View>
      <View style={{flex:0.25, justifyContent:"flex-end", marginBottom:10}}>
      <GradientButton {...{theming: {theme},text: 'Next'}}  />
      </View>
     </View>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Main);
