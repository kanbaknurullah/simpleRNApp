import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
import {Router} from './src/router/router';
import {Provider} from 'react-redux';
import {store} from './src/redux-store/store';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
