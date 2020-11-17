import React, { FC, useState, useEffect, useRef } from 'react';
import { View, Text, Modal, TouchableHighlight, TouchableOpacity, Animated } from 'react-native';
import { CardsRedirect } from '../../screens/Portfolio/Main/components/';
import { UsdCard, BtcCard, EthCard, DashCard, UsdLine, BtcLine, EthLine, DashLine } from '../../assets/image/svg';
import { getCurrencies, selectCurrency } from '../../store/actions';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import { animationProps } from '../../utils/common';
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GeneralProps, ReducersProps } from './types';
import { useNavigation } from '@react-navigation/native';

const icons = [
  { icon: <UsdCard />, line: <UsdLine /> },
  { icon: <BtcCard />, line: <BtcLine /> },
  { icon: <EthCard />, line: <EthLine /> },
  { icon: <DashCard />, line: <DashLine /> },
];

const currency = {
  currencies: [
    {
       "active":true,
       "color":"#45B649",
       "gradients":["#45B649", "#45B649", "#DCE35B"],
       "icon":<UsdCard/>,
       "id":"5f8e3d112c3795c5ce88991b",
       "line":<UsdLine/>,
       "name":"Dollar",
       "price":1,
       "symbol":"USD",
       "type":"FIAT"
    },
    {
       "active":true,
       "color":"#F7931A",
       "gradients":["#FF8008", "#FF8008", "#FFC837"],
       "icon":<BtcCard/>,
       "id":"5f8e3d8b2c3795c5ce88991c",
       "line":<UsdLine/>,
       "name":"Bitcoin",
       "price":1,
       "symbol":"BTC",
       "type":"CRYPTO"
    },
    {
       "active":true,
       "color":"#444457",
       "gradients": ["#304352", "#304352", "#AEAEE6"],
       "icon":<EthCard/>,
       "id":"5f8e3dc12c3795c5ce88991d",
       "line":<EthLine />,
       "name":"Ethereum",
       "price":1,
       "symbol":"ETH",
       "type":"CRYPTO"
    },
    {
       "active":true,
       "color":"#008DE4",
       "gradients":["#03629B", "#03629B", "#008DE4"],
       "icon":<DashCard/>,
       "id":"5f8e3dfd2c3795c5ce88991e",
       "line":<DashLine/>,
       "name":"Dash",
       "price":1,
       "symbol":"DASH",
       "type":"CRYPTO"
    }
 ]
};

