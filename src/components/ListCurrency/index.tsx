import React, { FC, useState, useEffect, useRef } from 'react';
import { View, Text, Modal, TouchableHighlight, TouchableOpacity, Animated } from 'react-native';
import { CardsRedirect } from '../../screens/Portfolio/components/Main/components/';
import { UsdCard, BtcCard, EthCard, DashCard, UsdLine, BtcLine, EthLine, DashLine } from '../../assets/image/svg';
import { getCurrencies, selectCurrency } from '../../store/actions';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { GeneralProps, ReducersProps } from './types';

const icons = [
  { icon: <UsdCard />, line: <UsdLine /> },
  { icon: <BtcCard />, line: <BtcLine /> },
  { icon: <EthCard />, line: <EthLine /> },
  { icon: <DashCard />, line: <DashLine /> },
];

const ListCurrency: FC<GeneralProps> = ({ theming: { theme }, currency, action, gradient = false }) => {

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const scaleOut = useRef(new Animated.Value(1)).current;
  const transX = useRef(new Animated.Value(40)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;
  const fadeOut = useRef(new Animated.Value(0)).current;

  const { currencies } = currency;
  const [selectedCard, setSelectedCard] = useState(currencies.length + 1);
  const [backgroundCard, setbackgroundCard] = useState([]);
  const [data, setData] = useState(null);
  const [animationType, setAnimationType] = useState({});

  useEffect(() => {
    action.getCurrencies();
  }, []);



  const cardSelected = (values: any, index: any) => {
    let newArray: any = [];
    values.gradients[0] != values.gradients[1] ? newArray = values.gradients.reverse() : newArray = values.gradients;

    if (index != selectedCard) {
      setSelectedCard(index);
      setbackgroundCard(newArray);
      setData(values);
      animation();
      setAnimationType(scaleAnim);
      return;
    }

    resetStates();
  }

  const resetStates = () => {
    setSelectedCard(currencies.length + 1);
    setbackgroundCard([]);
    setData(null);
    setAnimationType(scaleOut);
    outAnimation();
  };

  const addIcons = () => {
    currencies.map((res: any, index: number) => {
      currencies[index].icon = icons[index].icon;
      currencies[index].line = icons[index].line;
    });

    return currencies;
  };

  const animation = () => {
    Animated.sequence([
      animationProps(0.95, 200, scaleAnim),
      animationProps(1, 200, scaleAnim),
      animationProps(0, 800, transX),
    ]).start();

    Animated.timing(
      fadeIn,
      {
        delay: 400,
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }
    ).start();
  };

  const outAnimation = () => {
    Animated.sequence([
      animationProps(0.95, 200, scaleOut),
      animationProps(1, 200, scaleOut),
    ]).start();
  };

  const animationProps = (value: number, duration: number, name: any, delay: number = 0) => {
    const animation = Animated.timing(
      name,
      {
        delay,
        toValue: value,
        duration,
        useNativeDriver: true
      }
    )

    return animation;
  };

  const getCurrenciesIndex = (values: any) => {

    const hey = currencies[selectedCard];
    const index = currencies.indexOf(hey);
    return index;
  }

  return (
    <>
      {
        currencies.length ?
          addIcons().map((res: any, index: number) => {
            return (
              <Animated.View style={{ transform: [{ scale: Object.keys(animationType).length != 0 && index == getCurrenciesIndex(res) - currencies.length ? animationType : scaleOut }] }} key={index}>
                <TouchableOpacity
                  onPress={() => cardSelected(res, index)}
                  key={index}
                  activeOpacity={1}>
                  <View style={[styles.cardGradient, { backgroundColor: theme.defaultCard }]}>

                    <View style={styles.cardLefSide}>
                      <View style={styles.cardLeftContent}>
                        <TouchableOpacity style={{ width: 50, height: 50 }} onPress={gradient ? () => cardSelected(res, index) : () => { null }} activeOpacity={1}>
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
                            <Animated.View style={{ transform: [{ translateX: selectedCard == index ? transX : null }], opacity: selectedCard == index ? fadeIn : null }}>
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

  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCurrency);

  // const translateAnimation = () => {
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
