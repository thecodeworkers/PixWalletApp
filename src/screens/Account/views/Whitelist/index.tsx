import React, { FC, useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem, CreateAccountButton } from '../../components';
import { SearchInput } from '../../../../components';
import { DefaultProps } from '../../../../types';
import { connect } from 'react-redux';
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
];

const Whitelist: FC<any> = ({ theming: { theme } }) => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    return () => setAddress('');
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.topContainer}>
        {
          address ? (
            <View style={styles.addressContainer}>
              <Text style={{ color: theme.screenText }}>Sent to</Text>
              <Text style={styles.addressSelected}>1qwteydhfa132gswrdgsfqtt...</Text>
            </View>
          ) : null
        }
        <View style={styles.buttonContainer}>
          <CreateAccountButton theme={theme}/>
        </View>
        <View style={[{ flex: address ? 0.4 : 0.5 }, styles.searchContainer]}>
          <SearchInput theme={theme} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          style={{ marginTop: '10%' }}
          data={DATA}
          renderItem={props => <ListItem theme={theme} {...props} onPress={index  => setAddress(DATA[index].address)} />}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Whitelist);
