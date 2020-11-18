import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { SlideAreaChart } from 'react-native-slide-charts';
import { BtcSquare, DiagonalUp, DiagonalDown, Time } from '../../../assets/image/svg';
import { Separator, ActivityCard } from '../../../components'
import { connect } from 'react-redux';
import styles from './styles';
import { DefaultProps } from '../../../types';
import { i18n } from '../../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { GeneralProps } from './types';

const filters = [
  { text: '1D' },
  { text: '1S' },
  { text: '1M' },
  { text: '6M' },
  { text: '1A' }
];

const data = [
  { text: 'JAN', x: 0, y: 16, },
  { text: 'FEB', x: 1, y: 3, },
  { text: 'MAR', x: 2, y: 20, },
  { text: 'APR', x: 3, y: 31, },
  { text: 'MAY', x: 4, y: 42, },
  { text: 'JUN', x: 5, y: 49, },
  { text: 'JUL', x: 6, y: 56, },
  { text: 'AUG', x: 7, y: 62, },
  { text: 'SEP', x: 8, y: 70, },
  { text: 'OCT', x: 9, y: 80, },
  { text: 'NOV', x: 10, y: 93, },
  { text: 'DEC', x: 11, y: 102, }
];

const yValues = [
  '100',
  '80',
  '60',
  '40',
  '20',
  '0'
];

const screenWidth = Dimensions.get('window').width;