const ListCurrency: FC<GeneralProps> = ({ theming: { theme }, action, gradient = false, route }) => {

  const navigation = useNavigation();

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const scaleOut = useRef(new Animated.Value(1)).current;
  const transX = useRef(new Animated.Value(15)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;

  // const { currencies } = currency;
  const [selectedCard, setSelectedCard] = useState(null);
  const [backgroundCard, setbackgroundCard] = useState([]);
  const [data, setData] = useState(null);
  const [animationType, setAnimationType] = useState({});
  const [endIn, setEndIn] = useState(null);

  // useEffect(() => {
  //   action.getCurrencies();
  // }, []);

  const cardSelected = (values: any, index: any) => {
    let newArray: any = [];
    values.gradients[0] != values.gradients[1] ? newArray = values.gradients.reverse() : newArray = values.gradients;

    if (index != selectedCard) {
      setSelectedCard(index);
      setbackgroundCard(newArray);
      setData(values);
      restoreRedirect();
      setAnimationType(scaleAnim);
      return;
    }
    resetStates();
  };

  const resetStates = () => {
    outAnimation();
    setAnimationType(scaleOut);
    setTimeout(() => {
      setSelectedCard(null);
      setData(null);
      setbackgroundCard([]);
    }, 600);
  };

  // const addIcons = () => {
  //   currencies.map((res: any, index: number) => {
  //     currencies[index].icon = icons[index].icon;
  //     currencies[index].line = icons[index].line;
  //   });

  //   return currencies;
  // };

  const animation = () => {
    Animated.sequence([
      animationProps(0.95, 200, scaleAnim),
      animationProps(1, 200, scaleAnim),
      animationProps(0, 300, transX),
    ]).start();

    animationProps(1, 600, fadeIn, 300).start();
  };

  const outAnimation = () => {
    Animated.sequence([
      animationProps(0.95, 200, scaleOut),
      animationProps(1, 200, scaleOut),
      animationProps(15, 300, transX),
    ]).start();

    animationProps(0, 600, fadeIn, 300).start();
  };

  const restoreRedirect = () => {
    Animated.sequence([
      animationProps(0, 3, fadeIn),
      animationProps(5, 1, transX)
    ]).start(() => animation());
  };

  const redirect = (data: any) => {

    console.log(route);
    if(route == 'withdraw' && data.type == 'FIAT' || route == 'deposit' && data.type == 'FIAT') navigation.navigate('transactionType');
    if(route == 'withdraw' && data.type == 'CRYPTO') navigation.navigate('withdrawCryptoMain');
    if(route == 'deposit' && data.type == 'CRYPTO') navigation.navigate('receive');

    action.selectCurrency(buildObject(data));
  };

  const activityNavigate = (data: any) => {
    action.selectCurrency(buildObject(data));
    navigation.navigate('currencyActivity', {name: data.name});
  };

  const buildObject = (data: any) => {

    const currency = {
      symbol: data.symbol,
      type: data.type,
      color: data.color,
      transactionType: route
    };

    return currency;
  };

  return (
    <>
      {
        currency.currencies.length ?
        currency.currencies.map((res: any, index: number) => {
            return (
              <Animated.View style={{ transform: [{ scale: index == selectedCard ? animationType : 1 }] }} key={index}>
                <TouchableOpacity
                  onPress={gradient ? () => cardSelected(res, index) : () => redirect(res)}
                  key={index}
                  activeOpacity={1}>
                  <View style={[styles.cardGradient, { backgroundColor: theme.defaultCard }]}>

                    <View style={styles.cardLefSide}>
                      <View style={styles.cardLeftContent}>
                        <TouchableOpacity style={{ width: 50, height: 50 }} onPress={() => activityNavigate(res)} activeOpacity={1}>
                          {res.icon}
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column', marginLeft: '7%' }}>
                          <Text style={{ color: theme.screenText }}>{res.symbol}</Text>
                          <Text style={{ color: theme.veryLightGrey }}>1000</Text>
                        </View>
                      </View>
                    </View>

                    {
                      index != selectedCard
                        ?
                        <>
                          <View style={styles.cardCenter}>
                            <View style={{ width: '80%', height: 50, alignSelf: 'flex-end' }}>
                              {res.line}
                            </View>
                          </View>

                          <View style={{ flex: 0.23, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ color: theme.veryLightGrey }}>0.00%</Text>
                            <Text style={{ color: res.color }}>{res.price}</Text>
                          </View>
                        </>
                        :
                        <>
                          <View style={{ flex: 0.66, justifyContent: 'center' }}>
                            <Animated.View style={{ transform: [{ translateX: selectedCard == index ? transX : 200 }], opacity: selectedCard == index ? fadeIn : 0.6 }}>
                              <CardsRedirect data={data} reset={resetStates} />
                            </Animated.View>
                          </View>
                        </>
                    }
                    <View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          }) :
          <View style={{ alignItems: 'center' }}>
            <Text> No hay monedas disponibles </Text>
          </View>
      }
    </>
  )
}

const mapStateToProps = ({ theming, currency }: ReducersProps): ReducersProps => ({ theming, currency })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    getCurrencies,
    selectCurrency
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCurrency);

  // const translateAnimation = () => {
    // currencyActivity
  //   Animated.timing(
  //     transX,
  //     {
  //       toValue: 0,
  //       duration: 1000,
  //       useNativeDriver: true
  //     }
  //   ).start()

  //   Animated.timing(
  //     fadeIn,
  //     {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }
  //   ).start()
  // };


  //DOLAR
  //["#45B649", "#45B649", "#DCE35B"]

  //ETH
  //["#304352", "#304352", "#AEAEE6"]

  //BTC
  //["#FF8008", "#FF8008", "#FFC837"]

  //DASH
  //["#03629B", "#03629B", "#008DE4"]


  //Cambiar currency.currencies por la función add icons
