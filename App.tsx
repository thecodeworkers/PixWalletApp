import 'react-native-gesture-handler';
import React from 'react';
import NavigationWrapper from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/store';

export default () => (
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <NavigationWrapper/>
    {/* </PersistGate> */}
  </Provider>
);
