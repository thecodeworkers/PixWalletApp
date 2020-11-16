import React, { FC } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../types';
import styles from './styles'
import { DiamondCurrencies, GradientButton, CurrencyInput} from '../../../components'
import { UsdCard } from '../../../assets/image/svg'

const Main: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (

     <View style={[styles.container, { backgroundColor: theme.background }]}>
     </View>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Main);
