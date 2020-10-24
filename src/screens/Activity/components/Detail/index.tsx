import React, { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { EthCard } from '../../../../assets/image/svg';
import { DefaultProps } from '../../../../types';
import styles from './styles';

const Detail: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{
        backgroundColor: '#FFFFFF',
        height: 110,
        marginTop: '10%',
        marginBottom: '8%',
        marginHorizontal: '7%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <View style={{ flex: 0.43, justifyContent: 'center' }}>
          <View style={{ width: 70, height: 70 }}>
            <EthCard/>
          </View>
        </View>
        <View style={{ flex: 0.43, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text>Enviando</Text>
          <Text>4.7 ETH</Text>
          <Text>-$1,132.00</Text>
        </View>
      </View>
      <View style={{ height: 89, marginBottom: '8%', marginHorizontal: '11%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{
          backgroundColor: '#FFFFFF',
          flex: 0.45,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>Comisión</Text>
          <Text>4.7 ETH</Text>
          <Text>-$1,132.00</Text>
        </View>
        <View style={{
          backgroundColor: '#FFFFFF',
          flex: 0.45,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>May,12 2020</Text>
          <Text>4:18 pm</Text>
        </View>
      </View>
      <View style={{
        backgroundColor: '#FFFFFF',
        height: 110,
        marginBottom: '8%',
        marginHorizontal: '7%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Nota personal</Text>
        <Text>Add note</Text>
      </View>
      <View style={{
        backgroundColor: '#FFFFFF',
        height: 73,
        marginBottom: '8%',
        marginHorizontal: '7%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Enviado</Text>
        <Text>1qwteydhfa132gswrdgsfqtteypmnbvxc129sfarwt</Text>
      </View>
      <View style={{
        backgroundColor: '#FFFFFF',
        height: 73,
        marginBottom: '8%',
        marginHorizontal: '7%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Transaction ID</Text>
        <Text>1qwteydhfa132gswrdgsfqtteypmnbvxc129sfarwt</Text>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Detail);
