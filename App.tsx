import 'react-native-gesture-handler';
import React from 'react';
import Root from './src/screens'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root/>
      </PersistGate>
    </Provider>
  );
};

export default App;
