import React, { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { ActivityProps, StateProps } from './types';
import { Separator } from '../../../../components';
import { ActivityFilter } from './components';
import { BtcCard } from '../../../../assets/image/svg';
import styles from './styles';

const Main: FC<ActivityProps> = ({ theming: { theme }}) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: 0.1, justifyContent: 'flex-end', marginBottom: '2%' }}>
        <ActivityFilter theme={theme} />
      </View>
      <Separator width={4} color={'#35A7D6'} />


      <View style={{ flex: 0.9 }}>
        <ScrollView>
          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginTop: '9%', marginBottom: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>

          <View style={{ height: 50, flexDirection: 'row', marginHorizontal: '5%', marginVertical: '6%' }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
              <View style={{ width: 50, height: 50 }}>
                <BtcCard/>
              </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14 }}>Retiraste  $8,978.99</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>from Andrea  *********9898</Text>
              <Text style={{ fontSize: 11, color: '#B7B7B7' }}>May,12 2020</Text>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text></Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#C9C9C9' }}>-$8,978.99</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F7931A' }}>9.1 BTC</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: '5%' }}>
            <Separator color="#EDEDED" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: StateProps): StateProps => ({ theming })

export default connect(mapStateToProps)(Main);
