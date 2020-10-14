import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import dark from '../../assets/colors/dark';
import light from '../../assets/colors/light';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import { bindActionCreators } from 'redux';
import { setTheme } from '../../store/actions';
import { PortfolioChart, UsdCard, UsdLine } from '../../assets/image/svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Portfolio: FC<DefaultProps> = ({ theming: { theme }, action }: any) => {

  const [ selectedCard, setSelectedCard ] = useState(null);
  const [ backgroundCard, setbackgroundCard ] = useState(theme.background);

  const lightTheme = () => {
    action.setTheme('light');
  }

  const darkTheme = () => {
    action.setTheme('dark');
  }

  const cardSelected = (values: any) => {
    console.log(values)
    setbackgroundCard(values.background);
  }

  const currencies = [
    { name: 'USD', funds: '200', percent: '0.00%', price: '$9,533.75', background: 'green' },
    { name: 'BTC', funds: '300', percent: '0.00%', price: '$9,533.75', background: 'orange' }
  ]

  return (
    <>
      {/* <StatusBar barStyle={theme.statusBar} /> */}
      <View style={[styles.container, { backgroundColor: theme.background }]}>

        <View style={{ marginTop: '5%', marginBottom: '10%', alignItems: 'center' }}>
          <Text style={{ color: theme.screenText, fontWeight: 'bold' }}>{i18n.t('portfolio')}</Text>
        </View>
        <View style={styles.chartParent}>

          <TouchableOpacity style={[styles.portfolioCard, { backgroundColor: theme.background }]}>
            <Text style={[styles.estimatedText, { color: theme.veryLightGrey }]}>Estimated value</Text>
            <Text style={[styles.fundsText, { color: theme.screenText }]}>1.123,32$</Text>
          </TouchableOpacity>
          <PortfolioChart />
        </View>

        <View style={styles.contentParent}>
          <View style={styles.actionButtons}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#F5F5F5', '#F5F5F5', '#FFFFFF']}
              style={styles.linearGradient}>

              <Icon name="trending-flat" color={theme.defaultActiveIcon} size={32} style={styles.leftArrow} />
            </LinearGradient>

            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#F5F5F5', '#F5F5F5', '#FFFFFF']}
              style={styles.linearGradient}>
              <Icon name="compare-arrows" color={theme.defaultActiveIcon} size={32} />
            </LinearGradient>

            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#F5F5F5', '#F5F5F5', '#FFFFFF']}
              style={styles.linearGradient}>
              <Icon name="trending-flat" color={theme.defaultActiveIcon} size={32} style={styles.rightArrow} />
            </LinearGradient>
          </View>

          {
            currencies.map((res, index)=> {
              return (
                <TouchableOpacity 
                  style={[styles.currencyCard, { backgroundColor: backgroundCard}]} 
                  onPress={() => cardSelected(res)} 
                  key={index}>

                  <View style={{ flex: 0.33, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: 50, height: 50 }}>
                        <UsdCard />
                      </View>
                      <View style={{ flexDirection: 'column', marginLeft: '5%' }}>
                        <Text style={{ color: theme.screenText }}>{res.name}</Text>
                        <Text style={{ color: theme.veryLightGrey }}>{res.funds}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={{ flex: 0.33, alignItems: 'flex-end' }}>
                    <View style={{ width: '90%', height: 50 }}>
                      <UsdLine />
                    </View>
                  </View>

                  <View style={{ flex: 0.33, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ color: theme.veryLightGrey }}>{res.percent}</Text>
                    <Text style={{ color: theme.screenText }}>{res.price}</Text>
                  </View>

                  <View>
                  </View>
                </TouchableOpacity>
              );
            })
          }

          <TouchableOpacity onPress={lightTheme}>
            <Text>light</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={darkTheme}>
            <Text>dark</Text>
          </TouchableOpacity>
        </View>
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


{/* <TouchableOpacity onPress={lightTheme}>
          <Text>light</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={darkTheme}>
          <Text>dark</Text>
        </TouchableOpacity> */}