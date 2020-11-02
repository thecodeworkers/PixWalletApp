import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { DynamicForm } from '../../components';
import { DefaultProps } from '../../types';
import styles from './styles';

const Profile: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <DynamicForm/>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Profile);
