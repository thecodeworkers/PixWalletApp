import React, { FC } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../types';
import styles from './styles';

const Profile: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <View style={styles.container}>

    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Profile);
