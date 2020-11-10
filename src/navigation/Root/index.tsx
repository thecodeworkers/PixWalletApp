import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { DefaultProps } from '../../types';
import HomeNavigator from './Home';
import AuthNavigator from './Auth';

const Root: FC<DefaultProps> = ({ theming: { theme }}) => {
  const isAuth = true;

  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        {
          isAuth ? (
            <HomeNavigator theme={theme} />
          ) : (
            <AuthNavigator />
          )
        }
      </SafeAreaView>
    </>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Root);
