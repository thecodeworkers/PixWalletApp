import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { PixLogo, SummaryChart } from '../../../assets/image/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SlideAreaChart } from 'react-native-slide-charts';
import { GeneralProps } from './types';

const filters = [
  { text: '1D' },
  { text: '1S' },
  { text: '1M' },
  { text: '6M' },
  { text: '1A' }
];

const data = [
  { text: 'hello1', x: 0, y: 0, },
  { text: 'hello2', x: 1, y: 3, },
  { text: 'hello3', x: 2, y: 20, },
  { text: 'hello4', x: 3, y: 31, },
  { text: 'hello5', x: 4, y: 42, },
];

const yValues = [
  '100',
  '80',
  '60',
  '40',
  '20',
  '0'
]

const Summary: FC<GeneralProps> = ({ theming: { theme }, currency }) => {

  const { currencies } = currency;
  const screenWidth = Dimensions.get("window").width;
  const [filter, setFilter] = useState(0);

  const selectFilter = (index: any) => {
    index != filter ? setFilter(index) : null;
  }

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <View style={[styles.main, { backgroundColor: theme.background }]}>
        <View style={styles.summaryContent}>
          <View>
            <Text style={[styles.balanceText, { color: theme.veryLightGrey }]}>My balance</Text>
          </View>

          <View style={styles.userContainer}>
            <Text style={[styles.userText, { color: theme.screenText }]}>Arianna Perez</Text>
            <View style={{ width: 30, height: 30 }}>
              <PixLogo color='#2699FB' />
            </View>
          </View>

          <View style={styles.balanceContainer}>
            <Text style={[styles.balance, { color: theme.screenText }]}>$ 3,245.04</Text>
          </View>

          <View style={styles.chartContent}>
            <View style={styles.chartItem}>
              <View style={[styles.chartCards, { backgroundColor: theme.background }]}>

                {
                  currencies.length ?
                    currencies.map((res: any, index: number) => {
                      return (
                        <>
                          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', zIndex: 999 }} onPress={() => console.log('enter')} key={index}>
                            <LinearGradient
                              start={{ x: 0, y: 3 }}
                              end={{ x: 1, y: 0 }}
                              locations={[0, 0.8, 0]}
                              colors={res.gradients.reverse()}
                              style={styles.cardGradient}
                              useAngle={true}
                            />
                            <Text style={{ color: theme.screenText }}>{res.symbol}</Text>
                            <Text style={[styles.percent, { color: theme.veryLightGrey }]}>0,00%</Text>
                          </TouchableOpacity>
                        </>
                      )
                    }) :
                    <View style={styles.message}>
                      <Text style={{ color: theme.screenText }}> No hay monedas disponibles </Text>
                    </View>
                }
              </View>
              <SummaryChart />
            </View>
          </View>

        </View>
        <View style={styles.yRange}>

          <View style={{ position: 'absolute', zIndex: 1, left: '8%', height: '100%', justifyContent: 'space-evenly'}}>
            {
              yValues.map((value: any, index: number) => {
                return <Text key={index} style={styles.axisText}>{value}</Text>
              })
            }
          </View>

          <SlideAreaChart
            data={data}
            chartLineColor='#35A7D6'
            chartLineWidth={4}
            height={200}
            width={screenWidth}
            throttleAndroid={true}
            displayCursor={true}
            yAxisProps={{
              verticalLineWidth: 0,
              axisLabel: true,
              hideMarkers: false,
              axisLabelStyle: {
                fontSize: 13
              }
            }}

            // xAxisProps={{
            //   horizontalLineWidth: 0
            // }}

            style={{ backgroundColor: theme.background, zIndex: -1}}
            cursorProps={{
              cursorBorderColor: 'white',
              cursorColor: '#35A7D6',
              cursorMarkerWidth: 20,
              cursorWidth: 0,
              displayCursor: true,

            }}

            toolTipProps={{
              displayTriangle: false,
              lockTriangleCenter: true,
              style: { elevation: 0 },
              toolTipTextRenderers: [
                ({ selectedBarNumber }: any) => ({
                  text: data[selectedBarNumber].text,
                }),
              ],
            }}
          />
        </View>

        <View style={styles.filterParent}>
          {
            filters.map((res, index) => {
              return (
                <TouchableOpacity
                  style={[styles.filterCard, index != filter ? { backgroundColor: theme.defaultCard } : { backgroundColor: theme.selectedCard }]}
                  onPress={() => selectFilter(index)}
                  key={index} >
                  <Text style={index != filter ? { color: theme.screenText } : { color: 'white' }}>{res.text}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

        <View style={[styles.bigCard, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.row}>
            <Text style={[styles.textBold, { color: theme.screenText }]}>Change </Text>
            <Text style={{ color: theme.veryLightGrey }}>0,00%</Text>
          </View>

          <View style={[styles.row, { marginTop: '5%' }]}>
            <Text style={[styles.textBold, { color: theme.screenText }]}>Portafolio age </Text>
            <Text style={{ color: theme.veryLightGrey }}>0,00%</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

const mapStateToProps = ({ theming, currency }: GeneralProps): GeneralProps => ({ theming, currency })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {

  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);


