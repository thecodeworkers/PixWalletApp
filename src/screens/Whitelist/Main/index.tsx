import React, { FC } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Separator } from '../../../components';
import { DefaultProps } from '../../../types';
import { WhitelistItem } from './components';
import styles from './styles';

const DATA = [
  { id: '2' },
  { id: '3' },
  { id: '1' }
]

const Main: FC<any> = ({ theming: { theme }, navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: 0.1, flexDirection: 'row', marginHorizontal: '5%' }}>
        <View style={{ flex: 0.2, backgroundColor: 'red' }}>

        </View>
        <TouchableOpacity style={{ flex: 0.4, backgroundColor: 'blue' }} onPress={() => navigation.navigate('createWhitelist')}>
          <Text>Add a new account</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.9 }}>
        <View style={{ marginTop: '10%' }}>
          <Separator/>
        </View>
        <FlatList
          data={DATA}
          renderItem={WhitelistItem}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Main);
