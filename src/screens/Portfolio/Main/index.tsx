import React, { FC, useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Animated} from 'react-native';
import { connect } from 'react-redux';
import { i18n } from '../../../utils';
import { animationProps } from '../../../utils/common';
import { bindActionCreators } from 'redux';
import { setTheme, getCurrencies } from '../../../store/actions';
import { PortfolioChart } from '../../../assets/image/svg';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ActionButtons } from './components';
import { ListCurrency } from '../../../components';
import { CurrencyProps, GeneralProps } from './types';
import LottieView from 'lottie-react-native';
import  './bodymovin.json';

const Main: FC<GeneralProps> = ({ theming: { theme }, action, navigation }) => {

  const lightTheme = () => action.setTheme('light');
  const darkTheme = () => action.setTheme('dark');

  const fadeIn = useRef(new Animated.Value(0)).current;
  const transY = useRef(new Animated.Value(80)).current;

  useEffect(() => {
    animationProps(1, 800, fadeIn).start();
    animationProps(0, 800, transY).start();
  }, []);

  return (
    <View style={{backgroundColor: theme.background}}>
    <Animated.View style={{backgroundColor: theme.background, opacity: fadeIn, transform: [{translateY: transY}] }}>
      <ScrollView style={{ backgroundColor: theme.background }}>
        <View style={[styles.container, { backgroundColor: theme.background }]}>

          <View style={styles.chartParent}>
            <TouchableOpacity style={[styles.portfolioCard, { backgroundColor: theme.bigCard }]} activeOpacity={1} onPress={() => navigation.navigate('portfolioSummary')}>
              <Text style={[styles.estimatedText, { color: theme.veryLightGrey }]}>Estimated value</Text>
              <Text style={[styles.fundsText, { color: theme.screenText }]}>1.123,32$</Text>
            </TouchableOpacity>
            <PortfolioChart />
          </View>

          <View style={styles.contentParent}>
            <ActionButtons theme={theme} />
            <ListCurrency gradient={true} />

            <TouchableOpacity onPress={lightTheme}>
              <Text style={{ color: theme.screenText }}>light</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={darkTheme}>
              <Text style={{ color: theme.screenText }}>dark</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('whitelist')}>
              <Text style={{ color: theme.screenText }}>whitelist</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('bankAccount')}>
              <Text style={{ color: theme.screenText }}>Bank Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('currency')}>
              <Text style={{ color: theme.screenText }}>Currency</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <LottieView
        ref={hey}
        source={require('./bodymovin.json')} autoPlay loop
      /> */}

      </ScrollView>
    </Animated.View>
    </View>
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
