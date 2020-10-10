import React, { FC } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import dark from '../../assets/colors/dark';
import light from '../../assets/colors/light';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import { bindActionCreators } from 'redux';
import { setTheme } from '../../store/actions';
import PortfolioChart from '../../assets/image/svg';
import styles from './style';

const Portfolio: FC<DefaultProps> = ({ theming: { theme }, action }: any) => {

  const lightTheme = () => {
    action.setTheme('light');
  }

  const darkTheme = () => {
    action.setTheme('dark');
  }

  return (
    <>
      {/* <StatusBar barStyle={theme.statusBar} /> */}
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.screenText }}>{i18n.t('portfolio')}</Text>

        <TouchableOpacity onPress={lightTheme}>
          <Text>light</Text>
        </TouchableOpacity>

        <View style={{ width: 200, height: 200, justifyContent: 'center', alignItems: 'center', }}>

          <TouchableOpacity style={[styles.portfolioCard, {backgroundColor: theme.background}]}>
          <Text>1.123,32$</Text>
         </TouchableOpacity> 
          

          <PortfolioChart> </PortfolioChart>

        </View>

        {/* <View style={{borderTopLeftRadius:10, borderTopRightRadius:10, borderTopColor: 'red', width: 200, backgroundColor: 'blue', height: 300, borderTopWidth: 2}}></View> */}

        <TouchableOpacity onPress={darkTheme}>
          <Text>dark</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    setTheme
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
