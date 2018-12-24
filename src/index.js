import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RNApp from './RNApp';
import configureStore from './store';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RNApp />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
