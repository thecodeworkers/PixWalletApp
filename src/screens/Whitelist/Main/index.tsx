import React, { FC } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { SearchInput, Separator } from '../../../components';
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
      <TouchableOpacity style={{ flex: 0.1, flexDirection: 'row', marginHorizontal: '10%' }} onPress={() => navigation.navigate('createWhitelist')}>
        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 30, height: 30 }}>

            </View>
          </View>
        </View>
        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <Text style={{ color: theme.screenText, fontSize: 13, marginBottom: 2 }}>Add new account</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 0.1, marginHorizontal: '10%', justifyContent: 'flex-end' }}>
        <SearchInput theme={theme} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={props => <WhitelistItem theme={theme} {...props} />}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Main);
