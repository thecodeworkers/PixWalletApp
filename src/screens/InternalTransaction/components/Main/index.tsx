import React, { FC } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../types';
import styles from './styles'
import { DiamondCurrencies, GradientButton, InputCurrency} from '../../../../components'
import { UsdCard } from '../../../../assets/image/svg'

const Main: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    
     <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={{flex:0.25}}>
       <DiamondCurrencies currency={'USD'} />
       </View>
     
     <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.currency}>
            <UsdCard />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.text, { color: theme.screenText }]}>Default Porfolio</Text>
            <Text style={[styles.amount, { color: theme.screenText }]}>1.234 USD</Text>
          </View>
        </View>
      </View>

      <View style={{alignSelf:'center', flex:0.25}}>
      <InputCurrency {...{theming: {theme}}} symbol={'BTC'} />
      </View>

      <View style={{flex:0.25, justifyContent:"flex-end", marginBottom:10}}>
      <GradientButton {...{theming: {theme},text: 'Next'}}  />
      </View>
     </View>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Main);
