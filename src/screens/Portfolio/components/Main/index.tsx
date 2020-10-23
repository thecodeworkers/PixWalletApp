import React, { FC, useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { i18n } from '../../../../utils';
import { bindActionCreators } from 'redux';
import { setTheme, getCurrencies } from '../../../../store/actions';
import { PortfolioChart, UsdCard, UsdLine, DashCard, BtcCard, EthCard, BtcLine, EthLine, DashLine } from '../../../../assets/image/svg';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ActionButtons, CardsRedirect } from './components';
import { ListCurrency } from '../../../../components';
import { CurrencyProps, GeneralProps } from './types';

const Main: FC<GeneralProps> = ({ theming: { theme }, action, navigation, currency }) => {

  // const { currencies } = currency;
  // const [selectedCard, setSelectedCard] = useState(null);
  // const [backgroundCard, setbackgroundCard] = useState([]);
  // const [data, setData] = useState(null);

  // const icons = [
  //   { icon: <UsdCard />, line: <UsdLine /> },
  //   { icon: <BtcCard />, line: <BtcLine /> },
  //   { icon: <EthCard />, line: <EthLine /> },
  //   { icon: <DashCard />, line: <DashLine /> },
  // ];

  const lightTheme = () => action.setTheme('light');
  const darkTheme = () => action.setTheme('dark');

  // const cardSelected = (values: any, index: any) => {
  //   let newArray: any = [];
  //   values.gradients[0] != values.gradients[1] ? newArray = values.gradients.reverse() : newArray = values.gradients;

  //   if (index != selectedCard) {
  //     setSelectedCard(index);
  //     setbackgroundCard(newArray);
  //     setData(values);
  //     return;
  //   }

  //   resetStates();
  // }

  // const resetStates = () => {
  //   setSelectedCard(null);
  //   setbackgroundCard([]);
  //   setData(null);
  // };

  // const addIcons = () => {
  //   currencies.map((res: any, index: number) => {
  //     currencies[index].icon = icons[index].icon;
  //     currencies[index].line = icons[index].line;
  //   });

  //   return currencies;
  // }

  // useEffect(() => {
  //   action.getCurrencies();
  // }, []);

  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
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
            <ActionButtons />
            <ListCurrency gradient={true}/>

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


{/* <View style={{ marginTop: '5%', marginBottom: '10%', alignItems: 'center' }}>
            <Text style={{ color: theme.screenText, fontWeight: 'bold' }}>{i18n.t('portfolio')}</Text>
          </View> */}
