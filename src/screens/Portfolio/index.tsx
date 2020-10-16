import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, requireNativeComponent } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import { bindActionCreators } from 'redux';
import { setTheme } from '../../store/actions';
import { PortfolioChart, UsdCard, UsdLine, Arrows } from '../../assets/image/svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import ActionButtons from './components/action-buttons';
import CardsRedirect from './components/cards-redirect';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Summary } from '../index';

let Main: FC<DefaultProps> = ({ theming: { theme }, action, navigation }: any) => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [backgroundCard, setbackgroundCard] = useState([]);
  const [data, setData] = useState(null);

  const Stack = createStackNavigator();

  const Portfolio = () => (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="summary" component={Summary} />
    </Stack.Navigator>
  )


  const lightTheme = () => {
    action.setTheme('light');
  }

  const darkTheme = () => {
    action.setTheme('dark');
  }

  const cardSelected = (values: any, index: any) => {

    if (index != selectedCard) {
      setSelectedCard(index);
      setbackgroundCard(values.gradient);
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

  const currencies = [
    { name: 'USD', funds: '200', percent: '0.00%', price: '$9,533.75', gradient: ['#45B649', '#45B649', '#DCE35B'], color: '#45B649' },
    { name: 'BTC', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#FF8008', '#FF8008', '#FFC837'], color: '#F7931A' },
    { name: 'ETH', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#304352', '#304352', '#AEAEE6'], color: '#444457' },
    { name: 'DASH', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#03629B', '#03629B', '#008DE4'], color: '#008DE4' }
  ];

  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <ScrollView>
        <View style={[styles.container, { backgroundColor: theme.background }]}>

          <View style={{ marginTop: '5%', marginBottom: '10%', alignItems: 'center' }}>
            <Text style={{ color: theme.screenText, fontWeight: 'bold' }}>{i18n.t('portfolio')}</Text>
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
              currencies.map((res, index) => {
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
                            <Text style={index != selectedCard ? { color: theme.screenText } : { color: '#fff' }}>{res.name}</Text>
                            <Text style={index != selectedCard ? { color: theme.veryLightGrey } : { color: '#fff' }}>{res.funds}</Text>
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
                              <Text style={{ color: theme.veryLightGrey }}>{res.percent}</Text>
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
              })
            }

            {/* <TouchableOpacity onPress={lightTheme}>
            <Text>light</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={darkTheme}>
            <Text>dark</Text>
          </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
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

Main = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Portfolio;


{/* <TouchableOpacity onPress={lightTheme}>
          <Text>light</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={darkTheme}>
          <Text>dark</Text>
        </TouchableOpacity> */}