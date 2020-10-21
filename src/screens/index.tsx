import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { DefaultProps } from 'src/types';
import { connect } from 'react-redux';
import Main from './Main';

const Root: FC<DefaultProps> = ({ theming: { theme } }) => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <Main/>
    </SafeAreaView>
  </NavigationContainer>
);

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Root);
