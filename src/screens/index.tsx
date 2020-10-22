import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { DefaultProps } from 'src/types';
import { connect } from 'react-redux';
import Main from './Main';

const Root: FC<DefaultProps> = ({ theming: { theme } }) => (
  <NavigationContainer>
    <StatusBar barStyle={theme.statusBar} />
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <Main theme={theme}/>
    </SafeAreaView>
  </NavigationContainer>
);

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Root);
