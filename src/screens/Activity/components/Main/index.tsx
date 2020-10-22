import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../types';
import styles from './styles';

const Main: FC<DefaultProps | any> = ({ theming: { theme }, navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.screenText }}>Activity Main</Text>
      <TouchableOpacity onPress={() => navigation.navigate('detail')}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Main);
