import React, { FC, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';
import { DefaultProps } from '../../types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles'
import {BtcSymbol, DashSymbol, EthSymbol, UsdSymbol} from '../../assets/image/svg'


const CurrencyInput: FC<DefaultProps> = ({ theming: { theme }, action }: any) => {

  return (
    <View style={[styles.inputContainer, { borderColor: theme.whirspersInactive }]}>
      <TextInput placeholder={'prueba'} placeholderTextColor={'orange'} style={styles.input} />
      <TouchableOpacity style={[styles.maxButton, { borderColor: theme.whirspersInactive }]}>
        <View style={[styles.boxSymbol, { borderColor: theme.whirspersInactive }]}>
          
          <BtcSymbol />
        
     
        </View>
     
      <Text style={styles.text}>Max</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = ({ theming, intermittence }: DefaultProps | any): DefaultProps | any => ({ theming, intermittence })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyInput);
