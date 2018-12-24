import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RNApp from './RNApp';
import configureStore from './store';

const { store } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RNApp />
      </Provider>
    );
  }
}

export default App;
