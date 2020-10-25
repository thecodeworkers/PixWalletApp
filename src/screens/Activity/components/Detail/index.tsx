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
        <View style={{ flex: 0.40, justifyContent: 'center' }}>
          <View style={{ width: 60, height: 60 }}>
            <EthCard/>
          </View>
        </View>
        <View style={{ flex: 0.40, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text style={{ color: '#444457', fontSize: 13 }}>Enviando</Text>
          <Text style={{ color: '#444457', fontSize: 15 }}>4.7 ETH</Text>
          <Text style={{ color: '#C9C9C9', fontSize: 17 }}>-$1,132.00</Text>
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
          <Text style={{ color: '#21212A', fontSize: 14, marginBottom: 5 }}>Comisión</Text>
          <Text style={{ color: '#21212A', fontSize: 14 }}>4.7 ETH</Text>
          <Text style={{ color: '#C9C9C9', fontSize: 10 }}>-$1,132.00</Text>
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
          <Text style={{ color: '#B7B7B7', fontSize: 10 }}>May,12 2020</Text>
          <Text style={{ color: '#B7B7B7', fontSize: 10 }}>4:18 pm</Text>
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
        <Text style={{ color: '#21212A', fontSize: 15, marginBottom: 5 }}>Nota personal</Text>
        <Text style={{ color: '#B7B7B7', fontSize: 12 }}>Add note</Text>
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
        <Text style={{ color: '#21212A', fontSize: 15, marginBottom: 5 }}>Enviado</Text>
        <Text style={{ color: '#B7B7B7', fontSize: 12, width: 195, textAlign: 'center' }}>1qwteydhfa132gswrdgsfqtteypmnbvxc129sfarwt</Text>
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
        <Text style={{ color: '#21212A', fontSize: 15, marginBottom: 5 }}>Transaction ID</Text>
        <Text style={{ color: '#B7B7B7', fontSize: 12, width: 195, textAlign: 'center' }}>1qwteydhfa132gswrdgsfqtteypmnbvxc129sfarwt</Text>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Detail);
