import React, { FC } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ActivityProps, StateProps } from './types';
import { ActivityFilter, ActivityList } from './components';
import { Separator } from '../../../../components';
import styles from './styles';

const DATA = [
  { id: '2' },
  { id: '3' },
  { id: '1' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
  { id: '12' },
  { id: '13' },
  { id: '14' },
  { id: '15' },
]

const Main: FC<ActivityProps> = ({ theming: { theme }}) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.filter}>
        <ActivityFilter theme={theme} />
      </View>
      <Separator width={4} color={theme.principalSeparator} />
      <View style={styles.list}>
        <FlatList
          data={DATA}
          renderItem={() => <ActivityList theme={theme} />}
          ListHeaderComponent={() => (
            <View style={{ marginTop: '3%' }}></View>
          )}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: StateProps): StateProps => ({ theming })

export default connect(mapStateToProps)(Main);
