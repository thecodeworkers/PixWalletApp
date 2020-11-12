import React, { FC } from 'react';
import { View, FlatList } from 'react-native';
import { CreateAccountButton, ListItem } from '../../components';
import { DefaultProps } from '../../../../types';
import { connect } from 'react-redux';
import styles from './styles';

const DATA = [
  {
    id: '1',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '2',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '3',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '4',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '5',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '6',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '7',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '8',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  },
  {
    id: '9',
    name: 'Chase account',
    address: '1qwteydhfa132gswrdgsfqtt...'
  }
];

const BankAccount: FC<any> = ({ theming: { theme } }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        style={{ marginTop: '5%' }}
        data={DATA}
        renderItem={props => <ListItem theme={theme} {...props} showTopLine={false} onPress={index  => console.log(index)} />}
        keyExtractor={(item: any) => item.id}
        ListFooterComponent={() => (
          <CreateAccountButton theme={theme}/>
        )}
        ListFooterComponentStyle={{
          marginVertical: '4%'
        }}
      />
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(BankAccount);
