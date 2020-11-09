import React, { FC, useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { generalShadow } from '../../../assets/styles';
import { PlusIcon } from '../../../assets/image/svg/icons';
import { SearchInput } from '../../../components';
import { DefaultProps } from '../../../types';
import { WhitelistItem } from './components';
import { resizeInitialFlex, resizeFinalFlex } from './functions';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const DATA = [
  {
    id: '1',
    name: 'Gabriel',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '2',
    name: 'Luis',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '3',
    name: 'Camila',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '4',
    name: 'Ana',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '5',
    name: 'Camila',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '6',
    name: 'Ana',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '7',
    name: 'Camila',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '8',
    name: 'Ana',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '9',
    name: 'Camila',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '10',
    name: 'Ana',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
]

const Main: FC<any> = ({ theming: { theme }, navigation }) => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    return () => setAddress('');
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: resizeInitialFlex(), justifyContent: 'flex-end' }}>
        {
          address ? (
            <View style={{ flex: 0.2, flexDirection: 'row', marginHorizontal: '10%' }}>
              <Text>Sent to</Text>
              <Text style={{ marginLeft: 17, color: '#C9C9C9' }}>1qwteydhfa132gswrdgsfqtt...</Text>
            </View>
          ) : null
        }
        <TouchableOpacity style={{ flex: 0.3, flexDirection: 'row', marginHorizontal: '6%' }} onPress={() => navigation.navigate('createWhitelist')} activeOpacity={0.8}>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
              backgroundColor: '#FFFFFF',
              width: 45,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              ...generalShadow()
             }}>
              <View style={{ width: 25, height: 25 }}>
                <PlusIcon/>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.7, justifyContent: 'center' }}>
            <Text style={{ color: theme.screenText, fontSize: 13 }}>Add new account</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: address ? 0.4 : 0.5, marginHorizontal: '10%', justifyContent: 'flex-end' }}>
          <SearchInput theme={theme} />
        </View>
      </View>
      <View style={{ flex: resizeFinalFlex() }}>
        <FlatList
          data={DATA}
          renderItem={props => <WhitelistItem theme={theme} {...props} onPress={index  => setAddress(DATA[index].address)} />}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Main);
