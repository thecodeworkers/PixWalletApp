import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, PixelRatio } from 'react-native';
import { DefaultProps } from '../../../../types';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../../../../components';

import { PixLogo, SummaryChart } from '../../../../assets/image/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Summary = ({ theming: { theme }, action, navigation }: any) => {

  const currencies = [
    { name: 'USD', funds: '200', percent: '0.00%', price: '$9,533.75', gradient: ['#45B649', '#45B649', '#DCE35B'], color: '#45B649' },
    { name: 'BTC', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#FF8008', '#FF8008', '#FFC837'], color: '#F7931A' },
    { name: 'ETH', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#304352', '#304352', '#AEAEE6'], color: '#444457' },
    { name: 'DASH', funds: '300', percent: '0.00%', price: '$9,533.75', gradient: ['#03629B', '#03629B', '#008DE4'], color: '#008DE4' }
  ];

  return (
    <View style={[styles.main, { backgroundColor: theme.background }]}>
      <View style={{ marginBottom: '10%' }}>
        <Header colorRight={null} colorLeft={theme.defaultActiveIcon} title='summary' route='main' />
      </View>

      <View style={styles.summaryContent}>
        <View>
          <Text style={[styles.balanceText, {color: theme.veryLightGrey}]}>My balance</Text>
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
          <View style={[styles.chartCards, { backgroundColor: theme.background }]}>

            {
              currencies.map(res => {

                return (
                  <View style={styles.smallCard}>
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
                  </View>

                )

              })

            }

            {/* <View style={styles.smallCard}>
              <LinearGradient
                start={{ x: 0, y: 3 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.8, 0]}
                colors={['#45B649', '#45B649', '#DCE35B'].reverse()}
                style={styles.cardGradient}
                useAngle={true}
              />

              <Text>USD</Text>
              <Text style={[styles.percent, { color: theme.veryLightGrey }]}>0,00%</Text>
            </View> */}
            {/* <View>
              <Text>BTC</Text>
            </View>
            <View>
              <Text>ETH</Text>
            </View>
            <View>
              <Text>DASH</Text>
            </View> */}
          </View>
          <SummaryChart />
        </View>
      </View>
    </View>
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


