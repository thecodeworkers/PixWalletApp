import React, { FC, useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { PlusIcon } from '../../../assets/image/svg/icons';
import { SearchInput } from '../../../components';
import { DefaultProps } from '../../../types';
import { WhitelistItem } from './components';
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
]

const Main: FC<any> = ({ theming: { theme }, navigation }) => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    return () => setAddress('');
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
        {
          address ? (
            <View style={{ flex: 0.2, flexDirection: 'row', marginHorizontal: '10%' }}>
              <Text>Sent to</Text>
              <Text style={{ marginLeft: 20 }}>1qwteydhfa132gswrdgsfqtt...</Text>
            </View>
          ) : null
        }
        <TouchableOpacity style={{ flex: 0.3, flexDirection: 'row', marginHorizontal: '10%' }} onPress={() => navigation.navigate('createWhitelist')}>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 30, height: 30 }}>
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
      <View style={styles.listContainer}>
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
