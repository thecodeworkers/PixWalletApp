import React from 'react';
import Root from './Root';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const NavigationWrapper = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default NavigationWrapper;
