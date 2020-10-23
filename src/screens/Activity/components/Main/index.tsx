import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ActivityProps, StateProps } from './types';
import { Separator } from '../../../../components';
import styles from './styles';

const Main: FC<ActivityProps> = ({ theming: { theme }}) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: 0.1, justifyContent: 'flex-end', marginBottom: '1.5%' }}>
        <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', alignItems: 'flex-end' }}>
          <View style={{ backgroundColor: '#EBEBEB', height: '60%', width: '20%', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#35A7D6' }}>Todos</Text>
          </View>
          <View style={{ backgroundColor: '#EBEBEB', height: '60%', width: '22%', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#C9C9C9' }}>Depositos</Text>
          </View>
          <View style={{ backgroundColor: '#EBEBEB', height: '60%', width: '22%', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#C9C9C9' }}>Retiros</Text>
          </View>
          <View style={{ backgroundColor: '#EBEBEB', height: '60%', width: '24%', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#C9C9C9' }}>Intercambios</Text>
          </View>
        </View>
      </View>
      <Separator width={4} color={'#35A7D6'} />
      <View style={{ flex: 0.9 }}>

      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: StateProps): StateProps => ({ theming })

export default connect(mapStateToProps)(Main);
