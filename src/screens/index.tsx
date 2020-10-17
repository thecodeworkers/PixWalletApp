import React from 'react';
import Main from './Main';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

const Root = () => (
  <NavigationContainer>
    <SafeAreaView style={{flex :1}}>
      <Main/>
    </SafeAreaView>
  </NavigationContainer>
);

export default Root;
