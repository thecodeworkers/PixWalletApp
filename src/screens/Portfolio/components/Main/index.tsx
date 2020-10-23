import React, { FC, useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { i18n } from '../../../../utils';
import { bindActionCreators } from 'redux';
import { setTheme, getCurrencies } from '../../../../store/actions';
import { PortfolioChart } from '../../../../assets/image/svg';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ActionButtons } from './components';
import { ListCurrency } from '../../../../components';
import { CurrencyProps, GeneralProps } from './types';

const Main: FC<GeneralProps> = ({ theming: { theme }, action, navigation }) => {

  const lightTheme = () => action.setTheme('light');
  const darkTheme = () => action.setTheme('dark');

  return (
    <>
      <ScrollView style={{ backgroundColor: theme.background }}>
        <View style={[styles.container, { backgroundColor: theme.background }]}>

          <View style={styles.chartParent}>
            <TouchableOpacity style={[styles.portfolioCard, { backgroundColor: theme.bigCard }]} activeOpacity={0.7} onPress={() => navigation.navigate('summary')}>
              <Text style={[styles.estimatedText, { color: theme.veryLightGrey }]}>Estimated value</Text>
              <Text style={[styles.fundsText, { color: theme.screenText }]}>1.123,32$</Text>
            </TouchableOpacity>
            <PortfolioChart />
          </View>

          <View style={styles.contentParent}>
            <ActionButtons theme={theme} />
            <ListCurrency gradient={true} />

            <TouchableOpacity onPress={lightTheme}>
              <Text>light</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={darkTheme}>
              <Text>dark</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const mapStateToProps = ({ theming, currency }: CurrencyProps): CurrencyProps => ({ theming, currency })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    setTheme,
    getCurrencies
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