const CurrencyActivity: FC<GeneralProps> = ({ theming: { theme }, navigation, selectedCurrency }) => {

  const [filter, setFilter] = useState(4);

  const { currency } = selectedCurrency;

  const selectFilter = (index: any) => {
    index != filter ? setFilter(index) : null;
  };

  const redirection = (type: string) => {
    if (type == 'withdraw' && currency.type == 'FIAT' || type == 'deposit' && currency.type == 'FIAT') navigation.navigate('transactionType');
    if (type == 'withdraw' && currency.type == 'CRYPTO') navigation.navigate('withdrawCryptoMain');
    if (type == 'deposit' && currency.type == 'CRYPTO') navigation.navigate('receive');
  };

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.icon}>
          <ActivityCard name={currency.symbol} />
        </View>

        <View style={styles.balancesParent}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
            <View>
              <Text style={[styles.boldText, { color: theme.screenText }]}>6.2542</Text>
            </View>

            <View>
              <Text style={{ color: theme.screenText, marginBottom: '10%' }}>{currency?.symbol}</Text>
            </View>
          </View>

          {
            currency?.symbol != 'USD' && <Text style={[styles.balanceUsd, { color: theme.veryLightGrey }]}>$ 3,245.04</Text>
          }

        </View>

        <View style={styles.buttonsParent}>
          <TouchableOpacity style={[styles.buttons, { backgroundColor: theme.defaultCard }]} activeOpacity={1} onPress={() => redirection('deposit')}>
            <View style={styles.iconButton}>
              <DiagonalDown color={currency?.color} />
            </View>
            <Text style={{ color: theme.screenText }}>{i18n.t('deposit')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttons, { backgroundColor: theme.defaultCard }]} activeOpacity={1} onPress={() => redirection('withdraw')}>
            <View style={styles.iconButton}>
              <DiagonalUp color={currency?.color} />
            </View>
            <Text style={{ color: theme.screenText }}>{i18n.t('withdraw')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filterParent}>
          {
            filters.map((res, index) => {
              return (
                <TouchableOpacity
                  style={[styles.filterCard, index != filter ? { backgroundColor: theme.defaultCard } : { backgroundColor: currency?.color }]}
                  onPress={() => selectFilter(index)}
                  key={index} >
                  <Text style={index != filter ? { color: theme.screenText } : { color: 'white' }}>{res.text}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>


        <View style={styles.yRange}>
          <View style={styles.chartParent}>
            {
              yValues.map((value: any, index: number) => {
                return <Text key={index} style={[styles.axisText, { color: theme.screenText }]}>{value}</Text>
              })
            }
          </View>

          <SlideAreaChart
            data={data}
            fillColor='rgba(0,0,0,0)'
            chartLineColor={currency?.color}
            chartLineWidth={4}
            height={200}
            width={screenWidth}
            throttleAndroid={true}
            displayCursor={true}
            axisHeight={16}
            yAxisProps={{
              verticalLineWidth: 0,
              horizontalLineWidth: 0,
              axisLabel: true,
              hideMarkers: false,
            }}

            xAxisProps={{
              horizontalLineWidth: 1,
              // axisMarkerLabels: data.map(item => item.text),
              adjustForSpecialMarkers: true,
              axisLabelAlignment: 'center',
              axisLabelStyle: { color: theme.screenText, fontWeight: 'bold', fontSize: 12 }
            }}

            style={{ backgroundColor: 'rgba(0,0,0,0)', zIndex: 2 }}
            cursorProps={{
              cursorBorderColor: 'white',
              cursorColor: currency?.color,
              cursorMarkerWidth: 20,
              cursorWidth: 0,
              displayCursor: true
            }}

            toolTipProps={{
              displayTriangle: true,
              lockTriangleCenter: true,
              style: { elevation: 0, zIndex: 999, bottom: 0, marginBottom: 0 },
              toolTipTextRenderers: [
                ({ selectedBarNumber }: any) => ({
                  text: data[selectedBarNumber].text,
                }),
              ],
            }}
          />
        </View>

        <View style={styles.xLabels}>
          {
            data.map((res: any, index: number) => {
              return <Text key={index} style={[styles.labelText, { color: theme.screenText }]}>{res.text}</Text>
            })
          }
        </View>

        <View style={styles.cardActivity}>
          <Text style={[styles.transactions, { color: theme.screenText }]}>{i18n.t('your_transactions')}</Text>
          <View style={[styles.line, { backgroundColor: theme.lineGray }]}></View>
        </View>

        <View style={styles.listItem}>
          <View style={{ flex: 0.50 }}>
            <Text style={{ color: theme.screenText, fontSize: 14 }}>Retiraste $8,978.99</Text>
            <Text style={[styles.grayText, { color: theme.pinkSwan }]}>from Giberlara</Text>
          </View>

          <View style={{ flex: 0.22, alignItems: 'flex-end' }}>
            <View style={{ width: 22, height: 22 }}>
              <DiagonalUp />
            </View>
          </View>
          <View style={{ flex: 0.28, alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 16, height: 16, marginRight: '4%' }}>
                <Time />
              </View>
              <Text style={[styles.rightText, { color: theme.screenText }]}>Now</Text>
            </View>
            <Text style={[styles.rightText, { color: theme.screenText }]}>$ 4,232.83</Text>
          </View>
        </View>
        <View style={{ alignSelf: 'center', width: '90%' }}>
          <Separator color={theme.whirspersInactive} width={1} />
        </View>
        <View style={styles.listItem}>
          <View style={{ flex: 0.50 }}>
            <Text style={{ color: theme.screenText }}>Depositaste $8,978.99</Text>
            <Text style={[styles.grayText, { color: theme.pinkSwan }]}>from Giberlara</Text>
          </View>

          <View style={{ flex: 0.22, alignItems: 'flex-end' }}>
            <View style={{ width: 22, height: 22 }}>
              <DiagonalDown />
            </View>
          </View>
          <View style={{ flex: 0.28, alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 16, height: 16, marginRight: '4%' }}>
                <Time />
              </View>
              <Text style={[styles.rightText, { color: theme.screenText }]}>Now</Text>
            </View>
            <Text style={[styles.rightText, { color: theme.screenText }]}>$ 4,232.83</Text>
          </View>
        </View>
        <View style={{ alignSelf: 'center', width: '90%' }}>
          <Separator color={theme.whirspersInactive} width={1} />
        </View>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ theming, selectedCurrency }: GeneralProps): GeneralProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(CurrencyActivity);
