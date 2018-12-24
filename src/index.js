import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';

import RNApp from './RNApp';
import configureStore from './store';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
            <RNApp />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
