import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import NavigationWrapper from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/store';
import SplashScreen from 'react-native-splash-screen';

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <NavigationWrapper/>
      {/* </PersistGate> */}
    </Provider>
  )
};
