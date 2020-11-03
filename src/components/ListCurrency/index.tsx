import React, { FC, useState, useEffect, useRef} from 'react';
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

const ListCurrency: FC<GeneralProps> = ({ theming: { theme }, currency, action, gradient = false}) => {

  const fadeAnim = useRef(new Animated.Value(0)).current

  const { currencies } = currency;
  const [selectedCard, setSelectedCard] = useState(null);
  const [backgroundCard, setbackgroundCard] = useState([]);
  const [data, setData] = useState(null);

  const cardSelected = (values: any, index: any) => {
    let newArray: any = [];
    values.gradients[0] != values.gradients[1] ? newArray = values.gradients.reverse() : newArray = values.gradients;

    if (index != selectedCard) {
      animation;
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
  };

  const addIcons = () => {
    currencies.map((res: any, index: number) => {
      currencies[index].icon = icons[index].icon;
      currencies[index].line = icons[index].line;
    });

    return currencies;
  }

  useEffect(() => {
    action.getCurrencies();
  }, []);

  const animation = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true
    }).start();

    console.log('PREESS')
  }

  const animationOut= () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  }

  return (
    <>
      {
        currencies.length ?
          addIcons().map((res: any, index: number) => {
            return (
              <Animated.View  style={{transform: [{scale: fadeAnim}]}}>
              <TouchableOpacity
                // onPress={() => cardSelected(res, index)}
                onPressIn={index == selectedCard ? animation : () => {}}
                // onPressOut={index != selectedCard ? animationOut : () => {}}
                key={index}
                activeOpacity={0.5}>
                <LinearGradient
                  start={{ x: 0, y: 3 }}
                  end={{ x: 1, y: 0 }}
                  colors={index == selectedCard ? backgroundCard : [theme.defaultCard, theme.defaultCard, theme.defaultCard]}
                  style={styles.cardGradient}>

                  <View style={styles.cardLefSide}>
                    <View style={styles.cardLeftContent}>
                      <TouchableOpacity style={{ width: 50, height: 50 }} onPress={gradient ? () => cardSelected(res, index) : () => {null}} activeOpacity={1}>
                        {res.icon}
                      </TouchableOpacity>
                      <View style={{ flexDirection: 'column', marginLeft: '7%' }}>
                        <Text style={index != selectedCard ? { color: theme.screenText } : { color: '#fff' }}>{res.symbol}</Text>
                        <Text style={index != selectedCard ? { color: theme.veryLightGrey } : { color: '#fff' }}>1000</Text>
                      </View>
                    </View>
                  </View>

                  {
                    index != selectedCard
                      ?
                      <>
                        <View style={styles.cardCenter}>
                          <View style={{ width: '80%', height: 50, alignSelf: 'flex-end'}}>
                            {res.line}
                          </View>
                        </View>

                        <View style={{ flex: 0.23, justifyContent: 'center', alignItems: 'flex-end'}}>
                          <Text style={{ color: theme.veryLightGrey }}>0.00%</Text>
                          <Text style={{ color: res.color }}>{res.price}</Text>
                        </View>
                      </>
                      :
                      <>
                        <CardsRedirect data={data} {...{theming:theme}} reset={resetStates}/>
                      </>
                  }
                  <View>
                  </View>
                </LinearGradient>
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

const mapStateToProps = ({ theming, currency }: ReducersProps): ReducersProps => ({ theming, currency})

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    getCurrencies,

  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCurrency);
