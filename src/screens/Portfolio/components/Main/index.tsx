import React, { FC, useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { i18n } from '../../../../utils';
import { bindActionCreators } from 'redux';
import { setTheme, getCurrencies } from '../../../../store/actions';
import { PortfolioChart, UsdCard, UsdLine } from '../../../../assets/image/svg';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ActionButtons, CardsRedirect } from './components';
import { Header } from '../../../../components';
import { CurrencyProps, GeneralProps } from './types';

const Main: FC<GeneralProps> = ({ theming: { theme }, action, navigation, currency }) => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [backgroundCard, setbackgroundCard] = useState([]);
  const [data, setData] = useState(null);

  const { currencies } = currency;

  const lightTheme = () => action.setTheme('light');
  const darkTheme = () => action.setTheme('dark');

  const cardSelected = (values: any, index: any) => {
    let newArray: any = [];
    values.gradients[0] != values.gradients[1] ? newArray = values.gradients.reverse() : newArray = values.gradients;

    if (index != selectedCard) {
      setSelectedCard(index);
      setbackgroundCard(newArray);
      setData(values);
      return;
    }
    resetStates();
  }

  const resetStates = () => {
    setSelectedCard(null);
    setbackgroundCard([]);
    setData(null);
  }

  useEffect(() => {
    action.getCurrencies();
  }, [])

  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <ScrollView>
        <View style={[styles.container, { backgroundColor: theme.background }]}>

        <View style={{marginBottom: '6%'}}>
         <Header colorRight={null} colorLeft={null} title='portfolio' route='home' />
        </View>

          <View style={styles.chartParent}>
            <TouchableOpacity style={[styles.portfolioCard, { backgroundColor: theme.bigCard }]} activeOpacity={0.7} onPress={() => navigation.navigate('summary')}>
              <Text style={[styles.estimatedText, { color: theme.veryLightGrey }]}>Estimated value</Text>
              <Text style={[styles.fundsText, { color: theme.screenText }]}>1.123,32$</Text>
            </TouchableOpacity>
            <PortfolioChart />
          </View>

          <View style={styles.contentParent}>
            <ActionButtons />

            {
              currencies.length ?
              currencies.map((res: any, index: number) => {
                return (
                  <TouchableOpacity
                    onPress={() => cardSelected(res, index)}
                    key={index}
                    activeOpacity={0.5}>
                    <LinearGradient
                      start={{ x: 0, y: 3 }}
                      end={{ x: 1, y: 0 }}
                      colors={index == selectedCard ? backgroundCard : [theme.defaultCard, theme.defaultCard, theme.defaultCard]}
                      style={styles.cardGradient}>

                      <View style={{ flex: 0.33, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                          <View style={{ width: 50, height: 50 }}>
                            <UsdCard />
                          </View>
                          <View style={{ flexDirection: 'column', marginLeft: '5%' }}>
                            <Text style={index != selectedCard ? { color: theme.screenText } : { color: '#fff' }}>{res.symbol}</Text>
                            <Text style={index != selectedCard ? { color: theme.veryLightGrey } : { color: '#fff' }}>1000</Text>
                          </View>
                        </View>
                      </View>

                      {
                        index != selectedCard
                          ?
                          <>
                            <View style={{ flex: 0.33, alignItems: 'flex-end' }}>
                              <View style={{ width: '90%', height: 50 }}>
                                <UsdLine />
                              </View>
                            </View>

                            <View style={{ flex: 0.33, justifyContent: 'center', alignItems: 'flex-end' }}>
                              <Text style={{ color: theme.veryLightGrey }}>0.00%</Text>
                              <Text style={{ color: res.color }}>{res.price}</Text>
                            </View>
                          </>
                          :
                          <>
                            <CardsRedirect backgroundCard={backgroundCard} data={data} />
                          </>
                      }

                      <View>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }) : null
            }

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

const mapStateToProps = ({ theming, currency}: CurrencyProps): CurrencyProps => ({ theming, currency})

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
