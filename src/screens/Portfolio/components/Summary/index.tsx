import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, PixelRatio, Dimensions, ScrollView } from 'react-native';
import { DefaultProps } from '../../../../types';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../../../../components';
import { PixLogo, SummaryChart } from '../../../../assets/image/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SlideAreaChart } from 'react-native-slide-charts'

const Summary = ({ theming: { theme }, action, navigation }: any) => {

  const screenWidth = Dimensions.get("window").width;
  const [filter, setFilter] = useState(0);

  const selectFilter = (index: any) => {
    console.log('enter');
    index != filter ? setFilter(index) : setFilter(0);
  }

  const currencies = [
    { name: 'USD', funds: '200', percent: '0.00%', price: '$9,533.75', gradient: ['#45B649', '#45B649', '#DCE35B'], color: '#45B649' },
    { name: 'BTC', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#FF8008', '#FF8008', '#FFC837'], color: '#F7931A' },
    { name: 'ETH', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#304352', '#304352', '#AEAEE6'], color: '#444457' },
    { name: 'DASH', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#03629B', '#03629B', '#008DE4'], color: '#008DE4' }
  ];

  const filters = [
    { text: '1D' },
    { text: '1S' },
    { text: '1M' },
    { text: '6M' },
    { text: '1A' }
  ]

  const data = [
    { text: 'hello1', x: 0, y: 0, },
    { text: 'hello2', x: 1, y: 3, },
    { text: 'hello3', x: 2, y: 20, },
    { text: 'hello4', x: 3, y: 31, },
    { text: 'hello5', x: 4, y: 42, },
  ]

  return (
    <ScrollView>
      <View style={[styles.main, { backgroundColor: theme.background }]}>
        <View style={{ marginBottom: '10%' }}>
          <Header colorRight={null} colorLeft={theme.defaultActiveIcon} title='summary' route='main' />
        </View>

        <View style={styles.summaryContent}>
          <View>
            <Text style={[styles.balanceText, { color: theme.veryLightGrey }]}>My balance</Text>
          </View>

          <View style={styles.userContainer}>
            <Text style={styles.userText}>Arianna Perez</Text>
            <View style={{ width: 30, height: 30 }}>
              <PixLogo />
            </View>
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>$ 3,245.04</Text>
          </View>

          <View style={styles.chartContent}>
            <View style={{ position: 'relative', height: 93, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <View style={[styles.chartCards, { backgroundColor: theme.background }]}>

                {
                  currencies.map((res, index) => {
                    return (
                      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', zIndex: 999 }} onPress={() => console.log('enter')} key={index}>
                        <LinearGradient
                          start={{ x: 0, y: 3 }}
                          end={{ x: 1, y: 0 }}
                          locations={[0, 0.8, 0]}
                          colors={res.gradient.reverse()}
                          style={styles.cardGradient}
                          useAngle={true}
                        />
                        <Text>{res.name}</Text>
                        <Text style={[styles.percent, { color: theme.veryLightGrey }]}>{res.percent}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
              <SummaryChart />
            </View>
          </View>

        </View>
        <View>
          <SlideAreaChart
            data={data}
            chartLineColor='#35A7D6'
            chartLineWidth={4}
            height={200}
            width={screenWidth}
            hideMarkers={false}
            yAxisProps={{
              verticalLineWidth: 0
            }}

            xAxisProps={{
              horizonralLineWidth: 0
            }}

            style={{ backgroundColor: theme.background }}
            cursorProps={{
              cursorBorderColor: 'white',
              cursorColor: '#35A7D6',
              cursorMarkerWidth: 20,
              cursorWidth: 0,
              displayCursor: true,
            }}
          />
        </View>

        <View style={styles.filterParent}>
          {
            filters.map((res, index) => {
              return (
                <TouchableOpacity
                  style={[styles.filterCard, index != filter ? { backgroundColor: theme.defaultCard } : { backgroundColor: theme.selectedCard }]}
                  onPress={() => console.log(index)} >
                  <Text style={index != filter ? { color: theme.screenText } : { color: 'white' }}>{res.text}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

        <View style={[styles.bigCard, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.row}>
            <Text style={[styles.textBold, {color: theme.screenText}]}>Change </Text>
            <Text style={{color: theme.veryLightGrey }}>0,00%</Text>
          </View>

          <View style={[styles.row, { marginTop: '5%' }]}>
            <Text style={[styles.textBold, {color: theme.screenText}]}>Portafolio age </Text>
            <Text style={{color: theme.veryLightGrey }}>0,00%</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
};

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {

  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);


