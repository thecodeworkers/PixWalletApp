import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ActivityProps, StateProps } from './types';
import { Separator } from '../../../../components';
import styles from './styles';

const Main: FC<ActivityProps> = ({ theming: { theme }}) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: 0.5, backgroundColor: 'red' }}>
        <View style={{ flex: 0.9, backgroundColor: 'green' }}>

        </View>
        <Separator color={'#35A7D6'} width={5} />
      </View>
      <View style={{ flex: 0.5, backgroundColor: 'blue' }}>

      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: StateProps): StateProps => ({ theming })

export default connect(mapStateToProps)(Main);
